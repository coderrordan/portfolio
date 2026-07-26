import { Button } from '../../nexus-ui/components/Button.tsx'

export function ButtonPrimary({ href, onClick, children, className = '' }) {
  return (
    <Button
      variant="primary"
      clipped
      href={href}
      onClick={onClick}
      className={`gap-3 font-bold py-4 hover:-translate-y-0.5 cursor-none ${className}`}
    >
      {children}
    </Button>
  )
}

export function ButtonOutline({ href, onClick, children, className = '' }) {
  return (
    <Button
      variant="outline"
      href={href}
      onClick={onClick}
      className={`gap-3 py-4 cursor-none ${className}`}
    >
      {children}
    </Button>
  )
}
