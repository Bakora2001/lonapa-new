import React, { useState } from 'react'
import './ProgramsSection.css'

const programs = [
  {
    icon: '🕊',
    title: 'Promoting Peace',
    desc: 'Strategic interventions and mediation programs that reduce conflict and build harmonious relationships across communities.',
    tag: 'Conflict Resolution',
    color: '#2d7a4f',
  },
  {
    icon: '🤝',
    title: 'Uniting Communities',
    desc: 'Facilitating dialogue, reconciliation, and collaboration between diverse community members and groups.',
    tag: 'Social Cohesion',
    color: '#3a9063',
  },
  {
    icon: '📚',
    title: 'Guiding Students',
    desc: 'Mentorship programs and leadership development delivered in schools and educational institutions.',
    tag: 'Education',
    color: '#2d7a4f',
  },
  {
    icon: '👴',
    title: 'Traditional Leadership',
    desc: 'Collaborating with councils of elders to uphold governance, cultural values, and conflict resolution.',
    tag: 'Governance',
    color: '#1a5c38',
  },
  {
    icon: '⚽',
    title: 'Football Tournaments',
    desc: 'Engaging youth and communities through sports to promote teamwork, unity, and peaceful coexistence.',
    tag: 'Sports for Peace',
    color: '#3a9063',
  },
  {
    icon: '🏃',
    title: 'Peace Race',
    desc: 'Participatory community events that foster cohesion and awareness of the value of peaceful living.',
    tag: 'Community Events',
    color: '#2d7a4f',
  },
  {
    icon: '❤',
    title: 'Caring Neighbours',
    desc: 'Outreach programs targeting vulnerable community members for support, inclusion, and social connection.',
    tag: 'Welfare',
    color: '#1a5c38',
  },
  {
    icon: '🌟',
    title: 'Youth Empowerment',
    desc: 'Training workshops and mentorship equipping young people with skills, confidence, and leadership capacity.',
    tag: 'Empowerment',
    color: '#3a9063',
  },
  {
    icon: '🥁',
    title: 'Cultural Events',
    desc: 'Traditional dances and ceremonies that promote cultural heritage, instill pride, and strengthen communal harmony.',
    tag: 'Heritage',
    color: '#2d7a4f',
  },
]

const ProgramsSection: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="programs-section" id="programs">
      <div className="programs-inner">
        <div className="programs-header reveal">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Programs & Initiatives</h2>
          <p className="section-subtitle">
            Nine interconnected programs working together to build peace, empower youth, and preserve the rich cultural heritage of North Rift communities.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((prog, i) => (
            <div
              key={i}
              className={`program-card anim-card reveal reveal-delay-${(i % 5) + 1}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="program-icon-wrap" style={{ background: prog.color + '15' }}>
                <span className="program-icon">{prog.icon}</span>
              </div>
              <div className="program-tag">{prog.tag}</div>
              <h3 className="program-title">{prog.title}</h3>
              <p className="program-desc">{prog.desc}</p>
              <div
                className={`program-line ${hovered === i ? 'active' : ''}`}
                style={{ background: prog.color }}
              />
              <a href="#contact" className="program-link">
                Learn more
                <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection
