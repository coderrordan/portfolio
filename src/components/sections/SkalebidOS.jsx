import { useTranslation } from '../../i18n/useTranslation'
import MediaFrame from '../ui/MediaFrame'
import SectionLabel from '../ui/SectionLabel'
import TerminalBox from '../ui/TerminalBox'

export default function SkalebidOS() {
  const { SKALEBIDOS } = useTranslation()

  return (
    <section id="skalebidos" className="os-section section-pad">
      <div className="page-shell">
        <div className="os-workspace">
          <MediaFrame src="/images/skalebidos-dashboard.avif" alt={SKALEBIDOS.media.alt} label={SKALEBIDOS.media.label} caption={SKALEBIDOS.media.caption} ratio="16 / 9" />
          <div className="os-console">
            <SectionLabel num={SKALEBIDOS.label}>{SKALEBIDOS.sectionTitle}</SectionLabel>
            <p className="eyebrow">{SKALEBIDOS.eyebrow}</p>
            <h2>{SKALEBIDOS.heading}</h2>
            <TerminalBox />
          </div>
        </div>
      </div>
    </section>
  )
}
