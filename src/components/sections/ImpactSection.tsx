import React from 'react'
import './ImpactSection.css'

const achievements = [
  {
    title: 'Peace Ambassadors',
    detail: 'Trained over 200 youth as Peace Ambassadors with conflict resolution, leadership, and civic engagement skills.',
    highlight: '200+',
  },
  {
    title: 'Community Harmony',
    detail: 'Strengthened community harmony by mediating conflicts across numerous communities in the North Rift and Uganda.',
    highlight: 'Multi-Community',
  },
  {
    title: 'Events & Festivals',
    detail: 'Executed multiple community events including football tournaments, peace races, and cultural festivals benefiting hundreds.',
    highlight: '15+ Events',
  },
  {
    title: 'Heritage Preservation',
    detail: 'Preserved cultural heritage through traditional dances, ceremonies, and community educational programs.',
    highlight: 'Ongoing',
  },
  {
    title: 'Youth Leadership',
    detail: 'Empowered youth to assume leadership roles within schools and communities, enhancing confidence and civic participation.',
    highlight: 'Schools & Colleges',
  },
  {
    title: 'Caring Neighbours',
    detail: 'Supported vulnerable populations through Caring Neighbours initiatives, fostering inclusion and social support networks.',
    highlight: 'Vulnerable Groups',
  },
]

const pillars = [
  { label: 'Peace Building', pct: 90 },
  { label: 'Youth Empowerment', pct: 85 },
  { label: 'Cultural Preservation', pct: 75 },
  { label: 'Community Unity', pct: 88 },
]

const ImpactSection: React.FC = () => {
  return (
    <section className="impact-section" id="impact">
      <div className="impact-inner">
        {/* Header */}
        <div className="impact-header reveal">
          <span className="section-label">Our Impact</span>
          <h2 className="section-title">Achievements That<br />Speak Louder Than Words</h2>
          <p className="section-subtitle">
            Real change measured in lives transformed, conflicts resolved, and communities united across the North Rift region.
          </p>
        </div>

        {/* Achievement cards */}
        <div className="achievement-grid">
          {achievements.map((a, i) => (
            <div key={i} className={`achievement-card anim-card reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="achievement-highlight">{a.highlight}</div>
              <h3 className="achievement-title">{a.title}</h3>
              <p className="achievement-detail">{a.detail}</p>
              <div className="achievement-corner" />
            </div>
          ))}
        </div>

        {/* Focus pillars */}
        <div className="pillars-wrap reveal">
          <div className="pillars-text">
            <span className="section-label">Our Reach</span>
            <h3 className="pillars-title">Focus Areas &<br />Program Reach</h3>
            <p className="pillars-sub">
              We measure our commitment across four key pillars that guide all of our programming and community engagement.
            </p>
            <a href="#contact" className="btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>
              Partner With Us
              <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
          <div className="pillars-bars">
            {pillars.map((p, i) => (
              <div key={i} className={`pillar-row reveal reveal-delay-${i + 1}`}>
                <div className="pillar-meta">
                  <span className="pillar-label">{p.label}</span>
                  <span className="pillar-pct">{p.pct}%</span>
                </div>
                <div className="pillar-track">
                  <div
                    className="pillar-fill"
                    style={{ '--pct': `${p.pct}%` } as React.CSSProperties}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactSection
