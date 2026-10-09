import { Metadata } from "next";
import AboutView from "@/components/AboutView";

export const metadata: Metadata = {
  title: "About Us | Ravi Tours & Travels Sri Lanka",
  description:
    "Learn about Ravi Tours & Travels — local Sri Lankan travel experts providing private tours, airport transfers, experienced chauffeur guides, and authentic island journeys.",
};

export default function AboutPage() {
  return <AboutView />;
}
