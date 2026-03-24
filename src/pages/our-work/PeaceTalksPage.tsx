import React from 'react'
import PageHero from '../../components/PageHero'
import Footer from '../../components/sections/Footer'
import '../who-we-are/InnerPage.css'

const talkFormats = [
  { icon: '🪑', title: 'Community Dialogue Circles', body: 'Small-group facilitated sessions where community members from opposing sides discuss grievances, share experiences, and identify shared values and interests.' },
  { icon: '👴', title: 'Elder-Led Mediation', body: 'Traditional mediation processes led by respected councils of elders, drawing on customary law and cultural norms to resolve disputes with community legitimacy.' },
  { icon: '🤝', title: 'Inter-Community Summits', body: 'Larger structured gatherings bringing together delegations from multiple communities to negotiate agreements, share resources, and build lasting cooperation frameworks.' },
  { icon: '📚', title: 'School Peace Dialogues', body: 'Youth-focused dialogue sessions within schools and colleges, building a generation of young people skilled in conversation, listening, and constructive disagreement.' },
  { icon: '🌐', title: 'Cross-Border Engagements', body: 'Peace dialogues involving communities straddling the Kenya-Uganda border, addressing cross-border cattle rustling, resource disputes, and shared security concerns.' },
  { icon: '🔄', title: 'Follow-Up Peace Reviews', body: 'Structured follow-up sessions six to twelve months after initial dialogues to assess agreement adherence, resolve new tensions, and celebrate progress.' },
]

const PeaceTalksPage: React.FC = () => {
  return (
    <>
      <PageHero
        tag="Our Work"
        title="Peace Talks"
        subtitle="Facilitated dialogue is at the heart of everything we do. Conversation is not the soft option — it is the most powerful tool for lasting peace."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80"
        breadcrumbs={[{ label: 'Our Work' }, { label: 'Peace Talks' }]}
      />

      <div className="inner-page">

        <section className="ip-section">
          <div className="ip-container">
            <div className="ip-two-col">
              <div className="reveal">
                <span className="section-label">Dialogue First</span>
                <h2 className="section-title">Why Peace Talks Work</h2>
                <p className="ip-body">
                  Across the North Rift, many conflicts have deep historical roots — tied to land, cattle, identity, and political marginalisation. Military or legal approaches alone cannot resolve these tensions. What communities need is <strong>safe space to talk</strong>, skilled facilitators to guide them, and agreements anchored in mutual respect.
                </p>
                <p className="ip-body">
                  Wilson Lonapa Peace Foundation creates and holds those spaces. Our facilitators are trained in both modern conflict transformation techniques and traditional dialogue practices — enabling them to work credibly across diverse communities and age groups.
                </p>
                <p className="ip-body">
                  We have successfully mediated conflicts between neighbouring communities, brokered agreements on shared resources, and supported post-conflict reconciliation processes across multiple districts.
                </p>
              </div>
              <div className="ip-image-stack reveal reveal-delay-2">
                <div className="img-stack-main">
                  <img src="https://images.unsplash.com/photo-1543269664-647163ec2843?w=700&q=80" alt="Peace dialogue" />
                </div>
                <div className="img-stack-accent">
                  <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80" alt="Community meeting" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="ip-section ip-section--tinted">
          <div className="ip-container">
            <div className="ip-section-header reveal">
              <span className="section-label">How We Do It</span>
              <h2 className="section-title">Dialogue Formats</h2>
              <p className="section-subtitle">We tailor every peace talk to the specific needs, scale, and context of the communities involved.</p>
            </div>
            <div className="ip-thematic-grid">
              {talkFormats.map((f, i) => (
                <div key={i} className={`ip-thematic-card anim-card reveal reveal-delay-${(i % 2) + 1}`}>
                  <div className="iptc-icon">{f.icon}</div>
                  <div>
                    <div className="iptc-title">{f.title}</div>
                    <div className="iptc-body">{f.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="ip-section">
          <div className="ip-container">
            <div className="ip-section-header reveal">
              <span className="section-label">Our Principles</span>
              <h2 className="section-title">How We Facilitate</h2>
            </div>
            <div className="pt-principles">
              {[
                { num: '01', title: 'Do No Harm', body: 'Every dialogue process is designed with the safety and dignity of all participants as the non-negotiable first priority.' },
                { num: '02', title: 'Community Ownership', body: 'We facilitate — communities lead. Agreements are owned by the people who make them, not imposed by outsiders.' },
                { num: '03', title: 'Cultural Sensitivity', body: 'Our facilitators are drawn from or deeply connected to the communities they serve, ensuring cultural credibility.' },
                { num: '04', title: 'Long-Term Follow Up', body: 'We do not walk away after one session. Peace talks are followed by monitoring, reviews, and relationship maintenance.' },
              ].map((p, i) => (
                <div key={i} className={`pt-principle reveal reveal-delay-${i + 1}`}>
                  <div className="pt-num">{p.num}</div>
                  <div>
                    <div className="pt-title">{p.title}</div>
                    <div className="pt-body">{p.body}</div>
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
                <h3 className="ip-cta-title">Request a Dialogue Facilitation</h3>
                <p className="ip-cta-sub">If your community needs a neutral, skilled facilitation partner — reach out.</p>
              </div>
              <div className="ip-cta-actions">
                <a href="/#contact" className="btn-primary">Get In Touch</a>
                <a href="/our-strategy" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>Our Approach</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .pt-principles {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }
        .pt-principle {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 28px 26px;
          background: white;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          transition: all 0.25s ease;
        }
        .pt-principle:hover {
          border-color: var(--primary-light);
          box-shadow: var(--shadow-md);
          transform: translateY(-4px);
        }
        .pt-num {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent);
          line-height: 1;
          flex-shrink: 0;
        }
        .pt-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 8px;
        }
        .pt-body {
          font-size: 0.86rem;
          color: var(--text-muted);
          line-height: 1.65;
        }
        @media (max-width: 700px) {
          .pt-principles { grid-template-columns: 1fr; }
        }
      `}</style>
      <Footer />
    </>
  )
}

export default PeaceTalksPage
