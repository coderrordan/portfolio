export default function CaseVisual({ after, before, type }) {
  if (type === 'listing') {
    return (
      <div className="case-visual case-visual--listing" aria-hidden="true">
        <div className="listing-page listing-page--before">
          <span>{before}</span><i /><i /><i />
        </div>
        <div className="case-visual__arrow">→</div>
        <div className="listing-page listing-page--after">
          <span>{after}</span><strong /><i /><i /><i />
        </div>
      </div>
    )
  }

  if (type === 'launch') {
    return (
      <div className="case-visual case-visual--launch" aria-hidden="true">
        {['RICERCA', 'POSIZIONE', 'CONTENUTI', 'PPC', 'LANCIO'].map((label, index) => (
          <div key={label} style={{ '--step': index }}><span>0{index + 1}</span><strong>{label}</strong><i /></div>
        ))}
      </div>
    )
  }

  return (
    <div className="case-visual case-visual--markets" aria-hidden="true">
      <svg viewBox="0 0 600 280" preserveAspectRatio="none">
        <path d="M300 140 L95 60 M300 140 L500 55 M300 140 L105 230 M300 140 L505 225" />
      </svg>
      <div className="market-origin">IT<span>BASE</span></div>
      <div className="market-node node-one">DE</div>
      <div className="market-node node-two">FR</div>
      <div className="market-node node-three">ES</div>
      <div className="market-node node-four">UK</div>
    </div>
  )
}
