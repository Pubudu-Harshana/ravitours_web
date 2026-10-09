"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { SpecialOffer } from "@/data/tours";
import { useLanguage } from "@/context/LanguageContext";

interface OfferCardProps {
  offer: SpecialOffer;
}

export default function OfferCard({ offer }: OfferCardProps) {
  const { t, getTourText } = useLanguage();
  const localized = getTourText(offer.slug, {
    title: offer.title,
    description: offer.description,
  });

  const getBadgeStyle = (badge: SpecialOffer["badge"]) => {
    switch (badge) {
      case "POPULAR":
        return "bg-amber-500 text-white";
      case "NEW":
        return "bg-teal-500 text-white";
      case "LIMITED OFFER":
        return "bg-rose-500 text-white";
      case "FEATURED":
        return "bg-indigo-600 text-white";
      default:
        return "bg-slate-700 text-white";
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row p-3.5 gap-4">
      {/* Thumbnail */}
      <div className="relative w-full sm:w-36 h-36 sm:h-auto rounded-xl overflow-hidden shrink-0 bg-slate-100">
        <Image
          src={offer.image}
          alt={localized.title}
          fill
          sizes="(max-width: 640px) 100vw, 150px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2">
          <span
            className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm ${getBadgeStyle(
              offer.badge
            )}`}
          >
            {offer.badge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
            <Clock className="w-3.5 h-3.5 text-[#087EA4]" />
            <span>{offer.duration}</span>
          </div>

          <h3 className="text-base font-bold text-[#07345A] group-hover:text-[#087EA4] transition-colors">
            {localized.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 mt-1">
            {localized.description}
          </p>
        </div>

        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
              {t.offers.offerRate}
            </span>
            <span className="text-xs font-bold text-[#07345A]">
              {offer.priceNote}
            </span>
          </div>

          <Link
            href={`/tours/${offer.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#087EA4] hover:text-[#07345A] group-hover:translate-x-0.5 transition-all"
          >
            <span>{t.offers.viewDetails}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F6A623] rtl-flip" />
          </Link>
        </div>
      </div>
    </div>
  );
}
