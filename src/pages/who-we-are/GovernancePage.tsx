import React from 'react'
import PageHero from '../../components/PageHero'
import Footer from '../../components/sections/Footer'
import './InnerPage.css'

const boardMembers = [
  {
    name: 'Wilson Lonapa',
    role: 'Founder & Executive Director',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'Visionary leader with deep roots in North Rift peacebuilding and community development.',
  },
  {
    name: 'Joylyne Lopokoit',
    role: 'Programme Director',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'Drives programme strategy and stakeholder engagement across Kenya and Uganda.',
  },
  {
    name: 'Elder Council Rep.',
    role: 'Traditional Leadership Liaison',
    img: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&q=80',
    bio: 'Bridges the foundation with traditional governance structures and council of elders.',
  },
  {
    name: 'Youth Ambassador Lead',
    role: 'Head of Youth Programs',
    img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
    bio: 'Coordinates the 200+ Peace Ambassadors and youth engagement programmes.',
  },
  {
    name: 'Community Coordinator',
    role: 'Uganda Operations',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Oversees the foundation\'s operations and community outreach in Uganda.',
  },
  {
    name: 'Finance & Admin Officer',
    role: 'Finance & Administration',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'Manages financial transparency, reporting, and administrative operations.',
  },
]

const GovernancePage: React.FC = () => {
  return (
    <>
      <PageHero
        tag="Who We Are"
        title="Governance & Leadership"
        subtitle="Our foundation is guided by principled leadership — combining modern governance with deep respect for traditional community structures."
        image="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80"
        breadcrumbs={[{ label: 'Who We Are' }, { label: 'Governance' }]}
      />

      <div className="inner-page">

        <section className="ip-section">
          <div className="ip-container">
            <div className="ip-two-col">
              <div className="reveal">
                <span className="section-label">Our Structure</span>
                <h2 className="section-title">How We Are Governed</h2>
                <p className="ip-body">
                  Wilson Lonapa Peace Foundation operates with a clear governance framework that ensures accountability, transparency, and community-centred decision-making. Our structure blends institutional leadership with traditional wisdom.
                </p>
                <p className="ip-body">
                  A governing board oversees strategic direction, while programme teams execute on the ground. Traditional leaders and councils of elders serve as essential advisors — ensuring our work remains rooted in community values.
                </p>
                <p className="ip-body">
                  We are registered as a non-governmental, non-profit entity operating primarily in Kenya with active programming in Uganda.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '28px' }}>
                  {['Board of Directors', 'Programme Leadership', 'Traditional Advisory Council', 'Youth Ambassador Council', 'Operations & Finance Committee'].map((item, i) => (
                    <div key={i} className="gov-tier">
                      <div className="gov-tier-num">{i + 1}</div>
                      <div className="gov-tier-label">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ip-image-stack reveal reveal-delay-2">
                <div className="img-stack-main">
                  <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=700&q=80" alt="Governance meeting" />
                </div>
                <div className="img-stack-accent">
                  <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80" alt="Community elders" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ip-section ip-section--tinted">
          <div className="ip-container">
            <div className="ip-section-header reveal">
              <span className="section-label">Our People</span>
              <h2 className="section-title">Leadership Team</h2>
              <p className="section-subtitle">The dedicated individuals steering the foundation's mission forward.</p>
            </div>
            <div className="ip-team-grid">
              {boardMembers.map((m, i) => (
                <div key={i} className={`ip-team-card anim-card reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="team-photo">
                    <img src={m.img} alt={m.name} />
                  </div>
                  <div className="team-info">
                    <div className="team-name">{m.name}</div>
                    <div className="team-role">{m.role}</div>
                    <div className="team-bio">{m.bio}</div>
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
                <h3 className="ip-cta-title">Questions About Our Governance?</h3>
                <p className="ip-cta-sub">We welcome inquiries about our structure, finances, and accountability.</p>
              </div>
              <div className="ip-cta-actions">
                <a href="/finance-support" className="btn-primary">Finance & Support</a>
                <a href="/#contact" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>Contact Us</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .gov-tier {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          background: white;
          border-radius: 6px;
          border: 1px solid var(--border-light);
          transition: all 0.2s ease;
        }
        .gov-tier:hover {
          border-color: var(--primary-light);
          box-shadow: var(--shadow-sm);
          transform: translateX(4px);
        }
        .gov-tier-num {
          width: 28px;
          height: 28px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: 700;
          flex-shrink: 0;
        }
        .gov-tier-label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-dark);
        }
      `}</style>
      <Footer />
    </>
  )
}

export default GovernancePage
