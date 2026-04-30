

```aura width=900 height=1100 link="https://github.com/Hikyy"
(() => {
  const mono = 'ui-monospace, "JetBrains Mono", "SF Mono", Menlo, monospace';
  const green = '#39d353';
  const purple = '#a78bfa';
  const yellow = '#e3b341';
  const blue = '#58a6ff';
  const red = '#f85149';
  const dim = '#6e7681';
  const fg = '#c9d1d9';

  const Prompt = ({ user = 'rayane', host = 'github', path = '~', children }) => (
    <div style={{ marginTop: 18, display: 'flex' }}>
      <div style={{ fontFamily: mono, fontSize: 13, display: 'flex' }}>
        <span style={{ color: green }}>{user}@{host}</span>
        <span style={{ color: fg }}>:</span>
        <span style={{ color: blue }}>{path}</span>
        <span style={{ color: fg }}>$ </span>
        <span style={{ color: fg, marginLeft: 6 }}>{children}</span>
      </div>
    </div>
  );

  const Out = ({ children, style }) => (
    <div style={{ fontFamily: mono, fontSize: 13, color: fg, lineHeight: 1.7, marginTop: 4, whiteSpace: 'pre-wrap', display: 'flex', flexDirection: 'column', ...style }}>{children}</div>
  );

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: 900,
      background: '#0d1117',
      borderRadius: 12,
      overflow: 'hidden',
      border: '1px solid #30363d',
      boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
      fontFamily: mono,
    }}>
      <div style={{ background: '#161b22', borderBottom: '1px solid #30363d', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: 6, background: '#ff5f56' }} />
          <div style={{ width: 12, height: 12, borderRadius: 6, background: '#ffbd2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: 6, background: '#27c93f' }} />
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontFamily: mono, fontSize: 12, color: dim }}>
          rayane@github: ~/profile — zsh
        </div>
        <div style={{ fontFamily: mono, fontSize: 11, color: dim }}>80×24</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', padding: '24px 28px 32px', background: '#0d1117' }}>
        <pre style={{ margin: 0, color: green, fontSize: 11, fontFamily: mono, lineHeight: 1.2, whiteSpace: 'pre' }}>
{`    ____                                __  __ _ _              
   / __ \\____ ___  ______ _____  ___   / / / /(_) /____  ____ _ 
  / /_/ / __ \`/ / / / __ \`/ __ \\/ _ \\ / /_/ // / //_/ / / / / 
 / _, _/ /_/ / /_/ / /_/ / / / /  __// __  // / ,< / /_/ / /_/ /
/_/ |_|\\__,_/\\__, /\\__,_/_/ /_/\\___//_/ /_//_/_/|_|\\__, /\\__, / 
            /____/                                /____//____/  `}
        </pre>

        <div style={{ marginTop: 4, fontFamily: mono, fontSize: 12, color: dim, display: 'flex' }}>
          [<span style={{ color: green }}>OK</span>]<span style={{ marginLeft: 6 }}>system online · </span>
          <span style={{ color: yellow, marginLeft: 4 }}>full-stack developer</span>
          <span style={{ marginLeft: 4 }}> · </span>
          <span style={{ color: purple, marginLeft: 4 }}>tech lead in training</span>
        </div>

        <Prompt>whoami</Prompt>
        <Out>
          <div style={{ display: 'flex' }}><span style={{ color: dim, width: 110 }}>name</span> <span style={{ color: green }}>Mabrouki Rayane</span></div>
          <div style={{ display: 'flex' }}><span style={{ color: dim, width: 110 }}>role</span> Full-Stack Developer · Tech Lead</div>
          <div style={{ display: 'flex' }}><span style={{ color: dim, width: 110 }}>company</span> SAUR (alternance) + <span style={{ color: yellow, marginLeft: 4 }}>Freelance</span></div>
          <div style={{ display: 'flex' }}><span style={{ color: dim, width: 110 }}>education</span> Mastère CTO &amp; Tech Lead — HETIC</div>
          <div style={{ display: 'flex' }}><span style={{ color: dim, width: 110 }}>shipped</span> 3 SaaS in production</div>
          <div style={{ display: 'flex' }}><span style={{ color: dim, width: 110 }}>looking for</span> <span style={{ color: green }}>CDI · web modernes &amp; performants</span></div>
        </Out>

        <Prompt>cat stack.json</Prompt>
        <Out style={{ background: '#010409', border: '1px solid #21262d', borderRadius: 6, padding: 14, marginTop: 8 }}>
          <span style={{ color: dim }}>{'{'}</span>
          <div style={{ display: 'flex' }}><span style={{ color: blue, marginLeft: 16 }}>"frontend"</span><span>: [</span></div>
          <div style={{ display: 'flex', marginLeft: 32 }}>
            <span style={{ color: green }}>"React"</span><span>, </span>
            <span style={{ color: green, marginLeft: 4 }}>"Next.js"</span><span>, </span>
            <span style={{ color: green, marginLeft: 4 }}>"Vue.js"</span><span>, </span>
            <span style={{ color: green, marginLeft: 4 }}>"React Native"</span><span>, </span>
            <span style={{ color: green, marginLeft: 4 }}>"TypeScript"</span><span>, </span>
            <span style={{ color: green, marginLeft: 4 }}>"TailwindCSS"</span>
          </div>
          <div style={{ marginLeft: 16 }}>],</div>
          <div style={{ display: 'flex' }}><span style={{ color: blue, marginLeft: 16 }}>"backend"</span><span>: [</span></div>
          <div style={{ display: 'flex', marginLeft: 32 }}>
            <span style={{ color: yellow }}>"Laravel"</span><span>, </span>
            <span style={{ color: yellow, marginLeft: 4 }}>"Spring Boot"</span><span>, </span>
            <span style={{ color: yellow, marginLeft: 4 }}>"PHP"</span><span>, </span>
            <span style={{ color: yellow, marginLeft: 4 }}>"Python"</span><span>, </span>
            <span style={{ color: yellow, marginLeft: 4 }}>"Golang"</span><span>, </span>
            <span style={{ color: yellow, marginLeft: 4 }}>"PostgreSQL"</span><span>, </span>
            <span style={{ color: yellow, marginLeft: 4 }}>"MySQL"</span>
          </div>
          <div style={{ marginLeft: 16 }}>],</div>
          <div style={{ display: 'flex' }}><span style={{ color: blue, marginLeft: 16 }}>"devops"</span><span>: [</span></div>
          <div style={{ display: 'flex', marginLeft: 32 }}>
            <span style={{ color: purple }}>"Docker"</span><span>, </span>
            <span style={{ color: purple, marginLeft: 4 }}>"Kubernetes"</span><span>, </span>
            <span style={{ color: purple, marginLeft: 4 }}>"Terraform"</span><span>, </span>
            <span style={{ color: purple, marginLeft: 4 }}>"Ansible"</span><span>, </span>
            <span style={{ color: purple, marginLeft: 4 }}>"Traefik"</span><span>, </span>
            <span style={{ color: purple, marginLeft: 4 }}>"Azure DevOps"</span>
          </div>
          <div style={{ marginLeft: 16 }}>],</div>
          <div style={{ display: 'flex' }}>
            <span style={{ color: blue, marginLeft: 16 }}>"observability"</span><span>: [</span>
            <span style={{ color: red, marginLeft: 4 }}>"Prometheus"</span><span>, </span>
            <span style={{ color: red, marginLeft: 4 }}>"Grafana"</span><span>, </span>
            <span style={{ color: red, marginLeft: 4 }}>"Mimir"</span><span>]</span>
          </div>
          <span style={{ color: dim }}>{'}'}</span>
        </Out>

        <Prompt path="~/projects">ls -la --shipped</Prompt>
        <Out style={{ marginTop: 8 }}>
          <div style={{ display: 'flex', fontSize: 12 }}>
            <span style={{ color: dim, width: 110 }}>permissions</span>
            <span style={{ color: dim, width: 60 }}>year</span>
            <span style={{ color: dim, width: 90 }}>type</span>
            <span style={{ color: dim }}>name &amp; description</span>
          </div>
          <div style={{ display: 'flex', fontSize: 12 }}>
            <span style={{ color: green, width: 110 }}>drwxr-xr-x</span>
            <span style={{ color: yellow, width: 60 }}>2024</span>
            <span style={{ color: purple, width: 90 }}>B2B2C</span>
            <span style={{ color: green }}>gustave-ai/</span>
            <span style={{ color: dim, marginLeft: 6 }}>— Chatbot IA Mistral pour conciergerie Airbnb</span>
          </div>
          <div style={{ display: 'flex', fontSize: 12 }}>
            <span style={{ color: green, width: 110 }}>drwxr-xr-x</span>
            <span style={{ color: yellow, width: 60 }}>2025</span>
            <span style={{ color: purple, width: 90 }}>B2B</span>
            <span style={{ color: green }}>soluweld/</span>
            <span style={{ color: dim, marginLeft: 6 }}>— SaaS gestion soudage industriel · K8s</span>
          </div>
          <div style={{ display: 'flex', fontSize: 12 }}>
            <span style={{ color: green, width: 110 }}>drwxr-xr-x</span>
            <span style={{ color: yellow, width: 60 }}>2026</span>
            <span style={{ color: purple, width: 90 }}>B2B</span>
            <span style={{ color: green }}>clairfact/</span>
            <span style={{ color: dim, marginLeft: 6 }}>— Facturation électronique FacturX · PDP</span>
          </div>
        </Out>

        <Prompt>tail -f activity.log</Prompt>
        <Out style={{ marginTop: 8 }}>
          <div style={{ display: 'flex' }}><span style={{ color: dim }}>[2026-04]</span> <span style={{ color: green, marginLeft: 6 }}>INFO</span> <span style={{ marginLeft: 6 }}>shipped </span><span style={{ color: yellow, marginLeft: 4 }}>Clairfact v1.0</span><span style={{ marginLeft: 4 }}>· facturX e-reporting live</span></div>
          <div style={{ display: 'flex' }}><span style={{ color: dim }}>[2026-03]</span> <span style={{ color: green, marginLeft: 6 }}>INFO</span> <span style={{ marginLeft: 6 }}>SAUR · CI/CD Azure DevOps + Prometheus stack online</span></div>
          <div style={{ display: 'flex' }}><span style={{ color: dim }}>[2026-02]</span> <span style={{ color: green, marginLeft: 6 }}>INFO</span> <span style={{ marginLeft: 6 }}>Soluweld · module qualifications soudeurs déployé</span></div>
          <div style={{ display: 'flex' }}><span style={{ color: dim }}>[2025-11]</span> <span style={{ color: yellow, marginLeft: 6 }}>WARN</span> <span style={{ marginLeft: 6 }}>Mistral fine-tuning &gt; expected — gustave-ai context booster</span></div>
          <div style={{ display: 'flex' }}><span style={{ color: dim }}>[2024-09]</span> <span style={{ color: green, marginLeft: 6 }}>INFO</span> <span style={{ marginLeft: 6 }}>Mastère CTO &amp; Tech Lead @ HETIC — started</span></div>
        </Out>

        <Prompt>ping --connect</Prompt>
        <Out style={{ marginTop: 4 }}>
          <div style={{ display: 'flex' }}>
            <span style={{ color: dim }}>→</span>
            <span style={{ marginLeft: 6 }}>linkedin.com/in/</span>
            <span style={{ color: blue }}>rayane-mabrouki</span>
            <span style={{ color: dim, marginLeft: 18 }}>→</span>
            <span style={{ marginLeft: 6 }}>github.com/</span>
            <span style={{ color: blue }}>Hikyy</span>
            <span style={{ color: dim, marginLeft: 18 }}>→</span>
            <span style={{ color: blue, marginLeft: 6 }}>rmabrouki@outlook.fr</span>
          </div>
        </Out>

        <div style={{ marginTop: 22, fontFamily: mono, fontSize: 13, display: 'flex', alignItems: 'center' }}>
          <span style={{ color: green }}>rayane@github</span>
          <span style={{ color: fg }}>:</span>
          <span style={{ color: blue }}>~</span>
          <span style={{ color: fg }}>$ </span>
          <span style={{ width: 9, height: 17, background: green, marginLeft: 4 }} />
        </div>
      </div>
    </div>
  );
})()
```

<p align="center">
  <img alt="stats" src="https://github-readme-stats.vercel.app/api?username=Hikyy&show_icons=true&theme=github_dark&hide_border=true&bg_color=010409&title_color=39d353&icon_color=a78bfa&text_color=c9d1d9" height="170" />
  <img alt="top langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Hikyy&layout=compact&theme=github_dark&hide_border=true&bg_color=010409&title_color=39d353&text_color=c9d1d9&langs_count=8" height="170" />
</p>
