import './App.css'

const contentTypes = [
  { title: 'Single Image Feed', desc: '1 visual siap upload dengan headline, caption, hashtag.', metric: '1080×1080', accent: 'violet' },
  { title: 'Carousel Image Feed', desc: 'Struktur 6–10 slide, copy per slide, export ZIP.', metric: '8 slides', accent: 'blue' },
  { title: 'Reels / Short Video', desc: 'Hook, storyboard, voice-over, text overlay, scene prompt.', metric: '30–45s', accent: 'cyan' },
]

const steps = ['Brief', 'Strategy', 'Copywriting', 'Visual Prompt', 'Generate Asset', 'Export']

const slides = [
  'Tagihan listrik naik? Ini penyebab yang sering diabaikan',
  'Perangkat lama bekerja lebih keras dan boros energi',
  'Instalasi tidak efisien bikin beban puncak sulit dikontrol',
  'Audit energi membantu menemukan pemborosan tersembunyi',
]

function App() {
  return (
    <main className="app-shell">
      <nav className="topbar">
        <div className="brand-mark">
          <span className="logo-orb">P</span>
          <div>
            <strong>PublikAI Studio</strong>
            <small>AI content framework</small>
          </div>
        </div>
        <div className="nav-links">
          <a>Social AI</a>
          <a>Template</a>
          <a>Pricing</a>
          <a>Roadmap</a>
        </div>
        <button className="ghost-btn">Open Dashboard</button>
      </nav>

      <section className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">MVP UI/UX Prototype</span>
          <h1>AI Content Studio dengan workflow siap pakai.</h1>
          <p>
            Platform publik untuk bisnis, creator, dan agency. User cukup pilih format konten,
            isi brief singkat, lalu AI menghasilkan copy, visual direction, prompt, sampai asset siap produksi.
          </p>
          <div className="hero-actions">
            <button className="primary-btn">Create social content</button>
            <button className="secondary-btn">Lihat workflow</button>
          </div>
          <div className="stat-strip">
            <div><b>3</b><span>format MVP</span></div>
            <div><b>6</b><span>AI workflow steps</span></div>
            <div><b>1 brief</b><span>multi-output</span></div>
          </div>
        </div>

        <div className="product-window hero-window">
          <div className="window-header">
            <span></span><span></span><span></span>
            <p>New Generation / Social Media</p>
          </div>
          <div className="prompt-card">
            <label>Topik / Brief</label>
            <div className="fake-input">Tips hemat listrik untuk bisnis kecil dengan visual clean premium</div>
            <div className="chips">
              <span>Instagram</span><span>Awareness</span><span>Professional</span>
            </div>
          </div>
          <div className="type-grid">
            {contentTypes.map((type) => (
              <article className={`type-card ${type.accent}`} key={type.title}>
                <div className="card-topline"><span>{type.metric}</span><i /></div>
                <h3>{type.title}</h3>
                <p>{type.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span className="eyebrow">Framework bukan prompt kosong</span>
          <h2>Setiap format punya workflow sendiri.</h2>
          <p>AI diarahkan dengan tahapan produksi konten, supaya hasil lebih konsisten dan siap dipakai.</p>
        </div>
        <div className="workflow-rail">
          {steps.map((step, i) => (
            <div className="workflow-step" key={step}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <b>{step}</b>
            </div>
          ))}
        </div>
      </section>

      <section className="workspace-grid">
        <aside className="sidebar-panel product-window">
          <div className="panel-title">Brand Profile</div>
          <div className="brand-card">
            <div className="brand-avatar">SS</div>
            <div><b>Synergy Solusi</b><span>Energy efficiency brand</span></div>
          </div>
          <div className="settings-list">
            <p><span>Tone</span><b>Profesional, edukatif</b></p>
            <p><span>Audience</span><b>Business owner</b></p>
            <p><span>Style</span><b>Clean, blue, premium</b></p>
            <p><span>Credit</span><b>482 available</b></p>
          </div>
        </aside>

        <div className="generator-panel product-window">
          <div className="panel-title">Carousel Generator</div>
          <div className="generator-layout">
            <div className="brief-form">
              <label>Content objective</label>
              <div className="fake-select">Education / Awareness</div>
              <label>Topic</label>
              <div className="fake-textarea">Penyebab tagihan listrik bisnis naik dan solusi audit energi.</div>
              <label>Output package</label>
              <div className="toggle-row"><span className="active">Copy</span><span>Visual</span><span>Caption</span><span>ZIP</span></div>
              <button className="primary-btn full">Generate Carousel</button>
            </div>
            <div className="preview-stack">
              {slides.map((slide, i) => (
                <div className="slide-preview" key={slide}>
                  <span>Slide {i + 1}</span>
                  <b>{slide}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="outputs-section">
        <div className="section-heading compact">
          <span className="eyebrow">Output siap dipakai</span>
          <h2>Dari brief pendek jadi asset pack.</h2>
        </div>
        <div className="output-grid">
          <article>
            <span className="mini-icon">✦</span>
            <h3>Caption & Hashtag</h3>
            <p>Copy sesuai tone brand, CTA, dan hashtag relevan.</p>
          </article>
          <article>
            <span className="mini-icon">▦</span>
            <h3>Slide Copy</h3>
            <p>Struktur carousel lengkap: hook, edukasi, proof, CTA.</p>
          </article>
          <article>
            <span className="mini-icon">◎</span>
            <h3>Prompt Visual</h3>
            <p>Prompt image/video diperkaya style, layout, dan brand rule.</p>
          </article>
          <article>
            <span className="mini-icon">↧</span>
            <h3>Export Asset</h3>
            <p>Download PNG, JPG, caption text, atau ZIP carousel.</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
