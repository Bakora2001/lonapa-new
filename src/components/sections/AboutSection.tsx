import React from 'react'
import './AboutSection.css'

const values = [
  { title: 'Peace First', desc: 'Every initiative starts with a commitment to non-violence, dialogue, and mutual respect.' },
  { title: 'Youth Power', desc: 'Young people are not just beneficiaries — they are our primary agents of change.' },
  { title: 'Cultural Roots', desc: 'We honour and preserve the traditions that bind communities together.' },
  { title: 'Inclusive Growth', desc: 'No one is left behind. We reach the most vulnerable with tailored support.' },
]

const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        {/* Left: Image collage */}
        <div className="about-visual reveal">
          <div className="about-img-main">
            <img
              src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=700&q=80"
              alt="Community gathering"
            />
          </div>
          <div className="about-img-secondary">
            <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&q=80"
              alt="Youth mentorship"
            />
          </div>
          <div className="about-badge">
            <span className="about-badge-year">Est.</span>
            <span className="about-badge-num">2020s</span>
            <span className="about-badge-label">North Rift</span>
          </div>
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <div className="reveal">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">A Foundation Rooted in<br /><em className="title-em">Community & Peace</em></h2>
            <p className="section-subtitle">
              Wilson Lonapa Peace Foundation is a non-governmental, non-profit entity committed to fostering peace, nurturing youth potential, and promoting cultural cohesion across the North Rift region of Kenya and selected communities in Uganda.
            </p>
          </div>

          <div className="about-values reveal reveal-delay-2">
            {values.map((v) => (
              <div className="value-item" key={v.title}>
                <div className="value-dot" />
                <div>
                  <div className="value-title">{v.title}</div>
                  <div className="value-desc">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="about-quote reveal reveal-delay-3">
            <blockquote>
              "To cultivate a society characterized by enduring peace, cohesive communities, and empowered youth who actively participate in sustainable development."
            </blockquote>
            <cite>— Wilson Lonapa Peace Foundation Vision</cite>
          </div>

          <div className="about-actions reveal reveal-delay-4">
            <a href="#contact" className="btn-primary">Learn Our Story</a>
            <a href="#programs" className="btn-outline">View Programs</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
