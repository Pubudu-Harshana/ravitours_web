export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  activities: string[];
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  duration: string;
  daysCount: number;
  nightsCount: number;
  description: string;
  image: string;
  destinations: string[];
  highlights: string[];
  priceNote: string; // "Request Price" as mandated
  featured: boolean;
  category: "Cultural" | "Nature & Hill Country" | "Wildlife & Safari" | "Coastal & Beach" | "Comprehensive";
  tag?: string; // e.g. "POPULAR", "BESTSELLER", "NEW"
  overview: string;
  included: string[];
  notIncluded: string[];
  itinerary: ItineraryDay[];
  faqs: { question: string; answer: string }[];
  gallery: string[];
}

export const tours: TourPackage[] = [
  {
    id: "sri-lanka-highlights",
    slug: "sri-lanka-highlights",
    title: "Sri Lanka Highlights",
    duration: "7 Days / 6 Nights",
    daysCount: 7,
    nightsCount: 6,
    description: "The essential Sri Lanka circuit covering ancient kingdoms, misty tea hills, scenic train rides, and golden southern beaches.",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
    destinations: ["Sigiriya", "Kandy", "Nuwara Eliya", "Ella", "Galle"],
    highlights: [
      "Climb Sigiriya Rock Fortress at sunrise",
      "Pay respects at the Sacred Temple of the Tooth in Kandy",
      "Take the legendary scenic train through cloud forests to Ella",
      "Walk the ramparts of UNESCO-listed Galle Fort",
    ],
    priceNote: "Request Price",
    featured: true,
    category: "Comprehensive",
    tag: "BESTSELLER",
    overview:
      "Our 7-Day Sri Lanka Highlights tour offers the ideal introduction to this tear-shaped paradise. Designed for first-time visitors seeking a balanced mix of cultural monuments, scenic mountain landscapes, world-renowned tea estates, and relaxing coastal moments with private chauffeur-driven comfort.",
    included: [
      "Air-conditioned private modern vehicle throughout the tour",
      "Dedicated English-speaking private driver & local guide",
      "Airport pick-up and drop-off transfers",
      "Fuel, highway tolls, parking fees, and driver accommodation",
      "Reserved 1st or 2nd class scenic train tickets (Kandy to Ella)",
      "Daily bottled mineral water during travel",
      "Assistance with site admissions & activity scheduling",
    ],
    notIncluded: [
      "International flights and Sri Lanka ETA visa fees",
      "Monument and national park entrance tickets (unless pre-requested)",
      "Personal expenses, laundry, and beverage charges",
      "Gratuities for driver, guide, and hotel staff",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Sri Lanka & Journey to Cultural Triangle",
        location: "Airport / Negombo to Sigiriya",
        description: "Welcome to Sri Lanka! Meet your private driver at Bandaranaike International Airport (CMB) and journey through rural coconut groves towards the ancient Cultural Triangle.",
        activities: ["Warm airport welcome & vehicle briefing", "Scenic drive through Kurunegala coconut plantations", "Check-in at Sigiriya resort and leisurely evening"],
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress & Dambulla Cave Temple",
        location: "Sigiriya & Dambulla",
        description: "Ascend the iconic 5th-century Sigiriya Citadel early in the morning before exploring the five sacred gilded cave shrines of Dambulla.",
        activities: ["Morning climb of Sigiriya Lion Rock Fortress", "Traditional rural village catamaran ride and lunch", "Afternoon visit to UNESCO Dambulla Royal Rock Cave Temples"],
      },
      {
        day: 3,
        title: "Kandy Royal Capital & Temple of the Sacred Tooth",
        location: "Sigiriya to Kandy",
        description: "Drive south to the hill capital of Kandy. En route, explore a local spice garden in Matale and attend the evening puja ceremony at the Sacred Tooth Temple.",
        activities: ["Matale herbal and spice education garden visit", "Peradeniya Royal Botanical Gardens leisurely walk", "Evening reverence ceremony at Temple of the Tooth Relic"],
      },
      {
        day: 4,
        title: "Scenic Train to Ella & Nine Arch Bridge",
        location: "Kandy to Ella",
        description: "Embark on one of the planet's most celebrated railway journeys as the blue train winds through pine valleys, mist-draped tea gardens, and mountain tunnels to Ella.",
        activities: ["Scenic hill country train ride", "Check-in to mountain-view accommodation", "Sunset walk to the historic Nine Arch Bridge viaduct"],
      },
      {
        day: 5,
        title: "Ella Gap Panorama & Descent to Southern Coast",
        location: "Ella to Mirissa / Weligama",
        description: "Hike Little Adam's Peak for panoramic views across Ella Gap, witness the thunderous cascade of Ravana Falls, and descend to the palm-fringed southern shores.",
        activities: ["Easy sunrise trek to Little Adam's Peak", "Photo stop at Ravana Falls waterfall", "Scenic drive to south coast & beachfront dinner"],
      },
      {
        day: 6,
        title: "Galle Dutch Fort Heritage & Coastal Leisure",
        location: "Southern Coast & Galle Fort",
        description: "Explore the 17th-century cobblestone alleys, Dutch colonial bastions, and maritime lighthouses of Galle Fort, followed by beach relaxation.",
        activities: ["Guided walking tour of UNESCO Galle Fort ramparts", "Artisan boutique shopping & coffee in colonial villas", "Stilt fishermen observation and sunset on the sand"],
      },
      {
        day: 7,
        title: "Southern Expressway to Airport / Departure",
        location: "Galle to CMB Airport",
        description: "Enjoy a relaxed breakfast by the Indian Ocean before taking the smooth Southern Expressway directly to the airport for your onward journey.",
        activities: ["Morning beach walk or swim", "Express transfer to Bandaranaike International Airport", "Warm farewell from Ravi Tours & Travels"],
      },
    ],
    faqs: [
      {
        question: "Can this tour itinerary be customized?",
        answer: "Yes, absolutely! Every itinerary can be tailored to your flight times, pace, preferred hotel category (from boutique heritage hotels to luxury 5-star villas), and personal interests.",
      },
      {
        question: "What vehicle is provided for this tour?",
        answer: "We provide immaculate, modern, air-conditioned private vehicles matching your party size—comfortable sedans for couples, spacious luxury vans (Toyota KDH/Commuter) for families, or mini-coaches for groups.",
      },
      {
        question: "How do we book and what are the payment terms?",
        answer: "Submit an inquiry via our form or WhatsApp. We will confirm date availability, customize your details, provide a transparent quote, and reserve your vehicle with simple advance booking.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588598198321-9735fd52455f?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "cultural-sri-lanka",
    slug: "cultural-sri-lanka",
    title: "Cultural Sri Lanka",
    duration: "5 Days / 4 Nights",
    daysCount: 5,
    nightsCount: 4,
    description: "Immerse yourself in over 2,500 years of living history, Buddhist heritage, and UNESCO World Heritage sanctuaries.",
    image: "https://images.unsplash.com/photo-1588598198321-9735fd52455f?auto=format&fit=crop&w=1200&q=80",
    destinations: ["Anuradhapura", "Polonnaruwa", "Sigiriya", "Dambulla", "Kandy"],
    highlights: [
      "Marvel at 2,000-year-old brick stupas in Anuradhapura",
      "Walk the medieval stone palaces of Polonnaruwa",
      "Explore the gilded caves of Dambulla with 150+ Buddha statues",
      "Witness sacred Kandyan drumming and blessing rituals",
    ],
    priceNote: "Request Price",
    featured: true,
    category: "Cultural",
    tag: "HERITAGE",
    overview:
      "A deep dive into Sri Lanka's golden age. From the ancient reservoirs and mammoth stupas of Anuradhapura to the palace carvings of Polonnaruwa, the mountain citadel of Sigiriya, and the sacred relic of Kandy.",
    included: [
      "Dedicated air-conditioned private vehicle and personal driver-guide",
      "Airport transfers both ways",
      "All vehicle fuel, tolls, and driver lodging",
      "Complimentary cold bottled water throughout tours",
      "Insider advice on cultural etiquette and optimal visit timings",
    ],
    notIncluded: [
      "Cultural Triangle site entrance tickets",
      "Airfares and personal travel insurance",
      "Meals outside of booked accommodation",
      "Driver tips & discretionary expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Airport to Ancient Anuradhapura",
        location: "CMB Airport to Anuradhapura",
        description: "Arrive in Colombo and drive north to the first kingdom of ancient Sri Lanka, Anuradhapura.",
        activities: ["Private airport reception", "Drive to sacred ancient city", "Evening view of the illuminated Ruwanwelisaya stupa"],
      },
      {
        day: 2,
        title: "Anuradhapura Sacred City & Mihintale Cradle of Buddhism",
        location: "Anuradhapura & Mihintale",
        description: "Visit the sacred Jaya Sri Maha Bodhi (the world's oldest historically documented tree) and climb Mihintale.",
        activities: ["Sri Maha Bodhi blessing", "Exploration of Jetavanaramaya and Abhayagiri monastic complexes", "Sunset climb to Mihintale rock summit"],
      },
      {
        day: 3,
        title: "Polonnaruwa Medieval Kingdom & Minneriya Wildlife",
        location: "Polonnaruwa to Sigiriya",
        description: "Discover the stone marvels of Gal Vihara before embarking on an afternoon safari with wild elephants.",
        activities: ["Bicycle or vehicle tour of Polonnaruwa Royal Palace and Gal Vihara granite Buddhas", "Afternoon 4x4 open safari in Minneriya National Park", "Overnight stay in Sigiriya"],
      },
      {
        day: 4,
        title: "Sigiriya Lion Rock & Dambulla Caves to Kandy",
        location: "Sigiriya & Dambulla to Kandy",
        description: "Conquer Sigiriya rock fortress in the cool morning, then visit Dambulla Cave Temple on your way to Kandy.",
        activities: ["Early climb of Sigiriya Fortress", "Dambulla Golden Rock Temple caves", "Evening cultural dance performance in Kandy"],
      },
      {
        day: 5,
        title: "Temple of the Tooth Relic & Departure",
        location: "Kandy to Airport",
        description: "Morning puja at the Temple of the Tooth and a visit to the royal botanical gardens before your airport return.",
        activities: ["Morning reverence ceremony at Sri Dalada Maligawa", "Kandy Lake walk and scenic drive to CMB Airport for departure"],
      },
    ],
    faqs: [
      {
        question: "What dress code is required for sacred sites?",
        answer: "Shoulders and knees must be covered at all Buddhist temples, and shoes/hats must be removed before entering holy precincts. We advise light, comfortable white or light-colored clothing.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1588598198321-9735fd52455f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "hill-country-escape",
    slug: "hill-country-escape",
    title: "Hill Country Escape",
    duration: "4 Days / 3 Nights",
    daysCount: 4,
    nightsCount: 3,
    description: "Crisp mountain breezes, emerald tea plantations, tumbling cascades, and the world's most scenic mountain train.",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
    destinations: ["Kandy", "Nuwara Eliya", "Ella"],
    highlights: [
      "Ride the iconic blue train through the central highlands",
      "Taste fine Ceylon tea at high-elevation colonial estates",
      "Photograph the Nine Arch Bridge surrounded by lush tea bushes",
      "Hike Little Adam's Peak overlooking the majestic Ella Gap",
    ],
    priceNote: "Request Price",
    featured: true,
    category: "Nature & Hill Country",
    tag: "POPULAR",
    overview:
      "Escape the tropical coastal warmth into Sri Lanka's refreshing central highlands. With cool temperatures, misty valleys, rolling tea estates, and dramatic gorges, this escape showcases the highland charm that has captivated travelers for generations.",
    included: [
      "Air-conditioned private modern car or van with expert driver-guide",
      "Pre-booked reserved seats for the scenic hill country train",
      "Ceylon tea plantation and factory tour with tasting",
      "Bottled water, vehicle fuel, parking, and toll fees",
      "Door-to-door luggage handling while you enjoy the train journey",
    ],
    notIncluded: [
      "Accommodation (we can arrange recommended hotels or you may book your own)",
      "Optional adventure sports (ziplining, mountain biking)",
      "Meals and beverages not specified",
    ],
    itinerary: [
      {
        day: 1,
        title: "Colombo to Kandy Hill Capital",
        location: "Colombo / Airport to Kandy",
        description: "Ascend through the scenic Kadugannawa pass into Kandy. Visit the Peradeniya Botanical Gardens and Kandy Lake.",
        activities: ["Morning pick-up and scenic ascent", "Peradeniya Royal Botanical Gardens", "Temple of the Tooth evening visit"],
      },
      {
        day: 2,
        title: "Nuwara Eliya Tea Highlands & Waterfalls",
        location: "Kandy to Nuwara Eliya",
        description: "Wind past Ramboda Falls and expansive green tea gardens to 'Little England' (Nuwara Eliya).",
        activities: ["Ramboda Falls photo stop", "Authentic tea manufacturing tour & tasting", "Stroll through colonial Nuwara Eliya and Gregory Lake"],
      },
      {
        day: 3,
        title: "Iconic Scenic Train Ride to Ella",
        location: "Nuwara Eliya (Nanu Oya) to Ella",
        description: "Board the classic train for an unforgettable ride crossing mountain ridges to Ella, then visit the Nine Arch Bridge.",
        activities: ["3-hour scenic highland train journey", "Luggage transported directly by your driver to your Ella hotel", "Sunset walk to Nine Arch Bridge viaduct"],
      },
      {
        day: 4,
        title: "Little Adam's Peak & Onward Transfer",
        location: "Ella to Colombo or South Coast",
        description: "Hike Little Adam's Peak for panoramic views before transferring down to Colombo or your beach resort.",
        activities: ["Morning Little Adam's Peak walk", "Ravana Falls photo stop", "Private transfer to your next destination"],
      },
    ],
    faqs: [
      {
        question: "How do luggage transfers work during the train ride?",
        answer: "Your driver handles all your heavy suitcases and drives the vehicle to meet you right at Ella station platform when your train arrives, so you can enjoy the train ride completely unencumbered!",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "southern-coast-escape",
    slug: "southern-coast-escape",
    title: "Southern Coast Escape",
    duration: "5 Days / 4 Nights",
    daysCount: 5,
    nightsCount: 4,
    description: "Sun-drenched beaches, sea turtle sanctuaries, blue whale cruises, and the cobblestone romance of Galle Fort.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
    destinations: ["Bentota", "Hikkaduwa", "Galle", "Mirissa", "Tangalle"],
    highlights: [
      "Spot blue whales and spinner dolphins in Mirissa",
      "Explore the 400-year-old ramparts of Galle Dutch Fort",
      "Release baby sea turtles at a marine conservation project",
      "Relax on pristine golden sands with fresh ocean seafood",
    ],
    priceNote: "Request Price",
    featured: true,
    category: "Coastal & Beach",
    tag: "BEACH & SUN",
    overview:
      "A coastal retreat along Sri Lanka's sun-blessed southern coastline. Perfect for sun seekers, couples, and ocean lovers wanting relaxation blended with marine wildlife and colonial architecture.",
    included: [
      "Private dedicated air-conditioned vehicle with licensed driver-guide",
      "Airport transfers (arrival and departure)",
      "Madu River boat safari through mangrove islands & cinnamon peeling demo",
      "Galle Fort walking tour",
      "Full flexibility to stop at scenic viewpoints and coastal cafes",
    ],
    notIncluded: [
      "Mirissa whale watching boat tickets (can be arranged upon request)",
      "Personal water sport activities (scuba, surfing, jet skiing)",
      "Meals and hotel stays",
    ],
    itinerary: [
      {
        day: 1,
        title: "Colombo / Airport to Bentota Coastal Strip",
        location: "Airport to Bentota",
        description: "Arrive and transfer directly to the serene southern beaches of Bentota.",
        activities: ["Private airport pick-up", "Madu Ganga mangrove river boat safari", "Check-in to beachfront hotel & relax"],
      },
      {
        day: 2,
        title: "Sea Turtle Conservation & Hikkaduwa Coral Reef",
        location: "Bentota to Hikkaduwa",
        description: "Visit a sea turtle hatchery and experience the marine life along Hikkaduwa's coral reef.",
        activities: ["Kosgoda turtle conservation project", "Snorkeling or glass-bottom boat in Hikkaduwa", "Beachside sunset cocktail"],
      },
      {
        day: 3,
        title: "Galle Fort Colonial Walk & Mirissa Sunset",
        location: "Galle to Mirissa",
        description: "Stroll the cobblestone streets, boutiques, and ramparts of Galle Fort before heading to Mirissa.",
        activities: ["Guided walking tour of UNESCO Galle Fort", "Browse artisan boutiques and tea shops", "Sunset climb at Mirissa Coconut Tree Hill"],
      },
      {
        day: 4,
        title: "Morning Whale Watching & Secret Beach Relaxation",
        location: "Mirissa",
        description: "Embark on an early morning ocean voyage to view majestic blue whales in their natural habitat.",
        activities: ["Dawn whale watching excursion", "Afternoon chill at Secret Beach", "Candlelit seafood dinner on the beach"],
      },
      {
        day: 5,
        title: "Coastal Leisure & Transfer to Airport",
        location: "Mirissa to CMB Airport",
        description: "Enjoy your final tropical breakfast and swim before heading back via the Southern Expressway.",
        activities: ["Morning beach swim & tropical fruit breakfast", "Direct highway transfer to airport for departure"],
      },
    ],
    faqs: [
      {
        question: "When is the best season for the southern coast?",
        answer: "November through April brings calm turquoise seas, sunny blue skies, and optimal conditions for whale watching and water activities.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "wildlife-adventure",
    slug: "wildlife-adventure",
    title: "Wildlife & Adventure",
    duration: "6 Days / 5 Nights",
    daysCount: 6,
    nightsCount: 5,
    description: "Track elusive leopards in Yala, encounter wild elephant gatherings in Udawalawe, and raft white-water rapids in Kitulgala.",
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=1200&q=80",
    destinations: ["Kitulgala", "Udawalawe", "Yala", "Mirissa"],
    highlights: [
      "4x4 game drives in Yala National Park tracking leopards and sloth bears",
      "Visit Udawalawe Elephant Transit Home during feeding hour",
      "White-water rafting and canyoning down the Kelani River in Kitulgala",
      "Blue whale watching in the deep offshore trenches of Mirissa",
    ],
    priceNote: "Request Price",
    featured: true,
    category: "Wildlife & Safari",
    tag: "THRILL & SAFARI",
    overview:
      "Created for wildlife lovers and adventure seekers, this expedition takes you through tropical rainforest rivers, open savanna plains teeming with herds of elephants, and the coastal dunes of Yala.",
    included: [
      "Customized private transport with dedicated driver-guide",
      "Airport arrival and departure transfers",
      "Assistance booking private customized 4x4 safari jeeps with local trackers",
      "Mineral water, vehicle fuel, parking, and highway tolls",
    ],
    notIncluded: [
      "National Park entry permits and safari jeep hire fees",
      "Rafting gear & guide fees in Kitulgala",
      "Accommodation and personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Airport to Kitulgala Rainforest Rapids",
        location: "Airport to Kitulgala",
        description: "Head into the lush rainforest of Kitulgala, the filming location of 'The Bridge on the River Kwai'.",
        activities: ["Airport pick-up", "White water rafting grade 3 rapids", "Jungle stream swim & overnight in eco-lodge"],
      },
      {
        day: 2,
        title: "Journey to Udawalawe Elephant Sanctuary",
        location: "Kitulgala to Udawalawe",
        description: "Drive south to the savannas of Udawalawe and witness orphaned elephant calves being fed milk.",
        activities: ["Scenic drive through gem-mining country", "Visit Elephant Transit Home (ETH)", "Late afternoon safari in Udawalawe"],
      },
      {
        day: 3,
        title: "Yala National Park Afternoon Safari",
        location: "Udawalawe to Yala / Tissamaharama",
        description: "Arrive at Yala and enter Block 1 for an intensive afternoon game drive tracking the elusive Sri Lankan leopard.",
        activities: ["Transfer to Yala border", "Check-in to safari camp or lodge", "3.5-hour 4x4 open safari tracking big cats"],
      },
      {
        day: 4,
        title: "Dawn Safari & Transfer to Southern Shore",
        location: "Yala to Mirissa",
        description: "Early morning safari at first light when wildlife is most active, followed by a scenic drive to the southern coast.",
        activities: ["Early dawn game drive", "Bird watching along lagoons", "Afternoon transfer to Mirissa beach"],
      },
      {
        day: 5,
        title: "Blue Whale Expedition & Beach Recovery",
        location: "Mirissa",
        description: "Set sail to spot oceanic giants before relaxing on the tropical sands.",
        activities: ["Whale watching boat cruise", "Afternoon chill at Mirissa beach coves", "Beach barbecue"],
      },
      {
        day: 6,
        title: "Return to Airport / Departure",
        location: "Mirissa to CMB Airport",
        description: "Direct expressway transfer to Colombo Airport with lasting wildlife memories.",
        activities: ["Morning beach walk", "Southern expressway ride to CMB Airport for departure"],
      },
    ],
    faqs: [
      {
        question: "What are the chances of seeing leopards in Yala?",
        answer: "Yala has the highest density of leopards in the world. While sightings can never be 100% guaranteed in nature, having experienced local safari trackers and doing both morning and afternoon safaris significantly increases your chances.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "complete-sri-lanka",
    slug: "complete-sri-lanka",
    title: "Complete Sri Lanka",
    duration: "10 Days / 9 Nights",
    daysCount: 10,
    nightsCount: 9,
    description: "The ultimate Grand Island voyage combining UNESCO cultural wonders, misty hill country, Yala safaris, and tropical beaches.",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
    destinations: ["Sigiriya", "Polonnaruwa", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Mirissa", "Galle"],
    highlights: [
      "Ascend Sigiriya Rock Fortress and explore Dambulla Golden Caves",
      "Sacred Temple of the Tooth & traditional cultural performances in Kandy",
      "Scenic highland train journey through tea estates",
      "Thrilling leopard and elephant safari in Yala National Park",
      "Whale watching and Dutch colonial fort ramparts in the south",
    ],
    priceNote: "Request Price",
    featured: true,
    category: "Comprehensive",
    tag: "GRAND TOUR",
    overview:
      "Our flagship 10-day grand journey encapsulates the heart and soul of Sri Lanka. From ancient royal dynasties to cloud forests, wild savannas, and golden coastlines, travel in luxury and complete peace of mind with your personal dedicated chauffeur.",
    included: [
      "Modern luxury air-conditioned vehicle throughout the entire 10 days",
      "Experienced professional English-speaking private driver-guide",
      "Airport arrival meet & greet and departure drop-off",
      "All vehicle fuel, highway tolls, parking, and driver expenses",
      "Pre-reserved panoramic scenic train tickets from Kandy to Ella",
      "Daily bottled water and dedicated local travel coordination",
    ],
    notIncluded: [
      "International flights and Sri Lanka visa",
      "National park and historical site entry tickets",
      "Hotel accommodations (available upon package customization)",
      "Meals, beverages, and driver gratuities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Transfer to Negombo / Chilaw",
        location: "Airport to Negombo",
        description: "Arrive at Bandaranaike International Airport, meet your private driver, and relax at a seaside hotel.",
        activities: ["Airport welcome", "Short transfer to coastal resort", "Rest and oceanfront dining"],
      },
      {
        day: 2,
        title: "Journey to Sigiriya Cultural Triangle",
        location: "Negombo to Sigiriya",
        description: "Travel inland towards Sigiriya, visiting rural markets and coconut groves along the route.",
        activities: ["Scenic drive inland", "Dambulla Royal Cave Temples", "Check-in at Sigiriya jungle resort"],
      },
      {
        day: 3,
        title: "Sigiriya Lion Rock & Polonnaruwa Ruins",
        location: "Sigiriya & Polonnaruwa",
        description: "Scale the ancient rock citadel at dawn, then explore the medieval capital of Polonnaruwa.",
        activities: ["Early climb of Sigiriya Fortress", "Traditional village lunch", "Polonnaruwa stone ruins & Gal Vihara"],
      },
      {
        day: 4,
        title: "Spice Gardens & Sacred Hill Capital of Kandy",
        location: "Sigiriya to Kandy",
        description: "Head south into the hills of Kandy with visits to Matale spice gardens and the Temple of the Tooth.",
        activities: ["Matale spice plantation tour", "Peradeniya Botanical Gardens", "Temple of the Tooth Relic ceremony"],
      },
      {
        day: 5,
        title: "Tea Country & Nuwara Eliya",
        location: "Kandy to Nuwara Eliya",
        description: "Ascend into the misty high-altitude tea hills of 'Little England'.",
        activities: ["Ramboda Falls viewpoint", "Tea estate tour & tea tasting", "Colonial Nuwara Eliya walking tour"],
      },
      {
        day: 6,
        title: "Iconic Hill Country Train to Ella",
        location: "Nuwara Eliya to Ella",
        description: "Take the world's most photogenic train ride to Ella and view the Nine Arch Bridge.",
        activities: ["Scenic highland train ride", "Nine Arch Bridge hike", "Dinner in lively Ella town"],
      },
      {
        day: 7,
        title: "Descent to Yala National Park & Evening Safari",
        location: "Ella to Yala",
        description: "Descend from the mountains into the dry zone savannas of Yala for an afternoon wildlife safari.",
        activities: ["Ravana Falls visit", "Scenic drive south", "4x4 game drive in Yala tracking leopards & elephants"],
      },
      {
        day: 8,
        title: "Southern Coast & Mirissa Bay",
        location: "Yala to Mirissa",
        description: "Drive along the southern shoreline to Mirissa's palm-fringed beaches.",
        activities: ["Coastal drive past stilt fishermen", "Mirissa Coconut Tree Hill sunset", "Beach seafood dinner"],
      },
      {
        day: 9,
        title: "Whale Watching & UNESCO Galle Fort",
        location: "Mirissa to Galle",
        description: "Early whale watching cruise followed by an afternoon walking tour of historic Galle Fort.",
        activities: ["Blue whale watching boat safari", "Historic Galle Fort walking tour & lighthouse", "Sunset along ancient ramparts"],
      },
      {
        day: 10,
        title: "Southern Expressway to CMB Airport / Departure",
        location: "Galle to CMB Airport",
        description: "Enjoy a final coastal swim before smooth highway transfer directly to the airport.",
        activities: ["Breakfast overlooking the ocean", "Fast expressway transfer to CMB Airport", "Departure with unforgettable memories"],
      },
    ],
    faqs: [
      {
        question: "Can we extend or shorten this 10-day tour?",
        answer: "Yes, we customize every single detail! We can expand to 12-14 days with Trincomalee / Arugam Bay or condense into an 8-day express itinerary based on your vacation schedule.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=800&q=80",
    ],
  },
];

export interface SpecialOffer {
  id: string;
  badge: "POPULAR" | "NEW" | "LIMITED OFFER" | "FEATURED";
  title: string;
  duration: string;
  image: string;
  priceNote: string;
  description: string;
  slug: string;
}

export const specialOffers: SpecialOffer[] = [
  {
    id: "offer-1",
    badge: "POPULAR",
    title: "Ella Escape",
    duration: "4 Days / 3 Nights",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80",
    priceNote: "Request Details",
    description: "Scenic mountain train, Nine Arch Bridge, Little Adam's Peak & tea estate walks.",
    slug: "hill-country-escape",
  },
  {
    id: "offer-2",
    badge: "NEW",
    title: "Mirissa Beach Getaway",
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80",
    priceNote: "Request Details",
    description: "Golden sands, blue whale safari, Coconut Tree Hill & relaxed beach dining.",
    slug: "southern-coast-escape",
  },
  {
    id: "offer-3",
    badge: "LIMITED OFFER",
    title: "Yala Safari Adventure",
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=600&q=80",
    priceNote: "Request Details",
    description: "Track elusive Sri Lankan leopards, wild elephants, and coastal safari camping.",
    slug: "wildlife-adventure",
  },
  {
    id: "offer-4",
    badge: "FEATURED",
    title: "Cultural Triangle Tour",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1588598198321-9735fd52455f?auto=format&fit=crop&w=600&q=80",
    priceNote: "Request Details",
    description: "Explore UNESCO heritage sites: Sigiriya, Dambulla caves, and sacred Kandy.",
    slug: "cultural-sri-lanka",
  },
];
