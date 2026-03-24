import React from 'react'
import PageHero from '../../components/PageHero'
import Footer from '../../components/sections/Footer'
import '../who-we-are/InnerPage.css'

const partners = [
  { name: 'Local NGOs & CBOs', icon: '🤝', desc: 'Community-based organisations across the North Rift that co-implement programmes, share resources, and extend our collective reach into hard-to-access communities.' },
  { name: 'Councils of Elders', icon: '👴', desc: 'Traditional leadership councils in Kenya and Uganda that lend legitimacy, cultural wisdom, and community trust to all our peacebuilding processes.' },
  { name: 'Educational Institutions', icon: '🎓', desc: 'Schools and colleges that host our Youth Peace Ambassador training, mentorship programmes, and leadership development sessions.' },
  { name: 'Youth Organisations', icon: '🌱', desc: 'Youth-led groups and associations that co-facilitate peer education, sports events, and cultural programmes with our team.' },
  { name: 'Government Agencies', icon: '🏛', desc: 'County government bodies and national agencies that provide policy alignment, programme endorsement, and access to additional resources and platforms.' },
  { name: 'Cultural Institutions', icon: '🥁', desc: 'Community cultural groups, dance troupes, and heritage bodies that partner on preservation events, ceremonies, and identity-building programmes.' },
]

const howToPartner = [
  { title: 'Programme Co-Implementation', body: 'Design and deliver joint programmes in areas of complementary strength. We welcome co-facilitation of dialogues, training, and community events.' },
  { title: 'Financial Support', body: 'Fund specific programmes, cover operational costs, or provide core support that gives us the flexibility to respond to emerging needs.' },
  { title: 'Knowledge Exchange', body: 'Share learning, research, methodologies, and lessons from your work with us — and receive the same in return. We believe in open knowledge.' },
  { title: 'Institutional Endorsement', body: 'Lend your institution\'s name, network, and credibility to our work — helping us reach new communities and stakeholders.' },
]

const OurPartnersPage: React.FC = () => {
  return (
    <>
      <PageHero
        tag="Our Approach"
        title="Our Partners"
        subtitle="Peace is never built alone. Our network of partners — from grass-roots organisations to government bodies — is our greatest asset."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
        breadcrumbs={[{ label: 'Our Approach' }, { label: 'Our Partners' }]}
      />

      <div className="inner-page">

        {/* Partner types */}
        <section className="ip-section">
          <div className="ip-container">
            <div className="ip-section-header reveal">
              <span className="section-label">Our Network</span>
              <h2 className="section-title">Who We Work With</h2>
              <p className="section-subtitle">
                From traditional councils to government agencies, our partnerships span the full spectrum of community life in the North Rift and Uganda.
              </p>
            </div>
            <div className="ip-partner-grid">
              {partners.map((p, i) => (
                <div key={i} className={`ip-partner-tile anim-card reveal reveal-delay-${(i % 3) + 1}`}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{p.icon}</div>
                  <div className="ipt-bar" />
                  <div className="ipt-name">{p.name}</div>
                  <div className="ipt-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to partner */}
        <section className="ip-section ip-section--tinted">
          <div className="ip-container">
            <div className="ip-two-col">
              <div className="reveal">
                <span className="section-label">Join Our Network</span>
                <h2 className="section-title">Become a Partner</h2>
                <p className="ip-body">
                  Whether you are a local organisation, an international NGO, a government body, or a private sector institution — there is a meaningful way to partner with Wilson Lonapa Peace Foundation.
                </p>
                <p className="ip-body">
                  We approach all partnerships as relationships of equals — built on shared values, mutual accountability, and complementary strengths. We do not simply receive support; we co-create, co-implement, and co-learn.
                </p>
                <a href="/#contact" className="btn-primary" style={{ marginTop: '24px', display: 'inline-flex', gap: '10px' }}>
                  Start a Partnership Conversation
                  <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>
              <div className="reveal reveal-delay-2">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {howToPartner.map((h, i) => (
                    <div key={i} className="partner-how-item">
                      <div className="phi-dot" />
                      <div>
                        <div className="phi-title">{h.title}</div>
                        <div className="phi-body">{h.body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ip-cta-bar">
          <div className="ip-container">
            <div className="ip-cta-inner reveal">
              <div>
                <h3 className="ip-cta-title">Ready to Build Peace Together?</h3>
                <p className="ip-cta-sub">Let's explore what's possible when we combine our strengths.</p>
              </div>
              <div className="ip-cta-actions">
                <a href="/#contact" className="btn-primary">Contact Us</a>
                <a href="/our-strategy" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>Our Strategy</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .partner-how-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px 22px;
          background: white;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          transition: all 0.25s ease;
        }
        .partner-how-item:hover {
          border-color: var(--primary-light);
          box-shadow: var(--shadow-sm);
          transform: translateX(4px);
        }
        .phi-dot {
          width: 10px;
          height: 10px;
          background: var(--accent);
          border-radius: 50%;
          margin-top: 5px;
          flex-shrink: 0;
        }
        .phi-title {
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--text-dark);
          margin-bottom: 5px;
        }
        .phi-body {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
      `}</style>
      <Footer />
    </>
  )
}

export default OurPartnersPage
