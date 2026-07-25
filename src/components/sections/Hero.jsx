import { useTranslation } from '../../i18n/useTranslation'
import EuropeNetwork from '../ui/EuropeNetwork'
import { ButtonPrimary } from '../ui/Button'

export default function Hero() {
  const { HERO } = useTranslation()

  return (
    <section id="hero" className="hero-section">
      <div className="hero-network-layer">
        <EuropeNetwork />
      </div>
      <div className="hero-grid page-shell">
        <div className="hero-copy">
          <p className="eyebrow">{HERO.eyebrow}</p>
          <h1>{HERO.lines.map((line, index) => <span key={line} className={index === HERO.lines.length - 1 ? 'accent-line' : ''}>{line}</span>)}</h1>
          <p className="hero-sub">{HERO.sub}</p>
          <div className="hero-actions">
            <ButtonPrimary href={HERO.ctas[0].href} target="_blank" rel="noreferrer">{HERO.ctas[0].label} <span aria-hidden="true">→</span></ButtonPrimary>
          </div>
        </div>
      </div>
    </section>
  )
}
