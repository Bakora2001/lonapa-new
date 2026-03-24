import React from 'react'
import PageHero from '../../components/PageHero'
import Footer from '../../components/sections/Footer'
import './InnerPage.css'
import ceoImage from '../../assets/ceo.jpeg'
import ceoImage5 from '../../assets/ceo5.jpeg'
import ceoImage4 from '../../assets/ceo4.jpeg'
import ceoImage6 from '../../assets/ceo6.jpeg'

const AboutUsPage: React.FC = () => {
  return (
    <>
      <PageHero
        tag="Who We Are"
        title="About Wilson Lonapa Peace Foundation"
        subtitle="A non-governmental, non-profit entity committed to fostering peace, empowering youth, and promoting cultural cohesion across the North Rift."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80"
        breadcrumbs={[{ label: 'Who We Are' }, { label: 'About Us' }]}
      />

      <div className="inner-page">

        {/* Intro */}
        <section className="ip-section">
          <div className="ip-container">
            <div className="ip-two-col">
              <div className="ip-text reveal">
                <span className="section-label">Our Identity</span>
                <h2 className="section-title">Who We Are</h2>
                <p className="ip-body">
                  Wilson Lonapa Peace Foundation is a Non-Governmental and Non-Profit entity committed to fostering peace, nurturing youth potential, and promoting cultural cohesion across communities.
                </p>
                <p className="ip-body">
                  With an extensive operational reach across the <strong>North Rift region of Kenya</strong> and selected communities in <strong>Uganda</strong>, we work to cultivate resilient, harmonious communities with empowered youth and active civic participation.
                </p>
                <p className="ip-body">
                  Our foundation believes that sustainable peace is only possible when communities are strong from within — when youth are empowered, traditional wisdom is honoured, and cultural identity is preserved.
                </p>
              </div>
              <div className="ip-image-stack reveal reveal-delay-2">
                <div className="img-stack-main">
                  <img src={ceoImage5} alt="CEO Wilson Lonapa" />
                </div>
                <div className="img-stack-accent">
                  <img src={ceoImage4} alt="CEO1 Wilson Lonapa" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="ip-section ip-section--tinted">
          <div className="ip-container">
            <div className="ip-section-header reveal">
              <span className="section-label">Leadership</span>
              <h2 className="section-title">Meet the Founder</h2>
              <p className="section-subtitle">
                The vision behind Wilson Lonapa Peace Foundation — a dedicated leader committed to building lasting peace in the North Rift region.
              </p>
            </div>

            <div className="founder-layout">
              {/* Founder Photos */}
              <div className="founder-photos reveal">
                <div className="founder-photo-primary">
                  {/* REPLACE: swap src with your own photo URL or local path */}
                  <img src={ceoImage} alt="CEO Wilson Lonapa" />
                  <div className="founder-photo-badge">Founder</div>
                </div>
                <div className="founder-photo-secondary">
                  {/* REPLACE: swap src with your own second photo URL or local path */}
                    <img src={ceoImage6} alt="CEO Wilson Lonapa" />
                  <div className="founder-photo-caption">In the Community</div>
                </div>
              </div>

              {/* Founder Bio */}
              <div className="founder-bio reveal reveal-delay-2">
                <div className="founder-name-block">
                  <h3 className="founder-name">Wilson Lonapa</h3>
                  <span className="founder-role">Founder & Executive Director</span>
                </div>

                <blockquote className="founder-quote">
                  "Peace is not the absence of conflict — it is the presence of justice, understanding, and a shared commitment to our communities."
                </blockquote>

                <p className="ip-body">
                  Wilson Lonapa is a dedicated peace-builder and community advocate with deep roots in the North Rift region of Kenya. Driven by a lifelong commitment to social cohesion and youth empowerment, he founded the Wilson Lonapa Peace Foundation to address the persistent challenges of inter-community conflict, youth disengagement, and cultural erosion.
                </p>
                <p className="ip-body">
                  His approach draws on both formal leadership training and the rich traditions of local governance — working hand in hand with councils of elders, community leaders, educational institutions, and young people to build bridges where there were once divides.
                </p>
                <p className="ip-body">
                  Under his leadership, the Foundation has trained over <strong>200 Youth Peace Ambassadors</strong>, organised numerous community events including football tournaments and peace races, and built a network of partners spanning Kenya and Uganda.
                </p>

                <div className="founder-stats">
                  <div className="founder-stat">
                    <span className="fstat-num">200+</span>
                    <span className="fstat-label">Ambassadors Trained</span>
                  </div>
                  <div className="founder-stat-divider" />
                  <div className="founder-stat">
                    <span className="fstat-num">2</span>
                    <span className="fstat-label">Countries: Kenya & Uganda</span>
                  </div>
                  <div className="founder-stat-divider" />
                  <div className="founder-stat">
                    <span className="fstat-num">9</span>
                    <span className="fstat-label">Active Programs</span>
                  </div>
                </div>

                <div className="founder-note">
                  <span className="note-icon">📌</span>
                  <em>To replace these photos with your own, update the <code>src</code> attribute in <code>AboutUsPage.tsx</code> — lines marked with <code>REPLACE</code>.</em>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="ip-section">
          <div className="ip-container">
            <div className="ip-section-header reveal">
              <span className="section-label">Our Foundation</span>
              <h2 className="section-title">Core Values</h2>
            </div>
            <div className="ip-values-grid">
              {[
                { icon: '🕊', title: 'Peace First', body: 'Every initiative is rooted in a commitment to non-violence, dialogue, and mutual respect between individuals and communities.' },
                { icon: '🌱', title: 'Youth Power', body: 'Young people are not just beneficiaries — they are our primary agents of change, equipped and trusted to lead.' },
                { icon: '🥁', title: 'Cultural Roots', body: 'We honour and preserve the traditions, ceremonies, and customs that bind communities together across generations.' },
                { icon: '🤲', title: 'Inclusive Growth', body: 'No one is left behind. We reach the most vulnerable with tailored support, including reformed bandits and marginalised youth.' },
                { icon: '⚖', title: 'Justice & Rights', body: 'We advocate for equal access to justice and the protection of human rights for all community members.' },
                { icon: '🌍', title: 'Environmental Care', body: 'We integrate environmental conservation and climate awareness into our community programming.' },
              ].map((v, i) => (
                <div key={i} className={`ip-value-card anim-card reveal reveal-delay-${(i % 3) + 1}`}>
                  <span className="ipvc-icon">{v.icon}</span>
                  <h4 className="ipvc-title">{v.title}</h4>
                  <p className="ipvc-body">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ip-cta-bar">
          <div className="ip-container">
            <div className="ip-cta-inner reveal">
              <div>
                <h3 className="ip-cta-title">Ready to Build Peace Together?</h3>
                <p className="ip-cta-sub">Join our growing network of partners, volunteers, and supporters.</p>
              </div>
              <div className="ip-cta-actions">
                <a href="/work-with-us" className="btn-primary">Get Involved</a>
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

export default AboutUsPage
