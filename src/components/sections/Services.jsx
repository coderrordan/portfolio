import { useTranslation } from '../../i18n/useTranslation'
import SectionLabel from '../ui/SectionLabel'
import { ButtonPrimary } from '../ui/Button'

function ServiceCard({ card }) {
  return (
    <div
      className={`service-card relative p-12 overflow-hidden transition-colors duration-300 group ${card.fullWidth ? 'border-t border-border' : ''}`}
      style={{ gridColumn: card.fullWidth ? '1 / -1' : undefined, background: '#0d0d0d' }}
    >
      {/* Hover line on bottom */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />

      <div className="font-serif text-[5rem] font-black leading-none mb-4 transition-colors duration-300"
        style={{ color: 'rgba(232,114,12,0.08)' }}
        onMouseEnter={e => e.currentTarget.style.color = 'rgba(232,114,12,0.15)'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,114,12,0.08)'}
      >
        {card.num}
      </div>
      <div className="font-serif text-2xl font-bold mb-4 tracking-[-0.01em]">{card.title}</div>
      <p className="text-muted text-sm leading-relaxed font-light mb-8">{card.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[0.6rem] tracking-widest uppercase px-3 py-1 border text-accent"
            style={{ background: 'rgba(232,114,12,0.08)', borderColor: 'rgba(232,114,12,0.2)' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function CtaCard({ services, site }) {
  return (
    <div
      className="p-12 flex flex-col justify-between min-h-[300px] border"
      style={{
        background: 'linear-gradient(135deg, rgba(232,114,12,0.1) 0%, rgba(232,114,12,0.02) 100%)',
        borderColor: 'rgba(232,114,12,0.2)',
      }}
    >
      <div>
        <h3 className="font-serif text-3xl font-bold leading-tight text-cream mb-4">
          {services.cta.heading}
        </h3>
        <p className="text-muted text-sm leading-relaxed font-light mb-8">
          {services.cta.text}
        </p>
      </div>
      <ButtonPrimary href={`mailto:${site.email}`}>
        {services.cta.label}
      </ButtonPrimary>
    </div>
  )
}

export default function Services() {
  const { SERVICES, SITE } = useTranslation()

  return (
    <section
      id="services"
      className="px-16 py-32 relative z-10"
      style={{ background: 'transparent' }}
    >
      <div className="max-w-2xl mb-20">
        <SectionLabel num={SERVICES.label} className="reveal">
          {SERVICES.sectionTitle}
        </SectionLabel>
        <h2
          className="reveal delay-1 font-serif font-bold leading-tight tracking-[-0.02em] mt-6 mb-6"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
        >
          {SERVICES.heading[0]}<br />
          <em className="italic text-accent not-italic">{SERVICES.heading[1]}</em>
        </h2>
        <p className="reveal delay-2 text-muted text-base leading-relaxed font-light">
          {SERVICES.subtext}
        </p>
      </div>

      {/* Grid: first card + CTA side by side, second card full width */}
      <div
        className="grid gap-px border border-border"
        style={{
          gridTemplateColumns: '1.6fr 1fr',
          background: '#1e1e1e',
        }}
      >
        <div className="reveal">
          <ServiceCard card={SERVICES.cards[0]} />
        </div>
        <div className="reveal delay-2">
          <CtaCard services={SERVICES} site={SITE} />
        </div>
        <div className="reveal delay-1" style={{ gridColumn: '1 / -1' }}>
          <ServiceCard card={SERVICES.cards[1]} />
        </div>
      </div>
    </section>
  )
}
