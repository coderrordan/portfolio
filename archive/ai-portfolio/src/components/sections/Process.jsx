import { useTranslation } from '../../i18n/useTranslation'
import SectionLabel from '../ui/SectionLabel'

export default function Process() {
  const { PROCESS } = useTranslation()

  return (
    <section
      id="process"
      className="px-16 py-32 border-t border-b border-border relative z-10"
      style={{ background: 'rgba(15,15,15,0.9)', backdropFilter: 'blur(20px)' }}
    >
      {/* Header */}
      <div className="flex items-end justify-between gap-16 mb-20">
        <div className="flex-1">
          <SectionLabel num={PROCESS.label} className="reveal">
            {PROCESS.sectionTitle}
          </SectionLabel>
          <h2
            className="reveal delay-1 font-serif font-bold leading-tight tracking-[-0.02em] mt-5"
            style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)' }}
          >
            {PROCESS.heading[0]}<br />{PROCESS.heading[1]}
          </h2>
        </div>
        <p className="reveal delay-2 text-muted text-sm leading-relaxed font-light max-w-xs">
          {PROCESS.subtext}
        </p>
      </div>

      {/* Steps */}
      <div className="relative grid grid-cols-5 gap-0">
        {/* Connector line */}
        <div
          className="absolute h-px top-7"
          style={{
            left: '10%', right: '10%',
            background: 'linear-gradient(90deg, transparent, #1e1e1e 20%, #1e1e1e 80%, transparent)',
          }}
        />

        {PROCESS.steps.map((step, i) => (
          <div
            key={step.num}
            className={`process-step reveal delay-${i} pr-6`}
          >
            <div className="w-14 h-14 border border-border flex items-center justify-center mb-8 bg-bg2 transition-all duration-300 hover:border-accent hover:bg-accent/5">
              <span className="font-mono text-xs text-accent">{step.num}</span>
            </div>
            <div className="font-serif text-base font-bold mb-3 leading-snug">
              {step.title}
            </div>
            <p className="text-[0.82rem] leading-relaxed text-muted font-light">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
