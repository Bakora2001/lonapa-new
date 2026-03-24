import React, { useState } from 'react'
import PageHero from '../../components/PageHero'
import Footer from '../../components/sections/Footer'
import '../who-we-are/InnerPage.css'

const opportunities = [
  { icon: '🕊', title: 'Peace Facilitator', type: 'Volunteer', desc: 'Support our community dialogue and mediation sessions as a trained co-facilitator. Training provided for suitable candidates.' },
  { icon: '📚', title: 'Youth Mentor', type: 'Volunteer', desc: 'Guide young Peace Ambassadors through leadership development, goal setting, and personal growth in schools and community settings.' },
  { icon: '🎤', title: 'Community Mobilisers', type: 'Volunteer / Paid', desc: 'Help organise and mobilise communities for peace events, football tournaments, cultural festivals, and outreach activities.' },
  { icon: '💻', title: 'Digital & Communications', type: 'Volunteer', desc: 'Support our social media, website, photography, videography, and storytelling efforts to amplify our impact.' },
  { icon: '📊', title: 'Monitoring & Evaluation', type: 'Consultancy', desc: 'Help us assess the impact of our programmes, collect data, and document learning for organisational improvement.' },
  { icon: '🤝', title: 'Partnership Development', type: 'Consultancy', desc: 'Help us identify, cultivate, and formalise partnerships with NGOs, government bodies, and institutional donors.' },
]

const whyJoin = [
  'Work at the heart of real community peacebuilding in East Africa',
  'Gain hands-on experience in conflict transformation and youth empowerment',
  'Be part of a mission-driven team that values your contribution',
  'Access to training, mentorship, and professional development',
  'Build a network across Kenya, Uganda, and the broader NGO sector',
  'Flexible engagement — from short-term projects to long-term roles',
]

const WorkWithUsPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', role: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

  return (
    <>
      <PageHero
        tag="Get Involved"
        title="Work With Us"
        subtitle="Join a team building peace in one of East Africa's most dynamic regions. Whether you volunteer, consult, or intern — your skills matter here."
        image="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1600&q=80"
        breadcrumbs={[{ label: 'Get Involved' }, { label: 'Work With Us' }]}
      />

      <div className="inner-page">

        {/* Opportunities */}
        <section className="ip-section">
          <div className="ip-container">
            <div className="ip-section-header reveal">
              <span className="section-label">Open Roles</span>
              <h2 className="section-title">Current Opportunities</h2>
              <p className="section-subtitle">We welcome volunteers, consultants, and partners at all experience levels. If you don't see a perfect fit, reach out anyway.</p>
            </div>
            <div className="ip-thematic-grid">
              {opportunities.map((o, i) => (
                <div key={i} className={`ip-thematic-card anim-card reveal reveal-delay-${(i % 2) + 1}`}>
                  <div className="iptc-icon">{o.icon}</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <div className="iptc-title" style={{ marginBottom: 0 }}>{o.title}</div>
                      <span className="opp-type">{o.type}</span>
                    </div>
                    <div className="iptc-body">{o.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why join */}
        <section className="ip-section ip-section--tinted">
          <div className="ip-container">
            <div className="ip-two-col">
              <div className="reveal">
                <span className="section-label">Why Us</span>
                <h2 className="section-title">Why Work With<br />Lonapa Foundation?</h2>
                <p className="ip-body">
                  We are a small, committed team working on one of the world's most important challenges — building peace in communities that need it most. Working with us means your contribution has immediate, visible impact.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
                  {whyJoin.map((w, i) => (
                    <div key={i} className="wj-item">
                      <span className="wj-check">✓</span>
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ip-image-stack reveal reveal-delay-2">
                <div className="img-stack-main">
                  <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80" alt="Team at work" />
                </div>
                <div className="img-stack-accent">
                  <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80" alt="Community" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application form */}
        <section className="ip-section">
          <div className="ip-container">
            <div className="ip-section-header reveal">
              <span className="section-label">Apply Now</span>
              <h2 className="section-title">Express Your Interest</h2>
            </div>
            <div className="ww-form-wrap reveal">
              {submitted ? (
                <div className="form-success" style={{ padding: '60px 40px' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '10px' }}>
                    Thank You!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', maxWidth: '360px', textAlign: 'center', lineHeight: 1.65 }}>
                    We've received your application. Our team will review it and be in touch within 5–7 working days.
                  </p>
                  <button className="btn-primary" style={{ marginTop: '24px' }} onClick={() => { setSubmitted(false); setForm({ name: '', email: '', role: '', message: '' }) }}>
                    Submit Another
                  </button>
                </div>
              ) : (
                <div className="ww-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input type="text" name="name" className="form-input" placeholder="Your name" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input type="email" name="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Area of Interest</label>
                    <select name="role" className="form-input" value={form.role} onChange={handleChange}>
                      <option value="">Select a role or area</option>
                      <option>Peace Facilitator (Volunteer)</option>
                      <option>Youth Mentor (Volunteer)</option>
                      <option>Community Mobiliser</option>
                      <option>Digital & Communications</option>
                      <option>Monitoring & Evaluation</option>
                      <option>Partnership Development</option>
                      <option>Other / General Enquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tell Us About Yourself</label>
                    <textarea name="message" className="form-input form-textarea" placeholder="Your background, relevant experience, and why you want to work with us..." value={form.message} onChange={handleChange} rows={5} />
                  </div>
                  <button className={`form-submit ${loading ? 'loading' : ''}`} onClick={handleSubmit} disabled={loading}>
                    {loading ? <span className="form-spinner" /> : <>Submit Application <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></>}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="ip-cta-bar">
          <div className="ip-container">
            <div className="ip-cta-inner reveal">
              <div>
                <h3 className="ip-cta-title">Have Questions First?</h3>
                <p className="ip-cta-sub">We're happy to chat before you apply. Drop us a message.</p>
              </div>
              <div className="ip-cta-actions">
                <a href="/#contact" className="btn-primary">Contact Us</a>
                <a href="/our-partners" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>Partner With Us</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .opp-type {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: rgba(232, 200, 50, 0.2);
          color: var(--primary-dark);
          padding: 2px 8px;
          border-radius: 2px;
          white-space: nowrap;
        }
        .wj-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.9rem;
          color: var(--text-body);
          line-height: 1.5;
        }
        .wj-check {
          width: 20px;
          height: 20px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .ww-form-wrap {
          max-width: 760px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }
        .ww-form {
          padding: 44px 44px;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .form-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        @media (max-width: 600px) {
          .ww-form { padding: 28px 22px; }
        }
      `}</style>
      <Footer />
    </>
  )
}

export default WorkWithUsPage
