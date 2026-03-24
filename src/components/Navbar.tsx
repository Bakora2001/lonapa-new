import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

interface NavItem {
  label: string
  href?: string
  dropdown?: { label: string; href: string; desc?: string }[]
}

const navItems: NavItem[] = [
  {
    label: 'Who We Are',
    dropdown: [
      { label: 'About Us', href: '/about-us', desc: 'Our story and identity' },
      { label: 'Mission & Values', href: '/mission-values', desc: 'What drives us forward' },
      { label: 'Governance', href: '/governance', desc: 'Leadership structure' },
      { label: 'Our History', href: '/our-history', desc: 'Journey since inception' },
      { label: 'Finance & Support', href: '/finance-support', desc: 'Transparency & funders' },
    ],
  },
  {
    label: 'Our Work',
    dropdown: [
      { label: 'Policy / Thematic Work', href: '/policy-thematic', desc: 'Advocacy and research' },
      { label: 'Peace Talks', href: '/peace-talks', desc: 'Dialogue facilitation' },
    ],
  },
  {
    label: 'Our Approach',
    dropdown: [
      { label: 'Our Strategies', href: '/our-strategy', desc: 'Framework for change' },
      { label: 'Our Partners', href: '/our-partners', desc: 'Collaborative network' },
    ],
  },
  {
    label: 'Get Involved',
    dropdown: [
      { label: 'Work With Us', href: '/work-with-us', desc: 'Careers & volunteering' },
    ],
  },
  {
    label: 'Contact Us',
    href: '#contact',
  },
]

const Navbar: React.FC = () => {
  const [scrolled, setScrolled]     = useState(false)
  const [openMenu, setOpenMenu]     = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const navigate   = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 130)
  }

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300)
    }
    setMobileOpen(false)
  }

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">

        {/* ── Logo ── */}
        <Link to="/" className="nav-logo">
          <div className="logo-mark">
            <svg viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="var(--primary)" strokeWidth="2"/>
              <path d="M12 26 L20 10 L28 26" stroke="var(--accent)" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M14.5 20 H25.5" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-main">Lonapa</span>
            <span className="logo-sub">Peace Foundation</span>
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="nav-links">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`nav-item ${item.dropdown ? 'has-dropdown' : ''} ${openMenu === item.label ? 'active' : ''}`}
              onMouseEnter={() => item.dropdown && openDropdown(item.label)}
              onMouseLeave={scheduleClose}
            >
              {/* Top-level link vs button */}
              {item.href && !item.dropdown ? (
                <a href={item.href} className="nav-link"
                   onClick={item.href === '#contact' ? handleContactClick : undefined}>
                  {item.label}
                </a>
              ) : (
                <button className="nav-link" type="button">
                  {item.label}
                  {item.dropdown && (
                    <svg className="chevron" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                </button>
              )}

              {/* Dropdown panel */}
              {item.dropdown && openMenu === item.label && (
                <div
                  className="dropdown-panel"
                  onMouseEnter={() => openDropdown(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  <div className="dropdown-inner">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="dropdown-item"
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="dropdown-item-label">{sub.label}</span>
                        {sub.desc && <span className="dropdown-item-desc">{sub.desc}</span>}
                      </Link>
                    ))}
                  </div>
                  <div className="dropdown-accent" />
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* ── Donate CTA ── */}
        <a href="#contact" className="nav-cta" onClick={handleContactClick}>
          Donate Now
        </a>

        {/* ── Hamburger ── */}
        <button
          className={`hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <div key={item.label} className="mobile-item">
              {/* Row: label + optional expand chevron */}
              <div className="mobile-item-row">
                {item.href && !item.dropdown ? (
                  <a href={item.href} className="mobile-link"
                     onClick={item.href === '#contact' ? handleContactClick : closeMobile}>
                    {item.label}
                  </a>
                ) : (
                  <button
                    className="mobile-link mobile-link--btn"
                    type="button"
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    {item.dropdown && (
                      <svg
                        className={`mobile-chevron ${mobileExpanded === item.label ? 'open' : ''}`}
                        viewBox="0 0 12 8" fill="none"
                      >
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor"
                              strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                  </button>
                )}
              </div>

              {/* Submenu */}
              {item.dropdown && mobileExpanded === item.label && (
                <div className="mobile-sub">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.href}
                      className="mobile-sub-link"
                      onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
