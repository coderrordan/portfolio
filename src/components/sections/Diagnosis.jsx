import { useTranslation } from '../../i18n/useTranslation'
import SectionLabel from '../ui/SectionLabel'

export default function Diagnosis() {
  const { DIAGNOSIS } = useTranslation()

  return (
    <section id="diagnosis" className="diagnosis-section section-pad">
      <div className="page-shell">
        <div className="section-intro diagnosis-intro" data-reveal>
          <SectionLabel num={DIAGNOSIS.label}>{DIAGNOSIS.sectionTitle}</SectionLabel>
          <h2>{DIAGNOSIS.heading}</h2>
        </div>
        <div className="diagnosis-map" data-reveal="group">
          {DIAGNOSIS.items.map((item, index) => (
            <article key={item.title} className="diagnosis-item">
              <div className="diagnosis-item__heading">
                <h3>{item.title}</h3>
                <span aria-hidden="true">0{index + 1}</span>
              </div>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
        <p className="diagnosis-close" data-reveal>
          <span aria-hidden="true">→</span>
          <span>{DIAGNOSIS.close.before}<mark className="diagnosis-close__accent">{DIAGNOSIS.close.accent}</mark>{DIAGNOSIS.close.after}</span>
        </p>
      </div>
    </section>
  )
}
