export function ButtonPrimary({ href, onClick, children, className = '' }) {
  const base = `
    inline-flex items-center gap-3
    font-mono text-xs tracking-widest uppercase font-bold
    text-bg bg-accent hover:bg-accent2
    px-8 py-4 transition-all duration-300
    btn-clip cursor-none
    hover:-translate-y-0.5
    ${className}
  `
  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  )
}

export function ButtonOutline({ href, onClick, children, className = '' }) {
  const base = `
    inline-flex items-center gap-3
    font-mono text-xs tracking-widest uppercase
    text-cream border border-border
    hover:border-accent hover:text-accent
    px-8 py-4 transition-all duration-300 cursor-none
    ${className}
  `
  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  )
}
