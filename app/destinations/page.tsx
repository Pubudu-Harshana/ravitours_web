import { Metadata } from "next";
import DestinationsView from "@/components/DestinationsView";

export const metadata: Metadata = {
  title: "Destinations in Sri Lanka | Sigiriya, Ella, Kandy, Mirissa, Yala & More",
  description:
    "Discover Sri Lanka's iconic destinations. From ancient UNESCO citadels to misty tea country, wild safari parks, and turquoise coastal beaches.",
};

export default function DestinationsPage() {
  return <DestinationsView />;
}
