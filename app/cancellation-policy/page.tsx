import { Metadata } from "next";
import Link from "next/link";
import { RefreshCw, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cancellation Policy | Ravi Tours & Travels",
  description:
    "Fair, flexible cancellation policy for private tour packages and chauffeur hire with Ravi Tours & Travels.",
};

export default function CancellationPolicyPage() {
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
              <RefreshCw className="w-3.5 h-3.5 text-[#087EA4]" />
              <span>Traveler Peace of Mind</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#07345A]">
              Cancellation &amp; Refund Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Fair and transparent policies • Ravi Tours &amp; Travels
            </p>
          </div>

          <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#07345A]">1. Flexible Cancellation Policy</h2>
              <p>
                We believe in fair, stress-free travel planning. If your flight schedules change or unforeseen circumstances arise, notify us as early as possible so we can adjust or reschedule your private journey without penalties whenever feasible.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#07345A]">2. Cancellation Guidelines</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
                <li>
                  <strong className="text-slate-800">14+ days prior to arrival:</strong> Full refund of any advance vehicle booking deposit (minus nominal international banking transfer fees).
                </li>
                <li>
                  <strong className="text-slate-800">7 to 13 days prior to arrival:</strong> Deposit can be 100% credited toward a rescheduled tour date within 12 months, or refunded minus committed third-party expenses (e.g. non-refundable train tickets or hotel deposits).
                </li>
                <li>
                  <strong className="text-slate-800">Under 48 hours / No-Show:</strong> Incurred third-party accommodation or pre-purchased tickets cannot be refunded.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#07345A]">3. Flight Delays &amp; Schedule Changes</h2>
              <p>
                If your flight into Bandaranaike International Airport (CMB) is delayed or rescheduled, your private chauffeur guide monitors live flight radar and will be waiting in the arrivals hall at your updated landing time at no extra waiting charge.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#07345A]">4. Need to Adjust or Cancel?</h2>
              <p>
                Please notify us immediately via WhatsApp at{" "}
                <a href="https://wa.me/94768846228" className="text-[#087EA4] font-semibold hover:underline">
                  +94 76 884 6228
                </a>{" "}
                or email us at{" "}
                <a href="mailto:info@ravitoursandtravels.com" className="text-[#087EA4] font-semibold hover:underline">
                  info@ravitoursandtravels.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
