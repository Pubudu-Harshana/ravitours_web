"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal } from "lucide-react";
import { Testimonial } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import { useLanguage } from "@/context/LanguageContext";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const { isRTL } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const touchStartX = useRef<number | null>(null);

  // Responsive itemsPerPage calculation
  useEffect(() => {
    function updateItemsPerPage() {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    }

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Split testimonials into pages for smooth sliding carousel
  const pages = useMemo(() => {
    const result: Testimonial[][] = [];
    for (let i = 0; i < testimonials.length; i += itemsPerPage) {
      result.push(testimonials.slice(i, i + itemsPerPage));
    }
    return result;
  }, [testimonials, itemsPerPage]);

  const totalPages = pages.length;

  // Keep currentPage within bounds when itemsPerPage changes
  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(totalPages - 1);
    }
  }, [totalPages, currentPage]);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Automatic rotation every 5 seconds (~5000ms) with smooth scroll animation
  useEffect(() => {
    if (isPaused || viewMode === "grid" || totalPages <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, viewMode, totalPages, handleNext]);

  // Touch / swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const startIdx = currentPage * itemsPerPage + 1;
  const endIdx = Math.min(
    (currentPage + 1) * itemsPerPage,
    testimonials.length
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Mode toggle & Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#07345A]/5 text-[#07345A] border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {testimonials.length} Verified Reviews
          </span>
          {viewMode === "carousel" && (
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Showing {startIdx}–{endIdx} of {testimonials.length}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Toggle between carousel and full grid view */}
          <button
            type="button"
            onClick={() =>
              setViewMode((prev) => (prev === "carousel" ? "grid" : "carousel"))
            }
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-[#087EA4] hover:border-[#087EA4]/40 transition-colors shadow-2xs cursor-pointer"
            aria-label={
              viewMode === "carousel"
                ? "Switch to Grid View"
                : "Switch to Carousel View"
            }
          >
            {viewMode === "carousel" ? (
              <>
                <LayoutGrid className="w-3.5 h-3.5 text-[#087EA4]" />
                <span>View All as Grid</span>
              </>
            ) : (
              <>
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#087EA4]" />
                <span>View as Carousel</span>
              </>
            )}
          </button>

          {/* Carousel Manual Controls */}
          {viewMode === "carousel" && (
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonials"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-[#07345A] hover:text-[#087EA4] flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 rtl-flip" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonials"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-[#07345A] hover:text-[#087EA4] flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 h-4 rtl-flip" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      {viewMode === "carousel" ? (
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden py-1"
        >
          {/* Smooth Horizontal Scrolling / Sliding Track */}
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
            style={{
              transform: isRTL
                ? `translateX(${currentPage * 100}%)`
                : `translateX(-${currentPage * 100}%)`,
            }}
          >
            {pages.map((pageCards, pIdx) => (
              <div
                key={pIdx}
                className={`w-full shrink-0 grid gap-6 sm:gap-8 px-1 items-stretch ${
                  itemsPerPage === 1
                    ? "grid-cols-1"
                    : itemsPerPage === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {pageCards.map((testim) => (
                  <div key={testim.id} className="h-full">
                    <TestimonialCard testimonial={testim} />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Pagination Indicators / Dots */}
          {totalPages > 1 && (
            <div
              className="flex items-center justify-center gap-1.5 mt-8 flex-wrap"
              role="tablist"
              aria-label="Testimonial pagination"
            >
              {pages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={currentPage === idx}
                  aria-label={`Go to testimonial slide ${idx + 1}`}
                  onClick={() => setCurrentPage(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentPage === idx
                      ? "w-7 bg-[#087EA4]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Full Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-fadeIn">
          {testimonials.map((testim) => (
            <div key={testim.id} className="h-full">
              <TestimonialCard testimonial={testim} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
