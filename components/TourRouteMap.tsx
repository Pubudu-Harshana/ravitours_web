"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Navigation,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Car,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Info,
  Layers,
  Compass,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { TourRouteData, RouteStop, getRouteForTour } from "@/data/tourRoutes";
import { siteConfig } from "@/data/siteConfig";

interface TourRouteMapProps {
  slug: string;
  tourTitle: string;
  className?: string;
}

// Helpers for formatted stop labels across map, badges, and table
function getMapPinLabel(stop: RouteStop): string {
  if (stop.isAirport) return "Colombo Airport (CMB)";
  if (stop.name.toLowerCase().includes("nuwara eliya")) return "Nuwara Eliya";
  return stop.name.split(" ")[0];
}

function getStopBadgeLabel(stop: RouteStop, index: number, totalStops: number): string {
  if (stop.isAirport) {
    if (index === 0) return "Airport (CMB)";
    if (index === totalStops - 1) return "Airport Return";
    return "Airport (CMB)";
  }
  if (stop.name.toLowerCase().includes("nuwara eliya")) return "Nuwara Eliya";
  return stop.name.split(" ")[0];
}

function getTableStopName(stop: RouteStop): string {
  if (stop.isAirport) return "Colombo Airport (CMB)";
  if (stop.name.toLowerCase().includes("nuwara eliya")) return "Nuwara Eliya";
  return stop.name.split(" ")[0];
}

