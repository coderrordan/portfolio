import { createContext, useState, useEffect, useContext } from 'react'

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
