import React, { useState } from 'react'
import './ContactSection.css'

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1600)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        {/* Left info */}
        <div className="contact-info reveal">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Contact Us &<br />Get Involved</h2>
          <p className="section-subtitle">
            Whether you want to partner with us, volunteer, donate, or simply learn more — we would love to hear from you.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <div className="detail-label">Physical Location</div>
                <div className="detail-value">City Palace Hotel, opposite Mount Kenya University<br />Second Floor, North Rift, Kenya</div>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 14.93V17a1 1 0 10-2 0v-.07A8.001 8.001 0 014.07 9H5a1 1 0 100-2h-.93A8.001 8.001 0 0111 3.07V4a1 1 0 102 0v-.93A8.001 8.001 0 0119.93 9H19a1 1 0 100 2h.93A8.001 8.001 0 0113 16.93z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <div className="detail-label">Working Hours</div>
                <div className="detail-value">Monday – Friday: 8:00 AM – 5:00 PM<br />Saturday: 9:00 AM – 1:00 PM</div>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <div className="detail-label">Email Us</div>
                <div className="detail-value">info@lonapapeacefoundation.org</div>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <div className="detail-label">WhatsApp / Phone</div>
                <div className="detail-value">+254 797 199 378</div>
              </div>
            </div>
          </div>

          {/* Advocacy quick list */}
          <div className="contact-advocates">
            <div className="advocates-title">We Advocate For:</div>
            <ul className="advocates-list">
              {[
                'Peace & Harmony Between Communities',
                'Justice and Human Rights',
                'Against Drug & Alcohol Abuse',
                'Youth Empowerment',
                'Environment & Climate Conservation',
                'Rehabilitation of Former Bandits',
              ].map((item) => (
                <li key={item}>
                  <span className="adv-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-form-wrap reveal reveal-delay-2">
          {submitted ? (
            <div className="form-success">
              <div className="success-icon">
                <svg viewBox="0 0 24 24" fill="none" width="36" height="36">
                  <circle cx="12" cy="12" r="10" fill="var(--primary)"/>
                  <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              <button className="btn-primary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}>
                Send Another
              </button>
            </div>
          ) : (
            <div className="contact-form">
              <div className="form-header">
                <h3 className="form-title">Send Us a Message</h3>
                <p className="form-sub">Fill in the form below and we'll respond promptly.</p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <select name="subject" className="form-input" value={form.subject} onChange={handleChange}>
                  <option value="">Select a subject</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="donation">Donation</option>
                  <option value="programs">Programs & Events</option>
                  <option value="media">Media & Press</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Tell us how we can help or collaborate..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                />
              </div>

              <button
                className={`form-submit ${loading ? 'loading' : ''}`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <span className="form-spinner" />
                ) : (
                  <>
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                      <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
