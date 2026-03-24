import React from 'react'
import PageHero from '../../components/PageHero'
import Footer from '../../components/sections/Footer'
import './InnerPage.css'

const fundingAreas = [
  { icon: '🕊', area: 'Peace Programmes', pct: 35, desc: 'Community dialogues, mediation, and conflict resolution initiatives.' },
  { icon: '🌱', area: 'Youth Empowerment', pct: 30, desc: 'Ambassador training, mentorship, leadership workshops, and life skills.' },
  { icon: '🥁', area: 'Cultural Preservation', pct: 15, desc: 'Traditional dances, ceremonies, and cultural heritage events.' },
  { icon: '⚽', area: 'Sports & Community Events', pct: 12, desc: 'Football tournaments, peace races, and Caring Neighbours outreach.' },
  { icon: '🏢', area: 'Operations & Admin', pct: 8, desc: 'Staff, facilities, and programme management to sustain our work.' },
]

const waysToDonate = [
  { title: 'One-Time Donation', icon: '💛', desc: 'Any amount makes a difference. A single contribution funds a youth workshop, a community dialogue session, or a cultural event.' },
  { title: 'Monthly Giving', icon: '📅', desc: 'Become a sustaining partner. Monthly gifts help us plan with confidence and deliver consistent programming year-round.' },
  { title: 'In-Kind Support', icon: '📦', desc: 'Donate equipment, materials, sports gear, or training resources to directly support our programmes on the ground.' },
  { title: 'Corporate Partnership', icon: '🤝', desc: 'Partner with us through CSR initiatives, sponsorships, or employee volunteering programmes tied to your values.' },
]

const FinanceSupportPage: React.FC = () => {
  return (
    <>
      <PageHero
        tag="Who We Are"
        title="Finance & Support"
        subtitle="Transparency is a cornerstone of our work. Here's how we are funded, how we spend, and how you can support our mission."
        image="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=1600&q=80"
        breadcrumbs={[{ label: 'Who We Are' }, { label: 'Finance & Support' }]}
      />

      <div className="inner-page">

        {/* Funding breakdown */}
        <section className="ip-section">
          <div className="ip-container">
            <div className="ip-two-col">
              <div className="reveal">
                <span className="section-label">Transparency</span>
                <h2 className="section-title">How We Use<br />Your Support</h2>
                <p className="ip-body">
                  Wilson Lonapa Peace Foundation is committed to the highest standards of financial accountability. Every contribution is directed where it matters most — directly to communities, youth, and cultural programmes.
                </p>
                <p className="ip-body">
                  We are a registered non-profit entity and operate with full transparency. Our annual reports and financial statements are available upon request.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
                  {fundingAreas.map((f, i) => (
                    <div key={i} className={`fs-bar-row reveal reveal-delay-${i + 1}`}>
                      <div className="fs-bar-meta">
                        <span className="fs-icon">{f.icon}</span>
                        <span className="fs-area">{f.area}</span>
                        <span className="fs-pct">{f.pct}%</span>
                      </div>
                      <div className="fs-track">
                        <div className="fs-fill" style={{ '--pct': `${f.pct}%` } as React.CSSProperties} />
                      </div>
                      <div className="fs-desc">{f.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ip-image-stack reveal reveal-delay-2">
                <div className="img-stack-main">
                  <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80" alt="Financial transparency" />
                </div>
                <div className="img-stack-accent">
                  <img src="https://images.unsplash.com/photo-1543269664-647163ec2843?w=400&q=80" alt="Community impact" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to give */}
        <section className="ip-section ip-section--tinted">
          <div className="ip-container">
            <div className="ip-section-header reveal">
              <span className="section-label">Support Us</span>
              <h2 className="section-title">Ways to Give</h2>
              <p className="section-subtitle">Every form of support — financial, material, or voluntary — helps us build peace that lasts.</p>
            </div>
            <div className="ip-values-grid">
              {waysToDonate.map((w, i) => (
                <div key={i} className={`ip-value-card anim-card reveal reveal-delay-${(i % 3) + 1}`}>
                  <span className="ipvc-icon">{w.icon}</span>
                  <h4 className="ipvc-title">{w.title}</h4>
                  <p className="ipvc-body">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ip-cta-bar">
          <div className="ip-container">
            <div className="ip-cta-inner reveal">
              <div>
                <h3 className="ip-cta-title">Ready to Support Our Mission?</h3>
                <p className="ip-cta-sub">Reach out to discuss partnership, donation, or sponsorship opportunities.</p>
              </div>
              <div className="ip-cta-actions">
                <a href="/#contact" className="btn-primary">Donate / Partner</a>
                <a href="/work-with-us" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>Work With Us</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .fs-bar-row { display: flex; flex-direction: column; gap: 6px; }
        .fs-bar-meta { display: flex; align-items: center; gap: 10px; }
        .fs-icon { font-size: 1rem; }
        .fs-area { font-size: 0.88rem; font-weight: 600; color: var(--text-dark); flex: 1; }
        .fs-pct { font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; color: var(--primary); }
        .fs-track { height: 7px; background: var(--border-light); border-radius: 4px; overflow: hidden; }
        .fs-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          border-radius: 4px;
          width: 0;
          transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fs-bar-row.visible .fs-fill { width: var(--pct); }
        .fs-desc { font-size: 0.78rem; color: var(--text-muted); line-height: 1.5; }
      `}</style>
      <Footer />
    </>
  )
}

export default FinanceSupportPage
