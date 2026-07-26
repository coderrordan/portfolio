import { useTranslation } from '../../i18n/useTranslation'

export default function CtaSection() {
  const { CTA_SECTION } = useTranslation()

  return (
    <section id="cta" className="cta-section">
      <div className="page-shell cta-grid">
        <div data-reveal><p className="eyebrow">{CTA_SECTION.eyebrow}</p><h2>{CTA_SECTION.heading.map((line) => <span key={line}>{line}</span>)}</h2></div>
        <div className="cta-copy" data-reveal>
          <p>{CTA_SECTION.text}</p>
          <div className="cta-actions">
            {CTA_SECTION.ctas.map((cta) => (
              <a key={cta.href} className="cta-sweep" href={cta.href} target="_blank" rel="noreferrer">
                <span className="cta-sweep__content">{cta.label}<span className="cta-sweep__icon" aria-hidden="true">→</span></span>
              </a>
            ))}
          </div>
          <small>{CTA_SECTION.note}</small>
        </div>
      </div>
    </section>
  )
}
