

```aura width=900 height=1380 link="https://github.com/Hikyy"
(() => {
  /* @stats:start */
  const STATS = {
    "login": "Hikyy",
    "totalStars": 0,
    "totalForks": 0,
    "totalCommits": 0,
    "totalRepos": 0,
    "followers": 0,
    "createdAt": "",
    "languages": []
  };
  /* @stats:end */

  const t = {
    bg:      '#010409',
    termBg:  '#0d1117',
    chrome:  '#161b22',
    border:  '#30363d',
    border2: '#21262d',
    fg:      '#c9d1d9',
    dim:     '#6e7681',
    green:   '#39d353',
    purple:  '#a78bfa',
    yellow:  '#e3b341',
    blue:    '#58a6ff',
    red:     '#f85149',
    mono:    'ui-monospace, "JetBrains Mono", "SF Mono", Menlo, Consolas, monospace',
  };

  const PROFILE = {
    name: 'Mabrouki Rayane',
    role: 'Full-Stack Developer · Tech Lead',
    education: 'Mastère CTO & Tech Lead — HETIC',
    shipped: '3 SaaS in production',
    lookingFor: 'CDI · web modernes & performants',
    stack: {
      frontend:      ['React', 'Next.js', 'Vue.js', 'React Native', 'TypeScript', 'TailwindCSS'],
      backend:       ['Laravel', 'Spring Boot', 'PHP', 'Python', 'Golang', 'PostgreSQL', 'MySQL'],
      devops:        ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Traefik', 'Azure DevOps'],
      observability: ['Prometheus', 'Grafana', 'Mimir'],
    },
    projects: [
      { perm: 'drwxr-xr-x', year: '2024', type: 'B2B2C', name: 'gustave-ai/', desc: 'Chatbot IA Mistral pour conciergerie Airbnb' },
      { perm: 'drwxr-xr-x', year: '2025', type: 'B2B',   name: 'soluweld/',   desc: 'SaaS gestion soudage industriel · K8s' },
      { perm: 'drwxr-xr-x', year: '2026', type: 'B2B',   name: 'clairfact/',  desc: 'Facturation électronique FacturX · PDP' },
    ],
    activity: [
      { date: '2026-04', level: 'INFO', color: t.green,  msg: 'shipped Clairfact v1.0 · facturX e-reporting live', highlight: 'Clairfact v1.0' },
      { date: '2026-03', level: 'INFO', color: t.green,  msg: 'SAUR · CI/CD Azure DevOps + Prometheus stack online' },
      { date: '2026-02', level: 'INFO', color: t.green,  msg: 'Soluweld · module qualifications soudeurs déployé' },
      { date: '2025-11', level: 'WARN', color: t.yellow, msg: 'Mistral fine-tuning > expected — gustave-ai context booster' },
      { date: '2024-09', level: 'INFO', color: t.green,  msg: 'Mastère CTO & Tech Lead @ HETIC — started' },
    ],
  };

  const ASCII = `    ____                                __  __ _ _              
   / __ \\____ ___  ______ _____  ___   / / / /(_) /____  ____ _ 
  / /_/ / __ \`/ / / / __ \`/ __ \\/ _ \\ / /_/ // / //_/ / / / / 
 / _, _/ /_/ / /_/ / /_/ / / / /  __// __  // / ,< / /_/ / /_/ /
/_/ |_|\\__,_/\\__, /\\__,_/_/ /_/\\___//_/ /_//_/_/|_|\\__, /\\__, / 
            /____/                                /____//____/  `;

  const Prompt = ({ user = 'rayane', host = 'github', path = '~', cmd }) => (
    <div style={{ marginTop: 18, display: 'flex', fontFamily: t.mono, fontSize: 13 }}>
      <span style={{ color: t.green }}>{`${user}@${host}`}</span>
      <span style={{ color: t.fg }}>:</span>
      <span style={{ color: t.blue }}>{path}</span>
      <span style={{ color: t.fg }}>{'$ '}</span>
      <span style={{ color: t.fg, marginLeft: 6 }}>{cmd}</span>
    </div>
  );

  const Out = ({ children, block, style }) => (
    <div style={{
      fontFamily: t.mono, fontSize: 13, color: t.fg, lineHeight: 1.7, marginTop: 4,
      display: 'flex', flexDirection: 'column',
      ...(block ? { background: t.bg, border: `1px solid ${t.border2}`, borderRadius: 6, padding: 14, marginTop: 8 } : null),
      ...style,
    }}>{children}</div>
  );

  const StackRow = ({ items, color, indent = 32 }) => {
    const nodes = [];
    items.forEach((it, i) => {
      nodes.push(<span key={`v${i}`} style={{ color }}>{`"${it}"`}</span>);
      if (i < items.length - 1) nodes.push(<span key={`s${i}`} style={{ color: t.fg, marginLeft: 4 }}>,</span>);
    });
    return <div style={{ display: 'flex', marginLeft: indent, flexWrap: 'wrap' }}>{nodes}</div>;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 900, fontFamily: t.mono }}>
      <style>{`
        @keyframes blinkCursor { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0 } }
        @keyframes pulseLight  { 0%, 100% { opacity: 1 } 50% { opacity: 0.55 } }
        @keyframes statusBlink { 0%, 80% { fill: #39d353 } 90% { fill: #2ea043 } 100% { fill: #39d353 } }

        #aura-cursor  { animation: blinkCursor 1s steps(2) infinite; }
        #aura-light-1 { animation: pulseLight 2.4s ease-in-out infinite; }
        #aura-light-2 { animation: pulseLight 2.4s ease-in-out infinite 0.3s; }
        #aura-light-3 { animation: pulseLight 2.4s ease-in-out infinite 0.6s; }
        #aura-status  { animation: statusBlink 2s ease-in-out infinite; }
      `}</style>

      <div style={{
        display: 'flex', flexDirection: 'column',
        background: t.termBg, border: `1px solid ${t.border}`, borderRadius: 12, overflow: 'hidden',
        boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
      }}>

        {/* ─── Window chrome (raw SVG so animation IDs survive) ─── */}
        <div style={{ background: t.chrome, borderBottom: `1px solid ${t.border}`, padding: '10px 16px', display: 'flex', alignItems: 'center' }}>
          <svg width="56" height="14" viewBox="0 0 56 14" xmlns="http://www.w3.org/2000/svg">
            <circle id="aura-light-1" cx="7"  cy="7" r="6" fill="#ff5f56" />
            <circle id="aura-light-2" cx="27" cy="7" r="6" fill="#ffbd2e" />
            <circle id="aura-light-3" cx="47" cy="7" r="6" fill="#27c93f" />
          </svg>
          <div style={{ flex: 1, textAlign: 'center', fontFamily: t.mono, fontSize: 12, color: t.dim }}>
            rayane@github: ~/profile — zsh
          </div>
          <div style={{ fontFamily: t.mono, fontSize: 11, color: t.dim }}>80×24</div>
        </div>

        {/* ─── Body ─── */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: '24px 28px 32px', background: t.termBg }}>

          {/* ASCII banner */}
          <pre style={{ margin: 0, color: t.green, fontSize: 11, fontFamily: t.mono, lineHeight: 1.2, whiteSpace: 'pre' }}>
{ASCII}
          </pre>

          {/* Status sub-line — with animated [OK] dot */}
          <div style={{ marginTop: 4, fontFamily: t.mono, fontSize: 12, color: t.dim, display: 'flex', alignItems: 'center' }}>
            <span>[</span>
            <svg width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 2, marginRight: 2 }}>
              <circle id="aura-status" cx="4" cy="4" r="3" fill={t.green} />
            </svg>
            <span style={{ color: t.green, marginLeft: 2 }}>OK</span>
            <span style={{ marginLeft: 6 }}>] system online · </span>
            <span style={{ color: t.yellow, marginLeft: 4 }}>full-stack developer</span>
            <span style={{ marginLeft: 4 }}> · </span>
            <span style={{ color: t.purple, marginLeft: 4 }}>tech lead in training</span>
          </div>

          {/* whoami */}
          <Prompt cmd="whoami" />
          <Out>
            <div style={{ display: 'flex' }}><span style={{ color: t.dim, width: 110 }}>name</span><span style={{ color: t.green }}>{PROFILE.name}</span></div>
            <div style={{ display: 'flex' }}><span style={{ color: t.dim, width: 110 }}>role</span><span>{PROFILE.role}</span></div>
            <div style={{ display: 'flex' }}><span style={{ color: t.dim, width: 110 }}>company</span><span>SAUR </span><span style={{ color: t.dim }}>(alternance)</span><span style={{ marginLeft: 4 }}>+ </span><span style={{ color: t.yellow, marginLeft: 4 }}>Freelance</span></div>
            <div style={{ display: 'flex' }}><span style={{ color: t.dim, width: 110 }}>education</span><span>{PROFILE.education}</span></div>
            <div style={{ display: 'flex' }}><span style={{ color: t.dim, width: 110 }}>shipped</span><span>{PROFILE.shipped}</span></div>
            <div style={{ display: 'flex' }}><span style={{ color: t.dim, width: 110 }}>looking for</span><span style={{ color: t.green }}>{PROFILE.lookingFor}</span></div>
          </Out>

          {/* cat stack.json */}
          <Prompt cmd="cat stack.json" />
          <Out block>
            <div style={{ display: 'flex' }}><span style={{ color: t.dim }}>{'{'}</span></div>
            <div style={{ display: 'flex', marginLeft: 16 }}><span style={{ color: t.blue }}>"frontend"</span><span>: [</span></div>
            <StackRow items={PROFILE.stack.frontend} color={t.green} />
            <div style={{ marginLeft: 16 }}>],</div>
            <div style={{ display: 'flex', marginLeft: 16 }}><span style={{ color: t.blue }}>"backend"</span><span>: [</span></div>
            <StackRow items={PROFILE.stack.backend} color={t.yellow} />
            <div style={{ marginLeft: 16 }}>],</div>
            <div style={{ display: 'flex', marginLeft: 16 }}><span style={{ color: t.blue }}>"devops"</span><span>: [</span></div>
            <StackRow items={PROFILE.stack.devops} color={t.purple} />
            <div style={{ marginLeft: 16 }}>],</div>
            <div style={{ display: 'flex', marginLeft: 16 }}>
              <span style={{ color: t.blue }}>"observability"</span>
              <span>: [</span>
              <span style={{ color: t.red, marginLeft: 4 }}>"Prometheus"</span>
              <span>,</span>
              <span style={{ color: t.red, marginLeft: 4 }}>"Grafana"</span>
              <span>,</span>
              <span style={{ color: t.red, marginLeft: 4 }}>"Mimir"</span>
              <span>]</span>
            </div>
            <div style={{ display: 'flex' }}><span style={{ color: t.dim }}>{'}'}</span></div>
          </Out>

          {/* ls projects */}
          <Prompt path="~/projects" cmd="ls -la --shipped" />
          <Out style={{ marginTop: 8 }}>
            <div style={{ display: 'flex', fontSize: 12 }}>
              <span style={{ color: t.dim, width: 110 }}>permissions</span>
              <span style={{ color: t.dim, width: 60 }}>year</span>
              <span style={{ color: t.dim, width: 90 }}>type</span>
              <span style={{ color: t.dim }}>name & description</span>
            </div>
            {PROFILE.projects.map((p) => (
              <div key={p.name} style={{ display: 'flex', fontSize: 12 }}>
                <span style={{ color: t.green, width: 110 }}>{p.perm}</span>
                <span style={{ color: t.yellow, width: 60 }}>{p.year}</span>
                <span style={{ color: t.purple, width: 90 }}>{p.type}</span>
                <span style={{ color: t.green }}>{p.name}</span>
                <span style={{ color: t.dim, marginLeft: 6 }}>{`— ${p.desc}`}</span>
              </div>
            ))}
          </Out>

          {/* show-stats */}
          <Prompt cmd="./show-stats.sh --user $(whoami)" />
          <Out style={{ marginTop: 8 }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>

              {/* GitHub stats card */}
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, background: t.bg, border: `1px solid ${t.border2}`, borderRadius: 6, padding: 14 }}>
                <div style={{ display: 'flex' }}>
                  <span style={{ color: t.green }}>┌─</span>
                  <span style={{ color: t.green, marginLeft: 4 }}>{`${STATS.login} · GitHub stats`}</span>
                  <span style={{ color: t.green, marginLeft: 4 }}>─┐</span>
                </div>
                <div style={{ display: 'flex', marginTop: 8 }}><span style={{ color: t.dim, width: 150 }}>Total Stars</span><span style={{ color: t.yellow }}>★</span><span style={{ color: t.fg, marginLeft: 6 }}>{STATS.totalStars}</span></div>
                <div style={{ display: 'flex' }}><span style={{ color: t.dim, width: 150 }}>Total Commits</span><span style={{ color: t.green }}>{STATS.totalCommits}</span></div>
                <div style={{ display: 'flex' }}><span style={{ color: t.dim, width: 150 }}>Total Forks</span><span style={{ color: t.blue }}>{STATS.totalForks}</span></div>
                <div style={{ display: 'flex' }}><span style={{ color: t.dim, width: 150 }}>Public Repos</span><span style={{ color: t.purple }}>{STATS.totalRepos}</span></div>
                <div style={{ display: 'flex' }}><span style={{ color: t.dim, width: 150 }}>Followers</span><span style={{ color: t.red }}>{STATS.followers}</span></div>
                <div style={{ display: 'flex', marginTop: 8 }}>
                  <span style={{ color: t.dim }}>Member since:</span>
                  <span style={{ color: t.fg, marginLeft: 6 }}>{STATS.createdAt ? STATS.createdAt.slice(0, 10) : '—'}</span>
                </div>
              </div>

              {/* Languages card — bytes-based, with animated bars (ID per row) */}
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, background: t.bg, border: `1px solid ${t.border2}`, borderRadius: 6, padding: 14 }}>
                <div style={{ display: 'flex' }}>
                  <span style={{ color: t.green }}>┌─</span>
                  <span style={{ color: t.green, marginLeft: 4 }}>Most Used Languages</span>
                  <span style={{ color: t.green, marginLeft: 4 }}>─┐</span>
                </div>
                {STATS.languages.slice(0, 6).map((lang, i) => {
                  const filled = Math.max(1, Math.min(16, Math.round(lang.percentage * 16 / 100)));
                  const bar = '█'.repeat(filled) + '░'.repeat(16 - filled);
                  return (
                    <div key={lang.name} style={{ display: 'flex', marginTop: 4 }}>
                      <span style={{ color: lang.color || t.fg, width: 110 }}>{lang.name}</span>
                      <span style={{ color: lang.color || t.fg }}>{bar}</span>
                      <span style={{ color: t.dim, marginLeft: 8 }}>{`${lang.percentage}%`}</span>
                    </div>
                  );
                })}
                {STATS.languages.length === 0 && (
                  <div style={{ display: 'flex', marginTop: 8 }}>
                    <span style={{ color: t.dim }}>(scripts/inject-stats.mjs not run yet)</span>
                  </div>
                )}
              </div>
            </div>
          </Out>

          {/* tail activity */}
          <Prompt cmd="tail -f activity.log" />
          <Out style={{ marginTop: 8 }}>
            {PROFILE.activity.map((a, i) => {
              const parts = a.highlight ? a.msg.split(a.highlight) : null;
              return (
                <div key={i} style={{ display: 'flex' }}>
                  <span style={{ color: t.dim }}>{`[${a.date}]`}</span>
                  <span style={{ color: a.color, marginLeft: 6 }}>{a.level}</span>
                  {parts ? (
                    <div style={{ display: 'flex', marginLeft: 6 }}>
                      <span>{parts[0]}</span>
                      <span style={{ color: t.yellow }}>{a.highlight}</span>
                      <span>{parts[1]}</span>
                    </div>
                  ) : (
                    <span style={{ marginLeft: 6 }}>{a.msg}</span>
                  )}
                </div>
              );
            })}
          </Out>

          {/* ping --connect */}
          <Prompt cmd="ping --connect" />
          <Out style={{ marginTop: 4 }}>
            <div style={{ display: 'flex' }}>
              <span style={{ color: t.dim }}>→</span>
              <span style={{ marginLeft: 6 }}>linkedin.com/in/</span>
              <span style={{ color: t.blue }}>rayane-mabrouki</span>
              <span style={{ color: t.dim, marginLeft: 18 }}>→</span>
              <span style={{ marginLeft: 6 }}>github.com/</span>
              <span style={{ color: t.blue }}>{STATS.login}</span>
              <span style={{ color: t.dim, marginLeft: 18 }}>→</span>
              <span style={{ color: t.blue, marginLeft: 6 }}>rmabrouki@outlook.fr</span>
            </div>
          </Out>

          {/* Final cursor line — raw SVG cursor for reliable animation */}
          <div style={{ marginTop: 22, fontFamily: t.mono, fontSize: 13, display: 'flex', alignItems: 'center' }}>
            <span style={{ color: t.green }}>rayane@github</span>
            <span style={{ color: t.fg }}>:</span>
            <span style={{ color: t.blue }}>~</span>
            <span style={{ color: t.fg }}>$ </span>
            <svg width="10" height="17" viewBox="0 0 10 17" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 4 }}>
              <rect id="aura-cursor" x="0" y="0" width="9" height="17" fill={t.green} />
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
})()
```
