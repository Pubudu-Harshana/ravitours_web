"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Testimonial } from "@/data/testimonials";
import { useLanguage } from "@/context/LanguageContext";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function getInitials(name: string): string {
  // Strip out quotes, parentheses, special characters for initials
  const cleaned = name.replace(/["“”'()]/g, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "RT";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const colorVariants = [
  "bg-sky-50 text-[#087EA4] border-sky-200/70",
  "bg-amber-50 text-amber-700 border-amber-200/70",
  "bg-blue-50 text-[#07345A] border-blue-200/70",
  "bg-teal-50 text-teal-700 border-teal-200/70",
  "bg-indigo-50 text-indigo-700 border-indigo-200/70",
];

function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash << 5) - hash + name.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % colorVariants.length;
  return colorVariants[index];
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full relative group">
      <div className="flex-1 flex flex-col">
        {/* Star Rating - 5 gold stars */}
        <div
          className="flex items-center gap-1 mb-4"
          aria-label={`${testimonial.rating} out of 5 stars`}
        >
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
          <span className="sr-only">5 out of 5 stars</span>
        </div>

        {/* Full Review Text */}
        <div className="flex-1 max-h-72 overflow-y-auto pr-1 select-text scrollbar-thin scrollbar-thumb-slate-200">
          <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-slate-200 flex items-center justify-center">
            {testimonial.avatar ? (
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                sizes="44px"
                className="object-cover"
              />
            ) : (
              <div
                className={`w-full h-full flex items-center justify-center font-bold text-xs ${getAvatarColor(
                  testimonial.name
                )}`}
              >
                {getInitials(testimonial.name)}
              </div>
            )}
          </div>
          <div className="min-w-0">
            <h4 className="text-sm font-bold text-[#07345A] truncate">
              {testimonial.name}
            </h4>
            <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5 mt-0.5">
              {testimonial.flag && (
                <span
                  className="text-sm leading-none shrink-0"
                  role="img"
                  aria-label={testimonial.location}
                >
                  {testimonial.flag}
                </span>
              )}
              <span className="truncate">{testimonial.location}</span>
            </p>
          </div>
        </div>

        {testimonial.isDemo && (
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-500 shrink-0">
            {t.testimonials.demoBadge}
          </span>
        )}
      </div>
    </div>
  );
}
