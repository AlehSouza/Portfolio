"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

type Language = "pt-br" | "eng";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("pt-br");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider">
      <button
        onClick={() => setLanguage("pt-br")}
        className={`cursor-pointer transition-opacity hover:opacity-100 ${
          language === "pt-br" ? "opacity-100" : "opacity-40"
        }`}
        aria-pressed={language === "pt-br"}
      >
        PT
      </button>
      <span className="opacity-30">/</span>
      <button
        onClick={() => setLanguage("eng")}
        className={`cursor-pointer transition-opacity hover:opacity-100 ${
          language === "eng" ? "opacity-100" : "opacity-40"
        }`}
        aria-pressed={language === "eng"}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
