import { useTranslation } from '../../i18n/useTranslation'
import SectionLabel from '../ui/SectionLabel'
import SystemCard from '../ui/SystemCard'

export default function SkalebidOS() {
  const { SKALEBIDOS } = useTranslation()

  return (
    <section id="skalebidos" className="os-section section-pad">
      <div className="page-shell">
        <div className="os-workspace">
          <div className="os-label" data-reveal>
            <SectionLabel num={SKALEBIDOS.label}>{SKALEBIDOS.sectionTitle}</SectionLabel>
          </div>
          <div className="os-title" data-reveal>
            <h2>{SKALEBIDOS.heading}</h2>
          </div>
          <div data-reveal="visual"><SystemCard /></div>
          <div className="os-desc" data-reveal>
            <p className="os-description">{SKALEBIDOS.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
