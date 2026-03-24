import React from 'react'
import { Link } from 'react-router-dom'
import './PageHero.css'

interface Crumb { label: string; to?: string }

interface PageHeroProps {
  tag: string
  title: string
  subtitle?: string
  image: string
  breadcrumbs: Crumb[]
}

const PageHero: React.FC<PageHeroProps> = ({ tag, title, subtitle, image, breadcrumbs }) => {
  return (
    <section className="page-hero">
      <div className="page-hero-bg">
        <img src={image} alt="" className="page-hero-img" />
        <div className="page-hero-overlay" />
      </div>
      <div className="page-hero-content">
        <div className="page-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="bc-link">Home</Link>
            {breadcrumbs.map((b, i) => (
              <React.Fragment key={i}>
                <span className="bc-sep">›</span>
                {b.to
                  ? <Link to={b.to} className="bc-link">{b.label}</Link>
                  : <span className="bc-current">{b.label}</span>
                }
              </React.Fragment>
            ))}
          </nav>
          <span className="page-hero-tag">{tag}</span>
          <h1 className="page-hero-title">{title}</h1>
          {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}

export default PageHero
