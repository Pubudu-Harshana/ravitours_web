import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Ravi Tours & Travels",
  description:
    "Privacy Policy for Ravi Tours & Travels. Learn how we safeguard your personal data, booking details, and contact information.",
};

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-3.5 h-3.5 text-[#087EA4]" />
              <span>Legal & Transparency</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#07345A]">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Last updated: October 2026 • Ravi Tours &amp; Travels
            </p>
          </div>

          <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#07345A]">1. Introduction</h2>
              <p>
                At Ravi Tours &amp; Travels, we respect your privacy and are committed to protecting any personal information you share with us. This Privacy Policy outlines how we collect, use, and protect your information when you request tour proposals, vehicle hire, or contact us.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#07345A]">2. Information We Collect</h2>
              <p>
                When inquiring about or booking a tour with us, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
                <li>Your name, email address, phone/WhatsApp number</li>
                <li>Travel dates, party size, flight arrival/departure details</li>
                <li>Itinerary preferences, preferred vehicle type, and special travel requests</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#07345A]">3. How We Use Your Information</h2>
              <p>
                We use your details solely to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
                <li>Design and quote your customized private tour itinerary</li>
                <li>Coordinate private airport transfers and chauffeur services</li>
                <li>Assist with hotel, national park safari, and scenic train reservations</li>
                <li>Communicate directly regarding your journey before and during your stay in Sri Lanka</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#07345A]">4. Data Protection &amp; Confidentiality</h2>
              <p>
                We never sell, rent, or trade your personal information to third parties or marketing agencies. Your travel details are only shared with licensed chauffeurs and service partners essential to executing your booked itinerary.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#07345A]">5. Contact Us Regarding Your Data</h2>
              <p>
                If you have questions about our privacy practices or wish to update or delete your information, please reach out to us at{" "}
                <a href="mailto:info@ravitoursandtravels.com" className="text-[#087EA4] font-semibold hover:underline">
                  info@ravitoursandtravels.com
                </a>{" "}
                or via WhatsApp at +94 76 884 6228.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