export default function TourRouteMap({
  slug,
  tourTitle,
  className = "",
}: TourRouteMapProps) {
  const routeData: TourRouteData = useMemo(() => {
    return getRouteForTour(slug, tourTitle);
  }, [slug, tourTitle]);

  const [activeStopIndex, setActiveStopIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showMatrix, setShowMatrix] = useState<boolean>(false);
  const playTimerRef = useRef<NodeJS.Timeout | null>(null);

  const stops = routeData.stops;
  const currentStop: RouteStop = stops[activeStopIndex] || stops[0];

  // Auto-play through stops
  useEffect(() => {
    if (isPlaying) {
      playTimerRef.current = setInterval(() => {
        setActiveStopIndex((prev) => (prev + 1) % stops.length);
      }, 3000);
    } else {
      if (playTimerRef.current) clearInterval(playTimerRef.current);
    }

    return () => {
      if (playTimerRef.current) clearInterval(playTimerRef.current);
    };
  }, [isPlaying, stops.length]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const nextStop = () => {
    setIsPlaying(false);
    setActiveStopIndex((prev) => (prev + 1) % stops.length);
  };

  const prevStop = () => {
    setIsPlaying(false);
    setActiveStopIndex((prev) => (prev - 1 + stops.length) % stops.length);
  };

  const handleSelectStop = (index: number) => {
    setIsPlaying(false);
    setActiveStopIndex(index);
  };

  // Scroll to corresponding day in itinerary
  const scrollToDay = (dayNum: number) => {
    const el = document.getElementById(`itinerary-day-${dayNum}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ring-2", "ring-[#F6A623]", "ring-offset-2");
      setTimeout(() => {
        el.classList.remove("ring-2", "ring-[#F6A623]", "ring-offset-2");
      }, 2000);
    }
  };

  // Build curved SVG path connecting stops smoothly
  const svgPathD = useMemo(() => {
    if (stops.length < 2) return "";
    let d = `M ${stops[0].x} ${stops[0].y}`;
    for (let i = 1; i < stops.length; i++) {
      const prev = stops[i - 1];
      const curr = stops[i];
      // Quadratic curve for smooth road styling
      const cx = (prev.x + curr.x) / 2 + (curr.y - prev.y) * 0.12;
      const cy = (prev.y + curr.y) / 2 - (curr.x - prev.x) * 0.12;
      d += ` Q ${cx} ${cy} ${curr.x} ${curr.y}`;
    }
    return d;
  }, [stops]);

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(
    `Hello Ravi Tours! I am looking at the "${routeData.tourTitle}" route map, specifically the stop at ${currentStop.name} (${currentStop.dayLabel}). Could you tell me more about vehicle comfort and travel timing for this leg?`
  )}`;

  return (
    <section
      id="tour-route-visualizer"
      className={`bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6 ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#07345A]/10 text-[#07345A] text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5 text-[#087EA4]" />
            <span>Interactive Route Visualizer</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#07345A] tracking-tight">
            Driving Route Across Sri Lanka
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Explore daily stops, driving times, and road conditions with your private chauffeur guide
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
              isPlaying
                ? "bg-amber-500 text-white hover:bg-amber-600"
                : "bg-[#07345A] text-white hover:bg-[#087EA4]"
            }`}
            title={isPlaying ? "Pause auto-tour" : "Play route tour animation"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Pause Tour</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Play Route Tour</span>
              </>
            )}
          </button>

          {/* Google Maps External Route */}
          <a
            href={routeData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            <span>Open in Google Maps</span>
          </a>
        </div>
      </div>

      {/* Quick Route Summary Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F0F6FA] p-3.5 rounded-2xl border border-slate-100 text-slate-700">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#087EA4] shadow-xs">
            <Navigation className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              Total Circuit
            </div>
            <div className="text-xs sm:text-sm font-extrabold text-[#07345A]">
              ~{routeData.totalDistanceKm} km
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#F6A623] shadow-xs">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              Scenic Drive
            </div>
            <div className="text-xs sm:text-sm font-extrabold text-[#07345A]">
              {routeData.totalDriveHours}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-emerald-600 shadow-xs">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              Route Stops
            </div>
            <div className="text-xs sm:text-sm font-extrabold text-[#07345A]">
              {stops.length} Major Waypoints
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#0FA3A3] shadow-xs">
            <Car className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              Private Vehicle
            </div>
            <div className="text-xs sm:text-sm font-extrabold text-[#07345A] truncate">
              AC Chauffeur
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Map & Inspector Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive Vector SVG Map Canvas (7 Cols) */}
        <div className="lg:col-span-7 bg-gradient-to-b from-[#032743] via-[#07345A] to-[#041d33] rounded-3xl p-4 sm:p-5 relative overflow-hidden shadow-inner text-white select-none">
          {/* Subtle Cartographic Background Grids & Sea Wave Texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Map Compass Rose */}
          <div className="absolute top-4 right-4 z-10 pointer-events-none flex flex-col items-center opacity-70">
            <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-[10px] font-black tracking-widest text-amber-300">
              N
            </div>
            <div className="text-[9px] font-bold text-slate-400 mt-0.5 tracking-wider">
              SRI LANKA
            </div>
          </div>

          {/* Ocean Watermark Label */}
          <div className="absolute bottom-4 left-4 z-10 pointer-events-none text-[11px] font-semibold text-sky-300/40 tracking-widest uppercase">
            Indian Ocean
          </div>

          {/* SVG Map Canvas */}
          <div className="relative w-full aspect-[3/4] max-h-[580px] mx-auto">
            <svg
              viewBox="0 0 600 800"
              className="w-full h-full filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Land Gradient */}
                <linearGradient id="sriLankaLand" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E4E79" />
                  <stop offset="50%" stopColor="#163C5F" />
                  <stop offset="100%" stopColor="#0F2D48" />
                </linearGradient>

                {/* Central Highlands Elevation Shading */}
                <radialGradient id="highlandsGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0FA3A3" stopOpacity="0.45" />
                  <stop offset="70%" stopColor="#087EA4" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#087EA4" stopOpacity="0" />
                </radialGradient>

                {/* Driving Route Glow Filter */}
                <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Sri Lanka Coastline Landmass (Accurate Vector Silhouette) */}
              <path
                d="M 260 70 
                   C 285 65, 305 85, 300 115 
                   C 290 145, 340 180, 365 210 
                   C 395 240, 440 260, 445 290 
                   C 455 330, 440 370, 455 420 
                   C 475 480, 520 520, 535 570 
                   C 545 615, 530 660, 505 700 
                   C 480 735, 435 760, 385 770 
                   C 340 780, 295 785, 260 775 
                   C 230 765, 215 740, 210 710 
                   C 200 660, 185 620, 180 570 
                   C 175 520, 160 460, 165 410 
                   C 170 360, 185 320, 205 270 
                   C 220 230, 200 190, 210 160 
                   C 220 120, 235 80, 260 70 Z"
                fill="url(#sriLankaLand)"
                stroke="#38BDF8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.95"
              />

              {/* Jaffna Peninsula and Northern Islands */}
              <path
                d="M 235 60 C 255 50, 275 55, 290 70 C 275 85, 245 80, 235 60 Z"
                fill="#1E4E79"
                stroke="#38BDF8"
                strokeWidth="1.5"
              />

              {/* Central Highlands Elevation Contour */}
              <ellipse
                cx="345"
                cy="560"
                rx="85"
                ry="105"
                fill="url(#highlandsGlow)"
              />
              <path
                d="M 290 530 Q 345 500 390 540 Q 410 590 380 640 Q 320 650 290 600 Z"
                fill="none"
                stroke="#0FA3A3"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.4"
              />

              {/* Highland Elevation Label */}
              <text
                x="345"
                y="555"
                fill="#5EEAD4"
                fontSize="10"
                fontWeight="bold"
                textAnchor="middle"
                opacity="0.4"
                letterSpacing="1"
              >
                CENTRAL HIGHLANDS
              </text>

              {/* Southern Expressway (E01) Corridor Indicator */}
              <path
                d="M 185 550 Q 195 650 238 760 Q 285 770 340 760"
                fill="none"
                stroke="#64748B"
                strokeWidth="1.5"
                strokeDasharray="2 3"
                opacity="0.45"
              />

              {/* THE DRIVING ROUTE: Outer Glow */}
              <path
                d={svgPathD}
                fill="none"
                stroke="#F6A623"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.4"
                filter="url(#routeGlow)"
              />

              {/* THE DRIVING ROUTE: Solid Main Line */}
              <path
                d={svgPathD}
                fill="none"
                stroke="#F6A623"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* THE DRIVING ROUTE: Animated White Dash Direction Indicators */}
              <path
                d={svgPathD}
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="6 12"
                className="animate-[dash_20s_linear_infinite]"
              />

              {/* Route Stop Pins */}
              {stops.map((stop, index) => {
                const isActive = index === activeStopIndex;
                const isStart = index === 0;
                const isDuplicateStartCoords =
                  index > 0 && stop.x === stops[0].x && stop.y === stops[0].y;

                // When closed-loop return stop shares coordinates with start pin,
                // don't render duplicate inactive pin over start pin
                if (isDuplicateStartCoords && !isActive) {
                  return null;
                }

                return (
                  <g
                    key={stop.id}
                    className="cursor-pointer transition-transform duration-200"
                    onClick={() => handleSelectStop(index)}
                  >
                    {/* Active pulse aura */}
                    {isActive && (
                      <circle
                        cx={stop.x}
                        cy={stop.y}
                        r="22"
                        fill="#F6A623"
                        opacity="0.25"
                        className="animate-ping"
                      />
                    )}

                    {/* Outer Pin Halo */}
                    <circle
                      cx={stop.x}
                      cy={stop.y}
                      r={isActive ? "14" : "10"}
                      fill={isActive ? "#F6A623" : isStart ? "#0FA3A3" : "#07345A"}
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      className="transition-all duration-300"
                    />

                    {/* Inner Center Dot / Number */}
                    {isStart && !isDuplicateStartCoords ? (
                      <circle cx={stop.x} cy={stop.y} r="4" fill="#FFFFFF" />
                    ) : (
                      <text
                        x={stop.x}
                        y={stop.y + 3.5}
                        fill={isActive ? "#07345A" : "#FFFFFF"}
                        fontSize="9"
                        fontWeight="900"
                        textAnchor="middle"
                        fontFamily="sans-serif"
                      >
                        {index + 1}
                      </text>
                    )}

                    {/* Stop Name Label on Map */}
                    <text
                      x={stop.isAirport ? stop.x - 14 : stop.x}
                      y={stop.isAirport ? stop.y + 3.5 : stop.y - 14}
                      fill={isActive ? "#F6A623" : "#FFFFFF"}
                      fontSize={isActive ? "11" : "9.5"}
                      fontWeight={isActive ? "800" : "600"}
                      textAnchor={stop.isAirport ? "end" : "middle"}
                      className="pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                    >
                      {getMapPinLabel(stop)}
                    </text>
                  </g>
                );
              })}

              {/* Moving Car / Chauffeur Icon at Active Stop */}
              <g
                transform={`translate(${currentStop.x - 12}, ${currentStop.y - 12})`}
                className="pointer-events-none transition-all duration-500 ease-out"
              >
                <circle cx="12" cy="12" r="16" fill="#F6A623" opacity="0.3" />
                <circle cx="12" cy="12" r="10" fill="#F6A623" />
                <path
                  d="M7 11 L10 7 L14 7 L17 11 L17 15 L7 15 Z"
                  fill="#07345A"
                />
              </g>
            </svg>
          </div>

          {/* Map Controls Floating Footer */}
          <div className="mt-3 flex items-center justify-between gap-2 pt-3 border-t border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={prevStop}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Previous Stop"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-semibold text-slate-300">
                Stop {activeStopIndex + 1} of {stops.length}
              </span>
              <button
                onClick={nextStop}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Next Stop"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Map Legend */}
            <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F6A623]" />
                <span>Driving Route</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0FA3A3]" />
                <span>Highlands / Start</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right: Active Stop Detail Inspector (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Active Stop Card */}
          <div className="bg-slate-50/90 rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-4">
            {/* Stop Top Meta */}
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#07345A] text-white text-xs font-bold">
                <MapPin className="w-3 h-3 text-[#F6A623]" />
                <span>
                  Stop {activeStopIndex + 1} • {currentStop.dayLabel}
                </span>
              </span>
              <span className="text-xs font-semibold text-[#087EA4] bg-white px-2.5 py-1 rounded-full border border-slate-200">
                {currentStop.region}
              </span>
            </div>

            {/* Stop Title */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#07345A] leading-snug">
                {currentStop.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {currentStop.scenicHighlight}
              </p>
            </div>

            {/* Driving Distance & Time from Previous Stop */}
            <div className="grid grid-cols-2 gap-2.5 bg-white p-3 rounded-xl border border-slate-200/70">
              <div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Distance From Prev
                </div>
                <div className="text-sm font-bold text-[#07345A] mt-0.5">
                  {currentStop.distanceFromPrevKm > 0
                    ? `${currentStop.distanceFromPrevKm} km`
                    : "Tour Origin"}
                </div>
              </div>
              <div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Drive Time
                </div>
                <div className="text-sm font-bold text-[#087EA4] mt-0.5">
                  {currentStop.driveTimeFromPrev}
                </div>
              </div>
            </div>

            {/* Road Type Note */}
            <div className="text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200/70 space-y-1">
              <div className="font-semibold text-slate-700 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#0FA3A3]" />
                <span>Road & Transit Type:</span>
              </div>
              <p className="text-slate-500 leading-relaxed text-[11.5px]">
                {currentStop.roadType}
              </p>
            </div>

            {/* Chauffeur Ravi Guide Tip */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50/50 p-3.5 rounded-xl border border-amber-200/70 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-amber-900 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Chauffeur Guide Comfort Tip</span>
              </div>
              <p className="text-amber-900/90 leading-relaxed text-[11.5px]">
                {currentStop.chauffeurTip}
              </p>
            </div>

            {/* Stop Highlights */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Key Experiences Here
              </div>
              <div className="space-y-1.5">
                {currentStop.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-medium text-slate-700"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
              <button
                onClick={() => scrollToDay(currentStop.dayNumber)}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#07345A] text-white hover:bg-[#087EA4] text-xs font-bold transition-colors shadow-xs"
              >
                <span>View Day {currentStop.dayNumber} Itinerary</span>
                <ArrowRight className="w-3 h-3" />
              </button>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 text-xs font-bold transition-colors shadow-xs"
                title="Ask about this stop via WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Ask Ravi</span>
              </a>
            </div>
          </div>

          {/* Quick Clickable Stop Selector Badges */}
          <div className="bg-white p-3.5 rounded-2xl border border-slate-100">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Jump To Stop Along Route:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {stops.map((s, idx) => {
                const isSelected = idx === activeStopIndex;
                return (
                  <button
                    key={s.id}
                    onClick={() => handleSelectStop(idx)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      isSelected
                        ? "bg-[#F6A623] text-[#07345A] shadow-xs"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                    }`}
                  >
                    {idx + 1}. {getStopBadgeLabel(s, idx, stops.length)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Driving Distance & Transit Breakdown Matrix */}
      <div className="pt-2">
        <button
          onClick={() => setShowMatrix((prev) => !prev)}
          className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/70 text-xs font-bold text-[#07345A] transition-colors"
        >
          <span className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#087EA4]" />
            <span>
              {showMatrix ? "Hide" : "View"} Complete Daily Driving Distance & Time Matrix ({stops.length} Legs)
            </span>
          </span>
          <span className="text-[#087EA4] font-semibold">
            {showMatrix ? "Close Table ▲" : "Expand Table ▼"}
          </span>
        </button>

        {showMatrix && (
          <div className="mt-3 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#07345A] text-white text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="py-2.5 px-3">Leg</th>
                  <th className="py-2.5 px-3">From → To</th>
                  <th className="py-2.5 px-3">Road / Transit</th>
                  <th className="py-2.5 px-3 text-right">Distance</th>
                  <th className="py-2.5 px-3 text-right">Drive Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {stops.map((stop, i) => {
                  const prevName =
                    i === 0
                      ? "Airport Arrival"
                      : getTableStopName(stops[i - 1]);
                  return (
                    <tr
                      key={stop.id}
                      onClick={() => handleSelectStop(i)}
                      className={`cursor-pointer hover:bg-slate-50 transition-colors ${
                        i === activeStopIndex ? "bg-amber-50/60 font-semibold text-[#07345A]" : ""
                      }`}
                    >
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[#07345A] font-bold text-[10px]">
                          {stop.dayLabel}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 font-medium">
                        {prevName} → {stop.name}
                      </td>
                      <td className="py-2.5 px-3 text-slate-500 truncate max-w-[200px]">
                        {stop.roadType}
                      </td>
                      <td className="py-2.5 px-3 text-right font-bold text-[#07345A]">
                        {stop.distanceFromPrevKm > 0 ? `${stop.distanceFromPrevKm} km` : "—"}
                      </td>
                      <td className="py-2.5 px-3 text-right font-bold text-[#087EA4]">
                        {stop.driveTimeFromPrev}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
