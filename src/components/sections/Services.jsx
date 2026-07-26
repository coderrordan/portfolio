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
    </article>
  )
}

export default function Services() {
  const { SERVICES, SITE, UI } = useTranslation()

  return (
    <section id="services" className="services-section section-pad">
      <div className="page-shell">
        <div className="section-intro services-intro" data-reveal>
          <SectionLabel num={SERVICES.label}>{SERVICES.sectionTitle}</SectionLabel>
          <h2>{SERVICES.heading.text} <strong>{SERVICES.heading.accent}</strong></h2>
          <p>{SERVICES.subtext}</p>
        </div>
        <div className="scope-grid" data-reveal="group">{SERVICES.scopes.map((scope) => <Scope key={scope.num} scope={scope} labels={UI} />)}</div>
        <a className="services-cta cta-sweep" data-reveal href={SITE.bookingUrl} target="_blank" rel="noreferrer">
          <span className="cta-sweep__content">{SERVICES.cta}</span><span className="cta-sweep__icon" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
