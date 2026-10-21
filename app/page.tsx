"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import WhyRavi from "@/components/WhyRavi";
import TourCard from "@/components/TourCard";
import ExperienceCard, { ExperienceItem } from "@/components/ExperienceCard";
import OfferCard from "@/components/OfferCard";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TripPlanner from "@/components/TripPlanner";
import CTASection from "@/components/CTASection";

import { destinations } from "@/data/destinations";
import { tours, specialOffers } from "@/data/tours";
import { testimonials } from "@/data/testimonials";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  // Primary destinations for the homepage grid
  const sigiriya = destinations.find((d) => d.slug === "sigiriya") || destinations[0];
  const ella = destinations.find((d) => d.slug === "ella") || destinations[1];
  const nuwaraEliya = destinations.find((d) => d.slug === "nuwara-eliya") || destinations[3];
  const kandy = destinations.find((d) => d.slug === "kandy") || destinations[2];
  const yala = destinations.find((d) => d.slug === "yala") || destinations[5];
  const mirissa = destinations.find((d) => d.slug === "mirissa") || destinations[4];
  const arugamBay = destinations.find((d) => d.slug === "arugam-bay") || destinations[7];

  const experienceItems: ExperienceItem[] = [
    {
      id: "beaches",
      title: "BEACHES",
      subtitle: "Sun, surf and endless blue.",
      iconName: "Waves",
      image: "/images/destinations/mirissa.jpg",
      link: "/destinations/mirissa",
    },
    {
      id: "mountains",
      title: "MOUNTAINS",
      subtitle: "Cool air and breathtaking views.",
      iconName: "Mountain",
      image: "/images/destinations/ella.jpg",
      link: "/destinations/ella",
    },
    {
      id: "wildlife",
      title: "WILDLIFE",
      subtitle: "Meet Sri Lanka's incredible wildlife.",
      iconName: "Compass",
      image: "/images/destinations/yala.jpg",
      link: "/destinations/yala",
    },
    {
      id: "culture",
      title: "CULTURE",
      subtitle: "Ancient cities and timeless heritage.",
      iconName: "Landmark",
      image: "/images/destinations/sigiriya.jpg",
      link: "/destinations/sigiriya",
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Destinations Section: Explore Sri Lanka's Most Beautiful Places */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#087EA4] block mb-1">
              {t.destinations.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07345A] tracking-tight">
              {t.destinations.title}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-1.5 font-light">
              {t.destinations.subtitle}
            </p>
          </div>

          <Link
            href="/destinations"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#07345A] hover:text-[#087EA4] transition-colors group shrink-0"
          >
            <span>{t.destinations.viewAll}</span>
            <ArrowRight className="w-4 h-4 text-[#F6A623] group-hover:translate-x-1 rtl-flip transition-transform" />
          </Link>
        </div>

        {/* Desktop 4-column asymmetric grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {/* Col 1: Sigiriya */}
          <div className="lg:col-span-4 h-full">
            <DestinationCard destination={sigiriya} isLarge={true} />
          </div>

          {/* Col 2: Ella & Nuwara Eliya */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <DestinationCard destination={ella} />
            <DestinationCard destination={nuwaraEliya} />
          </div>

          {/* Col 3: Kandy & Yala */}
          <div className="lg:col-span-2.5 flex flex-col gap-5 lg:col-span-3">
            <DestinationCard destination={kandy} />
            <DestinationCard destination={yala} />
          </div>

          {/* Col 4: Mirissa & Arugam Bay */}
          <div className="lg:col-span-2.5 flex flex-col gap-5 lg:col-span-2">
            <DestinationCard destination={mirissa} />
            <DestinationCard destination={arugamBay} />
          </div>
        </div>
      </section>

      {/* 3. Why Travel with Ravi Section */}
      <WhyRavi />

      {/* 4. Tour Packages Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#087EA4] block mb-1">
              {t.tours.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07345A] tracking-tight">
              {t.tours.title}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-1.5 font-light">
              {t.tours.subtitle}
            </p>
          </div>

          <Link
            href="/tours"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#07345A] hover:text-[#087EA4] transition-colors group shrink-0"
          >
            <span>{t.tours.viewAll}</span>
            <ArrowRight className="w-4 h-4 text-[#F6A623] group-hover:translate-x-1 rtl-flip transition-transform" />
          </Link>
        </div>

        {/* 6 Tour Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tours.slice(0, 6).map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>

      {/* 5. Experience Section (Cinematic Dark Navy) */}
      <section className="bg-[#032743] py-20 lg:py-24 text-white relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#087EA4_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0FA3A3] block mb-1">
              {t.experience.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {t.experience.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
              {t.experience.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experienceItems.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Special Travel Offers Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#087EA4] block mb-1">
              {t.offers.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07345A] tracking-tight">
              {t.offers.title}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-1.5 font-light">
              {t.offers.subtitle}
            </p>
          </div>

          <Link
            href="/tours"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#07345A] hover:text-[#087EA4] transition-colors group shrink-0"
          >
            <span>{t.offers.viewAll}</span>
            <ArrowRight className="w-4 h-4 text-[#F6A623] group-hover:translate-x-1 rtl-flip transition-transform" />
          </Link>
        </div>

        {/* 4 Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#087EA4] block mb-1">
                {t.testimonials.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07345A] tracking-tight">
                {t.testimonials.title}
              </h2>
              <p className="text-slate-500 text-sm sm:text-base mt-1.5 font-light">
                {t.testimonials.subtitle}
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#07345A] hover:text-[#087EA4] transition-colors group shrink-0"
            >
              <span>{t.testimonials.viewAll}</span>
              <ArrowRight className="w-4 h-4 text-[#F6A623] group-hover:translate-x-1 rtl-flip transition-transform" />
            </Link>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* 8. Trip Planner Form Section */}
      <TripPlanner />

      {/* 9. Final CTA Section */}
      <CTASection />
    </div>
  );
}
