#!/usr/bin/env node
// Pre-build step: fetch user-level GitHub stats (languages by BYTES, total stars/commits/etc.)
// and inject them into readme.source.md between markers.
//
// Why: readme-aura's built-in `github.languages` counts repos by primaryLanguage
// (1 repo = 1 unit), which doesn't match github-readme-stats (bytes-based).
// This script replicates the same metric as github-readme-stats.
//
// Usage:
//   GITHUB_TOKEN=ghp_xxx GITHUB_USER=Hikyy node scripts/inject-stats.mjs
//
// Env:
//   GITHUB_TOKEN   required, scope: read:user (public repos work without scope)
//   GITHUB_USER    required, e.g. Hikyy

import { readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SOURCE_PATH = resolve(__dirname, '..', 'readme.source.md');

const token = process.env.GITHUB_TOKEN;
const username = process.env.GITHUB_USER || process.argv[2];

if (!token) {
  console.error('Missing GITHUB_TOKEN env var');
  process.exit(1);
}
if (!username) {
  console.error('Missing GITHUB_USER env var (or pass as first arg)');
  process.exit(1);
}

// GraphQL query that mirrors what github-readme-stats does:
// - all OWNER repos, not forks, public
// - languages with bytes (size), to compute byte-based percentages
const QUERY = `
query ($login: String!, $after: String) {
  user(login: $login) {
    login
    name
    avatarUrl
    createdAt
    followers { totalCount }
    repositories(
      first: 100
      after: $after
      ownerAffiliations: OWNER
      orderBy: { field: STARGAZERS, direction: DESC }
      privacy: PUBLIC
      isFork: false
    ) {
      pageInfo { hasNextPage endCursor }
      totalCount
      nodes {
        name
        stargazerCount
        forkCount
        defaultBranchRef { target { ... on Commit { history { totalCount } } } }
        languages(first: 20, orderBy: { field: SIZE, direction: DESC }) {
          edges { size node { name color } }
        }
      }
    }
  }
}
`;

async function gql(query, variables) {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'readme-aura-stats-injector',
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
  }
  const json = await res.json();
  if (json.errors?.length) {
    throw new Error(`GraphQL errors: ${json.errors.map((e) => e.message).join(', ')}`);
  }
  return json.data;
}

async function fetchAll(login) {
  const allRepos = [];
  let after = null;
  let user = null;
  while (true) {
    const data = await gql(QUERY, { login, after });
    user ??= data.user;
    allRepos.push(...data.user.repositories.nodes);
    if (!data.user.repositories.pageInfo.hasNextPage) break;
    after = data.user.repositories.pageInfo.endCursor;
  }
  return { user, repos: allRepos, totalRepos: user.repositories?.totalCount };
}

function aggregateLanguages(repos) {
  const sizes = new Map(); // name -> { size, color }
  for (const repo of repos) {
    for (const edge of repo.languages.edges) {
      const cur = sizes.get(edge.node.name) ?? { size: 0, color: edge.node.color };
      cur.size += edge.size;
      sizes.set(edge.node.name, cur);
    }
  }
  const total = [...sizes.values()].reduce((s, v) => s + v.size, 0);
  if (total === 0) return [];
  return [...sizes.entries()]
    .map(([name, { size, color }]) => ({
      name,
      percentage: +((size / total) * 100).toFixed(2),
      color: color || '#888',
    }))
    .sort((a, b) => b.percentage - a.percentage);
}

function aggregateStats(user, repos, totalRepos) {
  return {
    login: user.login,
    name: user.name,
    avatarUrl: user.avatarUrl,
    createdAt: user.createdAt,
    followers: user.followers.totalCount,
    totalStars: repos.reduce((s, r) => s + r.stargazerCount, 0),
    totalForks: repos.reduce((s, r) => s + r.forkCount, 0),
    totalCommits: repos.reduce(
      (s, r) => s + (r.defaultBranchRef?.target?.history?.totalCount ?? 0),
      0,
    ),
    totalRepos,
  };
}

const START = '/* @stats:start */';
const END = '/* @stats:end */';

function inject(source, payload) {
  const startIdx = source.indexOf(START);
  const endIdx = source.indexOf(END);
  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers ${START} / ${END} not found in readme.source.md`);
  }
  const before = source.slice(0, startIdx + START.length);
  const after = source.slice(endIdx);
  const json = JSON.stringify(payload, null, 2);
  return `${before}\n  const STATS = ${json};\n  ${after}`;
}

const { user, repos, totalRepos } = await fetchAll(username);
const stats = aggregateStats(user, repos, totalRepos);
const languages = aggregateLanguages(repos);

const payload = { ...stats, languages };

const source = await readFile(SOURCE_PATH, 'utf-8');
const updated = inject(source, payload);
await writeFile(SOURCE_PATH, updated, 'utf-8');

console.log(`Injected stats for ${username}:`);
console.log(`  ${stats.totalStars} stars · ${stats.totalCommits} commits · ${stats.totalForks} forks · ${totalRepos} repos`);
console.log(`  Top languages:`);
for (const lang of languages.slice(0, 8)) {
  console.log(`    ${lang.name.padEnd(14)} ${lang.percentage}%`);
}
