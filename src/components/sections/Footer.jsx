import { useTranslation } from '../../i18n/useTranslation'

export default function Footer() {
  const { SITE, UI } = useTranslation()

  return (
    <footer className="site-footer">
      <div><img src="/images/logo-ndp.svg" alt="" /><strong>{SITE.name}</strong></div>
      <p>© {new Date().getFullYear()} · {UI.footerLine}<br />P.IVA {SITE.vat}</p>
      <div className="footer-links">
        <a href={SITE.socials.substack} target="_blank" rel="noreferrer">{UI.substack} ↗</a>
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </div>
    </footer>
  )
}
