import { useTranslation } from '../../i18n/useTranslation'
import SectionLabel from '../ui/SectionLabel'

function Scope({ scope, labels }) {
  return (
    <article className={`scope ${scope.featured ? 'scope-featured' : ''}`}>
      <div className="scope-top"><span>{scope.num}</span><p>{scope.kicker}</p></div>
      <h3>{scope.title}</h3>
      <div className="scope-details">
        <div><span>{labels.fit}</span><p>{scope.fit}</p></div>
        <div><span>{labels.responsibility}</span><ul>{scope.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div><span>{labels.outcome}</span><p>{scope.outcome}</p></div>
      </div>
      <a className="scope-cta" href={labels.bookingUrl} target="_blank" rel="noreferrer">{scope.cta}<span aria-hidden="true">↗</span></a>
    </article>
  )
}

export default function Services() {
  const { SERVICES, SITE, UI } = useTranslation()
  const labels = { ...UI, bookingUrl: SITE.bookingUrl }

  return (
    <section id="services" className="services-section section-pad">
      <div className="page-shell">
        <div className="section-intro services-intro">
          <SectionLabel num={SERVICES.label}>{SERVICES.sectionTitle}</SectionLabel>
          <h2>{SERVICES.heading}</h2>
          <p>{SERVICES.subtext}</p>
        </div>
        <div className="scope-grid">{SERVICES.scopes.map((scope) => <Scope key={scope.num} scope={scope} labels={labels} />)}</div>
      </div>
    </section>
  )
}
