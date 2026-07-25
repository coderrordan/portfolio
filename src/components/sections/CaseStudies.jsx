import { useTranslation } from '../../i18n/useTranslation'
import CaseVisual from '../ui/CaseVisual'
import SectionLabel from '../ui/SectionLabel'

export default function CaseStudies() {
  const { CASE_STUDIES, UI } = useTranslation()

  return (
    <section id="case-studies" className="cases-section section-pad">
      <div className="page-shell">
        <div className="section-intro cases-intro">
          <SectionLabel num={CASE_STUDIES.label}>{CASE_STUDIES.sectionTitle}</SectionLabel>
          <h2>{CASE_STUDIES.heading}</h2>
          <p>{CASE_STUDIES.intro}</p>
        </div>
        <div className="case-files">
          {CASE_STUDIES.items.map((item) => (
            <article key={item.num} className="case-file">
              <header><span>{UI.caseFile} / {item.num}</span><strong>{item.code}</strong><i>{UI.confidential}</i></header>
              <div className="case-scene">
                <div><h3>{item.title}</h3><CaseVisual type={item.visual} before={UI.situation} after={UI.result} /></div>
                <div className="case-flow">
                  <div><span>01 / {UI.situation}</span><p>{item.situation}</p></div>
                  <div><span>02 / {UI.intervention}</span><p>{item.intervention}</p></div>
                  <div className="case-result"><span>03 / {UI.result}</span><p>{item.result}</p></div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="confidentiality-note"><span aria-hidden="true">C</span><p>{CASE_STUDIES.confidentiality}</p></div>
      </div>
    </section>
  )
}
