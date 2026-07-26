import { Button } from '../../nexus-ui/components/Button.tsx'

export function ButtonPrimary({ href, onClick, children, className = '', ...props }) {
  return (
    <Button
      variant="primary"
      href={href}
      onClick={onClick}
      {...props}
      className={`gap-3 px-6 py-4 text-[1.125rem] font-bold ${className}`}
    >
      {children}
    </Button>
  )
}

export function ButtonOutline({ href, onClick, children, className = '', ...props }) {
  return (
    <Button
      variant="outline"
      href={href}
      onClick={onClick}
      {...props}
      className={`gap-2 py-3.5 ${className}`}
    >
      {children}
    </Button>
  )
}
