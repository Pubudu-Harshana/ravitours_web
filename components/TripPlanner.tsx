"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, Calendar } from "lucide-react";
import { destinations } from "@/data/destinations";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function TripPlanner() {
  const { t, getDestinationText } = useLanguage();
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("6 - 8 days");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Culture",
    "Beaches",
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });
  const [showContactModal, setShowContactModal] = useState(false);

  const interestOptions = [
    { key: "Beaches", label: t.planner.beach },
    { key: "Culture", label: t.planner.culture },
    { key: "Wildlife", label: t.planner.wildlife },
    { key: "Adventure", label: t.planner.adventure },
  ];

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowContactModal(true);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowContactModal(false);
  };

  const sendDirectWhatsApp = () => {
    const text = `Hello Ravi Tours & Travels! I am planning a Sri Lanka trip.
Destination preference: ${destination || "Any / Recommended"}
Duration: ${duration}
Interests: ${selectedInterests.join(", ") || "General sightseeing"}
Name: ${contactInfo.name || "Traveler"}`;

    const url = `https://wa.me/${siteConfig.contact.whatsapp.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image: Panoramic Sri Lanka scenic — tea terraces & Sigiriya at golden hour */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/trip-planner-bg.jpg"
          alt="Panoramic Sri Lanka scenic landscape — lush tea terraces and Sigiriya rock fortress at golden hour sunset"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#032743]/88 via-[#07345A]/75 to-[#032743]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 text-white">
          <span className="text-xs sm:text-sm uppercase font-bold tracking-widest text-[#F6A623] block mb-2">
            {t.planner.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {t.planner.title}
          </h2>
          <p className="text-slate-200 text-base sm:text-lg mt-3 font-light">
            {t.planner.subtitle}
          </p>
        </div>

        {/* Floating Form Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20">
          {submitted ? (
            <div className="py-8 text-center max-w-lg mx-auto space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#07345A]">
                {t.planner.receivedTitle}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.planner.receivedMessage}
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <button
                  onClick={sendDirectWhatsApp}
                  className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20ba59] transition-all shadow cursor-pointer"
                >
                  {t.planner.sendWhatsAppBtn}
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-all cursor-pointer"
                >
                  {t.planner.planAnotherBtn}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleInitialSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                {/* Where would you like to go? */}
                <div className="md:col-span-4">
                  <label
                    htmlFor="plan-destination"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2"
                  >
                    {t.planner.destinationLabel}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <MapPin className="w-4 h-4 text-[#087EA4]" />
                    </div>
                    <select
                      id="plan-destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#07345A] focus:bg-white transition-all appearance-none cursor-pointer"
                    >
                      <option value="">{t.planner.selectDestination}</option>
                      {destinations.map((d) => {
                        const localized = getDestinationText(d.slug, {
                          name: d.name,
                          tag: d.tag,
                        });
                        return (
                          <option key={d.slug} value={localized.name}>
                            {localized.name}
                          </option>
                        );
                      })}
                      <option value="Island Circuit (Highlights)">
                        {t.planner.wholeIsland}
                      </option>
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

                {/* How long? */}
                <div className="md:col-span-3">
                  <label
                    htmlFor="plan-duration"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2"
                  >
                    {t.planner.durationLabel}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Calendar className="w-4 h-4 text-[#087EA4]" />
                    </div>
                    <select
                      id="plan-duration"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#07345A] focus:bg-white transition-all appearance-none cursor-pointer"
                    >
                      <option value="3 - 5 days">3 - 5 days</option>
                      <option value="6 - 8 days">6 - 8 days</option>
                      <option value="9 - 12 days">9 - 12 days</option>
                      <option value="13+ days">13+ days</option>
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

                {/* What do you love? Interest options */}
                <div className="md:col-span-5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    {t.planner.interestsLabel}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interestOptions.map((item) => {
                      const isSelected = selectedInterests.includes(item.key);
                      return (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => toggleInterest(item.key)}
                          className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#07345A] text-white shadow-sm"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom CTA Row */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500 text-center sm:text-left">
                  {t.planner.footerNote}
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#F6A623] hover:bg-[#E59515] text-[#07345A] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                >
                  <span>{t.planner.submitButton}</span>
                  <ArrowRight className="w-4 h-4 text-[#07345A] group-hover:translate-x-1 rtl-flip transition-transform" />
                </button>
              </div>
            </form>
          )}

          {/* Quick Contact Modal for Inquiry */}
          {showContactModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
              <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
                <h3 className="text-xl font-bold text-[#07345A]">
                  {t.planner.modalTitle}
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-5">
                  {t.planner.modalSubtitle}
                </p>

                <form onSubmit={handleFinalSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      {t.planner.fullNameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.planner.fullNamePlaceholder}
                      value={contactInfo.name}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#07345A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      {t.planner.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.planner.emailPlaceholder}
                      value={contactInfo.email}
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#07345A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      {t.planner.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      placeholder={t.planner.phonePlaceholder}
                      value={contactInfo.whatsapp}
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          whatsapp: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#07345A]"
                    />
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowContactModal(false)}
                      className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 cursor-pointer"
                    >
                      {t.planner.cancelBtn}
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 rounded-xl bg-[#07345A] text-white text-sm font-bold hover:bg-[#032743] shadow cursor-pointer"
                    >
                      {t.planner.sendRequestBtn}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
