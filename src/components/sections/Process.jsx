import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../../i18n/useTranslation'
import MethodParticles from '../ui/MethodParticles'
import SectionLabel from '../ui/SectionLabel'

export default function Process() {
  const { PROCESS } = useTranslation()
  const [active, setActive] = useState(0)
  const listRef = useRef(null)

  useEffect(() => {
    const steps = [...(listRef.current?.querySelectorAll('li') || [])]
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible) setActive(Number(visible.target.dataset.step))
    }, { rootMargin: '-35% 0px -45% 0px', threshold: 0.15 })
    steps.forEach((step) => observer.observe(step))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="process-section section-pad">
      <div className="page-shell">
        <div className="section-intro process-intro">
          <div><SectionLabel num={PROCESS.label}>{PROCESS.sectionTitle}</SectionLabel><h2>{PROCESS.heading}</h2></div>
          <p>{PROCESS.subtext}</p>
        </div>
        <div className="process-layout">
          <ol ref={listRef} className="process-route">
            {PROCESS.steps.map((step, index) => (
              <li key={step.num} data-step={index} className={active === index ? 'is-active' : ''}>
                <span className="route-num">{step.num}</span>
                <div><h3>{step.title}</h3><p>{step.desc}</p></div>
                <strong><i aria-hidden="true" />{step.output}</strong>
              </li>
            ))}
          </ol>
          <div className="process-visual">
            <MethodParticles symbol={PROCESS.steps[active].symbol} />
            <div><span>{PROCESS.steps[active].num}</span><strong>{PROCESS.steps[active].title}</strong></div>
          </div>
        </div>
      </div>
    </section>
  )
}
