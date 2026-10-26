"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, ShieldCheck, Clock, Car, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-24 overflow-hidden">
      {/* Background Image — cinematic Sri Lanka sunrise with ocean & misty rainforest */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/landing page image.png"
          alt="Cinematic scenic view of Sri Lanka — Ravi Tours & Travels"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%] scale-105"
        />
        {/* Oceanic twilight gradient overlays for text legibility and rich 3D island contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020f1f]/95 via-[#032743]/80 to-[#020f1f]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020f1f]/85 via-transparent to-[#020f1f]/40" />
      </div>

      <div className="relative z-10 max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-6 xl:col-span-5 text-white space-y-6 sm:space-y-7">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-100">
              <span className="w-2 h-2 rounded-full bg-[#F6A623] animate-pulse" />
              RAVI TOURS &amp; TRAVELS
            </div>

            {/* Main Heading & Slogan */}
            <div className="space-y-2.5">
              <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-[3.75rem] font-extrabold tracking-tight leading-[1.1]">
                <span className="hero-gradient-text drop-shadow-sm">
                  Discover Sri Lanka,
                </span>{" "}
                <span className="block sm:inline font-accent text-[#F6A623] font-normal italic tracking-normal drop-shadow-sm">
                  Your Way
                </span>
              </h1>

              {/* Slogan */}
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#38bdf8] tracking-wide flex items-center gap-2 pt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F6A623] shrink-0" />
                <span>Sri Lanka Travel, Powered by Exceptional Customer Service</span>
              </h3>
            </div>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-slate-200 font-light max-w-xl leading-relaxed">
              Discover Sri Lanka with personalized private tours, reliable airport transfers, comfortable chauffeur services, and handpicked stays. Explore the island’s iconic destinations and hidden gems with a trusted local travel partner dedicated to exceptional customer service.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/tours"
                className="px-7 py-3.5 rounded-full bg-[#F6A623] hover:bg-[#E59515] text-[#07345A] font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <span>Explore Tours</span>
                <ArrowRight className="w-4 h-4 text-[#07345A] group-hover:translate-x-1 rtl-flip transition-transform" />
              </Link>
              <Link
                href="/plan-your-trip"
                className="px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm"
              >
                Plan Your Trip
              </Link>
            </div>

            {/* Service Highlights Row - Larger, Clear & Fully Readable */}
            <div className="pt-6 border-t border-white/15">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-100 bg-white/10 hover:bg-white/15 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/15 transition-colors shadow-xs">
                  <Car className="w-4 h-4 text-[#F6A623] shrink-0" />
                  <span className="font-semibold">Private Tours</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-100 bg-white/10 hover:bg-white/15 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/15 transition-colors shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-[#F6A623] shrink-0" />
                  <span className="font-semibold">Airport Transfers</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-100 bg-white/10 hover:bg-white/15 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/15 transition-colors shadow-xs">
                  <Compass className="w-4 h-4 text-[#F6A623] shrink-0" />
                  <span className="font-semibold">Local Experiences</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-100 bg-white/10 hover:bg-white/15 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/15 transition-colors shadow-xs">
                  <Clock className="w-4 h-4 text-[#F6A623] shrink-0" />
                  <span className="font-semibold">Personalized Customer Care</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sri Lanka 3D Landmark Travel Map */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-center justify-center relative w-full pt-4 lg:pt-0">
            {/* Ambient Radial Glow Aura to lift the 3D island off the background */}
            <div
              className="absolute inset-0 bg-radial from-[#087EA4]/35 via-[#0FA3A3]/15 to-transparent blur-3xl pointer-events-none opacity-80"
              aria-hidden="true"
            />

            {/* Seamless 3D Map Diorama Container with Gentle Levitation Animation */}
            <div className="relative w-full max-w-[620px] lg:max-w-none animate-float-island">
              <div className="relative w-full aspect-[1698/926] transition-transform duration-700 ease-out hover:scale-[1.02]">
                <Image
                  src="/images/sri-lanka-3d-map.png"
                  alt="Sri Lanka 3D Landmark Travel Map — Sigiriya, Kandy, Nuwara Eliya, Ella, Yala & Southern Coast"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, (max-width: 1400px) 58vw, 840px"
                  className="object-contain drop-shadow-[0_25px_35px_rgba(2,15,31,0.7)] drop-shadow-[0_8px_15px_rgba(8,126,164,0.3)] select-none"
                />
              </div>

              {/* Natural Highlights Pill Strip */}
              <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2 px-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-semibold text-slate-200 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F6A623] animate-pulse" />
                  14+ Iconic Destinations
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-semibold text-[#38bdf8] shadow-lg">
                  <MapPin className="w-3.5 h-3.5 text-[#F6A623]" />
                  Personalized Private Tours Across Sri Lanka
                </span>
              </div>

              {/* Brand Tagline */}
              <p className="mt-2.5 text-center text-xs sm:text-sm text-slate-300/90 font-medium tracking-wide">
                Your Journey. Our Personal Care. Unforgettable Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
