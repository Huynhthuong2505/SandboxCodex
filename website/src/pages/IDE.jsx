const suggestions = [
  "Build a SaaS landing page with auth and payments",
  "Create a realtime dashboard from my API",
  "Turn this prompt into a SandboxCodeX project",
];

const pipelineSteps = [
  "Intent",
  "Architecture",
  "Generate",
  "Run",
  "Fix",
  "Deploy",
];

const files = [
  { name: "app/page.tsx", status: "edited" },
  { name: "api/chat/route.ts", status: "new" },
  { name: "schema.prisma", status: "synced" },
];

const logs = [
  "✓ Runtime container ready",
  "✓ Dependencies installed",
  "✓ Preview compiled in 1.8s",
  "↻ Self-healing watcher active",
];

export default function IDE() {
  return (
    <main className="sandboxcodex-shell">
      <section className="hero-panel">
        <nav className="top-nav" aria-label="Primary navigation">
          <div className="brand-mark">
            <span className="brand-orb">SC</span>
            <span>
              <strong>SandboxCodeX</strong>
              <small>AI Sandbox IDE</small>
            </span>
          </div>
          <button className="nav-pill" type="button">Deploy</button>
        </nav>

        <div className="hero-copy">
          <p className="eyebrow">Autonomous AI software pipeline</p>
          <h1>Build production apps from one conversation.</h1>
          <p className="hero-text">
            SandboxCodeX keeps the product identity front and center while OpenClaw
            powers the AI flow: intent analysis, architecture, code generation,
            runtime, self-healing logs, and deployment.
          </p>
        </div>

        <section className="chat-card" aria-label="SandboxCodeX chat composer">
          <div className="chat-thread">
            <article className="message user-message">
              <span>Human</span>
              <p>Create a mobile-first AI IDE for launching a marketplace app.</p>
            </article>
            <article className="message ai-message">
              <span>SandboxCodeX AI</span>
              <p>
                I’ll plan the stack, generate frontend/backend/API routes,
                provision runtime services, stream logs, patch crashes, and
                publish a live HTTPS URL.
              </p>
            </article>
          </div>

          <label className="prompt-box">
            <span>What should SandboxCodeX build?</span>
            <textarea
              placeholder="Ask SandboxCodeX to build, refactor, connect APIs, add auth, or deploy..."
              rows="4"
            />
          </label>

          <div className="composer-actions">
            <button className="ghost-button" type="button">Attach context</button>
            <button className="primary-button" type="button">Generate app</button>
          </div>
        </section>

        <div className="suggestion-row" aria-label="Prompt examples">
          {suggestions.map((item) => (
            <button key={item} type="button">{item}</button>
          ))}
        </div>
      </section>

      <section className="workspace-panel" aria-label="AI build workspace">
        <div className="device-frame">
          <div className="workspace-header">
            <div>
              <span className="status-dot" /> Live workspace
            </div>
            <strong>sandboxcodex.app/preview</strong>
          </div>

          <div className="pipeline-strip">
            {pipelineSteps.map((step, index) => (
              <div className="pipeline-step" key={step}>
                <span>{index + 1}</span>
                {step}
              </div>
            ))}
          </div>

          <div className="workspace-grid">
            <section className="mini-panel files-panel">
              <h2>Project</h2>
              {files.map((file) => (
                <div className="file-row" key={file.name}>
                  <span>▸ {file.name}</span>
                  <em>{file.status}</em>
                </div>
              ))}
            </section>

            <section className="mini-panel preview-panel">
              <div className="preview-topbar">
                <span /> <span /> <span />
              </div>
              <div className="preview-content">
                <p>AI-generated marketplace</p>
                <h3>Launch-ready in minutes</h3>
                <button type="button">Open app</button>
              </div>
            </section>

            <section className="mini-panel logs-panel">
              <h2>Runtime logs</h2>
              {logs.map((log) => (
                <code key={log}>{log}</code>
              ))}
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
