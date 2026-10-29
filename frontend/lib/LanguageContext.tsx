"use client";
// lib/LanguageContext.tsx
// Seamless English / Bangla localization provider with localStorage persistence.

import React, { createContext, useContext, useState, useEffect } from "react";
import { content, ContentShape, Lang } from "./content";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: ContentShape;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  t: content.en,
});

const STORAGE_KEY = "suncare_preferred_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Read saved preference on mount asynchronously to prevent hydration mismatch and cascading renders
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
        if (saved === "en" || saved === "bn") {
          setLangState(saved);
          document.documentElement.lang = saved === "bn" ? "bn" : "en";
        }
      } catch {
        // Storage unavailable
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      document.documentElement.lang = newLang === "bn" ? "bn" : "en";
    } catch {
      // Storage unavailable
    }
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "bn" : "en");
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t: content[lang] || content.en,
      }}
    >
      <div className={lang === "bn" ? "font-bangla" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
