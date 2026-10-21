"use client";

import { useEffect, useState } from "react";

/**
 * PageLoader — Minimal, premium airplane travel preloader for Ravi Tours & Travels.
 *
 * Characteristics:
 *  - Deep brand navy canvas (#021a2f to #032743) matching the website identity.
 *  - Thin horizontal flight path centered on screen with a luminous trailing glow.
 *  - Refined airplane silhouette gliding smoothly from left to right.
 *  - Discreet, spaced "PREPARING YOUR JOURNEY" label.
 *  - Zero logos, spinners, percentage counters, or busy decorative elements.
 *  - Smooth fade-out on completion, accessible with prefers-reduced-motion support.
 */
export default function PageLoader() {
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

    const startTime = Date.now();
    const minDisplayDuration = 800; // Brief and graceful
    let exitTimeout: NodeJS.Timeout;

    const startExit = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDisplayDuration - elapsed);

      exitTimeout = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 550); // Matches the 0.55s exit transition
      }, remaining);
    };

    if (document.readyState === "complete") {
      startExit();
    } else {
      const handleLoad = () => startExit();
      window.addEventListener("load", handleLoad);

      // Safety timeout: guarantees the loader never remains stuck
      const maxSafetyTimeout = setTimeout(startExit, 2500);

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(exitTimeout);
        clearTimeout(maxSafetyTimeout);
      };
    }

    return () => clearTimeout(exitTimeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-label="Preparing your journey"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #021627 0%, #032743 65%, #053b66 100%)",
        opacity: isFading ? 0 : 1,
        transition: isFading ? "opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
        pointerEvents: isFading ? "none" : "auto",
        userSelect: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "340px",
          padding: "0 24px",
        }}
      >
        {/* ── Flight Path & Airplane Animation ─────────────────── */}
        <div
          aria-hidden="true"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "260px",
            height: "28px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Base horizontal trajectory line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "1px",
              background: "rgba(255, 255, 255, 0.12)",
            }}
          />

          {/* Dynamic flight trail beam */}
          <div
            style={{
              position: "absolute",
              height: "1.5px",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(246, 166, 35, 0.3) 30%, #F6A623 90%, #FFFFFF 100%)",
              boxShadow: "0 0 10px rgba(246, 166, 35, 0.5)",
              animation: "rt-flight-trail 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
            }}
          />

          {/* Airplane Silhouette */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#F6A623",
              filter: "drop-shadow(0 0 6px rgba(246, 166, 35, 0.75))",
              animation: "rt-flight-plane 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
              willChange: "transform, left",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Elegant passenger jet inline SVG facing directly right */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ display: "block" }}
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" transform="rotate(90 12 12)" />
            </svg>
          </div>
        </div>

        {/* ── Discreet Typography Label ────────────────────────── */}
        <span
          style={{
            marginTop: "24px",
            fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: "9.5px",
            fontWeight: 500,
            letterSpacing: "0.32em",
            color: "rgba(255, 255, 255, 0.5)",
            textTransform: "uppercase",
            animation: "rt-label-breathe 2.4s ease-in-out infinite alternate",
          }}
        >
          Preparing Your Journey
        </span>
      </div>

      {/* ── Keyframe Animations ───────────────────────────────── */}
      <style>{`
        @keyframes rt-flight-plane {
          0% {
            left: -10%;
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 104%;
            opacity: 0;
          }
        }

        @keyframes rt-flight-trail {
          0% {
            left: -10%;
            width: 0;
            opacity: 0;
          }
          12% {
            opacity: 0.8;
          }
          50% {
            width: 70px;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            left: 104%;
            width: 0;
            opacity: 0;
          }
        }

        @keyframes rt-label-breathe {
          0% {
            opacity: 0.4;
          }
          100% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
