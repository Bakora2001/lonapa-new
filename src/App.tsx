import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import WhatsAppFAB from './components/WhatsAppFAB'

// Pages
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/who-we-are/AboutUsPage'
import MissionValuesPage from './pages/who-we-are/MissionValuesPage'
import GovernancePage from './pages/who-we-are/GovernancePage'
import OurHistoryPage from './pages/who-we-are/OurHistoryPage'
import FinanceSupportPage from './pages/who-we-are/FinanceSupportPage'
import PolicyThematicPage from './pages/our-work/PolicyThematicPage'
import PeaceTalksPage from './pages/our-work/PeaceTalksPage'
import OurStrategyPage from './pages/our-approach/OurStrategyPage'
import OurPartnersPage from './pages/our-approach/OurPartnersPage'
import WorkWithUsPage from './pages/get-involved/WorkWithUsPage'

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const RevealInit: React.FC = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('visible')
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      )
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.remove('visible')
        observer.observe(el)
      })
    }, 80)
    return () => clearTimeout(timer)
  }, [pathname])
  return null
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RevealInit />
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/mission-values" element={<MissionValuesPage />} />
          <Route path="/governance" element={<GovernancePage />} />
          <Route path="/our-history" element={<OurHistoryPage />} />
          <Route path="/finance-support" element={<FinanceSupportPage />} />
          <Route path="/policy-thematic" element={<PolicyThematicPage />} />
          <Route path="/peace-talks" element={<PeaceTalksPage />} />
          <Route path="/our-strategy" element={<OurStrategyPage />} />
          <Route path="/our-partners" element={<OurPartnersPage />} />
          <Route path="/work-with-us" element={<WorkWithUsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <WhatsAppFAB />
    </BrowserRouter>
  )
}

export default App
