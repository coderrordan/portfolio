import { useTranslation } from '../../i18n/useTranslation'
import MediaFrame from '../ui/MediaFrame'
import SectionLabel from '../ui/SectionLabel'

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
  const { ABOUT } = useTranslation()

  return (
    <section id="about" className="about-section section-pad">
      <div className="page-shell about-grid">
        <div className="about-media">
          <MediaFrame
            src="/images/daniele-al-pc.avif"
            alt={ABOUT.media.alt}
            label={ABOUT.media.label}
            caption={ABOUT.media.caption}
            ratio="2 / 3"
          />
        </div>
        <div className="about-copy">
          <SectionLabel num={ABOUT.label}>{ABOUT.sectionTitle}</SectionLabel>
          <h2>{ABOUT.heading.map((line) => <span key={line}>{line}</span>)}</h2>
          <div className="about-text">{ABOUT.paragraphs.map((paragraph) => <HighlightedParagraph key={paragraph.text} paragraph={paragraph} />)}</div>
          <p className="about-question"><span>{ABOUT.question.lead}</span> <strong>{ABOUT.question.accent}</strong></p>
        </div>
      </div>
    </section>
  )
}
