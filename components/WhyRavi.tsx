"use client";

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
    <section className="bg-[#F0F6FA] py-16 sm:py-20 border-y border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Heading */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087EA4] block">
              {t.whyRavi.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07345A] tracking-tight leading-snug">
              {t.whyRavi.titleMain} <br className="hidden sm:inline" />
              {t.whyRavi.titleAccent}
            </h2>
          </div>

          {/* Right Benefits Grid (4 items) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#087EA4]/10 text-[#087EA4] flex items-center justify-center mb-3.5 group-hover:bg-[#07345A] group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#07345A] mb-1">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
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
