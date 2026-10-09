"use client";

import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";
import { Compass, Sparkles } from "lucide-react";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";

export default function ToursView() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#07345A] py-16 sm:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0FA3A3_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F6A623] block mb-2">
              {t.tours.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {t.tours.title}
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg mt-3 font-light leading-relaxed">
              {t.tours.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Tours Grid & Filters Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-slate-200 gap-4">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#087EA4]" />
            <span className="text-sm font-bold text-[#07345A]">
              {t.tours.showingTours} ({tours.length})
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Sparkles className="w-4 h-4 text-[#F6A623]" />
            <span>{t.tours.chauffeurIncluded}</span>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}
