"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import { destinations } from "@/data/destinations";
import { useLanguage } from "@/context/LanguageContext";

interface SearchPanelProps {
  className?: string;
}

export default function SearchPanel({ className = "" }: SearchPanelProps) {
  const router = useRouter();
  const { t, getDestinationText } = useLanguage();
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState("2 adults");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    // Prevent selecting past dates (formatted YYYY-MM-DD in local time)
    const today = new Date().toLocaleDateString("en-CA");
    setMinDate(today);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (travelers) params.set("travelers", travelers);
    if (travelDate) params.set("date", travelDate);
    router.push(`/tours?${params.toString()}`);
  };

  return (
    <div
      className={`bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100/80 w-full max-w-md ${className}`}
    >
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#07345A] tracking-tight">
          {t.search.title}
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          {t.search.subtitle}
        </p>
      </div>

      <form onSubmit={handleSearch} className="space-y-4">
        {/* Destination Field */}
        <div>
          <label
            htmlFor="search-destination"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5"
          >
            {t.search.destinationLabel}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <MapPin className="w-4 h-4 text-[#087EA4]" />
            </div>
            <select
              id="search-destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 hover:bg-slate-100/70 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#07345A] focus:bg-white transition-all appearance-none cursor-pointer"
            >
              <option value="">{t.search.selectDestination}</option>
              {destinations.map((d) => {
                const localized = getDestinationText(d.slug, {
                  name: d.name,
                  tag: d.tag,
                });
                return (
                  <option key={d.slug} value={d.slug}>
                    {localized.name} ({localized.tag})
                  </option>
                );
              })}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Travel Date & Travelers in 2 columns on tablet/desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Travel Date */}
          <div>
            <label
              htmlFor="search-date"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5"
            >
              {t.search.dateLabel}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Calendar className="w-4 h-4 text-[#087EA4]" />
              </div>
              <input
                id="search-date"
                type="date"
                min={minDate}
                value={travelDate}
                onChange={(e) => {
                  const val = e.target.value;
                  if (minDate && val && val < minDate) {
                    return;
                  }
                  setTravelDate(val);
                }}
                className="w-full pl-10 pr-3 py-3 bg-slate-50 hover:bg-slate-100/70 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#07345A] focus:bg-white transition-all cursor-pointer"
              />
            </div>
          </div>

          {/* Travelers */}
          <div>
            <label
              htmlFor="search-travelers"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5"
            >
              {t.search.travelersLabel}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Users className="w-4 h-4 text-[#087EA4]" />
              </div>
              <select
                id="search-travelers"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 hover:bg-slate-100/70 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#07345A] focus:bg-white transition-all appearance-none cursor-pointer"
              >
                <option value="1 adult">{t.search.adult1}</option>
                <option value="2 adults">{t.search.adults2}</option>
                <option value="Family (3-4)">{t.search.family}</option>
                <option value="Small Group (5-8)">{t.search.smallGroup}</option>
                <option value="Large Group (9+)">{t.search.largeGroup}</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-2 py-3.5 px-6 rounded-xl bg-[#07345A] hover:bg-[#032743] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 group cursor-pointer"
        >
          <span>{t.search.searchButton}</span>
          <ArrowRight className="w-4 h-4 text-[#F6A623] group-hover:translate-x-1 rtl-flip transition-transform" />
        </button>
      </form>
    </div>
  );
}
