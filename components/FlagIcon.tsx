import React from "react";
import { Language } from "@/i18n/types";

interface FlagIconProps {
  language: Language;
  className?: string;
}

export default function FlagIcon({ language, className = "w-5 h-3.5" }: FlagIconProps) {
  switch (language) {
    case "en":
      // United Kingdom (Union Jack)
      return (
        <svg
          viewBox="0 0 60 30"
          className={`inline-block rounded-xs overflow-hidden shadow-2xs shrink-0 ${className}`}
          aria-hidden="true"
        >
          <clipPath id="uk-clip">
            <path d="M0 0v30h60V0z" />
          </clipPath>
          <g clipPath="url(#uk-clip)">
            <path d="M0 0v30h60V0z" fill="#012169" />
            <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
            <path
              d="M0 0l60 30m0-30L0 30"
              clipPath="url(#uk-clip)"
              stroke="#C8102E"
              strokeWidth="2"
            />
            <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
            <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      );

    case "ar":
      // Saudi Arabia / Arabic Flag (Green with white emblem & sword)
      return (
        <svg
          viewBox="0 0 60 30"
          className={`inline-block rounded-xs overflow-hidden shadow-2xs shrink-0 ${className}`}
          aria-hidden="true"
        >
          <rect width="60" height="30" fill="#006C35" />
          {/* Arabic Calligraphy aesthetic mark & sword */}
          <path
            d="M16 11c2-1 6-2 14-2s12 1 14 2c-3 1-7 1.5-14 1.5S19 12 16 11zm3 5c3-.5 8-1 11-1s8 .5 11 1c-3 .5-8 1-11 1s-8-.5-11-1z"
            fill="#fff"
            opacity="0.95"
          />
          {/* Sword */}
          <path
            d="M17 19.5h25v1.5H17zm25-1l3 1.7-3 1.8v-3.5zm-27 1.5v-2h2v2h-2z"
            fill="#fff"
          />
        </svg>
      );

    case "de":
      // Germany (Black, Red, Gold horizontal tricolor)
      return (
        <svg
          viewBox="0 0 60 30"
          className={`inline-block rounded-xs overflow-hidden shadow-2xs shrink-0 ${className}`}
          aria-hidden="true"
        >
          <rect y="0" width="60" height="10" fill="#000000" />
          <rect y="10" width="60" height="10" fill="#DD0000" />
          <rect y="20" width="60" height="10" fill="#FFCE00" />
        </svg>
      );

    case "fr":
      // France (Blue, White, Red vertical tricolor)
      return (
        <svg
          viewBox="0 0 60 30"
          className={`inline-block rounded-xs overflow-hidden shadow-2xs shrink-0 ${className}`}
          aria-hidden="true"
        >
          <rect x="0" width="20" height="30" fill="#002654" />
          <rect x="20" width="20" height="30" fill="#FFFFFF" />
          <rect x="40" width="20" height="30" fill="#ED2939" />
        </svg>
      );

    default:
      return null;
  }
}
