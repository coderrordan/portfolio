import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../../i18n/useTranslation'
import LanguageDropdown from '../ui/LanguageDropdown'

export default function Navbar() {
  const { LANGUAGES, NAV_LINKS, SITE, UI, lang, setLang } = useTranslation()
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)
  const wasOpen = useRef(false)

  useEffect(() => {
    const ids = ['hero', ...NAV_LINKS.map((link) => link.href.slice(1))]
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-35% 0px -58% 0px' })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [NAV_LINKS])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
      if (event.key !== 'Tab' || !menuOpen || !menuRef.current) return

      const focusable = [...menuRef.current.querySelectorAll('a, button')]
        .filter((element) => element.tabIndex !== -1 && element.offsetParent !== null)
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    document.querySelectorAll('.site-main').forEach((region) => { region.inert = menuOpen })

    if (menuOpen) {
      requestAnimationFrame(() => menuRef.current?.querySelector('a')?.focus())
    } else if (wasOpen.current) {
      toggleRef.current?.focus()
    }
    wasOpen.current = menuOpen

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      document.querySelectorAll('.site-main').forEach((region) => { region.inert = false })
    }
  }, [menuOpen])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 64rem)')
    const closeAtDesktop = (event) => {
      if (event.matches) setMenuOpen(false)
    }
    desktop.addEventListener('change', closeAtDesktop)
    return () => desktop.removeEventListener('change', closeAtDesktop)
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">{UI.skip}</a>

      <aside className="site-rail" aria-label={UI.menu}>
        <a href="#hero" className="rail-logo" aria-label={UI.home}>
          <img src="/images/logo-ndp.svg" alt="" />
        </a>
        <nav className="rail-index">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={active === link.href.slice(1) ? 'is-active' : ''}>
              <span>{link.index}</span>
              <strong>{link.label}</strong>
            </a>
          ))}
        </nav>
        <div className="rail-bottom">
          <LanguageDropdown LANGUAGES={LANGUAGES} label={UI.language} lang={lang} setLang={setLang} />
          <a className="rail-contact" href={SITE.bookingUrl} target="_blank" rel="noreferrer">
            <span>{UI.contact}</span><span aria-hidden="true">→</span>
          </a>
        </div>
      </aside>

      <header className="mobile-header">
        <a href="#hero" className="mobile-logo" aria-label={UI.home}>
          <img src="/images/logo-ndp.svg" alt="" />
          <span>Daniele Napolitano</span>
        </a>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? UI.close : UI.menu}</span>
          <span className="menu-glyph" aria-hidden="true"><i /><i /></span>
        </button>
      </header>

      <div ref={menuRef} id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
              <span>{link.index}</span>{link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-bottom">
          <LanguageDropdown LANGUAGES={LANGUAGES} label={UI.language} lang={lang} setLang={setLang} tabIndex={menuOpen ? 0 : -1} onChange={() => setMenuOpen(false)} />
          <a href={SITE.bookingUrl} target="_blank" rel="noreferrer" tabIndex={menuOpen ? 0 : -1}>{UI.contact} →</a>
        </div>
      </div>
    </>
  )
}
