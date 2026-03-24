import React, { useEffect, useRef } from 'react'
import HeroSection from '../components/sections/HeroSection'
import StatsSection from '../components/sections/StatsSection'
import AboutSection from '../components/sections/AboutSection'
import ProgramsSection from '../components/sections/ProgramsSection'
import ImpactSection from '../components/sections/ImpactSection'
import PartnersSection from '../components/sections/PartnersSection'
import ContactSection from '../components/sections/ContactSection'
import Footer from '../components/sections/Footer'

const HomePage: React.FC = () => {
  const revealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={revealRef}>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default HomePage
