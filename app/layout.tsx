import type { Metadata } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScroll from "@/components/SmoothScroll";
import PageLoader from "@/components/PageLoader";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Ravi Tours & Travels | Sri Lanka Tours & Travel",
    template: "%s | Ravi Tours & Travels",
  },
  description:
    "Sri Lanka travel experts organizing private tours, airport transfers, hotel bookings, cultural excursions, and custom tailor-made journeys across Sri Lanka.",
  keywords: [
    "Sri Lanka tours",
    "Sri Lanka travel agency",
    "Ravi Tours & Travels",
    "private driver Sri Lanka",
    "Sigiriya tours",
    "Ella train tickets",
    "Yala safari",
    "Sri Lanka vacation packages",
    "airport transfer Colombo CMB",
  ],
  authors: [{ name: "Ravi Tours & Travels" }],
  creator: "Ravi Tours & Travels",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Ravi Tours & Travels | Sri Lanka Tours & Travel",
    description:
      "Private tours, airport transfers, hotels, excursions & unforgettable Sri Lankan experiences organized by local experts.",
    siteName: "Ravi Tours & Travels",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Ravi Tours & Travels - Discover Sri Lanka Your Way",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Tours & Travels | Sri Lanka Tours & Travel",
    description: "Discover Sri Lanka Your Way with local travel experts.",
    images: ["https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80"],
  },
  icons: {
    icon: [
      { url: "/ravilogo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/ravilogo.svg",
    apple: "/ravilogo.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { LanguageProvider } from "@/context/LanguageContext";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/ravilogo.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/ravilogo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/ravilogo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Caveat:wght@600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7FAFC] text-[#102A43] antialiased selection:bg-[#F6A623] selection:text-white">
        <LanguageProvider>
          <PageLoader />
          <SmoothScroll />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
