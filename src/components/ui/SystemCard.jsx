import { useRef, useState } from 'react'
import { useTranslation } from '../../i18n/useTranslation'
import TerminalBox from './TerminalBox'

const SWIPE_THRESHOLD = 32

export default function SystemCard() {
  const { SKALEBIDOS, UI } = useTranslation()
  const [face, setFace] = useState('dashboard')
  const terminalVisible = face === 'terminal'
  const touchStartRef = useRef(null)
  const swipedRef = useRef(false)

  const toggleFace = () => setFace((current) => current === 'dashboard' ? 'terminal' : 'dashboard')
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleFace()
    }
  }

  const handleTouchStart = (event) => {
    const touch = event.touches[0]
    touchStartRef.current = { x: touch.clientX, y: touch.clientY }
    swipedRef.current = false
  }

  const handleTouchMove = (event) => {
    if (!touchStartRef.current || swipedRef.current) return
    const touch = event.touches[0]
    const dx = touch.clientX - touchStartRef.current.x
    const dy = touch.clientY - touchStartRef.current.y
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      swipedRef.current = true
      toggleFace()
    }
  }

  const handleStageClick = () => {
    if (swipedRef.current) {
      swipedRef.current = false
      return
    }
    toggleFace()
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
        onClick={handleStageClick}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
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
