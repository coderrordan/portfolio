import { useTranslation } from '../../i18n/useTranslation'

export default function Marquee() {
  const { MARQUEE_ITEMS } = useTranslation()
  // Double the items so the seamless loop works
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div
      className="overflow-hidden border-t border-b border-border py-5 relative z-10"
      style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(10px)' }}
    >
      <div className="marquee-track flex whitespace-nowrap">
        {items.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-10 px-10 font-mono text-xs tracking-[0.15em] uppercase text-muted"
          >
            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
