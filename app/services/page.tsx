import { Metadata } from "next";
import ServicesView from "@/components/ServicesView";

export const metadata: Metadata = {
  title: "Our Services | Private Transport, Airport Transfers & Custom Tours",
  description:
    "Comprehensive Sri Lanka travel services: Private chauffeur-driven vehicles, 24/7 airport pick-ups (CMB), hotel reservations, wildlife safaris, and scenic train tickets.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
