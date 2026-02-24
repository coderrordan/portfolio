import { useState } from 'react'
import { NEWSLETTER } from '../../data/content'
import SectionLabel from '../ui/SectionLabel'
import { ButtonPrimary } from '../ui/Button'

export default function Newsletter() {
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setEmail('')
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <div
      id="newsletter"
      className="grid grid-cols-1 md:grid-cols-2 gap-24 px-16 py-20 border-t border-border relative z-10"
      style={{ background: 'rgba(15,15,15,0.9)', backdropFilter: 'blur(20px)' }}
    >
      <div className="reveal">
        <SectionLabel num={NEWSLETTER.label}>
          {NEWSLETTER.sectionTitle}
        </SectionLabel>
        <h3 className="font-serif text-3xl font-bold mt-3 mb-4">
          {NEWSLETTER.heading}
        </h3>
        <p className="text-muted text-sm leading-relaxed font-light">
          {NEWSLETTER.text}
        </p>
      </div>

      <div className="reveal delay-2 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={NEWSLETTER.placeholder}
            required
            className="flex-1 bg-bg3 border border-border border-r-0 px-6 py-4 text-cream font-sans text-sm outline-none focus:border-accent transition-colors placeholder:text-muted"
          />
          <ButtonPrimary
            onClick={undefined}
            className="flex-shrink-0"
            style={{ clipPath: 'none', borderRadius: 0 }}
          >
            {sent ? 'Grazie! ✓' : NEWSLETTER.cta}
          </ButtonPrimary>
        </form>
        <p className="font-mono text-[0.72rem] tracking-wide text-muted mt-3">
          {NEWSLETTER.disclaimer}
        </p>
      </div>
    </div>
  )
}
