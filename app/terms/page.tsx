import { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Ravi Tours & Travels",
  description:
    "Terms and Conditions for booking private tours, chauffeur hire, and travel services with Ravi Tours & Travels in Sri Lanka.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#087EA4] hover:text-[#07345A] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 space-y-8">
          <div className="border-b border-slate-100 pb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#07345A]/10 text-[#07345A] text-xs font-bold uppercase tracking-wider mb-3">
              <FileText className="w-3.5 h-3.5 text-[#087EA4]" />
              <span>Service Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#07345A]">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Effective as of October 2026 • Ravi Tours &amp; Travels
            </p>
          </div>

          <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#07345A]">1. Booking &amp; Confirmation</h2>
              <p>
                All tour package inquiries and custom itinerary quotes provided by Ravi Tours &amp; Travels are free of obligation. A booking is confirmed once the detailed itinerary and pricing are agreed upon in writing via email or WhatsApp and any applicable advance confirmation deposit is received.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#07345A]">2. Pricing &amp; Inclusions</h2>
              <p>
                Our private tour quotations clearly distinguish what is included (air-conditioned vehicle, fuel, highway tolls, parking fees, chauffeur guide accommodation &amp; meals) and optional extras (monument entry tickets, safari jeeps, train tickets, personal meals). There are zero hidden fees.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#07345A]">3. Private Chauffeur &amp; Vehicle Standards</h2>
              <p>
                All vehicles in our fleet are comprehensively insured for tourist transport, air-conditioned, and maintained to the highest safety standards. Our chauffeur guides hold valid government tourist chauffeur licenses and adhere to safe, defensive driving protocols at all times.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#07345A]">4. Flexible Route Amendments</h2>
              <p>
                We understand travel plans can shift. Travelers are free to request spontaneous photo stops, viewpoint pauses, or minor route adjustments during the tour in consultation with their dedicated chauffeur guide, subject to daylight and safety feasibility.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#07345A]">5. Contact Information</h2>
              <p>
                For questions regarding tour terms or bookings, contact us directly at{" "}
                <a href="mailto:info@ravitoursandtravels.com" className="text-[#087EA4] font-semibold hover:underline">
                  info@ravitoursandtravels.com
                </a>{" "}
                or phone/WhatsApp at +94 76 884 6228.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
