#!/usr/bin/env node
// Post-build fix: readme-aura injects <style> into the FIRST </svg> via String.replace,
// which lands inside a nested <svg> wrapper instead of the root SVG.
// CSS in nested <svg> only applies to that subtree → animations in other subtrees fail.
//
// This script moves the <style> block out of the first nested <svg> and places it
// just before the OUTER </svg>, so #id selectors apply across the whole image.
//
// Usage: node scripts/fix-svg-animations.mjs [.github/assets]

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = resolve(process.argv[2] || resolve(__dirname, '..', '.github', 'assets'));

const files = await readdir(assetsDir);
const svgs = files.filter((f) => f.endsWith('.svg'));

let fixedCount = 0;
for (const file of svgs) {
  const path = resolve(assetsDir, file);
  let content = await readFile(path, 'utf-8');

  const styleMatch = content.match(/<style>[\s\S]*?<\/style>/);
  if (!styleMatch) continue;

  const lastSvgClose = content.lastIndexOf('</svg>');
  const styleAt = content.indexOf(styleMatch[0]);
  // Already at root if the style is the LAST element before the outer </svg>.
  if (styleAt + styleMatch[0].length === lastSvgClose) continue;

  const styleBlock = styleMatch[0];
  const withoutStyle = content.replace(styleBlock, '');
  const newLastSvgClose = withoutStyle.lastIndexOf('</svg>');
  const fixed =
    withoutStyle.slice(0, newLastSvgClose) +
    styleBlock +
    withoutStyle.slice(newLastSvgClose);

  await writeFile(path, fixed, 'utf-8');
  fixedCount++;
  console.log(`fixed: ${file}`);
}

console.log(`Patched ${fixedCount} SVG(s) — animations now apply to the root SVG.`);
