"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    travelers: "2 adults",
    interestedTour: "",
    message: "",
  });

  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    // Prevent selecting past dates (formatted YYYY-MM-DD in local time)
    const today = new Date().toLocaleDateString("en-CA");
    setMinDate(today);
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const directWhatsAppUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(
    `Hello Ravi Tours & Travels! My name is ${formData.name || "Traveler"}. I am inquiring about travel on ${formData.travelDate || "upcoming dates"} for ${formData.travelers}. Message: ${formData.message || "Please provide package details."}`
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
                        travelDate: "",
                        travelers: "2 adults",
                        interestedTour: "",
                        message: "",
                      });
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
                <p className="text-xs sm:text-sm text-slate-500 mb-8">
                  {t.contactPage.formSubtitle}
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        {t.contactPage.nameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t.contactPage.namePlaceholder}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#07345A]"
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
                        placeholder={t.contactPage.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#07345A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {/* Phone/WhatsApp */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        {t.contactPage.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        placeholder={t.contactPage.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#07345A]"
                      />
                    </div>

                    {/* Travel Date */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        {t.contactPage.dateLabel}
                      </label>
                      <input
                        type="date"
                        min={minDate}
                        value={formData.travelDate}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (minDate && val && val < minDate) {
                            return;
                          }
                          setFormData({ ...formData, travelDate: val });
                        }}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#07345A]"
                      />
                    </div>

                    {/* Number of Travelers */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        {t.contactPage.travelersLabel}
                      </label>
                      <select
                        value={formData.travelers}
                        onChange={(e) =>
                          setFormData({ ...formData, travelers: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#07345A]"
                      >
                        <option value="1 adult">{t.search.adult1}</option>
                        <option value="2 adults">{t.search.adults2}</option>
                        <option value="Family (3-4)">{t.search.family}</option>
                        <option value="Group (5-8)">{t.search.smallGroup}</option>
                        <option value="Large Group (9+)">{t.search.largeGroup}</option>
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
                      placeholder={t.contactPage.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#07345A]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#07345A] hover:bg-[#032743] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#F6A623] rtl-flip" />
                    <span>{t.contactPage.submitBtn}</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
