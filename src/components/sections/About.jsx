import { useTranslation } from '../../i18n/useTranslation'
import MediaFrame from '../ui/MediaFrame'
import SectionLabel from '../ui/SectionLabel'

const SOCIALS = [
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'youtube', label: 'YouTube' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'substack', label: 'Substack' },
]

function SocialIcon({ id }) {
  if (id === 'linkedin') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.3 7.7A2.2 2.2 0 1 0 5.3 3.3a2.2 2.2 0 0 0 0 4.4ZM3.4 21h3.8V9H3.4v12ZM9.4 9H13v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.7V21h-3.8v-5.9c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1v6H9.4V9Z" /></svg>
  }
  if (id === 'substack') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" /></svg>
  }
  if (id === 'youtube') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22.5 6.2a3 3 0 0 0-2.1-2.1C18.5 3.6 12 3.6 12 3.6s-6.5 0-8.4.5a3 3 0 0 0-2.1 2.1C1 8.1 1 12 1 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 8.4.5 8.4.5s6.5 0 8.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.8 15.6V8.4l6.2 3.6-6.2 3.6Z" /></svg>
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2c2.7 0 3 0 4.1.1 1.2.1 2.2.4 3 1.2.8.8 1.1 1.8 1.2 3 .1 1 .1 1.4.1 4.1v3.2c0 2.7 0 3-.1 4.1-.1 1.2-.4 2.2-1.2 3-.8.8-1.8 1.1-3 1.2-1 .1-1.4.1-4.1.1s-3 0-4.1-.1c-1.2-.1-2.2-.4-3-1.2-.8-.8-1.1-1.8-1.2-3-.1-1-.1-1.4-.1-4.1v-3.2c0-2.7 0-3 .1-4.1.1-1.2.4-2.2 1.2-3 .8-.8 1.8-1.1 3-1.2C9 2 9.3 2 12 2Zm0 4.9a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2Zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6Zm6.4-8.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" /></svg>
}

function HighlightedParagraph({ paragraph }) {
  const highlights = new Set(paragraph.highlights)
  const pattern = new RegExp(`(${paragraph.highlights.map((text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')

  return (
    <p>
      {paragraph.text.split(pattern).map((part, index) => (
        highlights.has(part) ? <strong key={`${part}-${index}`}>{part}</strong> : part
      ))}
    </p>
  )
}

export default function About() {
  const { ABOUT, SITE, UI } = useTranslation()
  const publishedSocials = SOCIALS.filter(({ id }) => SITE.socials[id])

  return (
    <section id="about" className="about-section section-pad">
      <div className="page-shell about-grid">
        <div className="about-media" data-reveal="visual">
          <MediaFrame
            src="/images/daniele-al-pc.avif"
            alt={ABOUT.media.alt}
            label={ABOUT.media.label}
            caption={ABOUT.media.caption}
            ratio="2 / 3"
          />
          <nav className="about-socials" aria-label={UI.socials}>
            {publishedSocials.map(({ id, label }) => (
              <a key={id} href={SITE.socials[id]} target="_blank" rel="noopener noreferrer" aria-label={`${label}. ${UI.external}`} title={label}>
                <SocialIcon id={id} />
              </a>
            ))}
          </nav>
        </div>
        <div className="about-copy" data-reveal>
          <SectionLabel num={ABOUT.label}>{ABOUT.sectionTitle}</SectionLabel>
          <h2>{ABOUT.heading.map((line) => <span key={line}>{line}</span>)}</h2>
          <div className="about-text">{ABOUT.paragraphs.map((paragraph) => <HighlightedParagraph key={paragraph.text} paragraph={paragraph} />)}</div>
          <p className="about-question"><span>{ABOUT.question.lead}</span> <strong>{ABOUT.question.accent}</strong></p>
        </div>
      </div>
    </section>
  )
}
