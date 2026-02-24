export default function SectionLabel({ num, children, className = '' }) {
  return (
    <div
      className={`section-label font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4 flex items-center ${className}`}
      data-num={num}
    >
      {children}
    </div>
  )
}
