"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(
    "Hello Ravi Tours & Travels! I'm ready to plan my Sri Lankan adventure."
  )}`;

  return (
    <section className="relative py-24 sm:py-28 overflow-hidden">
      {/* Background Image: Aerial tropical coast with turquoise waters */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
          alt="Sri Lanka tropical paradise coast"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#032743]/90 via-[#07345A]/85 to-[#087EA4]/75" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          {t.cta.title}
        </h2>
        <p className="text-slate-200 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          {t.cta.subtitle}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/plan-your-trip"
            className="px-8 py-3.5 rounded-full bg-[#F6A623] hover:bg-[#E59515] text-[#07345A] font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            <span>{t.cta.planTripBtn}</span>
            <ArrowRight className="w-4 h-4 text-[#07345A] group-hover:translate-x-1 rtl-flip transition-transform" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base flex items-center gap-2 transition-all duration-200 shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>{t.cta.whatsappBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
