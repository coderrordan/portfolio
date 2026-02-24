import { CTA_SECTION } from '../../data/content'
import { ButtonPrimary, ButtonOutline } from '../ui/Button'

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="text-center px-16 py-48 relative overflow-hidden z-10"
      style={{ background: 'rgba(10,10,10,0.6)', backdropFilter: 'blur(20px)' }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(232,114,12,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10">
        <p className="reveal font-mono text-xs tracking-[0.2em] uppercase text-accent mb-6">
          {CTA_SECTION.eyebrow}
        </p>

        <h2
          className="reveal delay-1 font-serif font-black leading-[0.95] tracking-[-0.02em] mb-8"
          style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
        >
          {CTA_SECTION.heading[0]}<br />
          <em className="italic text-accent">{CTA_SECTION.heading[1]}</em>
        </h2>

        <p className="reveal delay-2 text-muted text-base leading-relaxed font-light max-w-lg mx-auto mb-12">
          {CTA_SECTION.text}
        </p>

        <div className="reveal delay-3 flex gap-4 justify-center flex-wrap">
          {CTA_SECTION.ctas.map((cta) =>
            cta.primary ? (
              <ButtonPrimary key={cta.label} href={cta.href}>{cta.label}</ButtonPrimary>
            ) : (
              <ButtonOutline key={cta.label} href={cta.href} target="_blank" rel="noopener noreferrer">{cta.label}</ButtonOutline>
            )
          )}
        </div>
      </div>
    </section>
  )
}
