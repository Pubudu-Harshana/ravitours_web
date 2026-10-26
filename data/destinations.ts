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
    image: "/images/destinations/sigiriya.jpg",
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
      "/images/destinations/sigiriya-lion-paws.jpg",
      "/images/destinations/sigiriya-water-gardens.jpg",
      "/images/destinations/sigiriya-pidurangala-view.jpg",
    ],
  },
  {
    id: "ella",
    slug: "ella",
    name: "Ella",
    tag: "Scenic Mountains",
    shortDescription: "A mountain paradise surrounded by mist-shrouded peaks, waterfalls, and tea-covered slopes.",
    image: "/images/destinations/ella.jpg",
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
      "/images/destinations/ella-nine-arch-bridge.jpg",
      "/images/destinations/ella-little-adams-peak.jpg",
      "/images/destinations/ella-ravana-falls.jpg",
    ],
  },
  {
    id: "kandy",
    slug: "kandy",
    name: "Kandy",
    tag: "Sacred City",
    shortDescription: "The cultural heart of Sri Lanka, home to the sacred Temple of the Tooth and tranquil lake.",
    image: "/images/destinations/kandy.jpg",
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
      "/images/destinations/kandy-temple-of-tooth.jpg",
      "/images/destinations/kandy-peradeniya-gardens.jpg",
      "/images/destinations/kandy-bahirawakanda-buddha.jpg",
    ],
  },
  {
    id: "nuwara-eliya",
    slug: "nuwara-eliya",
    name: "Nuwara Eliya",
    tag: "Tea Country",
    shortDescription: "Little England set amidst misty high-altitude tea gardens, cool breezes, and colonial bungalows.",
    image: "/images/destinations/nuwara-eliya.jpg",
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
      "/images/destinations/nuwara-eliya-post-office.jpg",
      "/images/destinations/nuwara-eliya-gregory-lake.jpg",
      "/images/destinations/nuwara-eliya-tea-estate.jpg",
    ],
  },
  {
    id: "mirissa",
    slug: "mirissa",
    name: "Mirissa",
    tag: "Golden Beaches",
    shortDescription: "A crescent-shaped tropical bay celebrated for blue whale watching and laid-back sunsets.",
    image: "/images/destinations/mirissa.jpg",
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
      "/images/destinations/mirissa-coconut-tree-hill.jpg",
      "/images/destinations/mirissa-whale-watching.jpg",
      "/images/destinations/mirissa-beach.jpg",
    ],
  },
  {
    id: "yala",
    slug: "yala",
    name: "Yala",
    tag: "Wildlife Safari",
    shortDescription: "Sri Lanka's premier national park boasting one of the world's highest densities of wild leopards.",
    image: "/images/destinations/yala.jpg",
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
      "/images/destinations/yala-leopard.jpg",
      "/images/destinations/yala-leopard-male.jpg",
      "/images/destinations/yala-elephants.jpg",
    ],
  },
  {
    id: "galle",
    slug: "galle",
    name: "Galle",
    tag: "Colonial Charm",
    shortDescription: "A UNESCO-listed Dutch coastal fortress filled with cobblestone streets, boutiques, and ocean bastions.",
    image: "/images/destinations/galle.jpg",
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
      "/images/destinations/galle-lighthouse.jpg",
      "/images/destinations/galle-fort-street.jpg",
      "/images/destinations/galle-fort-ramparts.jpg",
    ],
  },
  {
    id: "arugam-bay",
    slug: "arugam-bay",
    name: "Arugam Bay",
    tag: "Surf Paradise",
    shortDescription: "A legendary right-hand point break, pristine beaches, and laid-back eastern coast surf culture.",
    image: "/images/destinations/arugam-bay.jpg",
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
      "/images/destinations/arugam-bay-whiskey-point.jpg",
      "/images/destinations/arugam-bay-beach.jpg",
      "/images/destinations/arugam-bay-sunset.jpg",
    ],
  },
  {
    id: "colombo",
    slug: "colombo",
    name: "Colombo",
    tag: "Oceanfront Capital",
    shortDescription: "Sri Lanka's vibrant commercial capital blending colonial heritage, modern skyscrapers, and sunset street food.",
    image: "/images/destinations/colombo.jpg",
    featured: true,
    region: "Western Province",
    bestTimeToVisit: "November to April",
    intro:
      "A dynamic coastal metropolis where century-old Dutch and British architecture sits beside shimmering modern towers like the Lotus Tower. Colombo offers world-class dining, bustling street markets in Pettah, and sea breezes along Galle Face Green.",
    whyVisit: [
      "Stroll the Galle Face Green promenade at sunset with local street food",
      "Admire the iconic Colombo Lotus Tower illuminated above Beira Lake",
      "Explore the bustling sensory alleys of Pettah Bazaar and Red Mosque",
      "Visit Gangaramaya Temple with its tranquil lake pavilion Seema Malaka",
    ],
    thingsToDo: [
      {
        title: "Sunset Walk along Galle Face Green",
        description: "Join locals and travelers eating crispy isso wade (prawn cakes) while the sun sinks into the Indian Ocean.",
      },
      {
        title: "Gangaramaya Temple & Seema Malaka",
        description: "Discover an eclectic collection of sacred Buddhist artifacts and Geoffrey Bawa's floating temple on Beira Lake.",
      },
      {
        title: "Pettah Market & Jami Ul-Alfar (Red Mosque)",
        description: "Photograph the candy-striped architectural gem and browse spice and textile stalls.",
      },
      {
        title: "Colonial Dutch Hospital Precinct",
        description: "Dine at renowned seafood restaurants and boutique cafes housed in restored 17th-century brick arcades.",
      },
    ],
    gallery: [
      "/images/destinations/colombo.jpg",
    ],
  },
  {
    id: "dambulla",
    slug: "dambulla",
    name: "Dambulla",
    tag: "Golden Cave Temple",
    shortDescription: "A UNESCO World Heritage complex of ancient rock-cut cave temples filled with 150+ Buddha statues and murals.",
    image: "/images/destinations/dambulla.jpg",
    featured: true,
    region: "Central Province / Cultural Triangle",
    bestTimeToVisit: "December to April",
    intro:
      "Perched on a mammoth granite outcrop, Dambulla is South Asia's best-preserved cave temple complex. For over 22 centuries, monks and Sinhalese kings sanctified these five dramatic caverns, adorning them with over 2,000 square meters of painted Buddhist murals and exquisite golden statues.",
    whyVisit: [
      "Marvel at South Asia's largest and best-preserved rock-cut temple sanctuaries",
      "Witness over 150 gilded Buddha statues dating from the 1st century BC",
      "Admire ceiling murals narrating the life of Buddha and ancient Sinhalese history",
      "Enjoy panoramic views across the Cultural Triangle including Sigiriya Lion Rock",
    ],
    thingsToDo: [
      {
        title: "Explore the Five Royal Rock Caves",
        description: "Walk barefoot through cool granite floors admiring the 14-meter reclining Buddha carved directly into living stone.",
      },
      {
        title: "Visit Golden Temple & Museum",
        description: "Admire the giant 30-meter golden statue of Buddha seated majestically atop the entrance pavilion.",
      },
      {
        title: "Dambulla Dedicated Economic Center",
        description: "Experience Sri Lanka's largest wholesale vegetable distribution hub alive with farmers and colorful fresh produce.",
      },
      {
        title: "Popham's Arboretum Nature Walk",
        description: "Spot slender lorises and rare dry-zone birds in Sri Lanka's only protected dry-zone arboretum.",
      },
    ],
    gallery: [
      "/images/destinations/dambulla.jpg",
    ],
  },
  {
    id: "negombo",
    slug: "negombo",
    name: "Negombo",
    tag: "Coastal Lagoon",
    shortDescription: "A charming coastal gateway famous for golden beaches, traditional outrigger boats, and fresh lagoon seafood.",
    image: "/images/destinations/negombo.jpg",
    featured: false,
    region: "Western Province",
    bestTimeToVisit: "December to April",
    intro:
      "Located just 15 minutes from Bandaranaike International Airport (CMB), Negombo is the ideal first or final stop on your Sri Lanka adventure. Known affectionately as 'Little Rome' for its grand Catholic churches, it boasts a vibrant lagoon fishing heritage and relaxing beach resorts.",
    whyVisit: [
      "Convenient 15-minute private chauffeur transfer from CMB Airport",
      "Watch traditional oruwa outrigger sailing boats return with the day's catch",
      "Browse the bustling Lellama open-air coastal fish market",
      "Boat safari along the Dutch Canal and Muthurajawela mangrove wetlands",
    ],
    thingsToDo: [
      {
        title: "Muthurajawela Mangrove Boat Safari",
        description: "Cruise coastal wetlands to spot water monitor lizards, kingfishers, and migratory herons.",
      },
      {
        title: "Negombo Lagoon & Fish Market (Lellama)",
        description: "Witness fishermen drying silver fish on expansive seaside mats and auctioning fresh tuna and prawns.",
      },
      {
        title: "St. Mary's Church & Dutch Fort Ruins",
        description: "Admire neoclassical colonial architecture and ceiling paintings in historic church sanctuaries.",
      },
      {
        title: "Beachside Seafood Dining at Sunset",
        description: "Savor grilled lagoon jumbo prawns and deviled calamari with your feet in the sand.",
      },
    ],
    gallery: [
      "/images/destinations/negombo.jpg",
    ],
  },
  {
    id: "hikkaduwa",
    slug: "hikkaduwa",
    name: "Hikkaduwa",
    tag: "Coral Reef & Surf",
    shortDescription: "A lively southern coast beach town renowned for coral reef marine sanctuaries, surf breaks, and giant sea turtles.",
    image: "/images/destinations/hikkaduwa.jpg",
    featured: false,
    region: "Southern Coast",
    bestTimeToVisit: "November to April",
    intro:
      "Hikkaduwa is where Sri Lanka's surf and beach culture first gained international fame in the 1970s. Famous for its shallow coral reef national park where wild green sea turtles swim right up to the shore, it combines energetic water sports with relaxed beachfront cafes.",
    whyVisit: [
      "Feed and swim alongside gentle wild green sea turtles in knee-deep waters",
      "Snorkel the Hikkaduwa Coral Sanctuary teeming with multi-colored tropical fish",
      "Surf consistent reef and beach breaks suitable for beginners to pros",
      "Visit sea turtle conservation hatcheries in nearby Kosgoda and Pereliya",
    ],
    thingsToDo: [
      {
        title: "Swim with Wild Sea Turtles",
        description: "Stand along the coral shallows in the morning as gentle, protected green turtles swim up to feed on seaweed.",
      },
      {
        title: "Glass-Bottom Boat & Coral Snorkeling",
        description: "Float over the shallow marine national park admiring brain corals, angel fish, and sea anemones.",
      },
      {
        title: "Surfing at Bennys & Main Reef",
        description: "Rent surfboards or take private lessons from licensed local instructors on golden wave-lapped shores.",
      },
      {
        title: "Sunset Beach Lounging & Seafood",
        description: "Enjoy chilled king coconuts or cocktails with fresh grilled fish as the sun sets over the ocean.",
      },
    ],
    gallery: [
      "/images/destinations/hikkaduwa.jpg",
    ],
  },
  {
    id: "udawalawe",
    slug: "udawalawe",
    name: "Udawalawe",
    tag: "Elephant Sanctuary",
    shortDescription: "Sri Lanka's premier elephant park, home to hundreds of free-roaming wild Asian elephants and the Elephant Transit Home.",
    image: "/images/destinations/udawalawe.jpg",
    featured: true,
    region: "Sabaragamuwa / Southern Province",
    bestTimeToVisit: "Year-round (Best: October to April)",
    intro:
      "Surrounding the vast Udawalawe reservoir with misty mountain peaks rising in the background, this national park offers virtually guaranteed sightings of wild elephant herds in open grasslands reminiscent of East African savannahs.",
    whyVisit: [
      "Nearly 100% guaranteed year-round sightings of wild elephant herds and playful calves",
      "Visit the famous Elephant Transit Home (ETH) milk-feeding rehabilitation program",
      "Open-canopy 4x4 safari through scenic savannah landscapes and reservoir shores",
      "Spot water buffaloes, spotted deer, mugger crocodiles, and white-bellied sea eagles",
    ],
    thingsToDo: [
      {
        title: "4x4 Open-Top Elephant Safari",
        description: "Roam open grasslands and reservoir banks watching large family herds bathing and feeding in the wild.",
      },
      {
        title: "Elephant Transit Home (ETH) Feeding Time",
        description: "Watch orphaned baby elephants rush out playfully for their scheduled milk-formula feeding from a respectful viewing platform.",
      },
      {
        title: "Udawalawe Reservoir Dam Walk",
        description: "Take in expansive panoramic vistas of the reservoir framed against the backdrop of the central highlands.",
      },
      {
        title: "Bird Watching across Wetland Marshes",
        description: "Spot over 180 bird species including crested serpent eagles, painted storks, and kingfishers.",
      },
    ],
    gallery: [
      "/images/destinations/udawalawe.jpg",
    ],
  },
  {
    id: "haputale",
    slug: "haputale",
    name: "Haputale",
    tag: "Misty Tea Ridges",
    shortDescription: "A breathtaking highland town perched on a southern mountain ridge, celebrated for Lipton's Seat and endless emerald tea estates.",
    image: "/images/destinations/haputale.jpg",
    featured: true,
    region: "Uva Province / Central Highlands",
    bestTimeToVisit: "November to May",
    intro:
      "Perched on the southern edge of the central highlands, Haputale commands some of Sri Lanka's most exhilarating panoramic views. On clear mornings, you can gaze from high cliff-edge tea plantations across rolling plains all the way to the southern coastline.",
    whyVisit: [
      "Stand at Lipton's Seat where Sir Thomas Lipton surveyed his vast tea empire",
      "Witness misty sunrises over terraced tea gardens and deep mountain gorges",
      "Visit the historic Dambatenne Tea Factory, built in 1890",
      "Hike to Bambarakanda and Diyaluma Falls, Sri Lanka's highest cascades",
    ],
    thingsToDo: [
      {
        title: "Dawn Trek to Lipton's Seat",
        description: "Take an early morning scenic tuk-tuk or guided hike through tea estates to catch dawn mist parting over five southern provinces.",
      },
      {
        title: "Tour Dambatenne Historic Tea Factory",
        description: "Learn traditional black tea processing in the historic factory established by Sir Thomas Lipton himself.",
      },
      {
        title: "Excursion to Diyaluma Falls",
        description: "Hike to the upper pools of Diyaluma Falls for natural infinity pool swimming with dramatic drop-off views.",
      },
      {
        title: "Stroll Through Idalgashinna Ridge",
        description: "Walk the narrow railway ridge between mountain valleys shrouded in rolling mist.",
      },
    ],
    gallery: [
      "/images/destinations/haputale.jpg",
    ],
  },
  {
    id: "knuckles",
    slug: "knuckles",
    name: "Knuckles",
    tag: "UNESCO Cloud Forest",
    shortDescription: "A pristine UNESCO World Heritage mountain range featuring rugged peaks, hidden waterfalls, and wilderness trekking.",
    image: "/images/destinations/knuckles.jpg",
    featured: true,
    region: "Central Province / Matale & Kandy",
    bestTimeToVisit: "June to September & December to March",
    intro:
      "Named after its resemblance to the folded knuckles of a clenched fist, the Knuckles Conservation Forest is a biodiversity hotspot and hiker's dream. Clothed in cloud forests, cascading streams, and secluded highland hamlets, it represents Sri Lanka's wildest mountain escape.",
    whyVisit: [
      "Trek through UNESCO World Heritage cloud forests and pygmy montane trees",
      "Encounter rare endemic flora, reptiles, orchids, and colorful highland birds",
      "Swim in crystal-clear natural rock pools fed by mountain jungle waterfalls",
      "Experience timeless rural traditions in isolated village settlements like Meemure",
    ],
    thingsToDo: [
      {
        title: "Guided Wilderness Peak Trekking",
        description: "Embark on full-day guided hikes across high-altitude grassy plateaus and misty mountain ridges.",
      },
      {
        title: "Hidden Waterfall Chasing",
        description: "Discover secluded cascades like Sera Ella, Jodu Ella, and secluded plunge pools surrounded by pristine jungle.",
      },
      {
        title: "Explore Historic Meemure Village",
        description: "Journey to one of Sri Lanka's most isolated villages preserved in the shadow of Lakegala rock.",
      },
      {
        title: "High-Altitude Bird Watching",
        description: "Spot endemic mountain species such as the yellow-eared bulbul, Sri Lanka whistling thrush, and mountain hawk-eagle.",
      },
    ],
    gallery: [
      "/images/destinations/knuckles.jpg",
    ],
  },
  {
    id: "jaffna",
    slug: "jaffna",
    name: "Jaffna",
    tag: "Northern Cultural Heritage",
    shortDescription: "The vibrant cultural capital of the north, renowned for golden Hindu kovils, Dutch colonial fortifications, and palmyra-lined islands.",
    image: "/images/destinations/jaffna.jpg",
    featured: true,
    region: "Northern Province",
    bestTimeToVisit: "December to April",
    intro:
      "Distinctive in culture, cuisine, and history, Jaffna in the far north offers an authentic experience unlike anywhere else in Sri Lanka. From the towering golden gopuram of Nallur Kandaswamy Kovil to centuries-old coastal fortresses and island ferry journeys, the northern peninsula is rich in soul and hospitality.",
    whyVisit: [
      "Witness grand evening pujas at the magnificent Nallur Kandaswamy Kovil",
      "Explore the vast 17th-century star-shaped Jaffna Dutch Fort overlooking the lagoon",
      "Savor authentic Jaffna crab curry, fiery sambols, and sweet Rio Ice Cream",
      "Ferry across to Delft Island to see wild horses, baobab trees, and coral stone walls",
    ],
    thingsToDo: [
      {
        title: "Visit Nallur Kandaswamy Kovil",
        description: "Experience the sacred bells, vibrant devotion, and intricate Dravidian architecture of Sri Lanka's most revered Hindu temple.",
      },
      {
        title: "Walk the Ramparts of Jaffna Fort",
        description: "Stroll along the historic moats and limestone ramparts with sweeping views across Jaffna Lagoon.",
      },
      {
        title: "Day Trip to Delft Island (Neduntheevu)",
        description: "Take the morning naval ferry to explore wild descendants of Dutch ponies, coral houses, and giant baobab trees.",
      },
      {
        title: "Culinary Walking Tour",
        description: "Taste traditional northern delicacies, fresh palmyra fruit, Jaffna spiced curries, and tropical market treats.",
      },
    ],
    gallery: [
      "/images/destinations/jaffna.jpg",
    ],
  },
];
