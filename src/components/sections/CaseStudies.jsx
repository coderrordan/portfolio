import { useTranslation } from '../../i18n/useTranslation'
import CaseVisual from '../ui/CaseVisual'
import SectionLabel from '../ui/SectionLabel'

export default function CaseStudies() {
  const { CASE_STUDIES, UI } = useTranslation()

  return (
    <section id="case-studies" className="cases-section section-pad">
      <div className="page-shell">
        <div className="section-intro cases-intro" data-reveal>
          <SectionLabel num={CASE_STUDIES.label}>{CASE_STUDIES.sectionTitle}</SectionLabel>
          <h2 className="cases-heading">
            {CASE_STUDIES.heading.first} {CASE_STUDIES.heading.secondBefore}{' '}
            <strong>{CASE_STUDIES.heading.accent}</strong> {CASE_STUDIES.heading.secondAfter}
          </h2>
          <p>{CASE_STUDIES.intro}</p>
        </div>
        <div className="case-files" data-reveal="group">
          {CASE_STUDIES.items.map((item) => (
            <article key={item.num} className="case-file">
              <header><span>{UI.caseFile} / {item.num}</span></header>
              <div className="case-scene">
                <div className="case-scene__visual">
                  <h3>{item.title}</h3>
                  <CaseVisual type={item.visual} before={UI.objective} after={UI.result} />
                </div>
                <div className="case-flow">
                  <div><span>01 / {UI.objective}</span><p>{item.objective}</p></div>
                  <div><span>02 / {UI.intervention}</span><p>{item.intervention}</p></div>
                  <div className="case-result"><span>03 / {UI.result}</span><p>{item.result}</p></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
