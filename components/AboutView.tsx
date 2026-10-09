"use client";

import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import {
  ShieldCheck,
  Award,
  HeartHandshake,
  Compass,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutView() {
  const { t } = useLanguage();

  const values = [
    {
      icon: ShieldCheck,
      title: "Trust & Safety First",
      description:
        "Every vehicle is comprehensively insured, meticulously sanitized, and driven by government-licensed chauffeurs trained in defensive mountain driving.",
    },
    {
      icon: HeartHandshake,
      title: "Authentic Local Connection",
      description:
        "We introduce you to the true heartbeat of Sri Lanka: family-run spice farms, secluded lagoons, and heritage stories beyond the tourist brochures.",
    },
    {
      icon: Compass,
      title: "Complete Flexibility",
      description:
        "Your holiday moves at your preferred tempo. Want to linger longer at a scenic waterfall or take an impromptu Ceylon tea break? You have full freedom.",
    },
    {
      icon: Award,
      title: "Transparent & Honest",
      description:
        "No hidden charges, no forced shopping commissions, and straightforward communication from your initial inquiry to departure day.",
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#07345A] py-16 sm:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0FA3A3_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F6A623] block mb-2">
              {t.aboutPage.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {t.aboutPage.title}
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg mt-3 font-light leading-relaxed">
              {t.aboutPage.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Photography */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#087EA4]">
              <Compass className="w-4 h-4" />
              <span>Our Story</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07345A] tracking-tight">
              More Than Just a Trip. <br />
              A Journey of Lifetime Memories.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded on the belief that travel in Sri Lanka is best experienced
              personally and flexibly, <strong>Ravi Tours &amp; Travels</strong> began
              with a single mission: to provide independent travelers with reliable,
              high-quality private transport and knowledgeable guidance across the
              island.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Over the years, we have guided solo explorers, couples on romantic
              honeymoons, wildlife enthusiasts, and families across the Cultural
              Triangle, the cool tea plantations of Nuwara Eliya and Ella, the leopard
              savannas of Yala, and the golden shores of Mirissa and Galle.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <span className="text-2xl font-extrabold text-[#07345A] block">
                  100%
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Customized Private Itineraries
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <span className="text-2xl font-extrabold text-[#087EA4] block">
                  24/7
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Dedicated Traveler Assistance
                </span>
              </div>
            </div>
          </div>

          {/* Photo Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80"
                alt="Ella mountain gap in Sri Lanka"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-cover"
              />
            </div>

            <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg mt-8">
              <Image
                src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=800&q=80"
                alt="Wild elephant in Sri Lanka national park"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-slate-50/70 py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087EA4] block mb-2">
              {t.aboutPage.whyUsBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07345A]">
              {t.aboutPage.whyUsTitle}
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              {t.aboutPage.whyUsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#087EA4]/10 text-[#087EA4] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#07345A] text-base">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}
