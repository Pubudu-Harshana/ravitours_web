"use client";

import WhatsAppIcon from "@/components/WhatsAppIcon";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppButton() {
  const { t, isRTL } = useLanguage();

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(
    "Hello Ravi Tours & Travels! I'm interested in planning a trip to Sri Lanka. Could you please assist me?"
  )}`;

  return (
    <aside
      aria-label={t.nav.chatWhatsApp}
      className={`fixed bottom-6 z-40 flex items-center group ${
        isRTL ? "left-6 flex-row-reverse" : "right-6"
      }`}
    >
      {/* Tooltip on hover */}
      <span
        className={`hidden sm:inline-block px-3.5 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-medium tracking-wide shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${
          isRTL ? "ml-3" : "mr-3"
        }`}
      >
        {t.nav.chatWhatsApp} (+94 76 884 6228)
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t.nav.chatWhatsApp} (+94 76 884 6228)`}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-whatsapp focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </aside>
  );
}
