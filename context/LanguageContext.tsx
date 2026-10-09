"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Language, LanguageOption, SUPPORTED_LANGUAGES } from "@/i18n/types";
import { translations, TranslationDictionary } from "@/i18n/translations";
import {
  tourTranslations,
  destinationTranslations,
} from "@/i18n/catalogTranslations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: TranslationDictionary;
  currentLangMeta: LanguageOption;
  getTourText: (
    slug: string,
    fallback: { title: string; tag?: string; description?: string }
  ) => { title: string; tag?: string; description?: string };
  getDestinationText: (
    slug: string,
    fallback: { name: string; tag?: string }
  ) => { name: string; tag?: string };
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "ravitours_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  // Initialize language from localStorage on client mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (
        savedLang &&
        SUPPORTED_LANGUAGES.some((item) => item.code === savedLang)
      ) {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
        document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
      } else {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
      }
    } catch {
      // localStorage fallback if unavailable
    }
    setMounted(true);
  }, []);

  const setLanguage = useCallback((newLang: Language) => {
    if (!SUPPORTED_LANGUAGES.some((item) => item.code === newLang)) return;
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // ignore storage errors
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    }
  }, []);

  const isRTL = language === "ar";
  const t = translations[language] || translations.en;
  const currentLangMeta =
    SUPPORTED_LANGUAGES.find((item) => item.code === language) ||
    SUPPORTED_LANGUAGES[0];

  const getTourText = useCallback(
    (
      slug: string,
      fallback: { title: string; tag?: string; description?: string }
    ) => {
      const langTour = tourTranslations[language]?.[slug];
      if (langTour) {
        return {
          title: langTour.title || fallback.title,
          tag: langTour.tag || fallback.tag,
          description: langTour.description || fallback.description,
        };
      }
      return fallback;
    },
    [language]
  );

  const getDestinationText = useCallback(
    (slug: string, fallback: { name: string; tag?: string }) => {
      const langDest = destinationTranslations[language]?.[slug];
      if (langDest) {
        return {
          name: langDest.name || fallback.name,
          tag: langDest.tag || fallback.tag,
        };
      }
      return fallback;
    },
    [language]
  );

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isRTL,
        t,
        currentLangMeta,
        getTourText,
        getDestinationText,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
