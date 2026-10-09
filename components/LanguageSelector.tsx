"use client";

import React, { useState, useRef, useEffect, useId } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SUPPORTED_LANGUAGES, Language } from "@/i18n/types";
import FlagIcon from "@/components/FlagIcon";

interface LanguageSelectorProps {
  showSolidNav?: boolean;
  isMobileCompact?: boolean;
  align?: "left" | "right";
  className?: string;
}

export default function LanguageSelector({
  showSolidNav = false,
  isMobileCompact = false,
  align,
  className = "",
}: LanguageSelectorProps) {
  const { language, setLanguage, isRTL, currentLangMeta } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const menuId = useId();
  const buttonId = useId();

  // Determine dropdown alignment
  const effectiveAlign = align || (isRTL ? "left" : "right");

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIsOpen(true);
        const currentIndex = SUPPORTED_LANGUAGES.findIndex(
          (l) => l.code === language
        );
        setFocusedIndex(currentIndex >= 0 ? currentIndex : 0);
      }
      return;
    }

    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        buttonRef.current?.focus();
        break;

      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) =>
          prev < SUPPORTED_LANGUAGES.length - 1 ? prev + 1 : 0
        );
        break;

      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) =>
          prev > 0 ? prev - 1 : SUPPORTED_LANGUAGES.length - 1
        );
        break;

      case "Enter":
      case " ":
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < SUPPORTED_LANGUAGES.length) {
          selectLanguage(SUPPORTED_LANGUAGES[focusedIndex].code);
        }
        break;

      case "Tab":
        setIsOpen(false);
        break;
    }
  };

  const selectLanguage = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  // Focus active option on arrow navigation
  useEffect(() => {
    if (isOpen && listboxRef.current && focusedIndex >= 0) {
      const option = listboxRef.current.children[focusedIndex] as HTMLElement;
      option?.focus();
    }
  }, [isOpen, focusedIndex]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block text-left ${className}`}
      onKeyDown={handleKeyDown}
    >
      {/* Trigger Button */}
      <button
        ref={buttonRef}
        id={buttonId}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={`Select language. Current language: ${currentLangMeta.name}`}
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-1.5 rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#087EA4] ${
          isMobileCompact ? "px-2.5 py-1.5 text-xs" : "px-3 py-1.5 text-xs sm:text-sm"
        } ${
          showSolidNav
            ? "bg-slate-100/90 hover:bg-slate-200/80 text-slate-700 hover:text-[#07345A] border border-slate-200/80"
            : "bg-white/15 hover:bg-white/25 text-white border border-white/25 backdrop-blur-md"
        }`}
      >
        <FlagIcon language={language} className="w-4 h-3 rounded-2xs" />
        <span className="font-semibold uppercase tracking-wider text-xs">
          {isMobileCompact ? currentLangMeta.shortLabel : currentLangMeta.name}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute top-full mt-2 z-50 min-w-[200px] rounded-2xl bg-white p-1.5 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150 ${
            effectiveAlign === "left" ? "left-0" : "right-0"
          }`}
        >
          <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Select Language
            </span>
          </div>

          <ul
            ref={listboxRef}
            id={menuId}
            role="listbox"
            aria-labelledby={buttonId}
            className="space-y-0.5 focus:outline-none"
          >
            {SUPPORTED_LANGUAGES.map((lang, index) => {
              const isSelected = lang.code === language;
              const isFocused = focusedIndex === index;

              return (
                <li
                  key={lang.code}
                  role="option"
                  id={`lang-option-${lang.code}`}
                  aria-selected={isSelected}
                  tabIndex={isFocused ? 0 : -1}
                  onClick={() => selectLanguage(lang.code)}
                  className={`flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer select-none focus:outline-none ${
                    isSelected
                      ? "bg-emerald-50/80 text-emerald-900 font-bold"
                      : isFocused
                      ? "bg-slate-100 text-[#07345A]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#07345A]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <FlagIcon
                      language={lang.code}
                      className="w-5 h-3.5 rounded-2xs shadow-2xs"
                    />
                    <div className="flex flex-col text-left">
                      <span className="leading-tight">{lang.nativeName}</span>
                      {lang.nativeName !== lang.name && (
                        <span className="text-[10px] text-slate-400 font-normal">
                          {lang.name}
                        </span>
                      )}
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
