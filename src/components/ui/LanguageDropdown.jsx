import { useEffect, useRef, useState } from 'react'

export default function LanguageDropdown({ LANGUAGES, label, lang, setLang, tabIndex = 0, onChange }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const current = LANGUAGES.find((language) => language.code === lang) ?? LANGUAGES[0]

  useEffect(() => {
    const close = (event) => {
      if (event.key === 'Escape') setOpen(false)
      if (event.type === 'pointerdown' && !rootRef.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('keydown', close)
    document.addEventListener('pointerdown', close)
    return () => {
      document.removeEventListener('keydown', close)
      document.removeEventListener('pointerdown', close)
    }
  }, [])

  const selectLanguage = (code) => {
    setLang(code)
    setOpen(false)
    onChange?.()
  }

  return (
    <div className="language-dropdown" ref={rootRef}>
      <button
        type="button"
        className="language-trigger"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        tabIndex={tabIndex}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{current.short}</span>
        <strong>{current.label}</strong>
        <i aria-hidden="true" />
      </button>
      <div className="language-options" role="listbox" aria-label={label} hidden={!open}>
        {LANGUAGES.map((language) => (
          <button
            type="button"
            role="option"
            aria-selected={language.code === lang}
            key={language.code}
            onClick={() => selectLanguage(language.code)}
          >
            <span>{language.short}</span>{language.label}
          </button>
        ))}
      </div>
    </div>
  )
}
