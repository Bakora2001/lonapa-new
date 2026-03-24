import React from 'react'
import PageHero from '../../components/PageHero'
import Footer from '../../components/sections/Footer'
import '../who-we-are/InnerPage.css'

const thematicAreas = [
  { icon: '⚖', title: 'Justice & Human Rights', body: 'Advocating for equal access to justice and the protection of fundamental rights, especially for marginalised and conflict-affected populations.' },
  { icon: '🌿', title: 'Environmental Conservation', body: 'Integrating climate awareness and environmental stewardship into community programming, recognising its link to resource-based conflict in the region.' },
  { icon: '🚫', title: 'Anti-Drug & Alcohol Advocacy', body: 'Engaging youth and families with awareness, counselling, and alternative livelihood programming to address substance abuse as a driver of conflict.' },
  { icon: '🔫', title: 'Reformed Bandits Programme', body: 'Providing former bandits with alternative livelihoods, counselling, and social reintegration pathways — breaking cycles of violence through second chances.' },
  { icon: '👥', title: 'Social Cohesion Research', body: 'Documenting lessons from community dialogues and mediation processes to build an evidence base for peacebuilding practice in the North Rift.' },
  { icon: '🎓', title: 'Peace Education', body: 'Embedding conflict resolution and civic values into school curricula and youth training programmes, building a culture of peace from early ages.' },
]

const PolicyThematicPage: React.FC = () => {
  return (
    <>
      <PageHero
        tag="Our Work"
        title="Policy & Thematic Work"
        subtitle="Beyond direct programming, we engage at the thematic and policy level — building evidence, shaping discourse, and advocating for systemic change."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80"
        breadcrumbs={[{ label: 'Our Work' }, { label: 'Policy / Thematic Work' }]}
      />

      <div className="inner-page">

        <section className="ip-section">
          <div className="ip-container">
            <div className="ip-two-col">
              <div className="reveal">
                <span className="section-label">Our Advocacy</span>
                <h2 className="section-title">Shaping the Conditions for Peace</h2>
                <p className="ip-body">
                  Lasting peace is not only built community by community — it is also shaped by the policies, systems, and social norms that surround communities. Wilson Lonapa Peace Foundation engages at both levels: working directly with people while simultaneously advocating for the structural conditions that enable peace to take root.
                </p>
                <p className="ip-body">
                  Our thematic work covers justice and rights, environmental sustainability, anti-substance-abuse advocacy, and the social reintegration of former conflict actors — areas we have identified as deeply interconnected with community stability in the North Rift.
                </p>
                <div className="ip-highlight-box" style={{ marginTop: '28px' }}>
                  <h3>Our Policy Positions</h3>
                  <p>
                    We engage government agencies, civil society networks, and traditional leadership on policies related to land rights, youth employment, community policing, and disarmament — always guided by community voices.
                  </p>
                </div>
              </div>
              <div className="ip-image-stack reveal reveal-delay-2">
                <div className="img-stack-main">
                  <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=80" alt="Policy work" />
                </div>
                <div className="img-stack-accent">
                  <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" alt="Advocacy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ip-section ip-section--tinted">
          <div className="ip-container">
            <div className="ip-section-header reveal">
              <span className="section-label">Focus Areas</span>
              <h2 className="section-title">Thematic Priorities</h2>
              <p className="section-subtitle">Six areas where we engage beyond direct community work to shape lasting systemic change.</p>
            </div>
            <div className="ip-thematic-grid">
              {thematicAreas.map((t, i) => (
                <div key={i} className={`ip-thematic-card anim-card reveal reveal-delay-${(i % 2) + 1}`}>
                  <div className="iptc-icon">{t.icon}</div>
                  <div>
                    <div className="iptc-title">{t.title}</div>
                    <div className="iptc-body">{t.body}</div>
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
                <h3 className="ip-cta-title">Partner on Thematic Work</h3>
                <p className="ip-cta-sub">We welcome research partners, policy advocates, and institutional collaborators.</p>
              </div>
              <div className="ip-cta-actions">
                <a href="/peace-talks" className="btn-primary">Peace Talks</a>
                <a href="/#contact" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>Contact Us</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default PolicyThematicPage
