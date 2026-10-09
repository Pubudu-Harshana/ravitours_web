"use client";

import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";
import { MapPin } from "lucide-react";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";

export default function DestinationsView() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#07345A] py-16 sm:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0FA3A3_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F6A623] block mb-2">
              {t.destinations.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {t.destinations.title}
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg mt-3 font-light leading-relaxed">
              {t.destinations.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 pb-6 mb-8 border-b border-slate-200 text-slate-700">
          <MapPin className="w-5 h-5 text-[#087EA4]" />
          <span className="text-sm font-bold text-[#07345A]">
            {destinations.length} {t.destinations.placesCount}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((d) => (
            <DestinationCard key={d.id} destination={d} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}
