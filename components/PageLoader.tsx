"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * PageLoader — A clean, ultra-modern luxury travel loading screen
 * for Ravi Tours & Travels.
 *
 * Minimalist design:
 * - Stunning orbital compass animation revolving around the official brand emblem.
 * - Reduced, clean typography focusing purely on brand identity.
 * - Sleek, luminous micro-progress bar.
 * - Smooth silk fade-out upon completion.
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
          currentProgress += Math.random() * 14 + 8;
        } else if (currentProgress < 92) {
          currentProgress += Math.random() * 6 + 2;
        }
        if (currentProgress > 94) currentProgress = 94;
        setProgress(Math.min(94, Math.round(currentProgress)));
      }
    }, 80);

    const finishLoading = () => {
      isComplete = true;
      clearInterval(interval);
      setProgress(100);

      // Brief pause at 100% for visual satisfaction, then gentle fade out
      timer = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 500); // Matches the CSS transition duration
      }, 220);
    };

    if (document.readyState === "complete") {
      setTimeout(finishLoading, 550);
    } else {
      const handleLoad = () => finishLoading();
      window.addEventListener("load", handleLoad);

      // Safety timeout so it never remains indefinitely
      const safetyTimer = setTimeout(finishLoading, 2000);

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

  return (
    <div
      role="status"
      aria-label="Loading Ravi Tours & Travels"
      aria-live="polite"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center select-none overflow-hidden transition-all duration-500 ease-out ${
        isFading
          ? "opacity-0 scale-[1.02] pointer-events-none"
          : "opacity-100 scale-100 pointer-events-auto"
      }`}
      style={{
        background:
          "radial-gradient(circle at 50% 45%, #08375e 0%, #041f37 45%, #021221 100%)",
      }}
    >
      {/* ── Ambient Glow Elements ────────────────────────────── */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-[#087EA4]/15 blur-3xl pointer-events-none -top-16 -left-16" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#F6A623]/10 blur-3xl pointer-events-none -bottom-16 -right-16" />

      {/* ── Centerpiece Container ────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center px-6 max-w-xs w-full text-center">
        {/* Orbital Badge Container with Rotating Rings */}
        <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 mb-6">
          {/* Outer compass orbital dashed ring */}
          <div
            className="absolute inset-0 rounded-full border border-dashed border-[#F6A623]/35 animate-spin"
            style={{ animationDuration: "18s" }}
          />

          {/* Inner counter-rotating thin ring */}
          <div
            className="absolute inset-2 rounded-full border border-white/10 animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "12s" }}
          />

          {/* Traveling celestial orbital beacon dot */}
          <div
            className="absolute inset-0 rounded-full animate-spin pointer-events-none"
            style={{ animationDuration: "3.2s" }}
          >
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#F6A623] shadow-[0_0_12px_#F6A623]" />
          </div>

          {/* Glowing central emblem badge */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-[#07345A] to-[#021d36] p-1 shadow-[0_0_35px_rgba(246,166,35,0.4)] border-2 border-[#F6A623]/70 flex items-center justify-center overflow-hidden">
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

        {/* ── Minimal Brand Typography (Reduced & Elegant) ─────── */}
        <div className="flex flex-col items-center mb-6 space-y-1">
          <span className="font-extrabold text-xl sm:text-2xl tracking-[0.25em] text-white font-['Plus_Jakarta_Sans',sans-serif]">
            RAVI TOURS
          </span>
          <span className="text-[10px] tracking-[0.4em] uppercase font-semibold text-[#F6A623]">
            Sri Lanka
          </span>
        </div>

        {/* ── Minimalist Progress Bar ──────────────────────────── */}
        <div className="w-full max-w-[200px] flex flex-col items-center space-y-2">
          {/* Sleek Progress Track */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden p-[0.5px] shadow-inner backdrop-blur-sm relative">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#087EA4] via-[#0FA3A3] via-[#F6A623] to-[#FFD166] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(246,166,35,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Minimal Percentage Readout */}
          <span className="font-mono text-[11px] font-semibold text-slate-300/80 tracking-widest">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
