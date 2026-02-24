import { useState, useRef, useEffect } from 'react'
import { useTranslation } from '../../i18n/useTranslation'

export default function Navbar() {
  const { NAV_LINKS, SITE, UI, lang, setLang } = useTranslation()
  const [isLangOpen, setIsLangOpen] = useState(false)
  const langRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 flex items-center justify-between px-16 py-6 border-b border-white/[0.03]"
      style={{
        zIndex: 500,
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 100%)',
        backdropFilter: 'blur(16px)',
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

      <div className="flex items-center gap-4">
        {/* Language selector */}
        {/* Language selector dropdown */}
        <div className="relative flex items-center font-mono text-[0.65rem] tracking-widest uppercase" ref={langRef}>
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 transition-colors duration-300 cursor-pointer bg-transparent border border-white/10 hover:border-white/20 rounded-[2px] text-accent"
          >
            {lang}
            <svg
              className={`w-3 h-3 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown menu */}
          <div
            className={`absolute top-full right-0 mt-2 py-1 min-w-[3.5rem] bg-[#111111] border border-white/10 rounded-[2px] transition-all duration-300 origin-top-right z-50 ${isLangOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
              }`}
          >
            {['it', 'en'].map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLang(l)
                  setIsLangOpen(false)
                }}
                className={`block w-full text-left px-3 py-2 transition-colors cursor-pointer border-none bg-transparent ${lang === l ? 'text-accent' : 'text-muted hover:text-cream hover:bg-white/5'
                  }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <a
          href={`mailto:${SITE.email}`}
          className="font-mono text-xs tracking-widest uppercase text-bg bg-accent hover:bg-accent2 px-5 py-2.5 transition-all duration-300 btn-clip-sm no-underline"
        >
          {UI.contact}
        </a>
      </div>
    </nav>
  )
}
