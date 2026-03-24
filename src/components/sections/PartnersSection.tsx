import React from 'react'
import './PartnersSection.css'

const targetGroups = [
  { label: 'Youth aged 15–30', icon: '👥', desc: 'Empowering the next generation of leaders, peace ambassadors, and change-makers' },
  { label: 'Students', icon: '🎓', desc: 'In schools and colleges — mentorship, guidance, and leadership development' },
  { label: 'Conflict-Affected Communities', icon: '🏘', desc: 'Promoting dialogue, reconciliation, and community engagement' },
  { label: 'Traditional Leaders', icon: '🤲', desc: 'Supporting councils of elders in governance and cultural preservation' },
]

const partnerTypes = [
  { name: 'Local NGOs', desc: 'Community-based organizations extending reach and impact' },
  { name: 'Councils of Elders', desc: 'North Rift and Uganda traditional leadership networks' },
  { name: 'Educational Institutions', desc: 'Schools and youth organizations for mentorship programs' },
  { name: 'Government Agencies', desc: 'Policy alignment and community development support' },
  { name: 'Cultural Institutions', desc: 'Heritage preservation and community identity events' },
  { name: 'Youth Organizations', desc: 'Collaborative leadership and civic engagement programs' },
]

const advocacyAreas = [
  'Fostering Peace & Harmony between Neighbouring Communities',
  'Justice and Human Rights',
  'Against Drug & Alcohol Abuse',
  'Environment Conservation & Climate Change',
  'Youth Empowerment & Leadership',
  'Alternative Ways of Life for Reformed Bandits',
]

const PartnersSection: React.FC = () => {
  return (
    <>
      {/* Target Groups */}
      <section className="target-section">
        <div className="target-inner">
          <div className="target-header reveal">
            <span className="section-label">Who We Serve</span>
            <h2 className="section-title">Our Target Groups</h2>
          </div>
          <div className="target-grid">
            {targetGroups.map((g, i) => (
              <div key={i} className={`target-card anim-card reveal reveal-delay-${i + 1}`}>
                <div className="target-icon">{g.icon}</div>
                <h3 className="target-label">{g.label}</h3>
                <p className="target-desc">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners-section" id="partners">
        <div className="partners-inner">
          <div className="partners-left reveal">
            <span className="section-label">Our Network</span>
            <h2 className="section-title">Partners &<br />Collaborators</h2>
            <p className="section-subtitle">
              We believe lasting peace is built through collaboration. Our partnerships span government, civil society, traditional institutions, and educational bodies.
            </p>
            <a href="#contact" className="btn-primary" style={{ marginTop: '28px', display: 'inline-flex' }}>
              Become a Partner
              <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
          <div className="partners-right">
            <div className="partners-grid">
              {partnerTypes.map((p, i) => (
                <div key={i} className={`partner-card anim-card reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="partner-icon-line" />
                  <h4 className="partner-name">{p.name}</h4>
                  <p className="partner-desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advocacy Banner */}
      <section className="advocacy-section">
        <div className="advocacy-inner">
          <div className="advocacy-label reveal">
            <span className="section-label" style={{ color: 'var(--accent)' }}>What We Stand For</span>
            <h2 className="advocacy-title reveal">Our Advocacy Areas</h2>
          </div>
          <div className="advocacy-pills reveal">
            {advocacyAreas.map((area, i) => (
              <div key={i} className="advocacy-pill" style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="pill-check">✓</span>
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PartnersSection
