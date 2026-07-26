import { cn } from '../utils/cn'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  clipped?: boolean
  asChild?: boolean
  href?: string
}

const sizeClasses = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-8 py-3 text-xs',
  lg: 'px-10 py-4 text-sm',
}

const variantClasses = {
  primary: 'bg-accent text-[var(--nexus-text-inverse)] hover:bg-accent-hover',
  outline: 'border border-border text-cream hover:border-accent hover:text-accent',
  ghost:   'text-cream hover:bg-[var(--nexus-bg-hover)]',
  danger:  'bg-danger text-white hover:opacity-90',
}

export function Button({
  variant = 'primary',
  size = 'md',
  clipped = false,
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-mono tracking-widest uppercase transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none',
    variantClasses[variant],
    sizeClasses[size],
    clipped && (size === 'sm' ? 'btn-clip-sm' : 'btn-clip'),
    className,
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
