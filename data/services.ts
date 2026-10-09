export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  image: string;
}

export const services: ServiceItem[] = [
  {
    id: "private-transport",
    title: "Private Transport & Chauffeur Guides",
    shortDescription: "Immaculate air-conditioned modern vehicles with licensed, experienced English-speaking drivers.",
    fullDescription:
      "Travel with complete freedom, safety, and luxury across Sri Lanka. Our fleet includes comfortable modern sedans, spacious luxury vans (Toyota KDH/Commuter), and executive SUVs, all driven by government-licensed, experienced chauffeur-guides with deep knowledge of Sri Lanka's geography, wildlife, and history.",
    icon: "Car",
    features: [
      "Modern, air-conditioned, well-maintained vehicles",
      "Licensed English-speaking professional driver-guides",
      "All vehicle fuel, highway tolls, and driver lodging included",
      "Flexible stops anytime for photos, refreshments, or scenic views",
      "Comprehensive passenger insurance",
    ],
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    shortDescription: "Punctual, stress-free 24/7 meet-and-greet transfers to and from Bandaranaike International Airport (CMB).",
    fullDescription:
      "Arrive in Sri Lanka with complete peace of mind. Your dedicated private driver monitors your flight in real time, greets you inside the arrivals hall with a personalized name board, assists with luggage and SIM cards, and drives you safely to any hotel, resort, or city nationwide.",
    icon: "Plane",
    features: [
      "24/7 real-time flight tracking & flexible waiting time",
      "Direct arrivals hall meet-and-greet service",
      "Direct expressway routes to Colombo, Galle, Bentota, Kandy & beyond",
      "Complimentary cold bottled water upon arrival",
      "Fixed transparent pricing with zero surprise charges",
    ],
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "custom-tours",
    title: "Tailor-Made Tour Planning",
    shortDescription: "Personalized itineraries built entirely around your preferred pace, budget, and travel style.",
    fullDescription:
      "No two travelers are identical. Whether you are traveling as a couple on a romantic honeymoon, a family with young children, a group of friends seeking wildlife adventures, or a solo photographer, our local specialists craft a customized itinerary tailored specifically to your dream wishlist.",
    icon: "Compass",
    features: [
      "Custom day-by-day travel route crafted by local Sri Lankan experts",
      "Curated recommendations for authentic off-the-beaten-path experiences",
      "Flexible adjustments anytime before and during your journey",
      "No rushed group schedules — travel at your own comfortable pace",
      "Direct WhatsApp and phone assistance throughout your entire stay",
    ],
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hotel-booking",
    title: "Hotel & Luxury Villa Bookings",
    shortDescription: "Carefully selected boutique hotels, heritage colonial villas, eco-lodges, and 5-star beachfront resorts.",
    fullDescription:
      "Benefit from our local relationships with Sri Lanka's finest accommodations. We assist you in selecting and reserving verified properties—from atmospheric colonial bungalows in Nuwara Eliya tea estates to oceanfront villas in Mirissa and luxury safari tented camps in Yala.",
    icon: "Hotel",
    features: [
      "Hand-picked, inspected accommodations with high guest ratings",
      "Options ranging from authentic boutique guest houses to 5-star luxury",
      "Special contracted local agency rates and complimentary upgrades when available",
      "Family rooms, interconnected suites, and private pool villas",
    ],
    image: "https://images.unsplash.com/photo-1588598198321-9735fd52455f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "wildlife-safaris",
    title: "Wildlife Safaris & Excursions",
    shortDescription: "Private 4x4 open jeep safaris with expert trackers in Yala, Udawalawe, Wilpattu, and Minneriya.",
    fullDescription:
      "Experience Sri Lanka's legendary biodiversity firsthand. We arrange private, open-top safari jeeps driven by expert wildlife trackers who know the park terrain intimately, maximizing your opportunities to spot leopards, wild Asian elephants, sloth bears, and endemic birds.",
    icon: "Binoculars",
    features: [
      "Exclusive private 4x4 open-top safari vehicles (no shared crowds)",
      "Experienced local naturalists and animal trackers",
      "Morning, afternoon, and full-day safari expedition options",
      "Pre-arranged park admission permits for seamless entry",
    ],
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "scenic-train",
    title: "Scenic Train Ticket Arrangements",
    shortDescription: "Guaranteed seat bookings for the world-famous Kandy to Ella blue train ride.",
    fullDescription:
      "The scenic train ride between Kandy, Nanu Oya (Nuwara Eliya), and Ella is renowned as one of the most breathtaking rail journeys on earth. Because seats sell out weeks in advance, we handle early seat reservations in 1st class observation or reserved 2nd class carriages, while your chauffeur transports your luggage safely to your destination station.",
    icon: "Train",
    features: [
      "Early reservation of 1st class air-conditioned or 2nd class reserved seats",
      "Luggage transfer service from departure station to your arrival hotel",
      "Flexible boarding points at Kandy, Nanu Oya, or Ella",
      "Clear guidance on best sides of the train for photography",
    ],
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
  },
];
