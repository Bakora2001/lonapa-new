import React, { useEffect, useState } from 'react'
import './HeroSection.css'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80',
    tag: 'North Rift, Kenya',
    title: 'Building Peace,\nOne Community\nat a Time',
    subtitle: 'Empowering youth and uniting communities across the North Rift region of Kenya and Uganda through dialogue, mentorship and cultural heritage.',
  },
  {
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&q=80',
    tag: 'Youth Empowerment',
    title: 'Nurturing the\nLeaders of\nTomorrow',
    subtitle: 'Over 200 trained Peace Ambassadors equipped with conflict resolution and leadership skills ready to transform their communities.',
  },
  {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80',
    tag: 'Cultural Heritage',
    title: 'Preserving\nCulture,\nStrengthening Identity',
    subtitle: 'Celebrating traditional ceremonies and dances that bind communities together and reinforce shared values across generations.',
  },
]

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
        setAnimating(false)
      }, 600)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const goTo = (i: number) => {
    if (i === current) return
    setAnimating(true)
    setTimeout(() => { setCurrent(i); setAnimating(false) }, 400)
  }

  const slide = slides[current]

  return (
    <section className="hero-section" id="home">
      {/* Background */}
      <div className={`hero-bg ${animating ? 'fading' : ''}`}>
        <img src={slide.image} alt="" className="hero-img" />
        <div className="hero-overlay" />
        <div className="hero-overlay-pattern" />
      </div>

      {/* Content */}
      <div className={`hero-content ${animating ? 'fading' : ''}`}>
        <div className="hero-inner">
          <div className="hero-tag">
            <span className="tag-dot" />
            {slide.tag}
          </div>
          <h1 className="hero-title">
            {slide.title.split('\n').map((line, i) => (
              <span key={i} className="hero-title-line" style={{ animationDelay: `${0.1 + i * 0.12}s` }}>
                {line}
              </span>
            ))}
          </h1>
          <p className="hero-subtitle" style={{ animationDelay: '0.45s' }}>
            {slide.subtitle}
          </p>
          <div className="hero-actions" style={{ animationDelay: '0.6s' }}>
            <a href="#about" className="btn-primary hero-btn-primary">
              Discover Our Work
              <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="#contact" className="hero-btn-secondary">
              Get Involved
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>

      {/* Stats bar */}
      <div className="hero-bar">
        <div className="hero-bar-inner">
          <div className="hero-bar-item">
            <strong>200+</strong>
            <span>Peace Ambassadors</span>
          </div>
          <div className="hero-bar-divider" />
          <div className="hero-bar-item">
            <strong>North Rift</strong>
            <span>Kenya & Uganda</span>
          </div>
          <div className="hero-bar-divider" />
          <div className="hero-bar-item">
            <strong>2026</strong>
            <span>Active Programs</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
