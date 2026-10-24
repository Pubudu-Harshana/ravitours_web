export type Language = "en" | "ar" | "de" | "fr";

export interface LanguageOption {
  code: Language;
  shortLabel: string;
  name: string;
  nativeName: string;
  flagEmoji: string;
  dir: "ltr" | "rtl";
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: "en",
    shortLabel: "EN",
    name: "English",
    nativeName: "English",
    flagEmoji: "🇬🇧",
    dir: "ltr",
  },
  {
    code: "ar",
    shortLabel: "عرب",
    name: "Arabic",
    nativeName: "العربية",
    flagEmoji: "🇸🇦",
    dir: "rtl",
  },
  {
    code: "de",
    shortLabel: "DE",
    name: "German",
    nativeName: "Deutsch",
    flagEmoji: "🇩🇪",
    dir: "ltr",
  },
  {
    code: "fr",
    shortLabel: "FR",
    name: "French",
    nativeName: "Français",
    flagEmoji: "🇫🇷",
    dir: "ltr",
  },
];
