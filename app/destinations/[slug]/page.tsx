import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import { tours } from "@/data/tours";
import TourCard from "@/components/TourCard";
import CTASection from "@/components/CTASection";
import {
  MapPin,
  Calendar,
  Sparkles,
  ChevronRight,
  Compass,
  CheckCircle2,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) return { title: "Destination Not Found" };

  return {
    title: `${destination.name} Travel Guide - ${destination.tag}`,
    description: destination.shortDescription,
    openGraph: {
      title: `${destination.name} | Ravi Tours & Travels`,
      description: destination.shortDescription,
      images: [{ url: destination.image }],
    },
  };
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  // Find tours that include this destination
  const relatedTours = tours.filter((tour) =>
    tour.destinations.some(
      (destName) =>
        destName.toLowerCase().includes(destination.name.toLowerCase()) ||
        destination.name.toLowerCase().includes(destName.toLowerCase())
    )
  );

  return (
    <div className="pt-20 min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[440px] max-h-[640px] w-full overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#032743] via-[#032743]/50 to-black/30" />

        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-300 mb-3">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link
              href="/destinations"
              className="hover:text-white transition-colors"
            >
              Destinations
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#F6A623]">{destination.name}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full bg-[#F6A623] text-[#07345A] font-bold text-xs uppercase tracking-wider">
              {destination.tag}
            </span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#F6A623]" />
              <span>{destination.region}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
              <Calendar className="w-3.5 h-3.5 text-[#F6A623]" />
              <span>Best: {destination.bestTimeToVisit}</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            {destination.name}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base mt-2 max-w-xl font-light">
            {destination.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Introduction & Why Visit Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Introduction */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#087EA4]">
              <Compass className="w-4 h-4" />
              <span>Overview</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07345A]">
              Discovering {destination.name}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {destination.intro}
            </p>
          </div>

          {/* Why Visit */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
            <h3 className="text-lg font-bold text-[#07345A] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#F6A623]" />
              <span>Why Visit {destination.name}</span>
            </h3>
            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
              {destination.whyVisit.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0FA3A3] shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Top Things to Do */}
        <section className="space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#087EA4] block mb-1">
              MUST-DO EXPERIENCES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07345A]">
              Top Things to Do in {destination.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destination.thingsToDo.map((activity, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#F0F6FA] text-[#07345A] flex items-center justify-center text-xs font-bold mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#07345A] mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        {destination.gallery.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07345A]">
              Glimpses of {destination.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {destination.gallery.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="relative h-64 rounded-3xl overflow-hidden shadow-sm group"
                >
                  <Image
                    src={imgUrl}
                    alt={`${destination.name} view ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Recommended Tours Including This Destination */}
        {relatedTours.length > 0 && (
          <section className="space-y-8 pt-6 border-t border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#087EA4] block mb-1">
                FEATURED ITINERARIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07345A]">
                Tours Visiting {destination.name}
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Explore handcrafted Sri Lanka circuits featuring {destination.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
