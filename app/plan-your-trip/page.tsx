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

export default function PlanYourTripPage() {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([
    "Sigiriya",
    "Ella",
    "Mirissa",
  ]);
  const [duration, setDuration] = useState("7 Days / 6 Nights");
  const [travelGroup, setTravelGroup] = useState("Couple (2 Adults)");
  const [travelStyle, setTravelStyle] = useState("Balanced (Comfort & Exploration)");
  const [vehicle, setVehicle] = useState("Spacious Luxury Van (Toyota KDH)");
  const [interests, setInterests] = useState<string[]>([
    "Beaches & Coast",
    "Scenic Train Ride",
    "Wildlife Safari",
  ]);

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleDestination = (name: string) => {
    if (selectedDestinations.includes(name)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter((d) => d !== name));
      }
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

  const handlePlanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const whatsappPlanUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(
    `Hello Ravi Tours & Travels! I just planned my custom Sri Lanka trip on your website:
• Destinations: ${selectedDestinations.join(", ")}
• Duration: ${duration}
• Party: ${travelGroup}
• Vehicle: ${vehicle}
• Interests: ${interests.join(", ")}
• Name: ${contactName || "Traveler"}`
  )}`;

  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      {/* Header Banner */}
      <section className="bg-[#07345A] py-16 sm:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0FA3A3_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F6A623] block mb-2">
              CUSTOM JOURNEY BUILDER
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Plan Your Dream Sri Lanka Itinerary
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg mt-3 font-light leading-relaxed">
              Select your must-see destinations and travel style. Our local Sri Lankan
              experts will construct a private chauffeur-driven proposal tailored to
              your schedule.
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
              travel planners are designing your custom route across{" "}
              <span className="font-semibold text-[#07345A]">
                {selectedDestinations.join(", ")}
              </span>{" "}
              for <span className="font-semibold text-[#07345A]">{duration}</span>.
            </p>

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
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#087EA4] block mb-1">
                    STEP 01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#07345A]">
                    Select Your Preferred Destinations
                  </h2>
                </div>
                <span className="text-xs font-bold text-[#087EA4] bg-[#F0F6FA] px-3 py-1 rounded-full">
                  {selectedDestinations.length} Selected
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {destinations.map((d) => {
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
            </div>

            {/* Step 2: Duration & Travel Group */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
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
                  className="w-full sm:w-1/2 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#07345A]"
                >
                  <option value="Comfortable AC Sedan (Toyota Axio/Prius)">
                    Comfortable AC Sedan (Toyota Axio/Prius) - Ideal for 1-2 travelers
                  </option>
                  <option value="Spacious Luxury Van (Toyota KDH)">
                    Spacious Luxury Van (Toyota KDH) - Ideal for families &amp; luggage
                  </option>
                  <option value="Executive SUV / Premium 4x4">
                    Executive SUV / Premium 4x4
                  </option>
                  <option value="Mini-Coach (15-20 seats)">
                    Mini-Coach (for groups)
                  </option>
                </select>
              </div>
            </div>

            {/* Step 4: Contact & Submission */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#087EA4] block mb-1">
                STEP 04
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#07345A]">
                Your Contact Information
              </h2>

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
                  Any additional notes or flight dates?
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Arriving on Nov 14 at 8am, looking for 4-star boutique hotels and kid-friendly excursions..."
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
                  className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-[#07345A] hover:bg-[#032743] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Build My Sri Lanka Tour</span>
                  <ArrowRight className="w-4 h-4 text-[#F6A623]" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
