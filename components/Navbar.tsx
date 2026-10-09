"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, ArrowRight, Palmtree } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const showSolidNav = isScrolled || !isHome;

  const navigationItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.tours, href: "/tours" },
    { label: t.nav.destinations, href: "/destinations" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidNav
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-gradient-to-b from-black/60 via-black/30 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                showSolidNav
                  ? "bg-[#07345A] text-white"
                  : "bg-white/20 backdrop-blur-sm text-white border border-white/30"
              }`}
            >
              <Palmtree className="w-5 h-5 text-[#F6A623]" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-extrabold tracking-wider text-base sm:text-lg leading-tight transition-colors ${
                  showSolidNav ? "text-[#07345A]" : "text-white"
                }`}
              >
                RAVI
              </span>
              <span
                className={`text-[10px] tracking-widest uppercase font-semibold transition-colors ${
                  showSolidNav ? "text-slate-500" : "text-slate-200"
                }`}
              >
                TOURS & TRAVELS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navigationItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    showSolidNav
                      ? isActive
                        ? "text-[#07345A] font-semibold"
                        : "text-slate-600 hover:text-[#07345A]"
                      : isActive
                      ? "text-white font-semibold"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full transition-all ${
                        showSolidNav ? "bg-[#07345A]" : "bg-[#F6A623]"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Selector */}
            <LanguageSelector showSolidNav={showSolidNav} />

            {/* WhatsApp Link */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Hello Ravi Tours & Travels! I would like to inquire about Sri Lanka tours."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.nav.chatWhatsApp}
              className={`p-2.5 rounded-full transition-all flex items-center justify-center ${
                showSolidNav
                  ? "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                  : "bg-emerald-500/90 text-white hover:bg-emerald-500"
              }`}
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>

            {/* Plan Your Trip CTA */}
            <Link
              href="/plan-your-trip"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${
                showSolidNav
                  ? "bg-[#07345A] text-white hover:bg-[#032743] hover:shadow-md"
                  : "bg-[#07345A] text-white hover:bg-[#032743] border border-white/20 shadow-md"
              }`}
            >
              <span>{t.nav.planYourTrip}</span>
              <ArrowRight className="w-4 h-4 text-[#F6A623] rtl-flip" />
            </Link>
          </div>

          {/* Mobile Actions: Language Selector + WhatsApp + Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSelector showSolidNav={showSolidNav} isMobileCompact />

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-500 text-white"
              aria-label={t.nav.chatWhatsApp}
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-2 rounded-lg transition-colors ${
                showSolidNav ? "text-slate-800" : "text-white"
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-xl animate-fadeIn">
          {/* Mobile Language Switcher Quick Bar */}
          <div className="pb-3 mb-3 border-b border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Language / භාෂාව / اللغة
            </span>
            <LanguageSelector showSolidNav={true} align="left" />
          </div>

          <nav className="flex flex-col gap-4">
            {navigationItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base py-2 font-medium border-b border-slate-100 flex items-center justify-between ${
                    isActive ? "text-[#07345A] font-bold" : "text-slate-700"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 rtl-flip" />
                </Link>
              );
            })}
            <div className="pt-2 flex flex-col gap-3">
              <Link
                href="/plan-your-trip"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-[#07345A] text-white font-semibold flex items-center justify-center gap-2"
              >
                <span>{t.nav.planYourTrip}</span>
                <ArrowRight className="w-4 h-4 text-[#F6A623] rtl-flip" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-xl bg-emerald-600 text-white font-semibold flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{t.nav.chatWhatsApp}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
