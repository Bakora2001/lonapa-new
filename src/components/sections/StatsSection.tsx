import React, { useEffect, useRef, useState } from 'react'
import './StatsSection.css'

const stats = [
  { value: 200, suffix: '+', label: 'Youth Peace Ambassadors Trained', desc: 'Equipped with conflict resolution & leadership' },
  { value: 50, suffix: '+', label: 'Communities Impacted', desc: 'Across North Rift Kenya and Uganda' },
  { value: 15, suffix: '+', label: 'Cultural Events Held', desc: 'Preserving heritage and identity' },
  { value: 8, suffix: '', label: 'Key Programs Running', desc: 'From sports to mentorship' },
]

const useCountUp = (target: number, active: boolean) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, step)
    return () => clearInterval(timer)
  }, [active, target])
  return count
}

const StatCard: React.FC<typeof stats[0] & { delay: number }> = ({ value, suffix, label, desc, delay }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const count = useCountUp(value, active)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="stat-card anim-card reveal" style={{ transitionDelay: `${delay}s` }} ref={ref}>
      <div className="stat-number">
        <span className="stat-count">{count}</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-desc">{desc}</div>
      <div className="stat-bar" />
    </div>
  )
}

const StatsSection: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}

export default StatsSection
