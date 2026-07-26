import { useTranslation } from '../../i18n/useTranslation'

export default function TerminalBox({ embedded = false }) {
  const { TERMINAL_LINES, UI } = useTranslation()

  return (
    <div className={`terminal-box${embedded ? ' terminal-box--embedded' : ''}`} aria-label={UI.terminalLabel}>
      {!embedded && <div className="terminal-bar"><span><i /><i /><i /></span><strong>{UI.terminalTitle}</strong></div>}
      <div className="terminal-body">
        <p className="terminal-command"><span>›</span> {UI.terminalLoad}</p>
        {TERMINAL_LINES.map((line, index) => (
          <div key={`${line.label}-${index}`} className={`terminal-line terminal-${line.type}`}>
            <span>[{line.label}]</span><p>{line.text}</p><i>{line.type === 'warn' ? 'NEXT' : 'OK'}</i>
          </div>
        ))}
        <p className="terminal-command terminal-last"><span>›</span> {UI.terminalReady} <i aria-hidden="true" /></p>
      </div>
    </div>
  )
}
