import { useEffect, useMemo, useState } from 'react'
import './App.css'

type SectionId = 'social-ai' | 'template' | 'pricing' | 'roadmap' | 'dashboard'

const navItems: { label: string; id: SectionId }[] = [
  { label: 'Social AI', id: 'social-ai' },
  { label: 'Template', id: 'template' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Roadmap', id: 'roadmap' },
]

const contentTypes = [
  {
    title: 'Single Image Feed',
    desc: '1 visual siap upload dengan headline, caption, hashtag.',
    metric: '1080×1080',
    accent: 'violet',
    output: 'Feed visual + caption pendek + CTA',
  },
  {
    title: 'Carousel Image Feed',
    desc: 'Struktur 6–10 slide, copy per slide, export ZIP.',
    metric: '8 slides',
    accent: 'blue',
    output: 'Outline slide + visual direction + ZIP',
  },
  {
    title: 'Reels / Short Video',
    desc: 'Hook, storyboard, voice-over, text overlay, scene prompt.',
    metric: '30–45s',
    accent: 'cyan',
    output: 'Script + storyboard + scene prompts',
  },
]

const steps = ['Brief', 'Strategy', 'Copywriting', 'Visual Prompt', 'Generate Asset', 'Export']

const slides = [
  'Tagihan listrik naik? Ini penyebab yang sering diabaikan',
  'Perangkat lama bekerja lebih keras dan boros energi',
  'Instalasi tidak efisien bikin beban puncak sulit dikontrol',
  'Audit energi membantu menemukan pemborosan tersembunyi',
]

const templates = [
  { name: 'Product Education', usage: 'Edukasi produk/jasa', tone: 'Helpful' },
  { name: 'Problem → Solution', usage: 'Awareness & lead gen', tone: 'Persuasive' },
  { name: 'Myth Busting', usage: 'Thought leadership', tone: 'Sharp' },
]

const pricing = [
  { plan: 'Free', price: 'Rp0', desc: 'Coba workflow dasar', features: ['5 credits', 'Caption + prompt', 'Watermark'] },
  { plan: 'Starter', price: 'Rp99rb', desc: 'Untuk creator & UMKM', features: ['100 credits', 'Single feed', 'Caption pack'] },
  { plan: 'Pro', price: 'Rp299rb', desc: 'Untuk bisnis & agency', features: ['500 credits', 'Carousel ZIP', 'Brand profile'], featured: true },
]

const roadmap = ['Brand memory', 'AI image generation', 'Reels storyboard', 'Approval workflow', 'Instagram scheduler']

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('social-ai')
  const [activeType, setActiveType] = useState(1)
  const [activePackage, setActivePackage] = useState('Copy')
  const [isGenerating, setIsGenerating] = useState(false)
  const [spotlight, setSpotlight] = useState({ x: '70%', y: '8%' })

  const activeOutput = useMemo(() => contentTypes[activeType], [activeType])

  useEffect(() => {
    const sectionIds: SectionId[] = ['social-ai', 'template', 'pricing', 'roadmap', 'dashboard']
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id as SectionId)
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.12, 0.4, 0.72] },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.16 },
    )

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))
    return () => revealObserver.disconnect()
  }, [])

  const scrollToSection = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const runGenerator = () => {
    setIsGenerating(true)
    window.setTimeout(() => setIsGenerating(false), 1200)
  }

  return (
    <main
      className="app-shell"
      style={{ '--spotlight-x': spotlight.x, '--spotlight-y': spotlight.y } as React.CSSProperties}
      onMouseMove={(event) => {
        setSpotlight({ x: `${event.clientX}px`, y: `${event.clientY}px` })
      }}
    >
      <div className="ambient-grid" />
      <nav className="topbar">
        <button className="brand-mark nav-reset" onClick={() => scrollToSection('social-ai')} aria-label="Go to top">
          <span className="logo-orb">P</span>
          <div>
            <strong>PublikAI Studio</strong>
            <small>AI content framework</small>
          </div>
        </button>
        <div className="nav-links">
          {navItems.map((item) => (
            <button
              className={activeSection === item.id ? 'active' : ''}
              key={item.id}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button className="ghost-btn" onClick={() => scrollToSection('dashboard')}>Open Dashboard</button>
      </nav>

      <section className="hero-grid reveal" id="social-ai">
        <div className="hero-copy">
          <span className="eyebrow">MVP UI/UX Prototype</span>
          <h1>AI Content Studio dengan workflow siap pakai.</h1>
          <p>
            Platform publik untuk bisnis, creator, dan agency. User cukup pilih format konten,
            isi brief singkat, lalu AI menghasilkan copy, visual direction, prompt, sampai asset siap produksi.
          </p>
          <div className="hero-actions">
            <button className="primary-btn magnetic" onClick={() => scrollToSection('dashboard')}>Create social content</button>
            <button className="secondary-btn" onClick={() => scrollToSection('template')}>Lihat workflow</button>
          </div>
          <div className="stat-strip">
            <button onClick={() => scrollToSection('social-ai')}><b>3</b><span>format MVP</span></button>
            <button onClick={() => scrollToSection('template')}><b>6</b><span>AI workflow steps</span></button>
            <button onClick={() => scrollToSection('dashboard')}><b>1 brief</b><span>multi-output</span></button>
          </div>
        </div>

        <div className="product-window hero-window float-card">
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
            {contentTypes.map((type, index) => (
              <button
                className={`type-card ${type.accent} ${activeType === index ? 'selected' : ''}`}
                key={type.title}
                onClick={() => setActiveType(index)}
              >
                <div className="card-topline"><span>{type.metric}</span><i /></div>
                <h3>{type.title}</h3>
                <p>{type.desc}</p>
              </button>
            ))}
          </div>
          <div className="selected-output">
            <span>Selected output</span>
            <b>{activeOutput.output}</b>
          </div>
        </div>
      </section>

      <section className="section-block reveal" id="template">
        <div className="section-heading">
          <span className="eyebrow">Framework bukan prompt kosong</span>
          <h2>Setiap format punya workflow sendiri.</h2>
          <p>AI diarahkan dengan tahapan produksi konten, supaya hasil lebih konsisten dan siap dipakai.</p>
        </div>
        <div className="workflow-rail">
          {steps.map((step, i) => (
            <button className="workflow-step" key={step} onClick={() => scrollToSection('dashboard')}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <b>{step}</b>
            </button>
          ))}
        </div>
        <div className="template-grid">
          {templates.map((template) => (
            <article className="template-card" key={template.name}>
              <span>{template.tone}</span>
              <h3>{template.name}</h3>
              <p>{template.usage}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workspace-grid reveal" id="dashboard">
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
              <div className="toggle-row">
                {['Copy', 'Visual', 'Caption', 'ZIP'].map((item) => (
                  <button className={activePackage === item ? 'active' : ''} key={item} onClick={() => setActivePackage(item)}>
                    {item}
                  </button>
                ))}
              </div>
              <button className="primary-btn full" onClick={runGenerator}>
                {isGenerating ? 'Generating asset...' : `Generate ${activePackage}`}
              </button>
              <div className={`generation-status ${isGenerating ? 'running' : ''}`}>
                <span />
                {isGenerating ? 'AI sedang menyusun output...' : 'Ready untuk generate paket konten.'}
              </div>
            </div>
            <div className="preview-stack">
              {slides.map((slide, i) => (
                <button className="slide-preview" key={slide}>
                  <span>Slide {i + 1}</span>
                  <b>{slide}</b>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="outputs-section reveal">
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

      <section className="pricing-section reveal" id="pricing">
        <div className="section-heading compact">
          <span className="eyebrow">Pricing simulation</span>
          <h2>Paket credit untuk kontrol biaya AI.</h2>
        </div>
        <div className="pricing-grid">
          {pricing.map((item) => (
            <article className={`pricing-card ${item.featured ? 'featured' : ''}`} key={item.plan}>
              <span>{item.plan}</span>
              <h3>{item.price}<small>/bulan</small></h3>
              <p>{item.desc}</p>
              <ul>
                {item.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <button className={item.featured ? 'primary-btn' : 'secondary-btn'} onClick={() => scrollToSection('dashboard')}>Pilih paket</button>
            </article>
          ))}
        </div>
      </section>

      <section className="roadmap-section reveal" id="roadmap">
        <div>
          <span className="eyebrow">Roadmap</span>
          <h2>Next feature setelah MVP UI.</h2>
          <p>Prototype ini siap dikembangkan jadi app full: auth, database, AI workflow, credit system, dan billing.</p>
        </div>
        <div className="roadmap-list">
          {roadmap.map((item, index) => (
            <button key={item} onClick={() => scrollToSection('dashboard')}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <b>{item}</b>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
