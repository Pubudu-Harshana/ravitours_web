import { Metadata } from "next";
import ToursView from "@/components/ToursView";

export const metadata: Metadata = {
  title: "Sri Lanka Tour Packages | Private Tours & Tailor-Made Itineraries",
  description:
    "Explore carefully crafted Sri Lanka tour packages. Private transport, experienced chauffeur guides, scenic train rides, and unforgettable cultural & wildlife experiences.",
};

export default function ToursPage() {
  return <ToursView />;
}
