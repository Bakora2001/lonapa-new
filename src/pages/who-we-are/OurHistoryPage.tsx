import React from 'react'
import PageHero from '../../components/PageHero'
import Footer from '../../components/sections/Footer'
import './InnerPage.css'

const milestones = [
  {
    year: 'Foundation',
    title: 'The Beginning',
    body: 'Wilson Lonapa Peace Foundation was established in the North Rift region of Kenya, born from a firsthand understanding of the devastating effects of inter-community conflict on families, livelihoods, and futures.',
  },
  {
    year: 'Early Days',
    title: 'First Community Dialogues',
    body: 'The foundation held its first formal community dialogues, bringing together representatives from neighbouring communities that had experienced years of tension. These sessions laid the groundwork for a culture of open communication.',
  },
  {
    year: 'Growth',
    title: 'Youth Ambassador Programme Launched',
    body: 'Recognising youth as the most powerful engine for change, the foundation launched its flagship Youth Peace Ambassador programme — training young men and women in conflict resolution, leadership, and civic responsibility.',
  },
  {
    year: 'Expansion',
    title: 'Cross-Border Reach into Uganda',
    body: 'The foundation extended its programming into selected communities in Uganda, broadening its impact and creating a cross-border network of peace practitioners and community leaders.',
  },
  {
    year: 'Milestone',
    title: '200+ Ambassadors Trained',
    body: 'A landmark achievement: over 200 youth have now been trained as certified Peace Ambassadors — each one returning to their community as a multiplier of peace, dialogue, and positive change.',
  },
  {
    year: 'Present',
    title: 'Nine Active Programmes',
    body: 'Today the foundation runs nine interconnected programmes spanning peace promotion, youth empowerment, cultural preservation, sports for peace, and vulnerable community support — with ambitions to grow further.',
  },
]

const OurHistoryPage: React.FC = () => {
  return (
    <>
      <PageHero
        tag="Who We Are"
        title="Our History"
        subtitle="From a vision born in the heart of the North Rift to a growing force for peace across Kenya and Uganda."
        image="https://images.unsplash.com/photo-1548516173-3cabfa4607e9?w=1600&q=80"
        breadcrumbs={[{ label: 'Who We Are' }, { label: 'Our History' }]}
      />

      <div className="inner-page">

        <section className="ip-section">
          <div className="ip-container">
            <div className="ip-two-col">
              <div className="reveal">
                <span className="section-label">Where It All Started</span>
                <h2 className="section-title">A Story of Hope in the North Rift</h2>
                <p className="ip-body">
                  The North Rift region of Kenya has long been shaped by both extraordinary cultural richness and persistent challenges — inter-community conflict, youth unemployment, and the gradual erosion of traditional values that once held communities together.
                </p>
                <p className="ip-body">
                  It was in this landscape that Wilson Lonapa, having witnessed the pain of conflict firsthand, chose not to walk away but to build. The foundation was born from a simple but powerful conviction: <em>peace is possible when communities are given the tools, the space, and the trust to build it themselves.</em>
                </p>
                <p className="ip-body">
                  What started as small dialogue circles has grown into a multi-programme organisation touching hundreds of lives across two countries — and the journey is far from over.
                </p>
              </div>
              <div className="ip-image-stack reveal reveal-delay-2">
                <div className="img-stack-main">
                  <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=700&q=80" alt="Our history" />
                </div>
                <div className="img-stack-accent">
                  <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80" alt="Community" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="ip-section ip-section--tinted">
          <div className="ip-container">
            <div className="ip-section-header reveal">
              <span className="section-label">Our Journey</span>
              <h2 className="section-title">Key Milestones</h2>
              <p className="section-subtitle">A chronicle of growth, resilience, and ever-expanding impact.</p>
            </div>
            <div className="timeline-two-col">
              <div className="ip-timeline">
                {milestones.map((m, i) => (
                  <div key={i} className={`timeline-item reveal reveal-delay-${(i % 3) + 1}`}>
                    <div className="timeline-dot" />
                    <div className="timeline-year">{m.year}</div>
                    <div className="timeline-title">{m.title}</div>
                    <div className="timeline-body">{m.body}</div>
                  </div>
                ))}
              </div>
              <div className="history-side reveal reveal-delay-2">
                <div className="ip-highlight-box" style={{ marginBottom: '24px' }}>
                  <h3>Our Operational Reach</h3>
                  <p>North Rift Region, Kenya — and selected communities in Uganda, with an ambition to extend to all conflict-affected communities in East Africa.</p>
                </div>
                <div className="history-img-tall">
                  <img
                    src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80"
                    alt="Foundation work"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ip-cta-bar">
          <div className="ip-container">
            <div className="ip-cta-inner reveal">
              <div>
                <h3 className="ip-cta-title">Be Part of Our Next Chapter</h3>
                <p className="ip-cta-sub">The best of our story is still being written — join us.</p>
              </div>
              <div className="ip-cta-actions">
                <a href="/work-with-us" className="btn-primary">Get Involved</a>
                <a href="/about-us" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>About Us</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .timeline-two-col {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 64px;
          align-items: start;
        }
        .history-side { display: flex; flex-direction: column; gap: 20px; }
        .history-img-tall {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          aspect-ratio: 3/4;
        }
        .history-img-tall img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (max-width: 900px) {
          .timeline-two-col { grid-template-columns: 1fr; }
          .history-side { display: none; }
        }
      `}</style>
      <Footer />
    </>
  )
}

export default OurHistoryPage
