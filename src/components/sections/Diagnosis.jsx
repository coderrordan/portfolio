import { useTranslation } from '../../i18n/useTranslation'
import SectionLabel from '../ui/SectionLabel'

export default function Diagnosis() {
  const { DIAGNOSIS } = useTranslation()

  return (
    <section id="diagnosis" className="diagnosis-section section-pad">
      <div className="page-shell">
        <div className="section-intro diagnosis-intro">
          <SectionLabel num={DIAGNOSIS.label}>{DIAGNOSIS.sectionTitle}</SectionLabel>
          <h2>{DIAGNOSIS.heading}</h2>
          <p>{DIAGNOSIS.intro}</p>
        </div>
        <div className="diagnosis-map">
          {DIAGNOSIS.items.map((item, index) => (
            <article key={item.code} className="diagnosis-item">
              <div className="diagnosis-code"><span>{item.code}</span><i aria-hidden="true">0{index + 1}</i></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <strong><i aria-hidden="true">→</i>{item.impact}</strong>
            </article>
          ))}
        </div>
        <p className="diagnosis-close"><span aria-hidden="true">→</span>{DIAGNOSIS.close}</p>
      </div>
    </section>
  )
}
