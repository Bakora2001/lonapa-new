import React from 'react'
import PageHero from '../../components/PageHero'
import Footer from '../../components/sections/Footer'
import './InnerPage.css'

const missionPillars = [
  {
    icon: '🕊',
    title: 'Advocate for Peace',
    body: 'We implement initiatives that promote peace, dialogue, and social cohesion within communities — reducing conflict through mediation and restorative justice.',
  },
  {
    icon: '🌱',
    title: 'Empower Youth',
    body: 'We provide youth with mentorship, leadership training, and opportunities to become agents of positive societal change in their schools and communities.',
  },
  {
    icon: '🤝',
    title: 'Collaborate with Tradition',
    body: 'We work alongside traditional leadership structures and cultural institutions to preserve heritage and reinforce communal values.',
  },
  {
    icon: '⚽',
    title: 'Unite Through Activity',
    body: 'Sports, cultural festivals, and community events serve as powerful tools to break down barriers and build lasting bonds between groups.',
  },
  {
    icon: '❤',
    title: 'Care for the Vulnerable',
    body: 'Through the Caring Neighbours programme, we ensure the most marginalised community members receive support, inclusion and dignity.',
  },
  {
    icon: '🌍',
    title: 'Sustain the Environment',
    body: 'Environmental conservation and climate literacy are woven into our community programming for a resilient future.',
  },
]

const coreValues = [
  { label: 'Integrity', desc: 'Transparent, honest and accountable in every action.' },
  { label: 'Respect', desc: 'We honour every individual, culture, and tradition.' },
  { label: 'Collaboration', desc: 'Peace is built together — never alone.' },
  { label: 'Resilience', desc: 'We persist in the face of obstacles with hope and purpose.' },
  { label: 'Inclusivity', desc: 'Every voice matters, every community belongs.' },
  { label: 'Sustainability', desc: 'We build solutions that endure beyond our programmes.' },
]

const MissionValuesPage: React.FC = () => {
  return (
    <>
      <PageHero
        tag="Who We Are"
        title="Mission & Values"
        subtitle="What drives us forward — the principles and commitments that guide every programme, partnership, and interaction."
        image="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&q=80"
        breadcrumbs={[{ label: 'Who We Are' }, { label: 'Mission & Values' }]}
      />

      <div className="inner-page">

        {/* Vision & Mission */}
        <section className="ip-section">
          <div className="ip-container">
            <div className="ip-two-col">
              <div className="reveal">
                <span className="section-label">Our Vision</span>
                <h2 className="section-title">A Future of Enduring Peace</h2>
                <p className="ip-body">
                  To cultivate a society characterized by <strong>enduring peace</strong>, cohesive communities, and empowered youth and leaders who actively participate in sustainable development and conflict resolution.
                </p>
                <p className="ip-body">
                  We envision a North Rift where young people lead with confidence, where elders are honoured, where diversity is celebrated, and where every community member has the opportunity to thrive.
                </p>
                <div className="ip-highlight-box" style={{ marginTop: '32px' }}>
                  <h3>Our Mission</h3>
                  <p>
                    To advocate and implement initiatives that promote peace, dialogue, and social cohesion within communities — while providing youth with mentorship and opportunities to become agents of positive societal change.
                  </p>
                </div>
              </div>
              <div className="ip-image-stack reveal reveal-delay-2">
                <div className="img-stack-main">
                  <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80" alt="Mission in action" />
                </div>
                <div className="img-stack-accent">
                  <img src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=400&q=80" alt="Community harmony" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Pillars */}
        <section className="ip-section ip-section--tinted">
          <div className="ip-container">
            <div className="ip-section-header reveal">
              <span className="section-label">How We Work</span>
              <h2 className="section-title">Mission Pillars</h2>
              <p className="section-subtitle">Six interconnected commitments that bring our mission to life every day.</p>
            </div>
            <div className="ip-values-grid">
              {missionPillars.map((p, i) => (
                <div key={i} className={`ip-value-card anim-card reveal reveal-delay-${(i % 3) + 1}`}>
                  <span className="ipvc-icon">{p.icon}</span>
                  <h4 className="ipvc-title">{p.title}</h4>
                  <p className="ipvc-body">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="ip-section">
          <div className="ip-container">
            <div className="ip-section-header reveal">
              <span className="section-label">What We Stand On</span>
              <h2 className="section-title">Core Values</h2>
            </div>
            <div className="mv-values-list">
              {coreValues.map((v, i) => (
                <div key={i} className={`mv-value reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="mv-num">0{i + 1}</div>
                  <div>
                    <div className="mv-label">{v.label}</div>
                    <div className="mv-desc">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ip-cta-bar">
          <div className="ip-container">
            <div className="ip-cta-inner reveal">
              <div>
                <h3 className="ip-cta-title">Our Values in Action</h3>
                <p className="ip-cta-sub">See how our mission comes alive through our programmes and community work.</p>
              </div>
              <div className="ip-cta-actions">
                <a href="/about-us" className="btn-primary">About Us</a>
                <a href="/our-strategy" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>Our Strategy</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .mv-values-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .mv-value {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 28px 24px;
          background: white;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          transition: all 0.25s ease;
        }
        .mv-value:hover {
          border-color: var(--primary-light);
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .mv-num {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent);
          line-height: 1;
          flex-shrink: 0;
        }
        .mv-label {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 6px;
        }
        .mv-desc {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .mv-values-list { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .mv-values-list { grid-template-columns: 1fr; }
        }
      `}</style>
      <Footer />
    </>
  )
}

export default MissionValuesPage
