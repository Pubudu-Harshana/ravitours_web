"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Destination } from "@/data/destinations";
import { useLanguage } from "@/context/LanguageContext";

interface DestinationCardProps {
  destination: Destination;
  isLarge?: boolean;
}

export default function DestinationCard({
  destination,
  isLarge = false,
}: DestinationCardProps) {
  const { getDestinationText } = useLanguage();
  const localized = getDestinationText(destination.slug, {
    name: destination.name,
    tag: destination.tag,
  });

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className={`group relative block overflow-hidden rounded-3xl bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-500 ${
        isLarge ? "h-[360px] md:h-[460px] lg:h-full min-h-[360px]" : "h-[220px]"
      }`}
    >
      {/* Background Image */}
      <Image
        src={destination.image}
        alt={`${localized.name} - ${localized.tag}`}
        fill
        sizes={
          isLarge
            ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            : "(max-width: 768px) 100vw, 25vw"
        }
        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#032743]/90 via-[#032743]/30 to-transparent group-hover:from-[#032743]/95 group-hover:via-[#032743]/45 transition-colors duration-300" />

      {/* Card Content */}
      <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end text-white">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h3
              className={`font-bold tracking-tight text-white group-hover:text-[#F6A623] transition-colors ${
                isLarge ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
              }`}
            >
              {localized.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
              {localized.tag}
            </p>
          </div>

          {/* Circular Arrow Button */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#F6A623] group-hover:text-[#07345A] group-hover:border-[#F6A623] transition-all duration-300 shrink-0">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl-flip transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
