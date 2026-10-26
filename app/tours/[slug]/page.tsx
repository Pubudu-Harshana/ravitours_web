import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { tours } from "@/data/tours";
import { siteConfig } from "@/data/siteConfig";
import TourRouteMap from "@/components/TourRouteMap";
import {
  Clock,
  MapPin,
  CheckCircle2,
  XCircle,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  Calendar,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

function getTour(slug: string) {
  const normalized = slug === "sri-lanka-highlight" ? "sri-lanka-highlights" : slug;
  return tours.find((t) => t.slug === normalized || t.slug === slug);
}

export async function generateStaticParams() {
  const params = tours.map((tour) => ({
    slug: tour.slug,
  }));
  params.push({ slug: "sri-lanka-highlight" });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return { title: "Tour Not Found" };

  return {
    title: `${tour.title} (${tour.duration})`,
    description: tour.description,
    openGraph: {
      title: `${tour.title} | Ravi Tours & Travels`,
      description: tour.description,
      images: [{ url: tour.image }],
    },
  };
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = getTour(slug);

  if (!tour) {
    notFound();
  }

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(
    `Hello Ravi Tours & Travels! I am interested in booking or customizing the "${tour.title}" (${tour.duration}) tour. Could you please share a detailed quote and availability?`
  )}`;

  return (
    <div className="pt-20 min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[420px] max-h-[600px] w-full overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
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
            <Link href="/tours" className="hover:text-white transition-colors">
              Tours
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#F6A623] truncate max-w-[200px] sm:max-w-none">
              {tour.title}
            </span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full bg-[#F6A623] text-[#07345A] font-bold text-xs uppercase tracking-wider">
              {tour.category}
            </span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#F6A623]" />
              <span>{tour.duration}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {tour.title}
          </h1>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Tour Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* Tour Overview */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07345A]">
                Tour Overview
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {tour.overview}
              </p>

              {/* Destinations covered tags */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Destinations Covered
                </span>
                <div className="flex flex-wrap gap-2">
                  {tour.destinations.map((dest) => (
                    <span
                      key={dest}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold"
                    >
                      <MapPin className="w-3 h-3 text-[#087EA4]" />
                      {dest}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Highlights */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07345A]">
                Tour Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {tour.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-2xl bg-[#F0F6FA] border border-slate-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#0FA3A3] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Interactive Tour Map Visualizer */}
            <TourRouteMap slug={tour.slug} tourTitle={tour.title} />

            {/* Day-by-Day Itinerary */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-[#07345A]">
                  Day-by-Day Itinerary
                </h2>
                <span className="text-xs font-semibold text-slate-400">
                  {tour.daysCount} Days / {tour.nightsCount} Nights
                </span>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-200">
                {tour.itinerary.map((day) => (
                  <div key={day.day} id={`itinerary-day-${day.day}`} className="relative pl-10 transition-all duration-300 rounded-2xl">
                    {/* Day Number Dot */}
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#07345A] text-white flex items-center justify-center text-xs font-extrabold shadow">
                      {day.day}
                    </div>

                    <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/70 hover:border-[#087EA4]/40 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <h3 className="text-base font-bold text-[#07345A]">
                          Day {day.day}: {day.title}
                        </h3>
                        <span className="text-xs font-semibold text-[#087EA4] bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                          {day.location}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                        {day.description}
                      </p>

                      {/* Activities bullet list */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-200/60">
                        {day.activities.map((act, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs text-slate-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F6A623] shrink-0" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* What's Included */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-emerald-800 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>What&apos;s Included</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {tour.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Not Included */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-slate-400" />
                  <span>What&apos;s Not Included</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  {tour.notIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Photo Gallery */}
            {tour.gallery.length > 0 && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#087EA4] block">
                      Tour Highlights & Sightseeing
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#07345A] mt-0.5">
                      Tour Gallery
                    </h2>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {tour.gallery.length} Photos
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  {tour.gallery.map((imgUrl, idx) => {
                    const captionsMap: Record<string, string[]> = {
                      "sri-lanka-highlights": [
                        "Sigiriya Lion Rock Fortress",
                        "Temple of the Tooth, Kandy",
                        "Nine Arch Bridge, Ella",
                        "Galle Fort Lighthouse",
                      ],
                      "cultural-sri-lanka": [
                        "Temple of the Sacred Tooth",
                        "Sigiriya Lion Paws",
                        "Bahirawakanda Buddha",
                        "Sigiriya Water Gardens",
                      ],
                      "hill-country-escape": [
                        "Nine Arch Bridge, Ella",
                        "Ceylon Tea Estate",
                        "Little Adam's Peak",
                        "Ravana Falls Cascade",
                      ],
                      "southern-coast-escape": [
                        "Mirissa Coconut Tree Hill",
                        "Galle Fort Lighthouse",
                        "Mirissa Golden Beach",
                        "Historic Galle Ramparts",
                      ],
                      "wildlife-adventure": [
                        "Wild Leopard, Yala",
                        "Elephant Safari, Yala",
                        "Safari Wildlife",
                        "Ravana Falls Cascade",
                      ],
                      "complete-sri-lanka": [
                        "Pidurangala & Sigiriya",
                        "Ella Nine Arch Bridge",
                        "Yala Wildlife Safari",
                        "Mirissa Coconut Tree Hill",
                      ],
                    };
                    const caption = captionsMap[tour.slug]?.[idx] || `${tour.title} photo ${idx + 1}`;

                    return (
                      <div
                        key={idx}
                        className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-sm group bg-slate-100"
                      >
                        <Image
                          src={imgUrl}
                          alt={`${tour.title} photo ${idx + 1}`}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 320px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020F1F]/80 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-end p-3">
                          <span className="text-[11px] sm:text-xs font-semibold text-white drop-shadow leading-snug">
                            {caption}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* FAQs */}
            {tour.faqs.length > 0 && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#07345A] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#087EA4]" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <div className="space-y-4 pt-2">
                  {tour.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-100"
                    >
                      <h3 className="text-sm font-bold text-[#07345A]">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Sticky Booking & Inquiry Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100">
              <div className="pb-6 border-b border-slate-100">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Custom Tour Package
                </span>
                <div className="flex items-baseline justify-between mt-1">
                  <h3 className="text-2xl font-extrabold text-[#07345A]">
                    {tour.priceNote}
                  </h3>
                  <span className="text-xs text-slate-500">
                    Per party / customized
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Prices depend on season, vehicle type, and preferred hotel grade.
                  We provide free, transparent quotes with zero commitment.
                </p>
              </div>

              {/* Tour Key Facts */}
              <div className="py-5 space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Duration</span>
                  <span className="font-semibold text-slate-900">
                    {tour.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Vehicle Type</span>
                  <span className="font-semibold text-slate-900">
                    Air-conditioned Private
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Guide</span>
                  <span className="font-semibold text-slate-900">
                    Professional Driver/Guide
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Flexibility</span>
                  <span className="font-semibold text-emerald-600">
                    100% Customizable
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <Link
                  href={`/contact?tour=${encodeURIComponent(tour.title)}`}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#07345A] hover:bg-[#032743] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#F6A623]" />
                </Link>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#087EA4] shrink-0" />
                <span>Instant response • Direct local operator rates</span>
              </div>
            </div>

            {/* Assistance Box */}
            <div className="bg-[#07345A] text-white rounded-3xl p-6 shadow-md">
              <h4 className="font-bold text-base mb-1">Need Advice?</h4>
              <p className="text-xs text-slate-200 mb-4 leading-relaxed">
                Not sure if this itinerary fits your flight schedules? Our local Sri
                Lankan team can adapt it for you for free.
              </p>
              <Link
                href="/plan-your-trip"
                className="text-xs font-bold text-[#F6A623] hover:underline inline-flex items-center gap-1"
              >
                <span>Design Custom Itinerary</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
