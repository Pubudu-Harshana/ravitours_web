export interface Destination {
  id: string;
  slug: string;
  name: string;
  tag: string;
  shortDescription: string;
  image: string;
  featured?: boolean;
  region: string;
  bestTimeToVisit: string;
  intro: string;
  whyVisit: string[];
  thingsToDo: {
    title: string;
    description: string;
  }[];
  gallery: string[];
}

export const destinations: Destination[] = [
  {
    id: "sigiriya",
    slug: "sigiriya",
    name: "Sigiriya",
    tag: "Ancient Marvel",
    shortDescription: "The iconic 5th-century UNESCO fortress rising dramatically from the central jungle plains.",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    region: "Central Province / Cultural Triangle",
    bestTimeToVisit: "December to April",
    intro:
      "Rising 200 meters above the emerald jungle floor, Sigiriya (Lion Rock) is Sri Lanka's most celebrated archaeological wonder. Built by King Kashyapa in the 5th century, the citadel features world-renowned frescoes, landscaped water gardens, and dramatic summit ruins with panoramic valley vistas.",
    whyVisit: [
      "Climb the legendary 1,200 steps past ancient mirror walls and lion paws",
      "Marvel at well-preserved 1,500-year-old maiden frescoes",
      "Wander through Asia's oldest surviving landscaped water gardens",
      "Catch sunrise or sunset views from adjacent Pidurangala Rock",
    ],
    thingsToDo: [
      {
        title: "Summit Climb of the Lion Rock Fortress",
        description: "Scale the rock fortress early morning to beat the tropical heat and enjoy uninterrupted 360-degree vistas.",
      },
      {
        title: "Hike Pidurangala Rock for Sunrise",
        description: "A popular moderate climb that awards you the most dramatic postcard view of Sigiriya Fortress framed against dawn skies.",
      },
      {
        title: "Village Safari & Bullock Cart Ride",
        description: "Experience authentic rural life in Habarana with catamaran lake rides, traditional clay-pot cooking, and farmer encounters.",
      },
      {
        title: "Explore Minneriya Elephant Gathering",
        description: "Take an open-top 4x4 safari to nearby Minneriya National Park to witness hundreds of Asian elephants gathering around ancient reservoirs.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588598198321-9735fd52455f?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "ella",
    slug: "ella",
    name: "Ella",
    tag: "Scenic Mountains",
    shortDescription: "A mountain paradise surrounded by mist-shrouded peaks, waterfalls, and tea-covered slopes.",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    region: "Uva Province / Hill Country",
    bestTimeToVisit: "January to May",
    intro:
      "Ella is Sri Lanka's mountain sanctuary. Nestled in a deep valley surrounded by emerald tea plantations, cloud forests, and dramatic mountain gaps, it is world-renowned for the Nine Arch Bridge, scenic hiking trails, and relaxed hill-country vibes.",
    whyVisit: [
      "Watch the iconic blue train cross the colonial Nine Arch Bridge",
      "Trek to the peak of Little Adam's Peak and Ella Rock for breathtaking vistas",
      "Swim in natural pools beneath cascades like Ravana Falls and Diyaluma Falls",
      "Sip single-estate Ceylon tea overlooking mist-covered green valleys",
    ],
    thingsToDo: [
      {
        title: "Watch the Blue Train on Nine Arch Bridge",
        description: "Stand amidst tea bushes as the vintage train rumbles over the 100-year-old stone viaduct bridge.",
      },
      {
        title: "Trek Little Adam's Peak & Flying Ravana Zipline",
        description: "An easy 45-minute trek rewarded with jaw-dropping views of Ella Gap, coupled with South Asia's longest zipline.",
      },
      {
        title: "Hike Ella Rock",
        description: "A rewarding half-day hike through eucalyptus forests, railway tracks, and tea plantations ending at an epic cliff edge.",
      },
      {
        title: "Visit Ravana Falls and Ravana Cave",
        description: "Explore the legendary limestone cave and cool off near one of Sri Lanka's widest tiered waterfalls.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "kandy",
    slug: "kandy",
    name: "Kandy",
    tag: "Sacred City",
    shortDescription: "The cultural heart of Sri Lanka, home to the sacred Temple of the Tooth and tranquil lake.",
    image: "https://images.unsplash.com/photo-1588598198321-9735fd52455f?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    region: "Central Province",
    bestTimeToVisit: "December to April",
    intro:
      "Surrounded by misty green hills and centered around a serene reflective lake, Kandy was the last royal capital of the Sinhalese monarchy. It remains the spiritual heart of the nation, guarding the sacred Relic of the Tooth of Lord Buddha.",
    whyVisit: [
      "Experience the evening puja ceremony at Sri Dalada Maligawa (Temple of the Sacred Tooth)",
      "Stroll through the world-famous Royal Botanical Gardens of Peradeniya",
      "Walk around scenic Kandy Lake and browse traditional Kandyan craft shops",
      "Board the world-famous scenic train journey from Kandy to the Hill Country",
    ],
    thingsToDo: [
      {
        title: "Temple of the Tooth Relic Tour",
        description: "Witness traditional drumming ceremonies and golden architecture housing the revered sacred relic.",
      },
      {
        title: "Royal Botanical Gardens, Peradeniya",
        description: "Explore 147 acres containing giant Javan fig trees, royal palm avenues, and over 4,000 plant species.",
      },
      {
        title: "Traditional Kandyan Cultural Dance Show",
        description: "Enjoy mesmerizing acrobatic dances, fire walking, and masked drumming performances.",
      },
      {
        title: "Bahirawakanda Buddha Statue Viewpoint",
        description: "Climb to the towering white Buddha statue overlooking the entire city basin and surrounding mountains.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1588598198321-9735fd52455f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "nuwara-eliya",
    slug: "nuwara-eliya",
    name: "Nuwara Eliya",
    tag: "Tea Country",
    shortDescription: "Little England set amidst misty high-altitude tea gardens, cool breezes, and colonial bungalows.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    region: "Central Highlands",
    bestTimeToVisit: "February to May",
    intro:
      "Perched at nearly 1,900 meters above sea level, Nuwara Eliya offers crisp mountain air, manicured English gardens, Tudor-style mansions, and rolling emerald carpets of the world's finest Ceylon tea.",
    whyVisit: [
      "Tour historic tea factories and taste freshly plucked Ceylon black and green tea",
      "Hike the misty plains and sheer cliffs of Horton Plains to 'World's End'",
      "Enjoy boating or horse riding around serene Lake Gregory",
      "Experience strawberry farms, rose gardens, and colonial golf links",
    ],
    thingsToDo: [
      {
        title: "Tea Factory & Estate Tour",
        description: "Walk alongside tea pluckers, observe authentic orthodox processing, and taste premium grade teas.",
      },
      {
        title: "Horton Plains & World's End Trek",
        description: "A dramatic 9.5 km loop across windswept plateaus ending at a vertical 880m precipice.",
      },
      {
        title: "Lake Gregory Promenade & Boating",
        description: "Relax along scenic landscaped shores with swan pedal boats, jet skis, and lakeside cafes.",
      },
      {
        title: "Colonial Post Office & Victoria Park",
        description: "Visit the iconic 1894 red-brick Tudor post office and stroll through blooming Victorian gardens.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "mirissa",
    slug: "mirissa",
    name: "Mirissa",
    tag: "Golden Beaches",
    shortDescription: "A crescent-shaped tropical bay celebrated for blue whale watching and laid-back sunsets.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    region: "Southern Province",
    bestTimeToVisit: "November to April",
    intro:
      "Mirissa is the quintessential tropical haven on Sri Lanka's south coast. Fringed with swaying coconut palms, crystal-clear surf, and beachfront seafood restaurants lit with lanterns at dusk, it is also one of the world's premier locations for blue whale watching.",
    whyVisit: [
      "Embark on morning whale watching cruises to spot blue whales, sperm whales, and spinner dolphins",
      "Photograph the iconic Coconut Tree Hill jutting into the turquoise ocean",
      "Snorkel with giant green sea turtles in calm sheltered bays",
      "Dine on freshly caught grilled fish right on the sand under starry night skies",
    ],
    thingsToDo: [
      {
        title: "Blue Whale & Dolphin Watching Expedition",
        description: "Set sail at dawn to encounter the earth's largest living mammals in their natural migration corridor.",
      },
      {
        title: "Sunset at Coconut Tree Hill",
        description: "Climb the reddish promontory crowned with tall palms for unforgettable sunset photos.",
      },
      {
        title: "Snorkeling with Wild Sea Turtles at Turtle Bay",
        description: "Swim alongside gentle green and hawksbill turtles swimming gracefully in near-shore reefs.",
      },
      {
        title: "Surf at Secret Beach and Weligama Bay",
        description: "Catch beginner-friendly gentle swells or relax in secluded beach coves tucked behind coastal cliffs.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "yala",
    slug: "yala",
    name: "Yala",
    tag: "Wildlife Safari",
    shortDescription: "Sri Lanka's premier national park boasting one of the world's highest densities of wild leopards.",
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    region: "Southern / Uva Province",
    bestTimeToVisit: "February to July",
    intro:
      "Spanning vast coastal dunes, monsoon forests, and freshwater lagoons, Yala National Park is a wildlife lover's paradise. It holds the highest concentration of Sri Lankan leopards on earth, alongside wild elephant herds, sloth bears, spotted deer, and over 215 bird species.",
    whyVisit: [
      "Experience thrilling 4x4 safaris tracked by expert naturalists",
      "Spot the elusive Sri Lankan Leopard basking on granite outcrops",
      "Observe wild elephant families grazing around waterholes",
      "Enjoy glamping and luxury tented safari camps under dark starry skies",
    ],
    thingsToDo: [
      {
        title: "Morning & Afternoon 4x4 Jeep Safari",
        description: "Cruise through Block 1 and 5 tracking big cats, sloth bears, mugger crocodiles, and hornbills.",
      },
      {
        title: "Bird Watching along Coastal Lagoons",
        description: "Spot painted storks, spoonbills, and migratory waders around Buthawa and Mahaseelawa tanks.",
      },
      {
        title: "Luxury Safari Glamping Experience",
        description: "Stay in eco-luxury tented camps with bush dinners, bonfires, and jungle sounds.",
      },
      {
        title: "Visit Sithulpawwa Ancient Rock Temple",
        description: "Explore a 2,200-year-old rock monastery hidden deep in the sanctuary with resident monk hermits.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "galle",
    slug: "galle",
    name: "Galle",
    tag: "Colonial Charm",
    shortDescription: "A UNESCO-listed Dutch coastal fortress filled with cobblestone streets, boutiques, and ocean bastions.",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    region: "Southern Coast",
    bestTimeToVisit: "November to April",
    intro:
      "Galle Fort is a living colonial monument where Portuguese, Dutch, and British architectural heritage fuses with vibrant tropical culture. Within its 17th-century ramparts lie stylish boutique hotels, gem emporiums, artisan cafes, and dramatic ocean panoramas.",
    whyVisit: [
      "Walk along the ancient granite ramparts and watch the sunset from Flag Rock Bastion",
      "Visit the iconic white Galle Fort Lighthouse and Dutch Reformed Church",
      "Dine at upscale restaurants housed in restored 300-year-old merchant mansions",
      "Shop for authentic Sri Lankan sapphires, handcrafted jewelry, and local spices",
    ],
    thingsToDo: [
      {
        title: "Fort Rampart Sunset Walk",
        description: "Stroll the seaside ramparts as local cliff jumpers dive into the breaking ocean waves below.",
      },
      {
        title: "Historical Walking Tour with a Local Guide",
        description: "Uncover secret underground tunnels, colonial coat-of-arms, and Maritime Museum artifacts.",
      },
      {
        title: "Boutique Shopping & Art Galleries",
        description: "Browse curated fashion, handmade linen, Ceylon teas, and antique jewelry in Pedlar Street.",
      },
      {
        title: "Cooking Class & Spice Discovery",
        description: "Learn how to prepare authentic southern fish ambul thiyal and coconut sambal with local home cooks.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "arugam-bay",
    slug: "arugam-bay",
    name: "Arugam Bay",
    tag: "Surf Paradise",
    shortDescription: "A legendary right-hand point break, pristine beaches, and laid-back eastern coast surf culture.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    region: "Eastern Province",
    bestTimeToVisit: "May to October",
    intro:
      "Recognized among the top surf destinations worldwide, Arugam Bay on Sri Lanka's sun-drenched east coast draws wave riders and bohemian travelers. Beyond its world-class point breaks lie untamed national parks where wild elephants roam right along coastal lagoons.",
    whyVisit: [
      "Catch clean right-hand point break waves at Main Point, Whiskey Point, and Peanut Farm",
      "Experience Kumana National Park's rare wildlife and bird sanctuaries",
      "Enjoy beachside yoga, fresh smoothie bowls, and vibrant seaside reggae gatherings",
      "Take a traditional lagoon safari in Kottukal or Urani to see wild crocodiles and peacocks",
    ],
    thingsToDo: [
      {
        title: "Surfing Lessons & Board Rental",
        description: "Whether catching your first green wave or carving Main Point's barreling sections with local surf instructors.",
      },
      {
        title: "Sunset at Elephant Rock",
        description: "Climb the seaside boulders to watch surfers below and look for wild elephants emerging onto the shore.",
      },
      {
        title: "Kumana National Park 4x4 Safari",
        description: "Explore the less crowded sister park of Yala, famous for bird breeding grounds, leopards, and elephants.",
      },
      {
        title: "Eco Lagoon Canoe Safari",
        description: "Glide silently through mangrove channels spotting sea eagles, kingfishers, and sleeping reptiles.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    ],
  },
];
