'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';

type Language = 'pt-br' | 'eng';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('pt-br');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

const LanguageSelector: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const handleChange = (lang: Language) => {
        setLanguage(lang);
    };

    return (
        <div className="flex absolute gap-2 text-xs">
            <button
                onClick={() => handleChange('pt-br')}
                className={`transition-all cursor-pointer duration-200 hover:opacity-80 whitespace-nowrap ${
                    language === 'pt-br' 
                        ? 'font-bold' 
                        : 'font-normal'
                }`}
                aria-pressed={language === 'pt-br'}
            >
                PT-BR
            </button>
            <span className={`transition-all cursor-pointer duration-200 hover:opacity-80 whitespace-nowrap`}   >|</span>
            <button
                onClick={() => handleChange('eng')}
                className={`transition-all cursor-pointer duration-200 hover:opacity-80 whitespace-nowrap ${
                    language === 'eng' 
                        ? 'font-bold' 
                        : 'font-normal'
                }`}
                aria-pressed={language === 'eng'}
            >
                ENG
            </button>
        </div>
    );
};

export default LanguageSelector;