import { useTranslation } from '../../i18n/useTranslation'
import MediaFrame from '../ui/MediaFrame'
import SectionLabel from '../ui/SectionLabel'

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
          <div className="about-text">{ABOUT.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          <p className="about-question">{ABOUT.question}</p>
          <div className="about-notes">
            {ABOUT.notes.map((note) => (
              <div key={note.value}><span>{note.value}</span><p><strong>{note.label}</strong>{note.text}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
