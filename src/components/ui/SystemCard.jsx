import { useState } from 'react'
import { useTranslation } from '../../i18n/useTranslation'
import TerminalBox from './TerminalBox'

export default function SystemCard() {
  const { SKALEBIDOS, UI } = useTranslation()
  const [face, setFace] = useState('dashboard')
  const terminalVisible = face === 'terminal'

  const toggleFace = () => setFace((current) => current === 'dashboard' ? 'terminal' : 'dashboard')
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleFace()
    }
  }

  return (
    <figure className={`system-card${terminalVisible ? ' is-flipped' : ''}`}>
      <div className="system-card__bar">
        <span>{SKALEBIDOS.media.label}</span>
        <span className="system-card__controls">
          <button type="button" aria-label={UI.systemDashboard} aria-pressed={!terminalVisible} onClick={() => setFace('dashboard')} />
          <button type="button" aria-label={UI.systemTerminal} aria-pressed={terminalVisible} onClick={() => setFace('terminal')} />
        </span>
      </div>
      <div
        className="system-card__stage"
        role="button"
        tabIndex="0"
        aria-label={UI.systemToggle}
        aria-pressed={terminalVisible}
        onClick={toggleFace}
        onKeyDown={handleKeyDown}
      >
        <div className="system-card__inner">
          <div className="system-card__face system-card__dashboard" aria-hidden={terminalVisible}>
            <img src="/images/skalebidos-dashboard.avif" alt={SKALEBIDOS.media.alt} loading="lazy" decoding="async" />
          </div>
          <div className="system-card__face system-card__terminal" aria-hidden={!terminalVisible}>
            <TerminalBox embedded />
          </div>
        </div>
      </div>
    </figure>
  )
}
