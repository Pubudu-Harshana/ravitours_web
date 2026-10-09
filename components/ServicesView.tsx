"use client";

import Link from "next/link";
import { services } from "@/data/services";
import CTASection from "@/components/CTASection";
import {
  Car,
  Plane,
  Compass,
  Hotel,
  Binoculars,
  Train,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesView() {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Car":
        return <Car className="w-6 h-6 text-[#087EA4]" />;
      case "Plane":
        return <Plane className="w-6 h-6 text-[#087EA4]" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-[#087EA4]" />;
      case "Hotel":
        return <Hotel className="w-6 h-6 text-[#087EA4]" />;
      case "Binoculars":
        return <Binoculars className="w-6 h-6 text-[#087EA4]" />;
      case "Train":
        return <Train className="w-6 h-6 text-[#087EA4]" />;
      default:
        return <Compass className="w-6 h-6 text-[#087EA4]" />;
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#07345A] py-16 sm:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0FA3A3_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F6A623] block mb-2">
              {t.servicesPage.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {t.servicesPage.title}
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg mt-3 font-light leading-relaxed">
              {t.servicesPage.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6 sm:p-8"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#F0F6FA] flex items-center justify-center mb-6">
                  {getIcon(service.icon)}
                </div>

                <h2 className="text-xl font-bold text-[#07345A] mb-3">
                  {service.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.fullDescription}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Features
                  </span>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0FA3A3] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="w-full py-3 px-4 rounded-xl bg-[#F0F6FA] hover:bg-[#07345A] text-[#07345A] hover:text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <span>{t.servicesPage.bookService}</span>
                  <ArrowRight className="w-4 h-4 rtl-flip" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="bg-white py-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-start gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#07345A] text-base mb-1">
                  100% Insured Vehicles
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Full passenger coverage and comprehensive travel security.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F6A623] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#07345A] text-base mb-1">
                  24/7 Dedicated Support
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Real-time traveler assistance for peace of mind.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0FA3A3] flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-6 h-6 text-[#0FA3A3]" />
              </div>
              <div>
                <h3 className="font-bold text-[#07345A] text-base mb-1">
                  Instant WhatsApp Booking
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Fast confirmation and direct itinerary coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}
