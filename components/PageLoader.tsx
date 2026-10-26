"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sparkles, Compass } from "lucide-react";

/**
 * PageLoader — A clean, ultra-modern, luxury travel loading screen
 * designed specifically for Ravi Tours & Travels.
 *
 * Visual highlights:
 * - Deep royal navy canvas with ambient golden/teal luminescence.
 * - Rotating orbital compass rings around an illuminated gold emblem.
 * - Official Ravi Tours brand badge with shimmering highlight.
 * - Dynamic Sri Lanka milestone status ("Discovering Ceylon Horizons", etc.).
 * - Fluid high-precision progress bar with percentage readout.
 * - Graceful silk exit animation that reveals the page seamlessly.
 */
export default function PageLoader() {
  const [progress, setProgress] = useState(15);
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsVisible(false);
      return;
    }

    let currentProgress = 15;
    let timer: NodeJS.Timeout;
    let isComplete = false;

    // Simulate swift, natural progressive loading
    const interval = setInterval(() => {
      if (!isComplete) {
        if (currentProgress < 75) {
          currentProgress += Math.random() * 12 + 6;
        } else if (currentProgress < 90) {
          currentProgress += Math.random() * 5 + 2;
        }
        if (currentProgress > 92) currentProgress = 92;
        setProgress(Math.min(92, Math.round(currentProgress)));
      }
    }, 85);

    const finishLoading = () => {
      isComplete = true;
      clearInterval(interval);
      setProgress(100);

      // Brief pause at 100% for visual satisfaction, then gentle fade out
      timer = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 550); // Matches the CSS opacity/transform transition duration
      }, 260);
    };

    if (document.readyState === "complete") {
      // Allow user to appreciate the clean branding briefly (~600ms)
      setTimeout(finishLoading, 600);
    } else {
      const handleLoad = () => finishLoading();
      window.addEventListener("load", handleLoad);

      // Fallback safety timeout so it never remains indefinitely
      const safetyTimer = setTimeout(finishLoading, 2200);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
        clearTimeout(safetyTimer);
        window.removeEventListener("load", handleLoad);
      };
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  // Dynamic milestone message based on progress percentage
  const getStatusText = (val: number) => {
    if (val < 35) return "Connecting to Ceylon Horizons...";
    if (val < 70) return "Preparing Private Chauffeur Route...";
    if (val < 95) return "Curating Authentic Sri Lankan Moments...";
    return "Welcome to Ravi Tours & Travels!";
  };

  return (
    <div
      role="status"
      aria-label="Loading Ravi Tours & Travels"
      aria-live="polite"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center select-none overflow-hidden transition-all duration-500 ease-out ${
        isFading
          ? "opacity-0 scale-[1.03] pointer-events-none"
          : "opacity-100 scale-100 pointer-events-auto"
      }`}
      style={{
        background:
          "radial-gradient(circle at 50% 45%, #08375e 0%, #041f37 45%, #021221 100%)",
      }}
    >
      {/* ── Ambient Glow Elements ────────────────────────────── */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#087EA4]/15 blur-3xl pointer-events-none -top-20 -left-20 animate-pulse" />
      <div className="absolute w-[450px] h-[450px] rounded-full bg-[#F6A623]/10 blur-3xl pointer-events-none -bottom-20 -right-20 animate-pulse" />

      {/* ── Centerpiece Container ────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center px-6 max-w-sm w-full text-center">
        {/* Orbital Badge Container with Rotating Rings */}
        <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 mb-7">
          {/* Outer compass orbital dashed ring */}
          <div
            className="absolute inset-0 rounded-full border border-dashed border-[#F6A623]/30 animate-spin"
            style={{ animationDuration: "20s" }}
          />

          {/* Inner counter-rotating thin ring */}
          <div
            className="absolute inset-2 rounded-full border border-white/10 animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "14s" }}
          />

          {/* Traveling celestial orbital dot */}
          <div
            className="absolute inset-0 rounded-full animate-spin pointer-events-none"
            style={{ animationDuration: "3.5s" }}
          >
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#F6A623] shadow-[0_0_10px_#F6A623]" />
          </div>

          {/* Glowing central emblem badge */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-[#07345A] to-[#021d36] p-1 shadow-[0_0_35px_rgba(246,166,35,0.35)] border-2 border-[#F6A623]/70 flex items-center justify-center overflow-hidden group">
            {/* Soft inner radial shimmer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />

            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-inner">
              <Image
                src="/ravilogo.svg"
                alt="Ravi Tours & Travels"
                width={64}
                height={64}
                priority
                className="w-full h-full object-cover transform scale-105"
              />
            </div>
          </div>
        </div>

        {/* ── Brand Typography ─────────────────────────────────── */}
        <div className="flex flex-col items-center space-y-1 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-2xl sm:text-3xl tracking-widest text-white drop-shadow-sm font-['Plus_Jakarta_Sans',sans-serif]">
              RAVI
            </span>
            <span className="text-xl sm:text-2xl font-light text-[#F6A623] tracking-wider">
              TOURS
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.3em] uppercase text-sky-200/80">
            <Sparkles className="w-3 h-3 text-[#F6A623] shrink-0" />
            <span>Sri Lanka Travel Specialist</span>
          </div>
        </div>

        {/* ── Modern Progress Track ────────────────────────────── */}
        <div className="w-full max-w-[240px] flex flex-col items-center space-y-2.5">
          {/* Progress Bar Container */}
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-[1px] shadow-inner backdrop-blur-sm relative">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#087EA4] via-[#0FA3A3] via-[#F6A623] to-[#FFD166] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(246,166,35,0.7)] relative"
              style={{ width: `${progress}%` }}
            >
              {/* Animated gleam moving forward */}
              <div className="absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-r from-transparent to-white/70 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Status Text & Percentage Bar */}
          <div className="w-full flex items-center justify-between text-[11.5px] font-medium text-slate-300/90 pt-1">
            <span className="truncate max-w-[190px] text-left text-sky-100/90 tracking-wide font-normal">
              {getStatusText(progress)}
            </span>
            <span className="font-mono font-bold text-amber-400 text-xs shrink-0 pl-2">
              {progress}%
            </span>
          </div>
        </div>

        {/* ── Subtitle Footer Badge ─────────────────────────────── */}
        <div className="mt-8 flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-[10px] text-slate-300 tracking-wider">
          <Compass className="w-3.5 h-3.5 text-[#F6A623] animate-spin" style={{ animationDuration: "12s" }} />
          <span>Tailor-Made Private Chauffeur Tours</span>
        </div>
      </div>
    </div>
  );
}
