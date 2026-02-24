import { NAV_LINKS, SITE } from '../../data/content'

export default function Navbar({ visible }) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 flex items-center justify-between px-16 py-6 border-b border-white/[0.03]"
      style={{
        zIndex: 500,
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 100%)',
        backdropFilter: 'blur(16px)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-12px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <div className="font-mono text-sm tracking-widest text-accent uppercase">
        DN / Portfolio
      </div>

      <ul className="hidden md:flex gap-10 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-xs tracking-widest uppercase text-muted hover:text-cream transition-colors duration-300 font-medium no-underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={`mailto:${SITE.email}`}
        className="font-mono text-xs tracking-widest uppercase text-bg bg-accent hover:bg-accent2 px-5 py-2.5 transition-all duration-300 btn-clip-sm no-underline"
      >
        Contattami
      </a>
    </nav>
  )
}
