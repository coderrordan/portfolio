import { useLanguage } from './LanguageContext'
import * as it from '../data/content'
import * as en from '../data/content.en'

const translations = { it, en }

export function useTranslation() {
    const { lang, setLang } = useLanguage()
    const t = translations[lang] || translations.en
    return { ...t, lang, setLang }
}
