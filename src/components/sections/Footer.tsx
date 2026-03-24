import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* Top wave decoration */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--primary-dark)"/>
        </svg>
      </div>

      <div className="footer-body">
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-mark">
                <svg viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="var(--accent)" strokeWidth="1.5"/>
                  <path d="M12 26 L20 10 L28 26" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M14.5 20 H25.5" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="footer-logo-main">Lonapa</div>
                <div className="footer-logo-sub">Peace Foundation</div>
              </div>
            </div>
            <p className="footer-tagline">
              Advancing Peace, Empowering Youth, and Preserving Cultural Heritage across the North Rift region of Kenya and Uganda.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" className="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://wa.me/254797199378" aria-label="WhatsApp" className="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zm-13.54 9V8.58L15.27 12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-col">
            <div className="footer-col-title">Who We Are</div>
            <ul className="footer-links">
              {['About Us', 'Mission & Values', 'Governance', 'Our History', 'Finance & Support'].map((l) => (
                <li key={l}><a href="#about">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Our Work</div>
            <ul className="footer-links">
              {['Promoting Peace', 'Youth Empowerment', 'Football Tournaments', 'Peace Race', 'Caring Neighbours', 'Cultural Events'].map((l) => (
                <li key={l}><a href="#programs">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Get Involved</div>
            <ul className="footer-links">
              {['Work With Us', 'Volunteer', 'Donate', 'Partner With Us', 'Contact Us'].map((l) => (
                <li key={l}><a href="#contact">{l}</a></li>
              ))}
            </ul>
            <div className="footer-address">
              <div className="footer-address-label">Our Office</div>
              <div className="footer-address-val">City Palace Hotel, opp. Mount Kenya University, 2nd Floor</div>
              <div className="footer-address-val">Mon–Fri: 8:00am – 5:00pm</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <div className="footer-copy">
              &copy; {currentYear} Wilson Lonapa Peace Foundation. All rights reserved.
            </div>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span>·</span>
              <a href="#">Terms of Use</a>
              <span>·</span>
              <a href="#">Sitemap</a>
            </div>
            <div className="footer-presented">
              Presented by <strong>Joylyne Lopokoit</strong>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
