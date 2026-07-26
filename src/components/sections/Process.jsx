import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from '../../i18n/useTranslation'
import MethodParticles from '../ui/MethodParticles'
import SectionLabel from '../ui/SectionLabel'

export default function Process() {
  const { PROCESS } = useTranslation()
  const [active, setActive] = useState(-1)
  const [sectionVisible, setSectionVisible] = useState(false)
  const listRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const steps = [...(listRef.current?.querySelectorAll('li') || [])]
    const visibleSteps = new Set()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.step)
        if (entry.isIntersecting) visibleSteps.add(index)
        else visibleSteps.delete(index)
      })
      setActive(visibleSteps.size ? Math.min(...visibleSteps) : -1)
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 })
    steps.forEach((step) => observer.observe(step))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined
    const observer = new IntersectionObserver(([entry]) => setSectionVisible(entry.isIntersecting), { threshold: 0 })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" ref={sectionRef} className="process-section section-pad">
      <div className="page-shell process-content">
        <div className="section-intro process-intro" data-reveal>
          <div><SectionLabel num={PROCESS.label}>{PROCESS.sectionTitle}</SectionLabel><h2>{PROCESS.heading}</h2></div>
        </div>
        <div className="process-layout">
          <ol ref={listRef} className="process-route" data-reveal>
            {PROCESS.steps.map((step, index) => (
              <li key={step.num} data-step={index} className={active === index ? 'is-active' : ''}>
                <span className="route-num">{step.num}</span>
                <div className="process-step-copy"><h3>{step.title}</h3><p>{step.desc}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      {typeof document !== 'undefined' &&
        createPortal(
          <div className={`process-particles${sectionVisible ? ' is-visible' : ''}`}>
            <MethodParticles symbol={active < 0 ? 'amazon' : PROCESS.steps[active].symbol} visible={sectionVisible} />
          </div>,
          document.body,
        )}
    </section>
  )
}
