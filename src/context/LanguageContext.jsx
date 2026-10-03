import { createContext, useContext, useState } from 'react';
import translations from '../translations/translations';

const LanguageContext = createContext(null);

export const LANGUAGES = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ta', label: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', label: 'తెలుగు', flag: '🇮🇳' },
];

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('en');

    const t = translations[lang];

    return (
        <LanguageContext.Provider value={{ lang, setLang, t, LANGUAGES }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
    return ctx;
}
