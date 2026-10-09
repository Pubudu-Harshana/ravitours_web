export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
  isDemo: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah M.",
    location: "Australia",
    quote:
      "Everything was perfectly organized from the airport pick-up to our final day. Knowledgeable driver and exceptional hospitality. Highly recommend Ravi Tours!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    isDemo: true,
  },
  {
    id: "testimonial-2",
    name: "James T.",
    location: "United Kingdom",
    quote:
      "The team made our trip stress-free and truly special. Amazing local knowledge, safe mountain driving, and great flexibility throughout our 10-day tour.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    isDemo: true,
  },
  {
    id: "testimonial-3",
    name: "Priya S.",
    location: "India",
    quote:
      "Unforgettable experience! Sri Lanka is beautiful and Ravi Tours made it even better with friendly service, pristine vehicles, and thoughtful recommendations.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    isDemo: true,
  },
];
