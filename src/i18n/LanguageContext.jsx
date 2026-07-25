import { createContext, useState, useEffect, useContext } from 'react'
import { META as IT_META } from '../data/content'
import { META as EN_META } from '../data/content.en'

const LanguageContext = createContext()

function detectLanguage() {
    const saved = localStorage.getItem('portfolio-lang')
    if (saved === 'it' || saved === 'en') return saved
    const browserLang = navigator.language || navigator.userLanguage || ''
    return browserLang.toLowerCase().startsWith('it') ? 'it' : 'en'
}

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(detectLanguage)

    useEffect(() => {
        localStorage.setItem('portfolio-lang', lang)
        document.documentElement.lang = lang
        const meta = lang === 'it' ? IT_META : EN_META
        document.title = meta.title
        document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
        document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title)
        document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description)
        document.querySelector('meta[property="og:locale"]')?.setAttribute('content', meta.locale)
        document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', meta.title)
        document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', meta.description)
    }, [lang])

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const ctx = useContext(LanguageContext)
    if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
    return ctx
}
