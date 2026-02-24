import { SITE } from '../../data/content'

export default function Footer() {
  return (
    <footer
      className="border-t border-border px-16 py-12 flex items-center justify-between gap-8 flex-wrap relative z-10"
      style={{ background: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(20px)' }}
    >
      <div className="font-serif text-xl font-bold">
        Daniele <span className="text-accent">Napolitano</span>
      </div>

      <div className="font-mono text-[0.65rem] tracking-wide text-muted text-center">
        &copy; {SITE.year} &middot; Handcrafted in Italy &middot; p.iva {SITE.vat}
        <br />
        <a
          href={`mailto:${SITE.email}`}
          className="text-muted hover:text-accent transition-colors no-underline"
        >
          {SITE.email}
        </a>
      </div>

      <div className="flex gap-6">
        {[
          { label: 'YouTube',   href: SITE.socials.youtube   },
          { label: 'Instagram', href: SITE.socials.instagram },
          { label: 'LinkedIn',  href: SITE.socials.linkedin  },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.65rem] tracking-widest uppercase text-muted hover:text-accent transition-colors no-underline"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
