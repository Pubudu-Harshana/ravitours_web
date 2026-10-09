"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Clock } from "lucide-react";
import { TourPackage } from "@/data/tours";
import { useLanguage } from "@/context/LanguageContext";

interface TourCardProps {
  tour: TourPackage;
}

export default function TourCard({ tour }: TourCardProps) {
  const { t, getTourText } = useLanguage();
  const localized = getTourText(tour.slug, {
    title: tour.title,
    tag: tour.tag,
    description: tour.description,
  });

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Tour Image Container */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
        <Image
          src={tour.image}
          alt={localized.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Category / Tag Badge */}
        {localized.tag && (
          <div className="absolute top-3 left-3 bg-[#07345A]/90 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-sm">
            {localized.tag}
          </div>
        )}

        {/* Circular Arrow Action Icon */}
        <Link
          href={`/tours/${tour.slug}`}
          aria-label={`View ${localized.title}`}
          className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 text-[#07345A] hover:bg-[#F6A623] hover:text-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110"
        >
          <ArrowUpRight className="w-4 h-4 rtl-flip" />
        </Link>
      </div>

      {/* Tour Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Duration */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2">
            <Clock className="w-3.5 h-3.5 text-[#087EA4]" />
            <span>{tour.duration}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-[#07345A] group-hover:text-[#087EA4] transition-colors line-clamp-1">
            <Link href={`/tours/${tour.slug}`}>{localized.title}</Link>
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mt-2 leading-relaxed">
            {localized.description}
          </p>
        </div>

        {/* Bottom Metadata & CTA */}
        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
              {t.tours.pricingLabel}
            </span>
            <span className="text-sm font-bold text-[#07345A]">
              {tour.priceNote}
            </span>
          </div>

          <Link
            href={`/tours/${tour.slug}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#087EA4] hover:text-[#07345A] group-hover:translate-x-0.5 transition-all"
          >
            <span>{t.tours.viewPackage}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F6A623] rtl-flip" />
          </Link>
        </div>
      </div>
    </div>
  );
}
