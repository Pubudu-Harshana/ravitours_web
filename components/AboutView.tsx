"use client";

import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import TravelerGallery from "@/components/TravelerGallery";
import {
  ShieldCheck,
  Award,
  HeartHandshake,
  Compass,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  Sparkles,
  Users,
  CheckCircle2,
  ThumbsUp,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutView() {
  const { t } = useLanguage();

  const values = [
    {
      number: "01",
      icon: ShieldCheck,
      title: "Safety & Reliability",
      description:
        "Travel with confidence in well-maintained vehicles and with experienced drivers. Your comfort and safety are our priorities throughout your journey.",
      tag: "Vetted Drivers & Insured Fleet",
      gradient: "from-[#087EA4] to-cyan-600",
      borderHover: "hover:border-[#087EA4]/40 hover:shadow-[#087EA4]/10",
      numberColor: "text-blue-100 group-hover:text-blue-200/80",
    },
    {
      number: "02",
      icon: Compass,
      title: "Authentic Local Experiences",
      description:
        "Discover Sri Lanka beyond the usual tourist routes, from cultural landmarks and local traditions to scenic landscapes and hidden gems.",
      tag: "Hidden Gems & Cultural Heritage",
      gradient: "from-[#F6A623] to-amber-600",
      borderHover: "hover:border-[#F6A623]/40 hover:shadow-[#F6A623]/10",
      numberColor: "text-amber-100 group-hover:text-amber-200/80",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Personalized Travel",
      description:
        "Enjoy the freedom to explore at your own pace. We tailor your itinerary to your interests, schedule, and budget.",
      tag: "100% Flexible Pace & Routes",
      gradient: "from-emerald-500 to-teal-600",
      borderHover: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
      numberColor: "text-emerald-100 group-hover:text-emerald-200/80",
    },
    {
      number: "04",
      icon: Award,
      title: "Honest & Transparent Service",
      description:
        "Enjoy clear communication, transparent pricing, and personalized assistance from your first enquiry to the end of your journey.",
      tag: "Zero Hidden Fees & Direct Care",
      gradient: "from-[#07345A] to-indigo-700",
      borderHover: "hover:border-[#07345A]/40 hover:shadow-[#07345A]/10",
      numberColor: "text-slate-100 group-hover:text-slate-200/80",
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#087EA4]/10 border border-[#087EA4]/20 text-[#07345A] text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#F6A623]" />
              <span>20+ Years Island-Wide Tour Excellence</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07345A] tracking-tight leading-tight">
              Sri Lanka&apos;s Trusted Tour Partner. <br />
              <span className="text-[#087EA4]">No.01 Customer Service</span> with 20+ Years Experience.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Backed by over <strong>20+ years of hands-on experience across every corner of Sri Lanka</strong>, 
              <strong> Ravi Tours &amp; Travels</strong> was founded with a single mission: to deliver unforgettable, 
              private holiday journeys built on <strong>uncompromising trust, comfort, and personalized care</strong>.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We take immense pride in our reputation for <strong>No.01 customer service</strong>. From the moment 
              you land at Bandaranaike International Airport until your final departure, our government-certified, 
              English-speaking private chauffeur guides ensure a seamless experience throughout the ancient Cultural Triangle, 
              misty Ceylon tea hills of Nuwara Eliya and Ella, wildlife safaris in Yala, and the golden southern coast.
            </p>

            {/* 4 Key Statistics Grid */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center sm:text-left">
                <span className="text-2xl font-black text-[#07345A] block">
                  20+
                </span>
                <span className="text-[11px] text-slate-500 font-medium leading-tight block mt-0.5">
                  Years Island-Wide Experience
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center sm:text-left">
                <span className="text-2xl font-black text-[#F6A623] block">
                  No.01
                </span>
                <span className="text-[11px] text-slate-500 font-medium leading-tight block mt-0.5">
                  Rated Customer Service
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center sm:text-left">
                <span className="text-2xl font-black text-[#087EA4] block">
                  100%
                </span>
                <span className="text-[11px] text-slate-500 font-medium leading-tight block mt-0.5">
                  Custom Private Itineraries
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center sm:text-left">
                <span className="text-2xl font-black text-emerald-600 block">
                  24/7
                </span>
                <span className="text-[11px] text-slate-500 font-medium leading-tight block mt-0.5">
                  Dedicated Traveler Support
                </span>
              </div>
            </div>
          </div>

          {/* Photo Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <Image
                src="/images/about/private-chauffeur-guide.jpg"
                alt="Professional private chauffeur guide and touring vehicle with Ravi Tours in Sri Lanka"
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover"
                priority
              />
            </div>

            <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg mt-8 border border-slate-100">
              <Image
                src="/images/about/happy-travelers-sri-lanka.jpg"
                alt="Travelers enjoying a personalized private scenic journey across Sri Lanka"
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Experience, Service & Trust Highlight Section */}
      <section className="py-12 bg-gradient-to-r from-[#07345A] via-[#052744] to-[#02182B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F6A623] block mb-2">
              PROVEN TRACK RECORD
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              20+ Years of Dedication Across All of Sri Lanka
            </h3>
            <p className="text-slate-300 text-sm mt-2 font-light">
              We don&apos;t just drive you — we craft authentic, worry-free journeys backed by two decades of local mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F6A623]/20 text-[#F6A623] flex items-center justify-center">
                <Award className="w-5 h-5 text-[#F6A623]" />
              </div>
              <h4 className="text-lg font-bold text-white">
                No.01 Customer Service
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Personalized care from your first message to the departure gate. Dedicated trip specialists, 
                immediate WhatsApp responses, and patient drivers who adapt completely to your pace.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0FA3A3]/20 text-[#0FA3A3] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#0FA3A3]" />
              </div>
              <h4 className="text-lg font-bold text-white">
                Island-Wide 20+ Years Mastery
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Extensive knowledge of every scenic route, cultural heritage landmark, secluded beach, and authentic Ceylon tea estate across all of Sri Lanka.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <h4 className="text-lg font-bold text-white">
                100% Reliable &amp; Transparent
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Modern luxury vehicle fleet (including comfortable sedans, executive SUVs, and spacious luxury touring vans) 
                with full passenger insurance and zero hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Core Values Highlight Section */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-slate-50 via-sky-50/25 to-slate-50/80 border-y border-slate-200/70 overflow-hidden">
        {/* Subtle decorative ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#087EA4]/10 via-[#F6A623]/10 to-[#0FA3A3]/10 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#087EA4]/20 shadow-xs mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#F6A623] animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-[#07345A]">
                {t.aboutPage.whyUsBadge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#07345A] tracking-tight leading-tight">
              Why Travelers Trust{" "}
              <span className="bg-gradient-to-r from-[#07345A] via-[#087EA4] to-[#0FA3A3] bg-clip-text text-transparent">
                Ravi Tours &amp; Travels
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal leading-relaxed max-w-2xl mx-auto">
              {t.aboutPage.whyUsSubtitle}
            </p>
          </div>

          {/* 4 Core Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className={`group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden ${v.borderHover}`}
                >
                  {/* Top Gradient Accent Bar */}
                  <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${v.gradient}`} />

                  {/* Icon & Watermark Number Row */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${v.gradient} text-white shadow-md shadow-slate-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`text-4xl sm:text-5xl font-black tracking-tighter transition-colors select-none ${v.numberColor}`}>
                        {v.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-2.5">
                      <h3 className="font-extrabold text-[#07345A] text-lg sm:text-xl group-hover:text-[#087EA4] transition-colors leading-snug">
                        {v.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                        {v.description}
                      </p>
                    </div>
                  </div>

                  {/* Trust highlight tag */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{v.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Trust Reinforcement Strip */}
          <div className="mt-12 bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-[#F6A623] text-[#F6A623]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                Guaranteed Comfort, Safety &amp; 5-Star Rated Guidance Across Sri Lanka
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#07345A] hover:bg-[#052744] shadow-sm hover:shadow transition-all"
              >
                <span>Plan Your Custom Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real Traveler Moments Gallery */}
      <TravelerGallery className="bg-white border-b border-slate-200/60" initialCount={8} />

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}
