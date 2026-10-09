export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappDisplay: string;
    email: string;
    address: string;
    officeHours: string;
  };
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
    tripadvisor?: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Ravi Tours & Travels",
  tagline: "Discover Sri Lanka Your Way",
  description:
    "Sri Lankan travel agency and tour operator offering private tours, airport transfers, hotel bookings, excursions, and tailor-made holidays across Sri Lanka.",
  url: "https://ravitours.com",
  contact: {
    // Configurable contact details with clear placeholder labels until verified
    phone: "+94 76 884 6228",
    phoneDisplay: "+94 76 884 6228",
    whatsapp: "+94768846228",
    whatsappDisplay: "+94 76 884 6228",
    email: "info@ravitours.lk",
    address: "Colombo, Sri Lanka",
    officeHours: "24/7 Customer Support & Travel Assistance",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/tours" },
    { label: "Destinations", href: "/destinations" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
