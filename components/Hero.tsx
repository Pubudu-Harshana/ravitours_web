"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, ShieldCheck, Clock, Car } from "lucide-react";
import SearchPanel from "./SearchPanel";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-28 overflow-hidden">
      {/* Background Image — cinematic Sri Lanka: Sigiriya at blue hour, mist, tea terraces & ocean */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Cinematic aerial view of Sigiriya Lion Rock Fortress glowing at blue hour above misty tropical jungle — Sri Lanka"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%] scale-105 transition-transform duration-[1500ms] ease-out"
        />
        {/* Left-side dark gradient for text legibility, preserves right-side image beauty */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020f1f]/90 via-[#032743]/60 to-transparent" />
        {/* Subtle bottom vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020f1f]/70 via-transparent to-[#020f1f]/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 text-white space-y-6 sm:space-y-8">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-100">
              <span className="w-2 h-2 rounded-full bg-[#F6A623] animate-pulse" />
              {t.hero.eyebrow}
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1]">
              {t.hero.titleMain}{" "}
              <span className="block sm:inline font-accent text-[#F6A623] font-normal italic tracking-normal drop-shadow-sm">
                {t.hero.titleAccent}
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-light max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/tours"
                className="px-7 py-3.5 rounded-full bg-[#F6A623] hover:bg-[#E59515] text-[#07345A] font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <span>{t.hero.exploreTours}</span>
                <ArrowRight className="w-4 h-4 text-[#07345A] group-hover:translate-x-1 rtl-flip transition-transform" />
              </Link>
              <Link
                href="/plan-your-trip"
                className="px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm"
              >
                {t.hero.planYourTrip}
              </Link>
            </div>

            {/* Trust Badges Row */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/10">
                <Car className="w-4 h-4 text-[#F6A623] shrink-0" />
                <span className="font-medium truncate">{t.hero.privateTours}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#F6A623] shrink-0" />
                <span className="font-medium truncate">{t.hero.airportTransfers}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/10">
                <Compass className="w-4 h-4 text-[#F6A623] shrink-0" />
                <span className="font-medium truncate">{t.hero.localExperiences}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/10">
                <Clock className="w-4 h-4 text-[#F6A623] shrink-0" />
                <span className="font-medium truncate">{t.hero.support247}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Search Panel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <SearchPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
