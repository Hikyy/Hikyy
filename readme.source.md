

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
      backend:       ['Laravel', 'Java Spring Boot', 'PHP', 'Python', 'Golang', 'PostgreSQL', 'MySQL'],
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

  const ASCII = ` ____                                        _   _ _ _                
|  _ \\ __ _ _   _  __ _ _ __   ___          | | | (_) | ___   _ _   _ 
| |_) / _\` | | | |/ _\` | '_ \\ / _ \\  _____  | |_| | | |/ / | | | | | |
|  _ < (_| | |_| | (_| | | | |  __/ |_____| |  _  | |   <| |_| | |_| |
|_| \\_\\__,_|\\__, |\\__,_|_| |_|\\___|         |_| |_|_|_|\\_\\\\__, |\\__, |
            |___/                                         |___/ |___/ `;

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
    <div style={{ display: 'flex', flexDirection: 'column', width: 900, fontFamily: t.mono, position: 'relative' }}>
      {/*
        Animation pattern (verified working — readme-aura quirks):
        1. <svg> absolute overlay must be the LAST child to draw on top of the
           opaque terminal background (Satori has no z-index, document order = z-order).
        2. <style> is extracted by readme-aura's renderer (renderer.js:161) and
           re-injected before the FIRST </svg> in output. Since this overlay is
           the only inline <svg>, the style lands inside it next to the cursor rect.
        3. Animations only apply when the nested <svg> matches the full container
           dimensions and uses the root clip-path/mask (not the chained subtree
           clip/mask Satori adds for offset nested SVGs).
      */}
      <div style={{
        display: 'flex', flexDirection: 'column',
        background: t.termBg, border: `1px solid ${t.border}`, borderRadius: 12, overflow: 'hidden',
        position: 'relative',
      }}>

        {/* BACKGROUND SVG — drawn behind chrome+body. Body content with opaque bg (json/stats blocks) hides scan when crossing them. */}
        <svg width="900" height="1311" viewBox="0 0 900 1311" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0 }}>
          <defs>
            <radialGradient id="aura-banner-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(57,211,83,0.55)" />
              <stop offset="60%" stopColor="rgba(57,211,83,0.15)" />
              <stop offset="100%" stopColor="rgba(57,211,83,0)" />
            </radialGradient>
            {/* Grid pattern — 72×72 cells (8% of 900 = reference scale), strokeOpacity reduced 15% to 0.15 */}
            <pattern id="amb-grid-pat" x="0" y="0" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#39d353" strokeWidth="0.6" strokeOpacity="0.185" />
            </pattern>
          </defs>
          {/* Animated drifting grid (now 144px move = 2 cells, faster 18s — more visible motion) */}
          <rect id="amb-grid" x="-144" y="-144" width="1188" height="1599" fill="url(#amb-grid-pat)" opacity="0.5" />
          <ellipse id="aura-banner-glow" cx="160" cy="100" rx="190" ry="42" fill="url(#aura-banner-grad)" />
          <circle id="amb-p1" cx="72"  cy="655"  r="2.3" fill="#39d353" fillOpacity="0.4" />
          <circle id="amb-p2" cx="828" cy="420"  r="2.5" fill="#a78bfa" fillOpacity="0.4" />
          <circle id="amb-p3" cx="684" cy="1022" r="2.9" fill="#39d353" fillOpacity="0.35" />
          <circle id="amb-p4" cx="198" cy="1127" r="2.3" fill="#e3b341" fillOpacity="0.35" />
          <circle id="amb-p5" cx="792" cy="839"  r="2.5" fill="#39d353" fillOpacity="0.4" />
          <circle id="amb-p6" cx="126" cy="288"  r="2.7" fill="#58a6ff" fillOpacity="0.3" />
          <circle id="amb-p7" cx="540" cy="183"  r="2.2" fill="#a78bfa" fillOpacity="0.35" />
          <circle id="amb-p8" cx="396" cy="1206" r="2.5" fill="#39d353" fillOpacity="0.35" />
          <circle id="amb-s1" cx="162" cy="1285" r="1.6" fill="#39d353" fillOpacity="0.7" />
          <circle id="amb-s2" cx="378" cy="1285" r="1.4" fill="#39d353" fillOpacity="0.7" />
          <circle id="amb-s3" cx="576" cy="1285" r="1.6" fill="#39d353" fillOpacity="0.7" />
          <circle id="amb-s4" cx="720" cy="1285" r="1.3" fill="#39d353" fillOpacity="0.7" />
          <circle id="amb-s5" cx="288" cy="1285" r="1.4" fill="#39d353" fillOpacity="0.7" />
          <rect id="aura-scanline" x="0" y="0" width="900" height="3" fill="#39d353" fillOpacity="0.35" />
        </svg>

        {/* ─── Window chrome ─── */}
        <div style={{ background: t.chrome, borderBottom: `1px solid ${t.border}`, padding: '10px 16px', display: 'flex', alignItems: 'center' }}>
          {/* Static placeholders for flex spacing — visible lights are drawn by the animated overlay SVG at the bottom */}
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 12, height: 12 }} />
            <div style={{ width: 12, height: 12 }} />
            <div style={{ width: 12, height: 12 }} />
          </div>
          <div style={{ flex: 1, textAlign: 'center', fontFamily: t.mono, fontSize: 12, color: t.dim, marginLeft: 12 }}>
            rayane@github: ~/profile — zsh
          </div>
          <div style={{ fontFamily: t.mono, fontSize: 11, color: t.dim }}>80×24</div>
        </div>

        {/* ─── Body ─── */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: '24px 28px 32px' }}>

          {/* ASCII banner */}
          <pre style={{ margin: 0, color: t.green, fontSize: 11, fontFamily: t.mono, lineHeight: 1.2, whiteSpace: 'pre' }}>
{ASCII}
          </pre>

          {/* Status sub-line */}
          <div style={{ marginTop: 4, fontFamily: t.mono, fontSize: 12, color: t.dim, display: 'flex', alignItems: 'center' }}>
            <span>[</span>
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

          {/* Final cursor line — actual cursor rect lives in the absolute overlay SVG (last child of terminal box) */}
          <div style={{ marginTop: 22, fontFamily: t.mono, fontSize: 13, display: 'flex', alignItems: 'center' }}>
            <span style={{ color: t.green }}>rayane@github</span>
            <span style={{ color: t.fg }}>:</span>
            <span style={{ color: t.blue }}>~</span>
            <span style={{ color: t.fg }}>$ </span>
          </div>

        </div>

        {/*
          Two-SVG layering trick:
          1. BACKGROUND SVG (first child of body, BEHIND the terminal text content):
             grid + particles + sparks + scan + banner glow
             → Opaque blocks (json, stats Out cards) sit ON TOP of this SVG and naturally
                hide the scan bar / particles passing under them.
          2. FOREGROUND SVG (last child of box, ON TOP of everything):
             cursor + halo + lights + status + log dots → always visible.
          
          Both styles get extracted by readme-aura's renderer and combined into
          the FIRST </svg> in output (= the background SVG). CSS rules cascade
          from a parent SVG's <style> to nested SVG siblings in the same outer
          SVG — so foreground IDs still match.
        */}
        <style>{`
          @keyframes blinkCursor { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0 } }
          @keyframes haloBlink   { 0%, 49% { opacity: 0.6; transform: scale(1.1); } 50%, 100% { opacity: 0; transform: scale(1); } }
          @keyframes lightPulse  { 0%, 100% { opacity: 1 } 50% { opacity: 0.55 } }
          @keyframes bannerGlow  { 0%, 100% { opacity: 0.3 } 50% { opacity: 0.56 } }
          @keyframes statusBeat  { 0%, 100% { opacity: 1 } 50% { opacity: 0.35 } }
          @keyframes scanLine    { 0% { transform: translateY(0); opacity: 0; } 5% { opacity: 0.35; } 95% { opacity: 0.35; } 100% { transform: translateY(1311px); opacity: 0; } }
          @keyframes logPulse    { 0%, 100% { opacity: 1 } 50% { opacity: 0.25 } }
          @keyframes ambFloatA   { 0%, 100% { transform: translate(0, 0); opacity: 0.18; } 50% { transform: translate(40px, -60px); opacity: 0.55; } }
          @keyframes ambFloatB   { 0%, 100% { transform: translate(0, 0); opacity: 0.15; } 50% { transform: translate(-50px, -80px); opacity: 0.5; } }
          @keyframes ambSpark    { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: 0.7; } 90% { opacity: 0.7; } 100% { transform: translateY(-1311px); opacity: 0; } }
          @keyframes ambGridDrift { 0% { transform: translate(0, 0); } 100% { transform: translate(144px, 144px); } }

          #aura-cursor       { animation: blinkCursor 1s steps(2) infinite; }
          #aura-cursor-halo  { animation: haloBlink 1s steps(2) infinite; transform-origin: 167px 1278px; }
          #aura-light-r      { animation: lightPulse 2.4s ease-in-out infinite; }
          #aura-light-y      { animation: lightPulse 2.4s ease-in-out infinite 0.3s; }
          #aura-light-g      { animation: lightPulse 2.4s ease-in-out infinite 0.6s; }
          #aura-banner-glow  { animation: bannerGlow 3.5s ease-in-out infinite; }
          #aura-status       { animation: statusBeat 1.5s ease-in-out infinite; }
          #aura-scanline     { animation: scanLine 8s linear infinite; }
          #aura-log-1        { animation: logPulse 2s ease-in-out infinite; }
          #aura-log-2        { animation: logPulse 2s ease-in-out infinite 0.4s; }
          #aura-log-3        { animation: logPulse 2s ease-in-out infinite 0.8s; }
          #aura-log-4        { animation: logPulse 2s ease-in-out infinite 1.2s; }
          #aura-log-5        { animation: logPulse 2s ease-in-out infinite 1.6s; }

          #amb-grid          { animation: ambGridDrift 16.2s linear infinite; }
          #amb-p1 { animation: ambFloatA  9s ease-in-out infinite; }
          #amb-p2 { animation: ambFloatB 11s ease-in-out infinite -2s; }
          #amb-p3 { animation: ambFloatA 13s ease-in-out infinite -4s; }
          #amb-p4 { animation: ambFloatB 10s ease-in-out infinite -1s; }
          #amb-p5 { animation: ambFloatA 12s ease-in-out infinite -3s; }
          #amb-p6 { animation: ambFloatB  8s ease-in-out infinite -5s; }
          #amb-p7 { animation: ambFloatA 14s ease-in-out infinite -6s; }
          #amb-p8 { animation: ambFloatB 11s ease-in-out infinite -2.5s; }
          #amb-s1 { animation: ambSpark 5s linear infinite; }
          #amb-s2 { animation: ambSpark 6s linear infinite -1.5s; }
          #amb-s3 { animation: ambSpark 7s linear infinite -3s; }
          #amb-s4 { animation: ambSpark 5.5s linear infinite -2.2s; }
          #amb-s5 { animation: ambSpark 6.5s linear infinite -4s; }
        `}</style>

        {/* FOREGROUND SVG — drawn on top of all body content (cursor, lights, halo, status, log dots) */}
        <svg width="900" height="1311" viewBox="0 0 900 1311" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0 }}>
          <defs>
            <radialGradient id="aura-halo-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(57,211,83,0.65)" />
              <stop offset="60%" stopColor="rgba(57,211,83,0.15)" />
              <stop offset="100%" stopColor="rgba(57,211,83,0)" />
            </radialGradient>
          </defs>
          <circle id="aura-status" cx="22" cy="152" r="3" fill="#39d353" />
          <circle id="aura-log-1" cx="20" cy="1088" r="2.5" fill="#39d353" />
          <circle id="aura-log-2" cx="20" cy="1110" r="2.5" fill="#39d353" />
          <circle id="aura-log-3" cx="20" cy="1132" r="2.5" fill="#39d353" />
          <circle id="aura-log-4" cx="20" cy="1154" r="2.5" fill="#e3b341" />
          <circle id="aura-log-5" cx="20" cy="1176" r="2.5" fill="#39d353" />
          <circle id="aura-light-r" cx="23" cy="19" r="6" fill="#ff5f56" />
          <circle id="aura-light-y" cx="43" cy="19" r="6" fill="#ffbd2e" />
          <circle id="aura-light-g" cx="63" cy="19" r="6" fill="#27c93f" />
          <ellipse id="aura-cursor-halo" cx="167" cy="1278" rx="14" ry="11" fill="url(#aura-halo-grad)" />
          <rect id="aura-cursor" x="163" y="1270" width="9" height="14" fill={t.green} />
        </svg>
      </div>
    </div>
  );
})()
```
