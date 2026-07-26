import { useTranslation } from '../../i18n/useTranslation'

export default function Footer() {
  const { SITE, UI } = useTranslation()

  return (
    <footer className="site-footer" data-reveal>
      <div><img src="/images/logo-ndp.svg" alt="" /><strong>{SITE.name}</strong></div>
      <p>© {new Date().getFullYear()} · {UI.footerLine} · P.IVA {SITE.vat}</p>
      <div className="footer-links">
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </div>
    </footer>
  )
}
