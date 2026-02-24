import { HERO, SITE } from '../../data/content'
import { ButtonPrimary, ButtonOutline } from '../ui/Button'

export default function Hero({ ready }) {
  const delay = (ms) => ({ animationDelay: `${ms}ms` })
  const anim = (ms) => ({
    opacity: 0,
    animation: ready ? `fadeUp 0.7s ease ${ms}ms forwards` : 'none',
  })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end px-16 pb-24 pt-32 overflow-hidden"
      style={{ zIndex: 10 }}
    >
      <div className="relative z-10 flex items-end justify-between gap-16 w-full">

        {/* LEFT — badge + headline + sub + CTA */}
        <div className="flex-1 min-w-0">

          {/* System badge */}
          <div
            className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-cream border border-white/[0.15] px-3.5 py-2 mb-10 bg-bg/60 backdrop-blur-sm"
            style={anim(1200)}
          >
            <span className="text-accent font-bold">&gt;_</span>
            SYSTEM ONLINE
            <span className="text-muted">//</span>
            DANIELE NAPOLITANO
            <span className="text-muted">//</span>
            AMAZON SPECIALIST
            <span className="text-accent animate-[blink_1s_step-end_infinite]">_</span>
          </div>

          {/* Headline */}
          <div style={anim(1400)}>
            {HERO.lines.map((line, i) => (
              <span
                key={i}
                className={`block font-sans font-black leading-none tracking-[-0.03em] ${line.accent ? 'text-accent' : 'text-cream'}`}
                style={{ fontSize: 'clamp(3rem, 7.5vw, 7.5rem)' }}
              >
                {line.text}
              </span>
            ))}
          </div>

          {/* Subtext */}
          <p
            className="mt-8 text-base leading-relaxed text-muted font-light max-w-lg"
            style={anim(1650)}
            dangerouslySetInnerHTML={{ __html: HERO.sub.replace('<strong>', '<strong class="text-cream font-medium">') }}
          />

          {/* CTAs */}
          <div className="flex gap-4 mt-11 flex-wrap" style={anim(1850)}>
            <ButtonPrimary href={`mailto:${SITE.email}`}>
              Consulenza gratuita <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </ButtonPrimary>
            <ButtonOutline href="#services">
              Scopri i servizi →
            </ButtonOutline>
          </div>
        </div>

        {/* RIGHT — stats column */}
        <div
          className="flex flex-col gap-10 flex-shrink-0"
          style={anim(2050)}
        >
          {HERO.stats.map((stat, i) => (
            <div key={i}>
              {i > 0 && <div className="w-px h-10 bg-border mb-10" />}
              <span className="block font-serif text-5xl font-bold text-accent leading-none">
                {stat.num}
              </span>
              <div className="mt-1.5 font-mono text-xs tracking-widest uppercase text-muted whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-16 z-10 font-mono text-[0.65rem] tracking-[0.15em] uppercase text-muted flex items-center gap-3"
        style={{ writingMode: 'vertical-rl', ...anim(2300) }}
      >
        Scroll
        <span
          className="block w-px h-16 hero-scroll-line"
          style={{ background: 'linear-gradient(to bottom, #6b6560, transparent)' }}
        />
      </div>
    </section>
  )
}
