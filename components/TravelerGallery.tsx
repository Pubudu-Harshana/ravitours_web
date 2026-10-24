"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Sparkles,
  MapPin,
  Star,
  Users,
  Compass,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import {
  travelerPhotos,
  TravelerPhoto,
  GalleryCategory,
} from "@/data/travelerGallery";
import { useLanguage } from "@/context/LanguageContext";

interface TravelerGalleryProps {
  initialCount?: number;
  className?: string;
}

export default function TravelerGallery({
  initialCount = 8,
  className = "",
}: TravelerGalleryProps) {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory>("all");
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Filter photos based on category
  const filteredPhotos = useMemo(() => {
    if (selectedCategory === "all") return travelerPhotos;
    return travelerPhotos.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Displayed photos depending on showAll toggle
  const displayedPhotos = useMemo(() => {
    if (showAll || selectedCategory !== "all") {
      return filteredPhotos;
    }
    return filteredPhotos.slice(0, initialCount);
  }, [filteredPhotos, showAll, selectedCategory, initialCount]);

  // Current active photo in lightbox
  const activePhoto =
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  // Handlers for lightbox
  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredPhotos.length : null
    );
  }, [filteredPhotos.length]);

  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        : null
    );
  }, [filteredPhotos.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxIndex, closeLightbox, nextPhoto, prevPhoto]);

  // Scroll active thumbnail into view in lightbox
  useEffect(() => {
    if (lightboxIndex !== null && thumbnailsRef.current) {
      const activeEl = thumbnailsRef.current.children[
        lightboxIndex
      ] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [lightboxIndex]);

  // Multilingual translations
  const labels = {
    badge:
      language === "ar"
        ? "لقطات حقيقية من رحلات ضيوفنا"
        : language === "de"
        ? "Echte Reiseerlebnisse unserer Gäste"
        : language === "fr"
        ? "Moments Authentiques de nos Voyageurs"
        : "Authentic Guest Experiences",
    titleMain:
      language === "ar"
        ? "رحلات حقيقية."
        : language === "de"
        ? "Echte Reisen."
        : language === "fr"
        ? "Voyages Authentiques."
        : "Real Journeys.",
    titleHighlight:
      language === "ar"
        ? "ذكريات تدوم مدى الحياة."
        : language === "de"
        ? "Lebenslange Erinnerungen."
        : language === "fr"
        ? "Des Souvenirs Inoubliables."
        : "Lifetime Memories.",
    subtitle:
      language === "ar"
        ? "لقطات حية من رحلات زوارنا من أنحاء العالم مع سائقينا ومرشدينا الخصوصيين عبر أرجاء سريلانكا الساحرة."
        : language === "de"
        ? "Ungefilterte Momentaufnahmen unserer Gäste, die Sri Lanka mit unseren privaten Chauffeuren und maßgeschneiderten Rundreisen entdeckt haben."
        : language === "fr"
        ? "Des clichés authentiques de nos voyageurs explorant le Sri Lanka avec nos chauffeurs privés et nos circuits sur mesure."
        : "Unfiltered, heartfelt snapshots of couples, families, and solo travelers discovering the magic of Sri Lanka with our private chauffeurs.",
    verifiedBadge:
      language === "ar"
        ? "صور حقيقية 100%"
        : language === "de"
        ? "100% Echte Fotos"
        : language === "fr"
        ? "100% Photos Réelles"
        : "100% Verified Guests",
    categories: {
      all:
        language === "ar"
          ? "جميع اللحظات"
          : language === "de"
          ? "Alle Momente"
          : language === "fr"
          ? "Tous les moments"
          : "All Moments",
      welcomes:
        language === "ar"
          ? "استقبال المطار والسائقين"
          : language === "de"
          ? "Empfang & Chauffeure"
          : language === "fr"
          ? "Accueil & Chauffeurs"
          : "Welcomes & Guides",
      heritage:
        language === "ar"
          ? "التراث والمعالم التاريخية"
          : language === "de"
          ? "Kulturerbe & Tempel"
          : language === "fr"
          ? "Patrimoine & Temples"
          : "Ancient Heritage",
      highlands:
        language === "ar"
          ? "المرتفعات والشلالات"
          : language === "de"
          ? "Hochland & Wasserfälle"
          : language === "fr"
          ? "Hautes Terres & Cascades"
          : "Highlands & Waterfalls",
      coastal:
        language === "ar"
          ? "السواحل والشواطئ"
          : language === "de"
          ? "Küste & Strände"
          : language === "fr"
          ? "Côtes & Plages"
          : "Coast & Beaches",
    },
    showAllBtn:
      language === "ar"
        ? `استكشف جميع الصور (${filteredPhotos.length})`
        : language === "de"
        ? `Alle ${filteredPhotos.length} Momente entdecken`
        : language === "fr"
        ? `Voir toutes les ${filteredPhotos.length} photos`
        : `Explore All ${filteredPhotos.length} Moments`,
    showLessBtn:
      language === "ar"
        ? "عرض أقل"
        : language === "de"
        ? "Weniger anzeigen"
        : language === "fr"
        ? "Voir moins"
        : "Show Featured Only",
    inquireBtn:
      language === "ar"
        ? "استفسر عن هذه الوجهة عبر واتساب"
        : language === "de"
        ? "Reise hierher anfragen"
        : language === "fr"
        ? "Se renseigner sur cette étape"
        : "Plan a Journey Here",
    ctaHeading:
      language === "ar"
        ? "هل تود صناعة ذكرياتك الخاصة في سريلانكا؟"
        : language === "de"
        ? "Möchten Sie Ihre eigenen unvergesslichen Momente schaffen?"
        : language === "fr"
        ? "Prêt à créer vos propres souvenirs au Sri Lanka ?"
        : "Ready to Create Your Own Unforgettable Sri Lanka Memories?",
    ctaSub:
      language === "ar"
        ? "صمم جدول رحلتك الخاص برفقة سائقين محترفين ومركبات حديثة ومريحة."
        : language === "de"
        ? "Gestalten Sie Ihre private Traumreise mit erstklassigen Chauffeuren und flexiblen Routen."
        : language === "fr"
        ? "Concevons ensemble votre itinéraire sur mesure avec nos chauffeurs privés experts."
        : "Travel at your own pace with trusted private chauffeurs, sanitized vehicles, and 24/7 dedicated assistance.",
    planTripBtn:
      language === "ar"
        ? "خطط لرحلتك المخصصة"
        : language === "de"
        ? "Reise individuell planen"
        : language === "fr"
        ? "Planifier votre voyage"
        : "Plan Your Tailored Trip",
  };

  // Category counts
  const categoryCounts = useMemo(() => {
    return {
      all: travelerPhotos.length,
      welcomes: travelerPhotos.filter((p) => p.category === "welcomes").length,
      heritage: travelerPhotos.filter((p) => p.category === "heritage").length,
      highlands: travelerPhotos.filter((p) => p.category === "highlands").length,
      coastal: travelerPhotos.filter((p) => p.category === "coastal").length,
    };
  }, []);

  const categories: { key: GalleryCategory; label: string; icon: any }[] = [
    { key: "all", label: labels.categories.all, icon: Sparkles },
    { key: "welcomes", label: labels.categories.welcomes, icon: Users },
    { key: "heritage", label: labels.categories.heritage, icon: Compass },
    { key: "highlands", label: labels.categories.highlands, icon: MapPin },
    { key: "coastal", label: labels.categories.coastal, icon: Camera },
  ];

  return (
    <section
      id="traveler-moments-gallery"
      className={`py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white ${className}`}
    >
      {/* Decorative ambient subtle background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#087EA4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-[#F6A623]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Eyebrow Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#087EA4]/10 border border-[#087EA4]/20 text-[#07345A] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#087EA4]" />
            <span>{labels.badge}</span>
            <span className="w-1 h-1 rounded-full bg-[#F6A623]" />
            <span className="text-[#F6A623] font-extrabold flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" /> 5.0 Rated
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#07345A] tracking-tight leading-tight">
            {labels.titleMain}{" "}
            <span className="bg-gradient-to-r from-[#087EA4] to-[#F6A623] bg-clip-text text-transparent">
              {labels.titleHighlight}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg mt-3 sm:mt-4 leading-relaxed font-light">
            {labels.subtitle}
          </p>

          {/* Key Social Proof Pillars Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-8 max-w-2xl mx-auto text-left">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#087EA4] shrink-0" />
              <span className="text-xs font-semibold text-slate-800">
                100% Unedited
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-xs">
              <Users className="w-4 h-4 text-[#F6A623] shrink-0" />
              <span className="text-xs font-semibold text-slate-800">
                Chauffeur Guided
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-800">
                500+ Happy Guests
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-xs">
              <MapPin className="w-4 h-4 text-[#087EA4] shrink-0" />
              <span className="text-xs font-semibold text-slate-800">
                Island-Wide Stops
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 sm:mb-12 gap-2 sm:gap-3 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.key;
            const count = categoryCounts[cat.key];

            return (
              <button
                key={cat.key}
                onClick={() => {
                  setSelectedCategory(cat.key);
                  setShowAll(false);
                }}
                className={`group flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#07345A] text-white shadow-lg shadow-[#07345A]/25 ring-2 ring-[#07345A]/20 scale-102"
                    : "bg-white text-slate-600 hover:text-[#07345A] hover:bg-slate-100/80 border border-slate-200/80 shadow-xs"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 transition-colors ${
                    isActive
                      ? "text-[#F6A623]"
                      : "text-slate-400 group-hover:text-[#087EA4]"
                  }`}
                />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Modern Masonry Gallery Grid - Eliminates awkward gaps & delivers editorial aesthetic */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-5 [column-fill:_balance]">
          {displayedPhotos.map((photo, index) => {
            // Find overall index in full dataset for consistent lightbox jumping
            const fullIndex = travelerPhotos.findIndex(
              (p) => p.id === photo.id
            );

            return (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className="break-inside-avoid mb-4 sm:mb-5 group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1.5"
              >
                {/* Photo Container with dynamic aspect ratio */}
                <div
                  className={`relative w-full overflow-hidden ${
                    photo.isLandscape
                      ? "aspect-[16/11]"
                      : "aspect-[3/4] sm:aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
                    {/* Location Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium shadow-sm">
                      <MapPin className="w-3 h-3 text-[#F6A623] shrink-0" />
                      <span className="truncate max-w-[150px]">
                        {photo.location}
                      </span>
                    </div>

                    {/* Verified Star Badge */}
                    <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold">
                      <Star className="w-2.5 h-2.5 text-[#F6A623] fill-current" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Center Zoom Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all duration-300 shadow-xl">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Bottom Information Scrim */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 text-white flex flex-col justify-end transform transition-transform duration-300">
                    <span className="text-[11px] font-semibold text-[#F6A623] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F6A623]" />
                      {photo.traveler}
                    </span>

                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug drop-shadow-sm group-hover:text-amber-100 transition-colors">
                      {photo.title}
                    </h3>

                    {/* Expandable Highlight on Hover */}
                    <p className="text-xs text-slate-300 line-clamp-2 mt-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 font-light leading-relaxed">
                      {photo.highlight}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expand / Collapse All Moments Button */}
        {filteredPhotos.length > initialCount && selectedCategory === "all" && (
          <div className="mt-10 sm:mt-12 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-white hover:bg-[#07345A] text-[#07345A] hover:text-white border-2 border-[#07345A]/20 hover:border-[#07345A] text-sm sm:text-base font-bold shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <Camera className="w-4 h-4 text-[#F6A623] group-hover:scale-110 transition-transform" />
              <span>{showAll ? labels.showLessBtn : labels.showAllBtn}</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[#07345A] text-xs font-bold group-hover:bg-white/20 group-hover:text-white transition-colors">
                {travelerPhotos.length}
              </span>
            </button>
          </div>
        )}

        {/* Bottom Booking / Trip Planning Callout Card */}
        <div className="mt-14 sm:mt-20 rounded-3xl bg-gradient-to-br from-[#07345A] via-[#052744] to-[#02182B] p-6 sm:p-10 text-white relative overflow-hidden shadow-xl border border-white/10">
          {/* Subtle gold glow corner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F6A623]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-[#F6A623]" />
                <span>Your Sri Lanka Journey Awaits</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
                {labels.ctaHeading}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 font-light leading-relaxed">
                {labels.ctaSub}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="/plan-your-trip"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F6A623] hover:bg-[#e59515] text-[#07345A] font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <span>{labels.planTripBtn}</span>
                <ChevronRight className="w-4 h-4 rtl-flip" />
              </Link>

              <a
                href="https://wa.me/94777839352?text=Hello%20Ravi%20Tours,%20I'm%20inspired%20by%20your%20traveler%20photos%20and%20would%20like%20to%20plan%20a%20private%20tour!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200 border border-emerald-500/40"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* World-Class Modern Lightbox Modal */}
      {lightboxIndex !== null && activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#020F1F]/96 backdrop-blur-2xl flex flex-col justify-between p-3 sm:p-6 select-none animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Top Bar Navigation */}
          <div
            className="flex items-center justify-between text-white z-20 w-full max-w-7xl mx-auto pb-3 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Counter & Location */}
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-amber-400 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                {lightboxIndex + 1} / {filteredPhotos.length}
              </span>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#F6A623]" />
                <span>{activePhoto.location}</span>
              </div>
            </div>

            {/* Right: Close Button & Keyboard Esc Hint */}
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-[11px] text-slate-400 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10">
                ESC
              </span>
              <button
                onClick={closeLightbox}
                aria-label="Close Lightbox"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 border border-white/15 hover:rotate-90 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Central Active Image Display with Floating Navigation */}
          <div
            className="relative flex-1 flex items-center justify-center my-3 max-h-[70vh] sm:max-h-[72vh] w-full max-w-6xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={prevPhoto}
              aria-label="Previous photo"
              className="absolute left-1 sm:left-4 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all -translate-y-1/2 top-1/2 shadow-2xl hover:scale-105 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 rtl-flip" />
            </button>

            {/* Active High-Res Photo Container */}
            <div className="relative w-full h-full max-h-[68vh] flex items-center justify-center">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Next Button */}
            <button
              onClick={nextPhoto}
              aria-label="Next photo"
              className="absolute right-1 sm:right-4 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all -translate-y-1/2 top-1/2 shadow-2xl hover:scale-105 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 rtl-flip" />
            </button>
          </div>

          {/* Bottom Bar: Caption Info, WhatsApp Inquire CTA & Thumbnails Strip */}
          <div
            className="w-full max-w-6xl mx-auto z-20 flex flex-col gap-3 pt-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Story Card & WhatsApp Inquire */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white/10 backdrop-blur-xl p-3.5 sm:p-4 rounded-2xl border border-white/15">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-bold text-[#F6A623]">
                    {activePhoto.traveler}
                  </span>
                  <span className="text-slate-400 text-xs">•</span>
                  <span className="text-xs text-slate-300 flex items-center gap-1 truncate">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    {activePhoto.location}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-white truncate">
                  {activePhoto.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-light mt-0.5 line-clamp-1 sm:line-clamp-2">
                  {activePhoto.highlight}
                </p>
              </div>

              {/* Direct WhatsApp Action for this Destination */}
              <a
                href={`https://wa.me/94777839352?text=Hello%20Ravi%20Tours,%20I'm%20interested%20in%20a%20tour%20visiting%20${encodeURIComponent(
                  activePhoto.location
                )}%20(${encodeURIComponent(activePhoto.title)})!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 shrink-0 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{labels.inquireBtn}</span>
              </a>
            </div>

            {/* Horizontal Thumbnails Carousel */}
            <div
              ref={thumbnailsRef}
              className="flex items-center gap-2 overflow-x-auto py-1 px-1 no-scrollbar scroll-smooth"
            >
              {filteredPhotos.map((thumb, idx) => (
                <button
                  key={thumb.id}
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 transition-all duration-300 cursor-pointer border ${
                    lightboxIndex === idx
                      ? "ring-2 ring-[#F6A623] border-[#F6A623] scale-105 shadow-lg opacity-100"
                      : "border-white/20 opacity-50 hover:opacity-90 hover:scale-102"
                  }`}
                >
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
