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
    tiktok: string;
    youtube?: string;
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
  url: "https://ravitoursandtravels.com",
  contact: {
    // Configurable contact details with clear placeholder labels until verified
    phone: "+94 76 884 6228",
    phoneDisplay: "+94 76 884 6228",
    whatsapp: "+94768846228",
    whatsappDisplay: "+94 76 884 6228",
    email: "info@ravitoursandtravels.com",
    address: "Colombo, Sri Lanka",
    officeHours: "24/7 Customer Support & Travel Assistance",
  },
  social: {
    facebook: "https://www.facebook.com/share/1GcFCUBCPr/?mibextid=wwXIfr",
    instagram: "https://instagram.com",
    tiktok: "https://www.tiktok.com/@ravi_tours_travels?_r=1&_t=ZS-9AvnOt2fhKP",
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
