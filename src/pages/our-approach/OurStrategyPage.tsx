import React from 'react'
import PageHero from '../../components/PageHero'
import Footer from '../../components/sections/Footer'
import '../who-we-are/InnerPage.css'

const strategicPillars = [
  { num: '01', icon: '🕊', title: 'Community-Led Peacebuilding', body: 'Facilitating processes where communities themselves identify the roots of conflict and design their own solutions — with our expert support throughout.' },
  { num: '02', icon: '🌱', title: 'Youth as Change Agents', body: 'Investing in the next generation as the primary drivers of long-term peace, equipping them with skills, platforms, and networks to lead change.' },
  { num: '03', icon: '👴', title: 'Traditional Governance Integration', body: 'Working with and through traditional leadership structures, ensuring our work is culturally legitimate and benefits from accumulated community wisdom.' },
  { num: '04', icon: '🤝', title: 'Strategic Partnerships', body: 'Building alliances with government, NGOs, educational institutions, and cultural bodies to amplify our reach and sustainability.' },
  { num: '05', icon: '📊', title: 'Evidence-Based Programming', body: 'Documenting outcomes, learning from failures, and adapting our approaches based on real data — sharing knowledge with the broader peacebuilding sector.' },
  { num: '06', icon: '🔄', title: 'Long-Term Presence', body: 'We are not parachute peacebuilders. We maintain deep roots in the communities we serve, with relationships built over years — not months.' },
]

const OurStrategyPage: React.FC = () => {
  return (
    <>
      <PageHero
        tag="Our Approach"
        title="Our Strategy"
        subtitle="A clear framework for building peace that is community-owned, culturally grounded, and built to last well beyond any single programme."
        image="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1600&q=80"
        breadcrumbs={[{ label: 'Our Approach' }, { label: 'Our Strategy' }]}
      />

      <div className="inner-page">

        <section className="ip-section">
          <div className="ip-container">
            <div className="ip-two-col">
              <div className="reveal">
                <span className="section-label">Strategic Framework</span>
                <h2 className="section-title">A Resilient Peace:<br />Our 2024–2028 Strategy</h2>
                <p className="ip-body">
                  Our strategy is guided by one central belief: <em>sustainable peace is never imposed from outside — it grows from within communities</em> when the right conditions, skills, and relationships are in place.
                </p>
                <p className="ip-body">
                  Over the next five years, we will deepen our roots in the North Rift, expand our Uganda programming, scale the Youth Peace Ambassador network to 500+, and build an evidence base that contributes to national peacebuilding policy.
                </p>
                <p className="ip-body">
                  We will achieve this through six interconnected strategic pillars — each reinforcing the others to create compounding, lasting impact.
                </p>
                <div className="strategy-targets">
                  {[
                    { label: 'Peace Ambassadors Goal', val: '500+' },
                    { label: 'Target Communities', val: '80+' },
                    { label: 'Countries Active', val: 'Kenya & Uganda' },
                  ].map((t, i) => (
                    <div key={i} className="st-target">
                      <div className="st-val">{t.val}</div>
                      <div className="st-label">{t.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ip-image-stack reveal reveal-delay-2">
                <div className="img-stack-main">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80" alt="Strategy" />
                </div>
                <div className="img-stack-accent">
                  <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80" alt="Planning" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="ip-section ip-section--tinted">
          <div className="ip-container">
            <div className="ip-section-header reveal">
              <span className="section-label">How We Work</span>
              <h2 className="section-title">Six Strategic Pillars</h2>
            </div>
            <div className="strategy-pillars">
              {strategicPillars.map((p, i) => (
                <div key={i} className={`sp-card anim-card reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="sp-header">
                    <div className="sp-num">{p.num}</div>
                    <div className="sp-icon">{p.icon}</div>
                  </div>
                  <h4 className="sp-title">{p.title}</h4>
                  <p className="sp-body">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ip-cta-bar">
          <div className="ip-container">
            <div className="ip-cta-inner reveal">
              <div>
                <h3 className="ip-cta-title">Align With Our Strategy</h3>
                <p className="ip-cta-sub">Looking to partner around shared strategic goals? Let's talk.</p>
              </div>
              <div className="ip-cta-actions">
                <a href="/our-partners" className="btn-primary">Our Partners</a>
                <a href="/#contact" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>Get In Touch</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .strategy-targets {
          display: flex;
          gap: 0;
          margin-top: 32px;
          background: white;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .st-target {
          flex: 1;
          padding: 22px 20px;
          text-align: center;
          border-right: 1px solid var(--border-light);
        }
        .st-target:last-child { border-right: none; }
        .st-val {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 4px;
        }
        .st-label {
          font-size: 0.74rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .strategy-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .sp-card {
          padding: 30px 26px;
          background: white;
          border-radius: 8px;
          border: 1px solid var(--border-light);
        }
        .sp-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .sp-num {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--border);
        }
        .sp-icon { font-size: 1.6rem; }
        .sp-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 10px;
        }
        .sp-body {
          font-size: 0.86rem;
          color: var(--text-muted);
          line-height: 1.65;
        }
        @media (max-width: 900px) {
          .strategy-pillars { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .strategy-pillars { grid-template-columns: 1fr; }
          .strategy-targets { flex-direction: column; }
          .st-target { border-right: none; border-bottom: 1px solid var(--border-light); }
          .st-target:last-child { border-bottom: none; }
        }
      `}</style>
      <Footer />
    </>
  )
}

export default OurStrategyPage
