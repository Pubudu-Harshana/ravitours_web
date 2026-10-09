import { Language } from "./types";

export interface TranslationDictionary {
  nav: {
    home: string;
    tours: string;
    destinations: string;
    services: string;
    about: string;
    contact: string;
    planYourTrip: string;
    chatWhatsApp: string;
  };
  hero: {
    eyebrow: string;
    titleMain: string;
    titleAccent: string;
    subtitle: string;
    exploreTours: string;
    planYourTrip: string;
    privateTours: string;
    airportTransfers: string;
    localExperiences: string;
    support247: string;
  };
  search: {
    title: string;
    subtitle: string;
    destinationLabel: string;
    selectDestination: string;
    dateLabel: string;
    travelersLabel: string;
    adult1: string;
    adults2: string;
    family: string;
    smallGroup: string;
    largeGroup: string;
    searchButton: string;
  };
  destinations: {
    badge: string;
    title: string;
    subtitle: string;
    viewAll: string;
    explore: string;
    placesCount: string;
  };
  whyRavi: {
    badge: string;
    titleMain: string;
    titleAccent: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
  };
  tours: {
    badge: string;
    title: string;
    subtitle: string;
    viewAll: string;
    pricingLabel: string;
    viewPackage: string;
    showingTours: string;
    chauffeurIncluded: string;
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    beachesTitle: string;
    beachesDesc: string;
    mountainsTitle: string;
    mountainsDesc: string;
    wildlifeTitle: string;
    wildlifeDesc: string;
    cultureTitle: string;
    cultureDesc: string;
    explore: string;
  };
  offers: {
    badge: string;
    title: string;
    subtitle: string;
    viewAll: string;
    offerRate: string;
    viewDetails: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    viewAll: string;
    demoBadge: string;
  };
  planner: {
    badge: string;
    title: string;
    subtitle: string;
    destinationLabel: string;
    selectDestination: string;
    wholeIsland: string;
    durationLabel: string;
    interestsLabel: string;
    beach: string;
    culture: string;
    wildlife: string;
    adventure: string;
    footerNote: string;
    submitButton: string;
    receivedTitle: string;
    receivedMessage: string;
    sendWhatsAppBtn: string;
    planAnotherBtn: string;
    modalTitle: string;
    modalSubtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    cancelBtn: string;
    sendRequestBtn: string;
  };
  cta: {
    title: string;
    subtitle: string;
    planTripBtn: string;
    whatsappBtn: string;
  };
  footer: {
    brandDesc: string;
    quickLinks: string;
    ourServices: string;
    contactUs: string;
    rightsReserved: string;
    tagline: string;
    serviceTours: string;
    serviceTransfers: string;
    serviceHotels: string;
    serviceChauffeur: string;
    serviceItineraries: string;
  };
  contactPage: {
    badge: string;
    title: string;
    subtitle: string;
    directChannels: string;
    fastestResponse: string;
    chatSpecialists: string;
    phoneLine: string;
    availableVoice: string;
    emailInquiries: string;
    proposalsNote: string;
    officeHeading: string;
    officeHoursNote: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    dateLabel: string;
    travelersLabel: string;
    interestedTourLabel: string;
    selectTourPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successMessage: string;
    sendAnotherBtn: string;
    chatDirectWhatsApp: string;
  };
  servicesPage: {
    badge: string;
    title: string;
    subtitle: string;
    bookService: string;
  };
  aboutPage: {
    badge: string;
    title: string;
    subtitle: string;
    whyUsBadge: string;
    whyUsTitle: string;
    whyUsSubtitle: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: "Home",
      tours: "Tours",
      destinations: "Destinations",
      services: "Services",
      about: "About",
      contact: "Contact",
      planYourTrip: "Plan Your Trip",
      chatWhatsApp: "Chat on WhatsApp",
    },
    hero: {
      eyebrow: "RAVI TOURS & TRAVELS",
      titleMain: "Discover Sri Lanka",
      titleAccent: "Your Way",
      subtitle:
        "Private tours, airport transfers, hotels, excursions & unforgettable Sri Lankan experiences organized with authentic local hospitality.",
      exploreTours: "Explore Tours",
      planYourTrip: "Plan Your Trip",
      privateTours: "Private Tours",
      airportTransfers: "Airport Transfers",
      localExperiences: "Local Experiences",
      support247: "24/7 Support",
    },
    search: {
      title: "Where do you want to go?",
      subtitle: "Find your perfect Sri Lanka experience",
      destinationLabel: "Destination",
      selectDestination: "Select destination",
      dateLabel: "Travel Date",
      travelersLabel: "Travelers",
      adult1: "1 adult",
      adults2: "2 adults",
      family: "Family (3-4)",
      smallGroup: "Small Group (5-8)",
      largeGroup: "Large Group (9+)",
      searchButton: "Search Tours",
    },
    destinations: {
      badge: "EXPLORE SRI LANKA",
      title: "Explore Sri Lanka's Most Beautiful Places",
      subtitle:
        "From ancient cities to golden beaches, discover the island's hidden gems.",
      viewAll: "View All Destinations",
      explore: "Explore",
      placesCount: "Top Travel Destinations",
    },
    whyRavi: {
      badge: "WHY TRAVEL WITH RAVI?",
      titleMain: "More Than a Trip.",
      titleAccent: "It's Your Sri Lankan Experience.",
      card1Title: "Personalized Tours",
      card1Desc: "Trips designed around your interests, time and budget.",
      card2Title: "Private Transportation",
      card2Desc: "Comfortable vehicles and experienced local drivers.",
      card3Title: "Authentic Experiences",
      card3Desc: "Discover Sri Lanka beyond the usual tourist routes.",
      card4Title: "Local Support",
      card4Desc: "From arrival to departure, we're here to help.",
    },
    tours: {
      badge: "POPULAR TOUR PACKAGES",
      title: "Featured Sri Lanka Tours",
      subtitle: "Carefully crafted packages for unforgettable journeys.",
      viewAll: "View All Tours",
      pricingLabel: "Pricing",
      viewPackage: "View Package",
      showingTours: "Handcrafted Tours",
      chauffeurIncluded: "Private Chauffeur Included with Every Journey",
    },
    experience: {
      badge: "EXPERIENCE SRI LANKA DIFFERENTLY",
      title: "Experience Sri Lanka Differently",
      subtitle: "Beaches, mountains, wildlife and rich culture — all in one island.",
      beachesTitle: "BEACHES",
      beachesDesc: "Sun, surf and endless blue.",
      mountainsTitle: "MOUNTAINS",
      mountainsDesc: "Cool air and breathtaking views.",
      wildlifeTitle: "WILDLIFE",
      wildlifeDesc: "Meet Sri Lanka's incredible wildlife.",
      cultureTitle: "CULTURE",
      cultureDesc: "Ancient cities and timeless heritage.",
      explore: "Explore",
    },
    offers: {
      badge: "SPECIAL TRAVEL OFFERS",
      title: "Best Deals for Your Next Adventure",
      subtitle: "Limited-time offers on selected tours and packages.",
      viewAll: "View All Offers",
      offerRate: "Offer Rate",
      viewDetails: "View Details",
    },
    testimonials: {
      badge: "TESTIMONIALS",
      title: "What Our Travelers Say",
      subtitle: "Real experiences. Real stories.",
      viewAll: "View All Reviews",
      demoBadge: "Demo Review",
    },
    planner: {
      badge: "PLAN YOUR TRIP",
      title: "Tell Us About Your Dream Trip",
      subtitle: "Let us create a personalized Sri Lankan journey just for you.",
      destinationLabel: "Where would you like to go?",
      selectDestination: "Select destination",
      wholeIsland: "Whole Island Circuit",
      durationLabel: "How long?",
      interestsLabel: "What do you love?",
      beach: "Beaches",
      culture: "Culture",
      wildlife: "Wildlife",
      adventure: "Adventure",
      footerNote:
        "100% customized private itineraries • Zero booking obligations",
      submitButton: "Plan My Trip",
      receivedTitle: "Trip Inquiry Received!",
      receivedMessage:
        "Thank you! Our Sri Lanka travel team will review your preferred route and respond within 2 to 4 hours.",
      sendWhatsAppBtn: "Send Details Directly via WhatsApp",
      planAnotherBtn: "Plan Another Route",
      modalTitle: "Almost Done! Where should we send your plan?",
      modalSubtitle: "We will tailor your route and reply within a few hours.",
      fullNameLabel: "Your Full Name",
      fullNamePlaceholder: "e.g. David Miller",
      emailLabel: "Email Address",
      emailPlaceholder: "e.g. david@example.com",
      phoneLabel: "WhatsApp / Phone Number (Optional)",
      phonePlaceholder: "e.g. +44 7911 123456",
      cancelBtn: "Cancel",
      sendRequestBtn: "Send Request",
    },
    cta: {
      title: "Ready to Experience the Magic of Sri Lanka?",
      subtitle:
        "Let our local experts handle the routes, hotels, and transport. You just enjoy every moment.",
      planTripBtn: "Plan Your Trip",
      whatsappBtn: "WhatsApp Us",
    },
    footer: {
      brandDesc:
        "Discover Sri Lanka with a trusted local travel partner. Personalized private tours, experienced drivers, and authentic journeys across the island.",
      quickLinks: "Quick Links",
      ourServices: "Our Services",
      contactUs: "Contact Us",
      rightsReserved: "All rights reserved.",
      tagline: "Explore • Experience • Repeat",
      serviceTours: "Sri Lanka Tours",
      serviceTransfers: "Airport Transfers (CMB)",
      serviceHotels: "Hotel & Villa Bookings",
      serviceChauffeur: "Private Chauffeur Transport",
      serviceItineraries: "Custom Tailored Itineraries",
    },
    contactPage: {
      badge: "GET IN TOUCH",
      title: "Contact Ravi Tours & Travels",
      subtitle:
        "Have questions about a tour itinerary, airport transfer, or vehicle hire? Reach out directly to our local Sri Lankan team. We typically respond within 1 to 2 hours.",
      directChannels: "Direct Contact Channels",
      fastestResponse: "Fastest Response",
      chatSpecialists: "Chat directly with our trip specialists",
      phoneLine: "Phone Line",
      availableVoice: "Available daily for voice calls",
      emailInquiries: "Email Inquiries",
      proposalsNote: "For detailed proposals & group inquiries",
      officeHeading: "Office & Operations",
      officeHoursNote: "24/7 travel support during your trip",
      formTitle: "Send Us a Message",
      formSubtitle: "Tell us about your travel dates and group size.",
      nameLabel: "Your Full Name",
      namePlaceholder: "e.g. David Miller",
      emailLabel: "Email Address",
      emailPlaceholder: "e.g. david@example.com",
      phoneLabel: "Phone / WhatsApp",
      phonePlaceholder: "e.g. +44 7911 123456",
      dateLabel: "Approximate Travel Date",
      travelersLabel: "Travelers",
      interestedTourLabel: "Tour of Interest (Optional)",
      selectTourPlaceholder: "Select a package or custom itinerary",
      messageLabel: "Tell Us About Your Travel Plans",
      messagePlaceholder: "Destinations you wish to visit, special requests, hotel preferences...",
      submitBtn: "Send Inquiry",
      successTitle: "Thank You! Your Inquiry Was Sent.",
      successMessage: "Our team will review your travel details and get back to you shortly via WhatsApp or email.",
      sendAnotherBtn: "Send Another Inquiry",
      chatDirectWhatsApp: "Chat Directly on WhatsApp",
    },
    servicesPage: {
      badge: "COMPREHENSIVE TRAVEL SOLUTIONS",
      title: "Our Travel Services",
      subtitle: "From seamless airport arrivals to private chauffeur-driven island tours, hotel bookings, and bespoke adventures.",
      bookService: "Inquire About This Service",
    },
    aboutPage: {
      badge: "ABOUT RAVI TOURS & TRAVELS",
      title: "Sri Lanka Travel Experts Who Care",
      subtitle: "Born from a genuine passion for showcasing Sri Lanka's breathtaking nature, timeless heritage, and warm island hospitality.",
      whyUsBadge: "OUR CORE VALUES",
      whyUsTitle: "Why Travelers Trust Ravi Tours",
      whyUsSubtitle: "Every journey is crafted with safety, integrity, and authentic local discovery.",
    },
  },

  si: {
    nav: {
      home: "මුල් පිටුව",
      tours: "සංචාර",
      destinations: "ගමනාන්ත",
      services: "සේවා",
      about: "අප ගැන",
      contact: "සම්බන්ධ වන්න",
      planYourTrip: "සංචාරය සැලසුම් කරන්න",
      chatWhatsApp: "WhatsApp හරහා කතාබස්",
    },
    hero: {
      eyebrow: "රවී ටුවර්ස් ඇන්ඩ් ට්‍රැවල්ස්",
      titleMain: "ශ්‍රී ලංකාව සොයායන්න",
      titleAccent: "ඔබේම අභිමතය පරිදි",
      subtitle:
        "පුද්ගලික සංචාර, ගුවන් තොටුපළ ප්‍රවාහන, හෝටල් වෙන්කිරීම් සහ අමතක නොවන දේශීය අත්දැකීම් සමඟින් ශ්‍රී ලාංකීය ආගන්තුක සත්කාරය විඳගන්න.",
      exploreTours: "සංචාර ගවේෂණය කරන්න",
      planYourTrip: "සංචාරය සැලසුම් කරන්න",
      privateTours: "පුද්ගලික සංචාර",
      airportTransfers: "ගුවන් තොටුපළ ප්‍රවාහන",
      localExperiences: "දේශීය අත්දැකීම්",
      support247: "24/7 සහාය",
    },
    search: {
      title: "ඔබ යාමට කැමති කොහේද?",
      subtitle: "ඔබට වඩාත් ගැළපෙන ශ්‍රී ලංකා සංචාරය සොයාගන්න",
      destinationLabel: "ගමනාන්තය",
      selectDestination: "ගමනාන්තයක් තෝරන්න",
      dateLabel: "සංචාරක දිනය",
      travelersLabel: "සංචාරකයින් සංඛ්‍යාව",
      adult1: "වැඩිහිටි 1",
      adults2: "වැඩිහිටියන් 2",
      family: "පවුලක් (3-4)",
      smallGroup: "කුඩා කණ්ඩායමක් (5-8)",
      largeGroup: "විශාල කණ්ඩායමක් (9+)",
      searchButton: "සංචාර සොයන්න",
    },
    destinations: {
      badge: "ශ්‍රී ලංකාව ගවේෂණය කරන්න",
      title: "ශ්‍රී ලංකාවේ සුන්දරතම ස්ථාන සොයායන්න",
      subtitle:
        "පුරාණ ඓතිහාසික නගරවල සිට රන්වන් වෙරළ තීරයන් දක්වා දිවයිනේ අසිරිය විඳගන්න.",
      viewAll: "සියලුම ගමනාන්ත බලන්න",
      explore: "ගවේෂණය කරන්න",
      placesCount: "ප්‍රධාන සංචාරක ගමනාන්ත",
    },
    whyRavi: {
      badge: "රවී ටුවර්ස් තෝරාගත යුත්තේ ඇයි?",
      titleMain: "හුදු සංචාරයකට වඩා එහා ගිය",
      titleAccent: "ඔබේම ශ්‍රී ලාංකීය අත්දැකීමක්.",
      card1Title: "අභිමතය පරිදි සැලසුම් කළ සංචාර",
      card1Desc: "ඔබේ රුචිකත්වයට සහ අයවැයට සරිලන පරිදි සකස් කළ චාරිකා.",
      card2Title: "පුද්ගලික ප්‍රවාහන පහසුකම්",
      card2Desc: "සුවපහසු වාහන සහ පළපුරුදු දේශීය රියදුරු මහත්වරු.",
      card3Title: "සැබෑ දේශීය අත්දැකීම්",
      card3Desc: "සාම්ප්‍රදායික සංචාරක මාවත්වලින් ඔබ්බට ගිය සුන්දර අත්දැකීම්.",
      card4Title: "24/7 පූර්ණ සහාය",
      card4Desc: "දිවයිනට පැමිණි මොහොතේ සිට පිටවන තුරුම අප ඔබ ළඟයි.",
    },
    tours: {
      badge: "ජනප්‍රිය සංචාර පැකේජ",
      title: "විශේෂාංගගත ශ්‍රී ලංකා සංචාර",
      subtitle: "නොමැකෙන මතකයන් එක් කරන සුවිශේෂී සංචාරක සැලසුම්.",
      viewAll: "සියලු සංචාර බලන්න",
      pricingLabel: "මිල ගණන්",
      viewPackage: "පැකේජය බලන්න",
      showingTours: "සුවිශේෂී සංචාර",
      chauffeurIncluded: "සෑම සංචාරයකටම පුද්ගලික රියදුරු-මඟපෙන්වන්නෙකු ඇතුළත් වේ",
    },
    experience: {
      badge: "ශ්‍රී ලංකාව අලුත්ම ආකාරයකින් විඳගන්න",
      title: "විවිධත්වයෙන් පිරි ශ්‍රී ලාංකීය අසිරිය",
      subtitle: "වෙරළ, සිසිල් කඳුකරය, වනජීවීන් සහ උරුමය - එකම දිවයිනකින්.",
      beachesTitle: "වෙරළ තීරයන්",
      beachesDesc: "හිරු රැස්, රළ සහ නිල්වන් සාගරය.",
      mountainsTitle: "කඳුකරය",
      mountainsDesc: "සිසිල් මීදුම් සළුව සහ මනරම් දසුන්.",
      wildlifeTitle: "වනජීවීන්",
      wildlifeDesc: "අපූර්ව ශ්‍රී ලාංකීය සත්ත්ව ලෝකය.",
      cultureTitle: "සංස්කෘතිය",
      cultureDesc: "පුරාණ නගර සහ සදාතනික උරුමය.",
      explore: "ගවේෂණය කරන්න",
    },
    offers: {
      badge: "විශේෂ සංචාරක දීමනා",
      title: "ඔබේ මීළඟ චාරිකාව සඳහා හොඳම මිල ගණන්",
      subtitle: "තෝරාගත් සංචාර සඳහා සීමිත කාලීන විශේෂ වට්ටම්.",
      viewAll: "සියලු දීමනා බලන්න",
      offerRate: "විශේෂ මිල",
      viewDetails: "විස්තර බලන්න",
    },
    testimonials: {
      badge: "සංචාරක අදහස්",
      title: "අපගේ අමුත්තන් පවසන දේ",
      subtitle: "සැබෑ අත්දැකීම්. සැබෑ මතකයන්.",
      viewAll: "සියලු අදහස් බලන්න",
      demoBadge: "නියැදි විමර්ශනය",
    },
    planner: {
      badge: "සංචාරය සැලසුම් කරන්න",
      title: "ඔබ සිහින දකින සංචාරය ගැන අපට කියන්න",
      subtitle: "ඔබ වෙනුවෙන්ම වෙන්වූ පුද්ගලික සංචාරයක් සකසා ගන්න.",
      destinationLabel: "ඔබ සංචාරය කිරීමට කැමති කොහේද?",
      selectDestination: "ගමනාන්තයක් තෝරන්න",
      wholeIsland: "සම්පූර්ණ දිවයින පුරා සංචාරය",
      durationLabel: "දින ගණන කොපමණද?",
      interestsLabel: "ඔබ කැමති මොනවාටද?",
      beach: "වෙරළ",
      culture: "සංස්කෘතිය",
      wildlife: "වනජීවීන්",
      adventure: "ත්‍රාසජනක",
      footerNote: "100% පුද්ගලීකරණය කළ සංචාර • කිසිදු අත්තිකාරම් බැඳීමක් නැත",
      submitButton: "සංචාරය සැලසුම් කරන්න",
      receivedTitle: "ඔබේ විමසුම සාර්ථකව ලැබුණි!",
      receivedMessage:
        "ස්තූතියි! අපගේ සංචාරක කණ්ඩායම පැය 2-4ක් ඇතුළත ඔබ හා සම්බන්ධ වනු ඇත.",
      sendWhatsAppBtn: "WhatsApp මඟින් විස්තර එවන්න",
      planAnotherBtn: "වෙනත් සැලසුමක් හදන්න",
      modalTitle: "අවසන් පියවර! ඔබගේ සැලසුම එවිය යුත්තේ කොහාටද?",
      modalSubtitle: "අපි පැය කිහිපයකින් සවිස්තරාත්මක සැලැස්මක් එවන්නෙමු.",
      fullNameLabel: "ඔබගේ සම්පූර්ණ නම",
      fullNamePlaceholder: "උදා: ඩේවිඩ් මිලර්",
      emailLabel: "විද්‍යුත් තැපැල් ලිපිනය",
      emailPlaceholder: "උදා: david@example.com",
      phoneLabel: "WhatsApp / දුරකථන අංකය",
      phonePlaceholder: "උදා: +94 76 884 6228",
      cancelBtn: "අවලංගු කරන්න",
      sendRequestBtn: "ඉල්ලීම යවන්න",
    },
    cta: {
      title: "ශ්‍රී ලංකාවේ චමත්කාරය විඳින්න සූදානම්ද?",
      subtitle:
        "ප්‍රවාහනය, හෝටල් සහ ගමන් මාර්ග සියල්ල අප බලාගන්නෙමු. ඔබ නිදහසේ සතුට විඳින්න.",
      planTripBtn: "සංචාරය සැලසුම් කරන්න",
      whatsappBtn: "WhatsApp හරහා අමතන්න",
    },
    footer: {
      brandDesc:
        "විශ්වාසනීය දේශීය සංචාරක සහකරුවෙකු සමඟ ශ්‍රී ලංකාව ගවේෂණය කරන්න. පුද්ගලික සංචාර, පළපුරුදු රියදුරන් සහ සැබෑ දේශීය ආගන්තුක සත්කාරය.",
      quickLinks: "ක්ෂණික සබැඳි",
      ourServices: "අපගේ සේවාවන්",
      contactUs: "අප අමතන්න",
      rightsReserved: "සියලුම හිමිකම් ඇවිරිණි.",
      tagline: "ගවේෂණය • අත්දැකීම • මතකය",
      serviceTours: "ශ්‍රී ලංකා සංචාර",
      serviceTransfers: "ගුවන් තොටුපළ ප්‍රවාහන (CMB)",
      serviceHotels: "හෝටල් වෙන්කිරීම්",
      serviceChauffeur: "පුද්ගලික රියදුරු සේවා",
      serviceItineraries: "අභිමත සංචාරක සැලසුම්",
    },
    contactPage: {
      badge: "අප හා සම්බන්ධ වන්න",
      title: "රවී ටුවර්ස් අමතන්න",
      subtitle:
        "සංචාරක සැලසුම්, ගුවන් තොටුපළ ප්‍රවාහන හෝ වාහන වෙන්කිරීම් ගැන ඕනෑම ප්‍රශ්නයක් අසන්න. අපි කඩිනමින් පිළිතුරු දෙන්නෙමු.",
      directChannels: "සෘජු සන්නිවේදන මාර්ග",
      fastestResponse: "ඉක්මන්ම ප්‍රතිචාරය",
      chatSpecialists: "අපගේ විශේෂඥයින් සමඟ WhatsApp හරහා කතාබස් කරන්න",
      phoneLine: "දුරකථන අංකය",
      availableVoice: "සෘජු ඇමතුම් සඳහා සක්‍රීයයි",
      emailInquiries: "විද්‍යුත් තැපෑල",
      proposalsNote: "සවිස්තරාත්මක යෝජනා සහ කණ්ඩායම් සංචාර සඳහා",
      officeHeading: "කාර්යාලය සහ මෙහෙයුම්",
      officeHoursNote: "සංචාරය පුරාම 24/7 පූර්ණ සහාය",
      formTitle: "අපට පණිවිඩයක් එවන්න",
      formSubtitle: "ඔබගේ සංචාරක දිනය සහ පිරිවර ගැන අපට දන්වන්න.",
      nameLabel: "ඔබේ නම",
      namePlaceholder: "උදා: ඩේවිඩ් මිලර්",
      emailLabel: "විද්‍යුත් තැපෑල",
      emailPlaceholder: "උදා: david@example.com",
      phoneLabel: "දුරකථන / WhatsApp",
      phonePlaceholder: "උදා: +94 76 884 6228",
      dateLabel: "අපේක්ෂිත සංචාරක දිනය",
      travelersLabel: "සංචාරකයින් සංඛ්‍යාව",
      interestedTourLabel: "කැමති සංචාරක පැකේජය",
      selectTourPlaceholder: "පැකේජයක් තෝරන්න",
      messageLabel: "ඔබගේ සංචාරක සැලැස්ම",
      messagePlaceholder: "නැරඹීමට කැමති ස්ථාන, විශේෂ ඉල්ලීම්...",
      submitBtn: "විමසුම යවන්න",
      successTitle: "ස්තූතියි! ඔබගේ පණිවිඩය ලැබුණි.",
      successMessage: "අපගේ කණ්ඩායම කඩිනමින් ඔබ හා සම්බන්ධ වනු ඇත.",
      sendAnotherBtn: "තවත් පණිවිඩයක් යවන්න",
      chatDirectWhatsApp: "WhatsApp හරහා සෘජුව කතාබස් කරන්න",
    },
    servicesPage: {
      badge: "පූර්ණ සංචාරක විසඳුම්",
      title: "අපගේ සේවාවන්",
      subtitle: "ගුවන් තොටුපළ පැමිණීමේ සිට පුද්ගලික රියදුරු සේවා සහ හෝටල් වෙන්කිරීම් දක්වා සියල්ල එකම තැනකින්.",
      bookService: "මෙම සේවාව ගැන විමසන්න",
    },
    aboutPage: {
      badge: "රවී ටුවර්ස් ගැන",
      title: "සැබෑ කැපවීමෙන් සේවය කරන සංචාරක මිතුරන්",
      subtitle: "ශ්‍රී ලංකාවේ චමත්කාරජනක සොබාදහම සහ ආගන්තුක සත්කාරය ලොවට විදහා දැක්වීමේ අරමුණින්.",
      whyUsBadge: "අපගේ වටිනාකම්",
      whyUsTitle: "සංචාරකයින් අපව විශ්වාස කරන්නේ ඇයි?",
      whyUsSubtitle: "ආරක්ෂාව, අවංකභාවය සහ සැබෑ දේශීය අත්දැකීම් පෙරදැරිව.",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      tours: "الجولات السياحية",
      destinations: "الوجهات",
      services: "الخدمات",
      about: "من نحن",
      contact: "اتصل بنا",
      planYourTrip: "خطط لرحلتك",
      chatWhatsApp: "محادثة عبر واتساب",
    },
    hero: {
      eyebrow: "رافي تورز آند ترافيلز",
      titleMain: "اكتشف سريلانكا",
      titleAccent: "على طريقتك الخاصة",
      subtitle:
        "جولات سياحية خاصة، وتوصيل من المطار، وحجوزات فنادق وتجارب سريلانكية لا تُنسى مع كرم الضيافة الأصيل.",
      exploreTours: "استكشف الجولات",
      planYourTrip: "خطط لرحلتك",
      privateTours: "جولات خاصة",
      airportTransfers: "نقل من المطار",
      localExperiences: "تجارب محلية",
      support247: "دعم على مدار الساعة",
    },
    search: {
      title: "إلى أين ترغب في الذهاب؟",
      subtitle: "اعثر على رحلتك المثالية في سريلانكا",
      destinationLabel: "الوجهة",
      selectDestination: "اختر الوجهة",
      dateLabel: "تاريخ السفر",
      travelersLabel: "عدد المسافرين",
      adult1: "شخص بالغ 1",
      adults2: "شخصان بالغان",
      family: "عائلة (3-4)",
      smallGroup: "مجموعة صغيرة (5-8)",
      largeGroup: "مجموعة كبيرة (9+)",
      searchButton: "ابحث عن الجولات",
    },
    destinations: {
      badge: "استكشف سريلانكا",
      title: "استكشف أجمل الأماكن في سريلانكا",
      subtitle:
        "من المدن التاريخية القديمة إلى الشواطئ الذهبية، اكتشف أروع معالم الجزيرة.",
      viewAll: "عرض جميع الوجهات",
      explore: "استكشف",
      placesCount: "أفضل الوجهات السياحية",
    },
    whyRavi: {
      badge: "لماذا تختار رافي تورز؟",
      titleMain: "أكثر من مجرد رحلة.",
      titleAccent: "إنها تجربة سريلانكية متكاملة.",
      card1Title: "جولات مخصصة لك",
      card1Desc: "رحلات مصممة خصيصاً وفق اهتماماتك وميزانيتك ووقتك.",
      card2Title: "مواصلات خاصة مريحة",
      card2Desc: "سيارات حديثة ومريحة مع سائقين محليين ذوي خبرة.",
      card3Title: "تجارب محلية أصيلة",
      card3Desc: "اكتشف سريلانكا الحقيقية بعيداً عن المسارات التقليدية.",
      card4Title: "دعم متواصل 24/7",
      card4Desc: "نحن معك خطوة بخطوة من لحظة وصولك وحتى مغادرتك.",
    },
    tours: {
      badge: "باقات الجولات الأكثر طلباً",
      title: "أفضل الجولات السياحية في سريلانكا",
      subtitle: "باقات صُممت بعناية لتمنحك رحلة من العمر.",
      viewAll: "عرض كل الجولات",
      pricingLabel: "الأسعار",
      viewPackage: "تفاصيل الباقة",
      showingTours: "جولات مصممة بحرفية",
      chauffeurIncluded: "سائق ومرشد خاص مشمول في كل رحلة",
    },
    experience: {
      badge: "عِش سريلانكا بأسلوب مختلف",
      title: "تنوع طبيعي وثقافي فريد",
      subtitle: "شواطئ ساحرة، جبال شاهقة، حياة برية وثقافة عريقة في جزيرة واحدة.",
      beachesTitle: "الشواطئ",
      beachesDesc: "شمس دافئة وأمواج زرقاء ممتدة.",
      mountainsTitle: "الجبال",
      mountainsDesc: "هواء عليل وإطلالات خضراء تأسر الألباب.",
      wildlifeTitle: "الحياة البرية",
      wildlifeDesc: "تعرف على الحياة البرية الرائعة في موطنها.",
      cultureTitle: "الثقافة",
      cultureDesc: "مدن عتيقة وتراث حضاري ملهم.",
      explore: "استكشف",
    },
    offers: {
      badge: "عروض سفر حصرية",
      title: "أفضل العروض لمغامرتك القادمة",
      subtitle: "عروض خاصة لفترة محدودة على جولات وباقات مختارة.",
      viewAll: "عرض كل العروض",
      offerRate: "سعر العرض",
      viewDetails: "عرض التفاصيل",
    },
    testimonials: {
      badge: "آراء المسافرين",
      title: "ماذا يقول عملاؤنا عنا؟",
      subtitle: "تجارب حقيقية وقصص لا تُنسى.",
      viewAll: "عرض جميع الآراء",
      demoBadge: "تقييم تجريبي",
    },
    planner: {
      badge: "خطط لرحلتك",
      title: "أخبرنا عن رحلة أحلامك",
      subtitle: "دعنا نصمم لك جدولاً سياحياً مخصصاً يلبي كافة رغباتك.",
      destinationLabel: "إلى أين تود السفر؟",
      selectDestination: "اختر الوجهة المفضلة",
      wholeIsland: "جولة شاملة لكافة أنحاء الجزيرة",
      durationLabel: "كم يوماً ترغب في قضائه؟",
      interestsLabel: "ما هي اهتماماتك؟",
      beach: "الشواطئ",
      culture: "الثقافة والتاريخ",
      wildlife: "الحياة البرية والسفاري",
      adventure: "المغامرات والطبيعة",
      footerNote: "جداول رحلات خاصة مخصصة بنسبة 100% • بدون أي التزامات حجز مسبقة",
      submitButton: "خطط لرحلتي الآن",
      receivedTitle: "تم استلام طلب رحلتك بنجاح!",
      receivedMessage:
        "شكراً لك! سيقوم فريق خبراء السفر بمراجعة خطتك والرد عليك خلال ساعتين إلى 4 ساعات.",
      sendWhatsAppBtn: "إرسال التفاصيل مباشرة عبر واتساب",
      planAnotherBtn: "تخطيط مسار آخر",
      modalTitle: "خطوة أخيرة! أين ترغب أن نرسل برنامج رحلتك؟",
      modalSubtitle: "سنقوم بتجهيز البرنامج وإرساله خلال ساعات قليلة.",
      fullNameLabel: "الاسم الكامل",
      fullNamePlaceholder: "مثال: أحمد عبد الله",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "مثال: ahmed@example.com",
      phoneLabel: "رقم الواتساب / الهاتف",
      phonePlaceholder: "مثال: +966 50 123 4567",
      cancelBtn: "إلغاء",
      sendRequestBtn: "إرسال الطلب",
    },
    cta: {
      title: "هل أنت مستعد لاكتشاف سحر سريلانكا؟",
      subtitle:
        "دع فريقنا المحلي يتولى كل الترتيبات من الفنادق والمواصلات. استمتع أنت بكل لحظة.",
      planTripBtn: "خطط لرحلتك",
      whatsappBtn: "تواصل عبر واتساب",
    },
    footer: {
      brandDesc:
        "اكتشف سريلانكا مع شريك سفرك المحلي الموثوق. جولات سياحية خاصة، سائقون محترفون، وتجارب أصيلة في ربوع الجزيرة.",
      quickLinks: "روابط سريعة",
      ourServices: "خدماتنا",
      contactUs: "اتصل بنا",
      rightsReserved: "جميع الحقوق محفوظة.",
      tagline: "استكشف • عش التجربة • كررها",
      serviceTours: "جولات سريلانكا السياحية",
      serviceTransfers: "نقل المطار (كولومبو CMB)",
      serviceHotels: "حجوزات الفنادق والمنتجعات",
      serviceChauffeur: "خدمات السائق الخاص",
      serviceItineraries: "برامج سياحية مصممة خصيصاً",
    },
    contactPage: {
      badge: "تواصل معنا",
      title: "اتصل بـ رافي تورز آند ترافيلز",
      subtitle:
        "لديك استفسار حول برامج الجولات، أو نقل المطار، أو استئجار السيارات؟ تواصل مباشرة مع فريقنا المحلي، ويسعدنا خدمتك.",
      directChannels: "قنوات الاتصال المباشرة",
      fastestResponse: "الرد الأسرع",
      chatSpecialists: "محادثة فورية مع مستشاري السفر عبر واتساب",
      phoneLine: "خط الهاتف",
      availableVoice: "متاح يومياً للمكالمات الصوتية",
      emailInquiries: "البريد الإلكتروني",
      proposalsNote: "للعروض المفصلة والرحلات العائلية والجروبات",
      officeHeading: "المكتب والعمليات",
      officeHoursNote: "دعم سياحي متواصل طوال فترة إقامتك",
      formTitle: "أرسل لنا رسالة",
      formSubtitle: "شاركنا بتواريخ سفرك وعدد أفراد عائلتك.",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "مثال: أحمد عبد الله",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "مثال: ahmed@example.com",
      phoneLabel: "الهاتف / الواتساب",
      phonePlaceholder: "مثال: +966 50 123 4567",
      dateLabel: "تاريخ السفر التقريبي",
      travelersLabel: "عدد المسافرين",
      interestedTourLabel: "الجولة المطلوبة (اختياري)",
      selectTourPlaceholder: "اختر باقة أو برنامجاً مخصصاً",
      messageLabel: "تفاصيل رحلتك",
      messagePlaceholder: "الأماكن التي تود زيارتها، متطلبات خاصة للفنادق...",
      submitBtn: "إرسال الاستفسار",
      successTitle: "شكراً لك! تم استلام رسالتك.",
      successMessage: "سيتواصل معك فريقنا قريباً عبر واتساب أو البريد الإلكتروني.",
      sendAnotherBtn: "إرسال استفسار آخر",
      chatDirectWhatsApp: "محادثة مباشرة عبر واتساب",
    },
    servicesPage: {
      badge: "حلول سياحية متكاملة",
      title: "خدماتنا السياحية",
      subtitle: "من الاستقبال في المطار وحتى الجولات الخاصة في الجزيرة وحجوزات الفنادق الفاخرة.",
      bookService: "استفسر عن هذه الخدمة",
    },
    aboutPage: {
      badge: "نبذة عن رافي تورز",
      title: "خبراء سفر سريلانكيون يهتمون بكل التفاصيل",
      subtitle: "شغفنا هو مشاركة جمال سريلانكا الطبيعي وتراثها العريق وحسن ضيافتها مع زوارنا الكرام.",
      whyUsBadge: "قيمنا الأساسية",
      whyUsTitle: "لماذا يثق المسافرون في رافي تورز؟",
      whyUsSubtitle: "كل رحلة نصنعها تقوم على الأمان والشفافية والتجربة المحلية الأصيلة.",
    },
  },

  de: {
    nav: {
      home: "Startseite",
      tours: "Touren",
      destinations: "Reiseziele",
      services: "Services",
      about: "Über uns",
      contact: "Kontakt",
      planYourTrip: "Reise planen",
      chatWhatsApp: "WhatsApp Chat",
    },
    hero: {
      eyebrow: "RAVI TOURS & TRAVELS",
      titleMain: "Entdecken Sie Sri Lanka",
      titleAccent: "Auf Ihre Art",
      subtitle:
        "Private Rundreisen, Flughafentransfers, Hotels, Exkursionen und unvergessliche Erlebnisse mit authentischer lokaler Gastfreundschaft.",
      exploreTours: "Touren entdecken",
      planYourTrip: "Reise planen",
      privateTours: "Private Touren",
      airportTransfers: "Flughafentransfers",
      localExperiences: "Lokale Erlebnisse",
      support247: "24/7 Betreuung",
    },
    search: {
      title: "Wohin möchten Sie reisen?",
      subtitle: "Finden Sie Ihr perfektes Sri Lanka Erlebnis",
      destinationLabel: "Reiseziel",
      selectDestination: "Reiseziel auswählen",
      dateLabel: "Reisedatum",
      travelersLabel: "Reisende",
      adult1: "1 Erwachsener",
      adults2: "2 Erwachsene",
      family: "Familie (3-4)",
      smallGroup: "Kleine Gruppe (5-8)",
      largeGroup: "Große Gruppe (9+)",
      searchButton: "Touren suchen",
    },
    destinations: {
      badge: "SRI LANKA ENTDECKEN",
      title: "Entdecken Sie die schönsten Orte Sri Lankas",
      subtitle:
        "Von uralten Königsstädten bis zu goldenen Stränden – erkunden Sie die Schätze der Insel.",
      viewAll: "Alle Reiseziele ansehen",
      explore: "Entdecken",
      placesCount: "Top Reiseziele",
    },
    whyRavi: {
      badge: "WARUM MIT RAVI REISEN?",
      titleMain: "Mehr als eine Reise.",
      titleAccent: "Ihr ganz persönliches Sri Lanka Erlebnis.",
      card1Title: "Individuelle Touren",
      card1Desc: "Maßgeschneidert nach Ihren Interessen, Ihrer Zeit und Ihrem Budget.",
      card2Title: "Privater Transport",
      card2Desc: "Komfortable Fahrzeuge und erfahrene einheimische Fahrer.",
      card3Title: "Authentische Erlebnisse",
      card3Desc: "Sri Lanka abseits der typischen Touristenpfade erleben.",
      card4Title: "Lokaler Support",
      card4Desc: "Von Ihrer Ankunft bis zur Abreise stehen wir Ihnen zur Seite.",
    },
    tours: {
      badge: "BELIEBTE TOUR-PAKETE",
      title: "Ausgewählte Sri Lanka Rundreisen",
      subtitle: "Sorgfältig zusammengestellte Touren für unvergessliche Momente.",
      viewAll: "Alle Touren ansehen",
      pricingLabel: "Preise",
      viewPackage: "Tour ansehen",
      showingTours: "Handverlesene Rundreisen",
      chauffeurIncluded: "Eigener Chauffeur bei jeder Reise inklusive",
    },
    experience: {
      badge: "SRI LANKA ANDERS ERLEBEN",
      title: "Erleben Sie Sri Lanka in seiner Vielfalt",
      subtitle: "Traumstrände, Bergwelten, Safaris und jahrtausendealte Kultur.",
      beachesTitle: "STRÄNDE",
      beachesDesc: "Sonne, Wellen und endloser Ozean.",
      mountainsTitle: "BERGLAND",
      mountainsDesc: "Frische Bergluft und Teeterrassen.",
      wildlifeTitle: "TIERWELT",
      wildlifeDesc: "Begegnen Sie Elefanten und Leoparden.",
      cultureTitle: "KULTUR",
      cultureDesc: "Antike Tempel und reiches Erbe.",
      explore: "Entdecken",
    },
    offers: {
      badge: "SPEZIELLE REISEANGEBOTE",
      title: "Beste Angebote für Ihr nächstes Abenteuer",
      subtitle: "Zeitlich begrenzte Angebote für ausgewählte Touren.",
      viewAll: "Alle Angebote ansehen",
      offerRate: "Angebotspreis",
      viewDetails: "Details ansehen",
    },
    testimonials: {
      badge: "KUNDENSTIMMEN",
      title: "Was unsere Reisenden sagen",
      subtitle: "Echte Erfahrungen. Wahre Reisegeschichten.",
      viewAll: "Alle Bewertungen lesen",
      demoBadge: "Demo Bewertung",
    },
    planner: {
      badge: "REISE PLANEN",
      title: "Erzählen Sie uns von Ihrer Traumreise",
      subtitle: "Wir erstellen eine maßgeschneiderte Sri Lanka Reise nur für Sie.",
      destinationLabel: "Wohin möchten Sie reisen?",
      selectDestination: "Reiseziel wählen",
      wholeIsland: "Große Inselrundreise",
      durationLabel: "Wie viele Tage?",
      interestsLabel: "Was interessiert Sie besonders?",
      beach: "Strände",
      culture: "Kultur",
      wildlife: "Tierwelt & Safari",
      adventure: "Abenteuer",
      footerNote: "100% individualisierbare Privat-Reisen • Unverbindliche Anfrage",
      submitButton: "Meine Reise planen",
      receivedTitle: "Reiseanfrage erfolgreich erhalten!",
      receivedMessage:
        "Vielen Dank! Unser Reise-Team prüft Ihre Wünsche und antwortet innerhalb von 2 bis 4 Stunden.",
      sendWhatsAppBtn: "Details direkt per WhatsApp senden",
      planAnotherBtn: "Neue Route planen",
      modalTitle: "Fast fertig! Wohin dürfen wir Ihr Angebot senden?",
      modalSubtitle: "Wir erstellen Ihr Angebot innerhalb weniger Stunden.",
      fullNameLabel: "Ihr vollständiger Name",
      fullNamePlaceholder: "z.B. Max Mustermann",
      emailLabel: "E-Mail-Adresse",
      emailPlaceholder: "z.B. max@beispiel.de",
      phoneLabel: "Telefon / WhatsApp",
      phonePlaceholder: "z.B. +49 170 1234567",
      cancelBtn: "Abbrechen",
      sendRequestBtn: "Anfrage absenden",
    },
    cta: {
      title: "Bereit für den Zauber Sri Lankas?",
      subtitle:
        "Überlassen Sie uns Routen, Hotels und Transport. Genießen Sie jeden Moment unbeschwert.",
      planTripBtn: "Reise planen",
      whatsappBtn: "Per WhatsApp kontaktieren",
    },
    footer: {
      brandDesc:
        "Entdecken Sie Sri Lanka mit Ihrem vertrauensvollen lokalen Reisepartner. Private Rundreisen, erfahrene Fahrer und authentische Erlebnisse.",
      quickLinks: "Quick Links",
      ourServices: "Unsere Services",
      contactUs: "Kontakt",
      rightsReserved: "Alle Rechte vorbehalten.",
      tagline: "Entdecken • Erleben • Wiederholen",
      serviceTours: "Sri Lanka Rundreisen",
      serviceTransfers: "Flughafentransfer (CMB)",
      serviceHotels: "Hotel- & Villen-Buchungen",
      serviceChauffeur: "Privater Chauffeur-Service",
      serviceItineraries: "Maßgeschneiderte Reisepläne",
    },
    contactPage: {
      badge: "KONTAKT AUFNEHMEN",
      title: "Kontaktieren Sie Ravi Tours & Travels",
      subtitle:
        "Haben Sie Fragen zu einer Reiseroute, einem Flughafentransfer oder Fahrzeugen? Kontaktieren Sie unser lokales Team direkt.",
      directChannels: "Direkte Kontaktwege",
      fastestResponse: "Schnellste Antwort",
      chatSpecialists: "Direkter WhatsApp-Chat mit unseren Reise-Spezialisten",
      phoneLine: "Telefon",
      availableVoice: "Täglich für Anrufe erreichbar",
      emailInquiries: "E-Mail Anfragen",
      proposalsNote: "Für detaillierte Angebote & Gruppenreisen",
      officeHeading: "Büro & Vor-Ort-Betreuung",
      officeHoursNote: "24/7 Reisebetreuung während Ihres Aufenthalts",
      formTitle: "Schreiben Sie uns eine Nachricht",
      formSubtitle: "Teilen Sie uns Ihre Reisedaten und Gruppengröße mit.",
      nameLabel: "Vollständiger Name",
      namePlaceholder: "z.B. Max Mustermann",
      emailLabel: "E-Mail-Adresse",
      emailPlaceholder: "z.B. max@beispiel.de",
      phoneLabel: "Telefon / WhatsApp",
      phonePlaceholder: "z.B. +49 170 1234567",
      dateLabel: "Ungefähres Reisedatum",
      travelersLabel: "Anzahl Reisende",
      interestedTourLabel: "Gewünschte Tour (optional)",
      selectTourPlaceholder: "Paket oder individuelle Route wählen",
      messageLabel: "Ihre Reisepläne & Wünsche",
      messagePlaceholder: "Gewünschte Orte, besondere Hotelwünsche...",
      submitBtn: "Anfrage senden",
      successTitle: "Vielen Dank! Ihre Anfrage wurde übermittelt.",
      successMessage: "Unser Team wird sich in Kürze per WhatsApp oder E-Mail bei Ihnen melden.",
      sendAnotherBtn: "Weitere Anfrage senden",
      chatDirectWhatsApp: "Direkt auf WhatsApp chatten",
    },
    servicesPage: {
      badge: "UMFASSENDE REISELÖSUNGEN",
      title: "Unsere Reisedienstleistungen",
      subtitle: "Von der Ankunft am Flughafen über private Chauffeur-Fahrten bis hin zu Hotelbuchungen und individuellen Entdeckungen.",
      bookService: "Service anfragen",
    },
    aboutPage: {
      badge: "ÜBER RAVI TOURS & TRAVELS",
      title: "Sri Lanka Reise-Experten mit Herz",
      subtitle: "Aus wahrer Leidenschaft entstanden, die atemberaubende Natur, reiche Kultur und herzliche Gastfreundschaft Sri Lankas zu teilen.",
      whyUsBadge: "UNSERE WERTE",
      whyUsTitle: "Warum Reisende Ravi Tours vertrauen",
      whyUsSubtitle: "Jede Reise basiert auf Sicherheit, Transparenz und authentischen Begegnungen.",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      tours: "Circuits",
      destinations: "Destinations",
      services: "Services",
      about: "À propos",
      contact: "Contact",
      planYourTrip: "Planifier votre voyage",
      chatWhatsApp: "Discuter sur WhatsApp",
    },
    hero: {
      eyebrow: "RAVI TOURS & TRAVELS",
      titleMain: "Découvrez le Sri Lanka",
      titleAccent: "À Votre Façon",
      subtitle:
        "Circuits privés, transferts aéroport, hôtels, excursions et expériences inoubliables organisés avec l'hospitalité locale authentique.",
      exploreTours: "Explorer les circuits",
      planYourTrip: "Planifier votre voyage",
      privateTours: "Circuits privés",
      airportTransfers: "Transferts aéroport",
      localExperiences: "Expériences locales",
      support247: "Assistance 24/7",
    },
    search: {
      title: "Où souhaitez-vous aller ?",
      subtitle: "Trouvez votre expérience idéale au Sri Lanka",
      destinationLabel: "Destination",
      selectDestination: "Sélectionnez une destination",
      dateLabel: "Date de voyage",
      travelersLabel: "Voyageurs",
      adult1: "1 adulte",
      adults2: "2 adultes",
      family: "Famille (3-4)",
      smallGroup: "Petit groupe (5-8)",
      largeGroup: "Grand groupe (9+)",
      searchButton: "Rechercher des circuits",
    },
    destinations: {
      badge: "EXPLORER LE SRI LANKA",
      title: "Explorez les plus beaux endroits du Sri Lanka",
      subtitle:
        "Des cités millénaires aux plages dorées, découvrez les trésors cachés de l'île.",
      viewAll: "Voir toutes les destinations",
      explore: "Découvrir",
      placesCount: "Meilleures destinations",
    },
    whyRavi: {
      badge: "POURQUOI VOYAGER AVEC RAVI ?",
      titleMain: "Bien plus qu'un voyage.",
      titleAccent: "Votre expérience sri-lankaise sur mesure.",
      card1Title: "Circuits Personnalisés",
      card1Desc: "Voyages conçus selon vos envies, votre rythme et votre budget.",
      card2Title: "Transport Privé",
      card2Desc: "Véhicules grand confort et chauffeurs locaux expérimentés.",
      card3Title: "Expériences Authentiques",
      card3Desc: "Découvrez le vrai Sri Lanka hors des sentiers battus.",
      card4Title: "Assistance Locale",
      card4Desc: "De votre arrivée à votre départ, nous sommes toujours à vos côtés.",
    },
    tours: {
      badge: "CIRCUITS POPULAIRES",
      title: "Circuits Phares au Sri Lanka",
      subtitle: "Des itinéraires soigneusement conçus pour des moments mémorables.",
      viewAll: "Voir tous les circuits",
      pricingLabel: "Tarifs",
      viewPackage: "Voir le circuit",
      showingTours: "Circuits sur mesure",
      chauffeurIncluded: "Chauffeur-guide privé inclus dans chaque voyage",
    },
    experience: {
      badge: "VIVEZ LE SRI LANKA DIFFÉREMMENT",
      title: "Vivez le Sri Lanka Autrement",
      subtitle: "Plages, montagnes, faune sauvage et patrimoine millénaire.",
      beachesTitle: "PLAGES",
      beachesDesc: "Soleil, vagues et océan infini.",
      mountainsTitle: "MONTAGNES",
      mountainsDesc: "Air pur et collines de thé verdoyantes.",
      wildlifeTitle: "FAUNE SAUVAGE",
      wildlifeDesc: "À la rencontre des éléphants et léopards.",
      cultureTitle: "CULTURE",
      cultureDesc: "Cités royales et trésors historiques.",
      explore: "Explorer",
    },
    offers: {
      badge: "OFFRES SPÉCIALES",
      title: "Les Meilleurs Bons Plans pour Votre Voyage",
      subtitle: "Offres à durée limitée sur une sélection de circuits.",
      viewAll: "Voir toutes les offres",
      offerRate: "Tarif spécial",
      viewDetails: "Voir les détails",
    },
    testimonials: {
      badge: "TÉMOIGNAGES",
      title: "Ce que disent nos voyageurs",
      subtitle: "De vraies aventures. De vraies histoires.",
      viewAll: "Voir tous les avis",
      demoBadge: "Avis Démo",
    },
    planner: {
      badge: "PLANIFIER VOTRE VOYAGE",
      title: "Décrivez-nous le voyage de vos rêves",
      subtitle: "Créons ensemble un séjour personnalisé rien que pour vous.",
      destinationLabel: "Où aimeriez-vous aller ?",
      selectDestination: "Choisir une destination",
      wholeIsland: "Grand tour complet de l'île",
      durationLabel: "Combien de jours ?",
      interestsLabel: "Qu'aimez-vous le plus ?",
      beach: "Plages",
      culture: "Culture",
      wildlife: "Faune & Safari",
      adventure: "Aventure",
      footerNote: "Itinéraires privés 100% sur mesure • Sans engagement préalable",
      submitButton: "Planifier mon voyage",
      receivedTitle: "Demande de voyage bien reçue !",
      receivedMessage:
        "Merci ! Notre équipe locale étudie votre itinéraire et vous répondra sous 2 à 4 heures.",
      sendWhatsAppBtn: "Envoyer directement via WhatsApp",
      planAnotherBtn: "Planifier un autre itinéraire",
      modalTitle: "Presque fini ! Où envoyer votre programme de voyage ?",
      modalSubtitle: "Nous établirons votre devis détaillé en quelques heures.",
      fullNameLabel: "Votre nom complet",
      fullNamePlaceholder: "ex: Thomas Martin",
      emailLabel: "Adresse email",
      emailPlaceholder: "ex: thomas@exemple.fr",
      phoneLabel: "WhatsApp / Téléphone",
      phonePlaceholder: "ex: +33 6 12 34 56 78",
      cancelBtn: "Annuler",
      sendRequestBtn: "Envoyer ma demande",
    },
    cta: {
      title: "Prêt à vivre la magie du Sri Lanka ?",
      subtitle:
        "Confiez-nous vos transferts, hôtels et itinéraires. Savourez chaque instant en toute sérénité.",
      planTripBtn: "Planifier votre voyage",
      whatsappBtn: "Contact WhatsApp",
    },
    footer: {
      brandDesc:
        "Explorez le Sri Lanka avec votre partenaire local de confiance. Circuits privés sur mesure, chauffeurs chevronnés et rencontres authentiques.",
      quickLinks: "Liens Rapides",
      ourServices: "Nos Services",
      contactUs: "Nous Contacter",
      rightsReserved: "Tous droits réservés.",
      tagline: "Explorer • Vivre • Revenir",
      serviceTours: "Circuits Sri Lanka",
      serviceTransfers: "Transferts Aéroport (CMB)",
      serviceHotels: "Réservations Hôtels & Villas",
      serviceChauffeur: "Location avec Chauffeur Privé",
      serviceItineraries: "Itinéraires 100% Sur Mesure",
    },
    contactPage: {
      badge: "CONTACTEZ-NOUS",
      title: "Contacter Ravi Tours & Travels",
      subtitle:
        "Des questions sur un itinéraire, un transfert aéroportuaire ou une location de véhicule ? Contactez directement notre équipe locale.",
      directChannels: "Canaux de communication directs",
      fastestResponse: "Réponse la plus rapide",
      chatSpecialists: "Échangez directement avec nos conseillers sur WhatsApp",
      phoneLine: "Ligne Téléphonique",
      availableVoice: "Disponible chaque jour pour vos appels",
      emailInquiries: "Demandes par Email",
      proposalsNote: "Pour les devis détaillés et voyages en famille/groupe",
      officeHeading: "Bureau & Opérations",
      officeHoursNote: "Assistance voyage 24h/24 durant votre séjour",
      formTitle: "Envoyez-nous un message",
      formSubtitle: "Indiquez-nous vos dates et le nombre de voyageurs.",
      nameLabel: "Nom complet",
      namePlaceholder: "ex: Thomas Martin",
      emailLabel: "Adresse email",
      emailPlaceholder: "ex: thomas@exemple.fr",
      phoneLabel: "Téléphone / WhatsApp",
      phonePlaceholder: "ex: +33 6 12 34 56 78",
      dateLabel: "Date de voyage approximative",
      travelersLabel: "Nombre de voyageurs",
      interestedTourLabel: "Circuit souhaité (optionnel)",
      selectTourPlaceholder: "Sélectionnez un circuit ou sur mesure",
      messageLabel: "Votre projet de voyage",
      messagePlaceholder: "Destinations souhaitées, envies particulières...",
      submitBtn: "Envoyer ma demande",
      successTitle: "Merci ! Votre demande a été transmise.",
      successMessage: "Notre équipe vous répondra très rapidement par WhatsApp ou email.",
      sendAnotherBtn: "Envoyer une autre demande",
      chatDirectWhatsApp: "Discuter directement sur WhatsApp",
    },
    servicesPage: {
      badge: "SOLUTIONS DE VOYAGE COMPLÈTES",
      title: "Nos Services de Voyage",
      subtitle: "De l'accueil à l'aéroport aux circuits personnalisés avec chauffeur privé, réservations d'hôtels et safaris.",
      bookService: "Se renseigner sur ce service",
    },
    aboutPage: {
      badge: "À PROPOS DE RAVI TOURS",
      title: "Des spécialistes passionnés du Sri Lanka",
      subtitle: "Nés d'une véritable passion pour faire découvrir la nature généreuse, le patrimoine et l'accueil chaleureux de notre île.",
      whyUsBadge: "NOS VALEURS FONDAMENTALES",
      whyUsTitle: "Pourquoi les voyageurs nous font confiance",
      whyUsSubtitle: "Chaque périple est conçu autour de la sécurité, de la transparence et de l'authenticité.",
    },
  },
};
