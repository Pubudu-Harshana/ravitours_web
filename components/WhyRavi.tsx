"use client";

import Image from "next/image";
import { Compass, Car, Mountain, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyRavi() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Compass,
      title: t.whyRavi.card1Title,
      description: t.whyRavi.card1Desc,
    },
    {
      icon: Car,
      title: t.whyRavi.card2Title,
      description: t.whyRavi.card2Desc,
    },
    {
      icon: Mountain,
      title: t.whyRavi.card3Title,
      description: t.whyRavi.card3Desc,
    },
    {
      icon: Users,
      title: t.whyRavi.card4Title,
      description: t.whyRavi.card4Desc,
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden border-y border-slate-800/40">
      {/* Scenic Background: Emerald Nuwara Eliya tea highlands */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/destinations/nuwara-eliya-tea-estate.jpg"
          alt="Emerald Ceylon tea hills in Nuwara Eliya Sri Lanka"
          fill
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        {/* Deep luxury oceanic & navy gradient overlay for pristine legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020F1F]/95 via-[#032743]/90 to-[#07345A]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Heading */}
          <div className="lg:col-span-4 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-bold uppercase tracking-widest text-[#F6A623]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F6A623] animate-pulse" />
              {t.whyRavi.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              {t.whyRavi.titleMain} <br className="hidden sm:inline" />
              <span className="text-[#F6A623] font-accent text-3xl sm:text-4xl lg:text-5xl font-normal block sm:inline mt-1 sm:mt-0">
                {t.whyRavi.titleAccent}
              </span>
            </h2>
            <p className="text-sm text-slate-300 font-light leading-relaxed max-w-md pt-1">
              Your safety, comfort, and authentic Sri Lankan memories are our top priority from airport touchdown to farewell.
            </p>
          </div>

          {/* Right Benefits Grid (4 items) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-white/30 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#087EA4]/15 text-[#087EA4] flex items-center justify-center mb-3.5 group-hover:bg-[#F6A623] group-hover:text-[#07345A] transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#07345A] mb-1.5 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

