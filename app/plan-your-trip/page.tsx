"use client";

import { useState } from "react";
import Image from "next/image";
import { destinations } from "@/data/destinations";
import { siteConfig } from "@/data/siteConfig";
import {
  Compass,
  CheckCircle2,
  Calendar,
  Users,
  Car,
  Heart,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

interface PlannerDestination {
  id: string;
  name: string;
  tag: string;
  image: string;
  visitorsPercentage?: string;
}

const TOP_12_DESTINATIONS: PlannerDestination[] = [
  { id: "galle", name: "Galle Fort", tag: "Colonial Charm", image: "/images/destinations/galle.jpg", visitorsPercentage: "54.0%" },
  { id: "ella", name: "Ella", tag: "Scenic Mountains", image: "/images/destinations/ella.jpg", visitorsPercentage: "53.1%" },
  { id: "sigiriya", name: "Sigiriya", tag: "Ancient Marvel", image: "/images/destinations/sigiriya.jpg", visitorsPercentage: "53.1%" },
  { id: "kandy", name: "Kandy", tag: "Sacred City", image: "/images/destinations/kandy.jpg", visitorsPercentage: "51.3%" },
  { id: "colombo", name: "Colombo", tag: "Oceanfront Capital", image: "/images/destinations/colombo.jpg", visitorsPercentage: "46.2%" },
  { id: "nuwara-eliya", name: "Nuwara Eliya", tag: "Tea Country", image: "/images/destinations/nuwara-eliya.jpg", visitorsPercentage: "36.4%" },
  { id: "dambulla", name: "Dambulla", tag: "Cave Temples", image: "/images/destinations/dambulla.jpg", visitorsPercentage: "34.6%" },
  { id: "mirissa", name: "Mirissa", tag: "Golden Beaches", image: "/images/destinations/mirissa.jpg", visitorsPercentage: "34.4%" },
  { id: "yala", name: "Yala", tag: "Wildlife Safari", image: "/images/destinations/yala.jpg", visitorsPercentage: "32.8%" },
  { id: "arugam-bay", name: "Arugam Bay", tag: "Surf Paradise", image: "/images/destinations/arugam-bay.jpg", visitorsPercentage: "28.5%" },
  { id: "haputale", name: "Haputale", tag: "Misty Tea Ridges", image: "/images/destinations/haputale.jpg", visitorsPercentage: "26.2%" },
  { id: "negombo", name: "Negombo", tag: "Coastal Lagoon", image: "/images/destinations/negombo.jpg", visitorsPercentage: "25.7%" },
  { id: "trincomalee", name: "Trincomalee", tag: "Beaches & Marine Park", image: "/images/destinations/trincomalee.jpg", visitorsPercentage: "23.4%" },
  { id: "jaffna", name: "Jaffna", tag: "Northern Heritage", image: "/images/destinations/jaffna.jpg", visitorsPercentage: "20.1%" },
  { id: "hikkaduwa", name: "Hikkaduwa", tag: "Coral Reef & Surf", image: "/images/destinations/hikkaduwa.jpg", visitorsPercentage: "18.9%" },
  { id: "udawalawe", name: "Udawalawe", tag: "Elephant Sanctuary", image: "/images/destinations/udawalawe.jpg", visitorsPercentage: "17.6%" },
];

export default function PlanYourTripPage() {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [customPlaces, setCustomPlaces] = useState<string>("");
  const [duration, setDuration] = useState("7 Days / 6 Nights");
  const [travelGroup, setTravelGroup] = useState("Couple (2 Adults)");
  const [travelStyle, setTravelStyle] = useState("Balanced (Comfort & Exploration)");
  const [vehicle, setVehicle] = useState("Premium Sedan — Enhanced comfort for couples and business travellers");
  const [interests, setInterests] = useState<string[]>([
    "Beaches & Coast",
    "Scenic Train Ride",
    "Wildlife Safari",
  ]);

  const [guidingService, setGuidingService] = useState("Professional Driver-Guide");
  const [guideLanguage, setGuideLanguage] = useState("English");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleDestination = (name: string) => {
    if (selectedDestinations.includes(name)) {
      setSelectedDestinations(selectedDestinations.filter((d) => d !== name));
    } else {
      setSelectedDestinations([...selectedDestinations, name]);
    }
  };

  const toggleInterest = (item: string) => {
    if (interests.includes(item)) {
      setInterests(interests.filter((i) => i !== item));
    } else {
      setInterests([...interests, item]);
    }
  };

  const handlePlanSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const messageContent = [
      `CUSTOM ITINERARY REQUEST:`,
      `• Preferred Destinations: ${getDestinationsSummary()}`,
      `• Tour Duration: ${duration}`,
      `• Travel Party: ${travelGroup}`,
      `• Travel Style: ${travelStyle}`,
      `• Selected Vehicle: ${vehicle}`,
      `• Guiding Service: ${guidingService} (${guideLanguage} guide)`,
      `• Selected Interests: ${interests.join(", ") || "General Sightseeing"}`,
      notes.trim() ? `• Traveler Notes / Special Requests: ${notes.trim()}` : "",
    ].filter(Boolean).join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          phone: contactPhone,
          travelers: travelGroup,
          guidingService: guidingService,
          guideLanguage: guideLanguage,
          interestedTour: `Custom Itinerary Plan (${duration})`,
          message: messageContent,
        }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) {
        throw new Error(result?.error || "Failed to submit inquiry.");
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      console.warn("Itinerary email submission warning:", err);
      // Still show success view with instant WhatsApp fallback so the user is never blocked
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getDestinationsSummary = () => {
    const list: string[] = [];
    if (selectedDestinations.length > 0) {
      list.push(selectedDestinations.join(", "));
    }
    if (customPlaces.trim()) {
      list.push(`Custom Places: ${customPlaces.trim()}`);
    }
    return list.length > 0 ? list.join(" + ") : "Open / Suggest complete route for me";
  };

  const whatsappPlanUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(
    `Hello Ravi Tours & Travels! I just planned my custom Sri Lanka trip on your website:
• Destinations: ${getDestinationsSummary()}
• Duration: ${duration}
• Party: ${travelGroup}
• Vehicle: ${vehicle}
• Guiding Service: ${guidingService}
• Guide Language: ${guideLanguage}
• Interests: ${interests.join(", ")}
• Name: ${contactName || "Traveler"}${notes.trim() ? `\n• Notes / Requests: ${notes.trim()}` : ""}`
  )}`;

  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      {/* Header Banner */}
      <section className="bg-[#07345A] py-16 sm:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0FA3A3_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F6A623] block mb-2">
              CUSTOM TOUR PLANNER
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Create Your Perfect Sri Lanka Journey
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg mt-3 font-light leading-relaxed">
              Choose your favourite destinations, travel preferences, and experiences. Our local Sri Lankan team will design a personalized private tour tailored to your interests, schedule, and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Planner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isSuccess ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 text-center max-w-2xl mx-auto space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#07345A]">
              Custom Itinerary Requested!
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Thank you, <span className="font-semibold">{contactName}</span>! Our
              travel planners are designing your custom route{" "}
              {selectedDestinations.length > 0 ? (
                <>
                  across{" "}
                  <span className="font-semibold text-[#07345A]">
                    {selectedDestinations.join(", ")}
                    {customPlaces.trim() ? ` & ${customPlaces.trim()}` : ""}
                  </span>{" "}
                </>
              ) : customPlaces.trim() ? (
                <>
                  featuring{" "}
                  <span className="font-semibold text-[#07345A]">
                    {customPlaces.trim()}
                  </span>{" "}
                </>
              ) : (
                "with an optimized circuit "
              )}
              for <span className="font-semibold text-[#07345A]">{duration}</span>.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
              <span>{guidingService}</span>
              <span>•</span>
              <span>{guideLanguage} Guide</span>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappPlanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-2xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Send to Ravi Tours on WhatsApp</span>
              </a>
              <button
                onClick={() => setIsSuccess(false)}
                className="px-6 py-3.5 rounded-2xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-all"
              >
                Modify Selections
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handlePlanSubmit} className="space-y-12">
            {/* Step 1: Choose Destinations */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#087EA4]">
                      STEP 01
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      Optional
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#07345A] mt-0.5">
                    Select Your Preferred Destinations
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Pick any places you would love to visit, or skip if you want Ravi to suggest an ideal custom route.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full transition-colors ${
                    selectedDestinations.length > 0
                      ? "text-[#087EA4] bg-[#F0F6FA]"
                      : "text-slate-400 bg-slate-100"
                  }`}>
                    {selectedDestinations.length > 0
                      ? `✓ ${selectedDestinations.length} Selected`
                      : "0 Selected"}
                  </span>

                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById("step-02-duration");
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087EA4] hover:text-[#07345A] bg-[#087EA4]/10 hover:bg-[#087EA4]/20 px-3 py-1 rounded-full transition-colors cursor-pointer"
                    title="Continue to Step 02 (Duration & Vehicle)"
                  >
                    <span>Next: Duration &amp; Vehicle</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* 12 Destination Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {TOP_12_DESTINATIONS.map((d) => {
                  const isSelected = selectedDestinations.includes(d.name);
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => toggleDestination(d.name)}
                      className={`relative rounded-2xl overflow-hidden text-left p-3.5 border-2 transition-all cursor-pointer group ${
                        isSelected
                          ? "border-[#07345A] bg-[#07345A]/5 ring-2 ring-[#07345A]/20"
                          : "border-slate-100 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="relative h-24 rounded-xl overflow-hidden mb-2.5">
                        <Image
                          src={d.image}
                          alt={d.name}
                          fill
                          sizes="150px"
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                        {isSelected && (
                          <div className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-[#07345A] text-white flex items-center justify-center shadow">
                            <CheckCircle2 className="w-4 h-4 text-[#F6A623]" />
                          </div>
                        )}
                      </div>
                      <h3 className="font-bold text-sm text-[#07345A] leading-tight">
                        {d.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {d.tag}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Custom / Other Places Input */}
              <div className="p-4 sm:p-5 rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 hover:bg-slate-50 transition-colors space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#07345A]">
                  <Sparkles className="w-4 h-4 text-[#F6A623]" />
                  <span>Have other specific places in mind? (Optional)</span>
                </div>
                <p className="text-xs text-slate-500">
                  Want to visit somewhere outside these places (e.g. Trincomalee, Kitulgala, Horton Plains, Anuradhapura, Polonnaruwa, Wilpattu)? Enter them here:
                </p>
                <input
                  type="text"
                  value={customPlaces}
                  onChange={(e) => setCustomPlaces(e.target.value)}
                  placeholder="e.g. Trincomalee beaches, Horton Plains World's End, Kitulgala white-water rafting..."
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#07345A] placeholder:text-slate-400"
                />
              </div>

              {/* Quick Skip Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
                <p className="text-xs text-slate-400">
                  Tip: No places selected? No problem — we will craft an optimal route based on your duration.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("step-02-duration");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087EA4] hover:text-[#07345A] transition-colors cursor-pointer"
                >
                  <span>Already have an itinerary? Continue to Step 02</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Step 2: Duration & Travel Group */}
            <div id="step-02-duration" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6 scroll-mt-24">
              <span className="text-xs font-bold uppercase tracking-widest text-[#087EA4] block mb-1">
                STEP 02
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#07345A]">
                Duration &amp; Travel Party
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                    Estimated Duration
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#07345A]"
                  >
                    <option value="3 - 4 Days">3 - 4 Days (Quick Escape)</option>
                    <option value="5 - 6 Days">5 - 6 Days (Essential Circuit)</option>
                    <option value="7 Days / 6 Nights">7 Days / 6 Nights (Highlights)</option>
                    <option value="8 - 9 Days">8 - 9 Days (Extended)</option>
                    <option value="10 - 12 Days">10 - 12 Days (Complete Island)</option>
                    <option value="14+ Days">14+ Days (Grand In-Depth Tour)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                    Who Is Traveling?
                  </label>
                  <select
                    value={travelGroup}
                    onChange={(e) => setTravelGroup(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#07345A]"
                  >
                    <option value="Solo Traveler">Solo Explorer</option>
                    <option value="Couple (2 Adults)">Couple / Honeymoon (2 Adults)</option>
                    <option value="Family with Children">Family with Children</option>
                    <option value="Small Group (3-5)">Small Group of Friends (3-5)</option>
                    <option value="Large Group (6+)">Large Group / Extended Family (6+)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Interests & Vehicle */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#087EA4] block mb-1">
                STEP 03
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#07345A]">
                Experiences &amp; Vehicle Preference
              </h2>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3">
                  What experiences do you value most?
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Beaches & Coast",
                    "Scenic Train Ride",
                    "Wildlife Safari",
                    "Ancient Temples & History",
                    "Tea Plantations & Hiking",
                    "Local Food & Cooking",
                    "Ayurveda & Wellness",
                    "Water Sports & Surfing",
                  ].map((item) => {
                    const isSelected = interests.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleInterest(item)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#07345A] text-white shadow"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                  Preferred Private Vehicle Type
                </label>
                <select
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full sm:w-3/4 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#07345A] text-slate-800"
                >
                  <option value="Standard Sedan — Ideal for 1–2 travellers">
                    Standard Sedan — Ideal for 1–2 travellers
                  </option>
                  <option value="Premium Sedan — Enhanced comfort for couples and business travellers">
                    Premium Sedan — Enhanced comfort for couples and business travellers
                  </option>
                  <option value="Luxury Van — Ideal for families and travellers with luggage">
                    Luxury Van — Ideal for families and travellers with luggage
                  </option>
                  <option value="Premium SUV / 4×4 — Extra comfort for scenic journeys and selected off-road routes">
                    Premium SUV / 4×4 — Extra comfort for scenic journeys and selected off-road routes
                  </option>
                  <option value="Minibus — Ideal for small groups and group excursions">
                    Minibus — Ideal for small groups and group excursions
                  </option>
                  <option value="Luxury Coach — Ideal for large groups and corporate travel">
                    Luxury Coach — Ideal for large groups and corporate travel
                  </option>
                </select>
              </div>
            </div>

            {/* Step 4: Guiding Service & Contact Submission */}
            <div id="step-04-contact" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-8 scroll-mt-24">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#087EA4] block mb-1">
                  STEP 04
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#07345A]">
                  Guiding Preferences &amp; Contact Details
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Select your preferred guide service setup and language, then provide your contact details.
                </p>
              </div>

              {/* Guiding Service & Language Selection Section */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-6">
                {/* 1. Preferred Guiding Service */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#07345A] mb-1.5">
                    1. Preferred Guiding Service *
                  </label>
                  <p className="text-xs text-slate-500 mb-3">
                    Select your preferred service:
                  </p>
                  <div className="space-y-2.5">
                    {[
                      {
                        title: "Professional Driver-Guide",
                        badge: "Suggested / Popular",
                        desc: "1 licensed professional who drives and provides expert island guiding.",
                      },
                      {
                        title: "Private Chauffeur + Professional Driver",
                        badge: "Separate Chauffeur & Guide",
                        desc: "Dedicated chauffeur driver plus a separate dedicated licensed guide.",
                      },
                      {
                        title: "Not Sure — Recommend the Best Option",
                        badge: "We'll Advise",
                        desc: "Our travel specialists will evaluate and advise the optimal arrangement for your route.",
                      },
                    ].map((opt) => (
                      <label
                        key={opt.title}
                        className={`flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                          guidingService === opt.title
                            ? "bg-white border-[#07345A] shadow-xs"
                            : "bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="guidingService"
                          value={opt.title}
                          checked={guidingService === opt.title}
                          onChange={() => setGuidingService(opt.title)}
                          className="mt-1 w-4 h-4 text-[#07345A] focus:ring-[#07345A]"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-bold text-[#07345A]">
                              {opt.title}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#087EA4]/10 text-[#087EA4]">
                              {opt.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {opt.desc}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 2. Preferred Tour Guide Language */}
                <div className="pt-4 border-t border-slate-200/80">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#07345A] mb-1.5">
                    2. Preferred Tour Guide Language *
                  </label>
                  <p className="text-xs text-slate-500 mb-2">
                    Select your preferred language
                  </p>
                  <div className="max-w-md">
                    <select
                      value={guideLanguage}
                      onChange={(e) => setGuideLanguage(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-[#07345A] focus:ring-2 focus:ring-[#07345A]"
                    >
                      <option value="English">English</option>
                      <option value="German">German</option>
                      <option value="French">French</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Italian">Italian</option>
                      <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                      <option value="Japanese">Japanese</option>
                      <option value="Russian">Russian</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#07345A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. elena@example.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#07345A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 7123 456789"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#07345A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Additional Notes or Special Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="Preferred destinations, travel dates, approximate budget, accommodation preferences, flight details, or any special requests..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#07345A]"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  No obligation • Transparent pricing • Free customized route map
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-[#07345A] hover:bg-[#032743] disabled:opacity-60 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Your Itinerary...</span>
                    </>
                  ) : (
                    <>
                      <span>Build My Sri Lanka Tour</span>
                      <ArrowRight className="w-4 h-4 text-[#F6A623]" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
