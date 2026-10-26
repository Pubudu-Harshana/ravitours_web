"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { tours } from "@/data/tours";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";

function ContactPageContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();

  const tourParam = searchParams.get("tour") || searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    arrivalDate: "",
    departureDate: "",
    travelers: "2 adults",
    guidingService: "Professional Driver-Guide",
    guideLanguage: "English",
    interestedTour: "",
    message: "",
  });

  const [honeypot, setHoneypot] = useState("");
  const [renderedAt, setRenderedAt] = useState<number>(0);
  const [minDate, setMinDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Prevent selecting past dates (formatted YYYY-MM-DD in local time)
    const today = new Date().toLocaleDateString("en-CA");
    setMinDate(today);
    setRenderedAt(Date.now());
  }, []);

  // Pre-fill tour if directed from tour detail or services view
  useEffect(() => {
    if (tourParam) {
      setFormData((prev) => ({
        ...prev,
        interestedTour: tourParam,
      }));
    }
  }, [tourParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          arrivalDate: formData.arrivalDate,
          departureDate: formData.departureDate,
          travelDate: formData.arrivalDate,
          travelers: formData.travelers,
          guidingService: formData.guidingService,
          guideLanguage: formData.guideLanguage,
          interestedTour: formData.interestedTour,
          message: formData.message,
          _gotcha: honeypot,
          _renderedAt: renderedAt,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.error ||
            "Unable to deliver your message. Please try again or reach out directly via WhatsApp."
        );
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while sending your inquiry. Please try again.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const directWhatsAppUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(
    `Hello Ravi Tours & Travels! My name is ${
      formData.name || "Traveler"
    }. I am inquiring about ${
      formData.interestedTour ? `"${formData.interestedTour}" ` : ""
    }travel from ${formData.arrivalDate || "Arrival"} to ${
      formData.departureDate || "Departure"
    } for ${formData.travelers} with a ${formData.guidingService} (${formData.guideLanguage} guide). Message: ${formData.message || "Please provide package details."}`
  )}`;

  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      {/* Header Banner */}
      <section className="bg-[#07345A] py-16 sm:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0FA3A3_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F6A623] block mb-2">
              {t.contactPage.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {t.contactPage.title}
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg mt-3 font-light leading-relaxed">
              {t.contactPage.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
              <h2 className="text-xl font-bold text-[#07345A]">
                {t.contactPage.directChannels}
              </h2>

              <div className="space-y-5 text-sm text-slate-700">
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block">
                      {t.contactPage.fastestResponse}
                    </span>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp.replace(
                        /[^0-9]/g,
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#07345A] hover:text-emerald-600 transition-colors"
                    >
                      {siteConfig.contact.whatsappDisplay} (WhatsApp)
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {t.contactPage.chatSpecialists}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087EA4] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 rtl-flip" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block">
                      {t.contactPage.phoneLine}
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="font-bold text-[#07345A] hover:text-[#087EA4] transition-colors"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {t.contactPage.availableVoice}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0FA3A3] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block">
                      {t.contactPage.emailInquiries}
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-bold text-[#07345A] hover:text-[#0FA3A3] transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {t.contactPage.proposalsNote}
                    </p>
                  </div>
                </div>

                {/* Office & Operations */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block">
                      {t.contactPage.officeHeading}
                    </span>
                    <span className="font-bold text-[#07345A]">
                      {siteConfig.contact.address}
                    </span>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {t.contactPage.officeHoursNote}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 pt-2 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#F6A623] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block">
                      Support
                    </span>
                    <span className="font-semibold text-slate-800">
                      {siteConfig.contact.officeHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
            {isSubmitted ? (
              <div className="py-10 text-center max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#07345A]">
                  {t.contactPage.successTitle}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t.contactPage.successMessage}
                </p>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-1.5 text-slate-600">
                  <div className="font-semibold text-slate-800 mb-1">
                    Submitted Details:
                  </div>
                  <div>
                    <span className="font-medium text-slate-700">Traveler:</span>{" "}
                    {formData.name} ({formData.email})
                  </div>
                  {formData.interestedTour && (
                    <div>
                      <span className="font-medium text-slate-700">Interest:</span>{" "}
                      {formData.interestedTour}
                    </div>
                  )}
                  {(formData.arrivalDate || formData.departureDate) && (
                    <div>
                      <span className="font-medium text-slate-700">Dates:</span>{" "}
                      {formData.arrivalDate ? `Arrival: ${formData.arrivalDate}` : ""}
                      {formData.arrivalDate && formData.departureDate ? " — " : ""}
                      {formData.departureDate ? `Departure: ${formData.departureDate}` : ""}{" "}
                      ({formData.travelers})
                    </div>
                  )}
                  <div>
                    <span className="font-medium text-slate-700">Guide Service:</span>{" "}
                    {formData.guidingService} ({formData.guideLanguage} guide)
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>{t.contactPage.chatDirectWhatsApp}</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        arrivalDate: "",
                        departureDate: "",
                        travelers: "2 adults",
                        guidingService: "Professional Driver-Guide",
                        guideLanguage: "English",
                        interestedTour: "",
                        message: "",
                      });
                      setSubmitError(null);
                    }}
                    className="px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-all cursor-pointer"
                  >
                    {t.contactPage.sendAnotherBtn}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-[#07345A] mb-2">
                  {t.contactPage.formTitle}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mb-6">
                  {t.contactPage.formSubtitle}
                </p>

                {/* Error Banner with Retry and WhatsApp Alternative */}
                {submitError && (
                  <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-2">
                      <p className="font-semibold text-rose-900">
                        Submission Error
                      </p>
                      <p className="text-xs text-rose-700 leading-relaxed">
                        {submitError}
                      </p>
                      <div className="flex items-center gap-3 pt-1">
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-800 underline hover:text-rose-950 cursor-pointer"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          Retry Submission
                        </button>
                        <span className="text-rose-300">&bull;</span>
                        <a
                          href={directWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                          Contact via WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot field for bot spam prevention (invisible to humans) */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      opacity: 0,
                      pointerEvents: "none",
                      height: 0,
                      overflow: "hidden",
                    }}
                  >
                    <label htmlFor="company_hp">Leave this field blank</label>
                    <input
                      id="company_hp"
                      type="text"
                      name="_gotcha"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        {t.contactPage.nameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        placeholder={t.contactPage.namePlaceholder}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#07345A] disabled:opacity-60 disabled:cursor-not-allowed"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        {t.contactPage.emailLabel} *
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        placeholder={t.contactPage.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#07345A] disabled:opacity-60 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Phone & Travelers Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone/WhatsApp */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        {t.contactPage.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        disabled={isSubmitting}
                        placeholder={t.contactPage.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#07345A] disabled:opacity-60 disabled:cursor-not-allowed"
                      />
                    </div>

                    {/* Number of Travelers */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        {t.contactPage.travelersLabel}
                      </label>
                      <select
                        disabled={isSubmitting}
                        value={formData.travelers}
                        onChange={(e) =>
                          setFormData({ ...formData, travelers: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#07345A] disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <option value="1 adult">{t.search.adult1}</option>
                        <option value="2 adults">{t.search.adults2}</option>
                        <option value="Family (3-4)">{t.search.family}</option>
                        <option value="Group (5-8)">{t.search.smallGroup}</option>
                        <option value="Large Group (9+)">
                          {t.search.largeGroup}
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Arrival Date & Departure Date Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Arrival Date */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                        <span>{t.contactPage.arrivalDateLabel}</span>
                        <span className="text-[11px] font-normal text-slate-400">Flight In</span>
                      </label>
                      <input
                        type="date"
                        min={minDate}
                        disabled={isSubmitting}
                        value={formData.arrivalDate}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (minDate && val && val < minDate) {
                            return;
                          }
                          setFormData((prev) => ({
                            ...prev,
                            arrivalDate: val,
                            departureDate:
                              prev.departureDate && val && prev.departureDate < val
                                ? val
                                : prev.departureDate,
                          }));
                        }}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#07345A] disabled:opacity-60 disabled:cursor-not-allowed"
                      />
                    </div>

                    {/* Departure Date */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                        <span>{t.contactPage.departureDateLabel}</span>
                        <span className="text-[11px] font-normal text-slate-400">Flight Out</span>
                      </label>
                      <input
                        type="date"
                        min={formData.arrivalDate || minDate}
                        disabled={isSubmitting}
                        value={formData.departureDate}
                        onChange={(e) => {
                          const val = e.target.value;
                          const effectiveMin = formData.arrivalDate || minDate;
                          if (effectiveMin && val && val < effectiveMin) {
                            return;
                          }
                          setFormData({ ...formData, departureDate: val });
                        }}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#07345A] disabled:opacity-60 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Tour or Service of Interest */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contactPage.interestedTourLabel}
                    </label>
                    <select
                      disabled={isSubmitting}
                      value={formData.interestedTour}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          interestedTour: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#07345A] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <option value="">{t.contactPage.selectTourPlaceholder}</option>
                      <option value="Custom / Tailor-Made Itinerary">
                        ✨ Tailor-Made / Custom Tour
                      </option>
                      <option value="Private Chauffeur & Vehicle Hire">
                        🚗 Private Chauffeur &amp; Vehicle Hire
                      </option>
                      <option value="Airport Transfer (Bandaranaike BIA)">
                        ✈ Airport Transfer
                      </option>
                      <optgroup label="Tour Packages">
                        {tours.map((item) => (
                          <option key={item.id} value={item.title}>
                            {item.title} ({item.duration})
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  {/* Preferred Guiding Service & Language Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Preferred Guiding Service */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                        <span>Preferred Guiding Service *</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#087EA4]/10 text-[#087EA4]">
                          Option 1 Default
                        </span>
                      </label>
                      <select
                        disabled={isSubmitting}
                        value={formData.guidingService}
                        onChange={(e) =>
                          setFormData({ ...formData, guidingService: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#07345A] disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <option value="Professional Driver-Guide">
                          Professional Driver-Guide (Suggested)
                        </option>
                        <option value="Private Chauffeur + Professional Driver">
                          Private Chauffeur + Professional Driver (Separate)
                        </option>
                        <option value="Not Sure — Recommend the Best Option">
                          Not Sure — Recommend the Best Option
                        </option>
                      </select>
                    </div>

                    {/* Preferred Tour Guide Language */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                        <span>Preferred Guide Language *</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#087EA4]/10 text-[#087EA4]">
                          English Default
                        </span>
                      </label>
                      <select
                        disabled={isSubmitting}
                        value={formData.guideLanguage}
                        onChange={(e) =>
                          setFormData({ ...formData, guideLanguage: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#07345A] disabled:opacity-60 disabled:cursor-not-allowed"
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

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contactPage.messageLabel} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      disabled={isSubmitting}
                      placeholder={t.contactPage.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#07345A] disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>

                  {/* 3D Interactive Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`relative group overflow-hidden w-full sm:w-auto min-w-[220px] px-8 py-4 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed select-none ${
                        isSubmitting
                          ? "bg-gradient-to-r from-[#07345A] via-[#087EA4] to-[#07345A] text-white shadow-xl scale-98 animate-button-3d"
                          : "bg-[#07345A] hover:bg-[#032743] text-white shadow-md hover:shadow-2xl hover:-translate-y-1 active:translate-y-0.5 active:shadow-md"
                      }`}
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
                    >
                      {/* Subtle glossy 3D top shine */}
                      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent rounded-t-2xl pointer-events-none" />

                      {isSubmitting ? (
                        <>
                          {/* 3D Paper Plane Launching */}
                          <div className="relative flex items-center justify-center w-6 h-6">
                            <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-l from-[#F6A623] to-transparent rounded-full animate-[vaporTrail_1.5s_infinite]" />
                            <Send className="w-5 h-5 text-[#F6A623] animate-plane-3d filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]" />
                          </div>
                          <span className="tracking-wide">
                            Dispatching Your Plan...
                          </span>
                        </>
                      ) : (
                        <>
                          <div className="relative flex items-center justify-center w-5 h-5 transition-transform duration-300 group-hover:scale-115 group-hover:rotate-12 group-hover:translate-x-0.5">
                            <Send className="w-4 h-4 text-[#F6A623] rtl-flip filter drop-shadow" />
                          </div>
                          <span>{t.contactPage.submitBtn}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-24 min-h-screen bg-slate-50/50 flex items-center justify-center py-20">
          <div className="flex items-center gap-3 text-slate-500 text-sm">
            <Loader2 className="w-5 h-5 animate-spin text-[#07345A]" />
            <span>Loading contact form...</span>
          </div>
        </div>
      }
    >
      <ContactPageContent />
    </Suspense>
  );
}
