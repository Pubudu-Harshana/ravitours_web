"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Testimonial } from "@/data/testimonials";
import { useLanguage } from "@/context/LanguageContext";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full relative">
      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? "fill-[#F6A623] text-[#F6A623]"
                  : "text-slate-200"
              }`}
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>

      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#07345A]">
              {testimonial.name}
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              {testimonial.location}
            </p>
          </div>
        </div>

        {testimonial.isDemo && (
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-500">
            {t.testimonials.demoBadge}
          </span>
        )}
      </div>
    </div>
  );
}
