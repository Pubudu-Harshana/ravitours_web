import { Language } from "./types";

export interface ItemTranslation {
  name?: string;
  title?: string;
  tag?: string;
  description?: string;
  subtitle?: string;
}

export const tourTranslations: Record<
  Language,
  Record<string, ItemTranslation>
> = {
  en: {
    "classic-sri-lanka-heritage": {
      title: "Classic Sri Lanka Heritage",
      tag: "Best Seller",
      description:
        "Explore Sigiriya rock fortress, sacred Kandy temples, colonial Galle Fort, and lush mountain tea estates with private chauffeur guidance.",
    },
    "scenic-hill-country-tea-trails": {
      title: "Scenic Hill Country & Tea Trails",
      tag: "Scenic Route",
      description:
        "Ride the world-renowned blue train through misty tea mountains, trek Little Adam's Peak in Ella, and savor fresh Ceylon tea in Nuwara Eliya.",
    },
    "wildlife-safari-southern-coast": {
      title: "Wildlife Safari & Southern Coast",
      tag: "Nature & Wildlife",
      description:
        "Spot wild leopards & elephants in Yala National Park, relax on Mirissa's palm-fringed golden beaches, and watch blue whales in the deep blue.",
    },
    "grand-island-odyssey": {
      title: "Grand Island Odyssey",
      tag: "Comprehensive",
      description:
        "The ultimate 14-day Sri Lankan holiday covering ancient capitals, misty highland peaks, national safari parks, and tranquil coastal sanctuaries.",
    },
    "cultural-triangle-ancient-wonders": {
      title: "Cultural Triangle & Ancient Wonders",
      tag: "UNESCO Heritage",
      description:
        "Immerse yourself in 2,500 years of civilization across Anuradhapura, Polonnaruwa, Dambulla Cave Temple, and the majestic citadel of Sigiriya.",
    },
    "tropical-beach-escape-whale-watching": {
      title: "Tropical Beach Escape & Whale Watching",
      tag: "Beach & Leisure",
      description:
        "Unwind along Sri Lanka's south coast with oceanfront sunsets, private whale safari cruises, coastal seafood dining, and historic Galle Fort walks.",
    },
  },
  ar: {
    "classic-sri-lanka-heritage": {
      title: "تراث سريلانكا الكلاسيكي",
      tag: "الأكثر طلباً",
      description:
        "استكشف قلعة سيغيريا الصخرية، ومعابد كاندي المقدسة، وحصن غالي التاريخي، ومزارع الشاي الخضراء مع سائق ومرشد خاص.",
    },
    "scenic-hill-country-tea-trails": {
      title: "المرتفعات الخلابة ومسارات الشاي",
      tag: "مسار الطبيعة",
      description:
        "اركب القطار الأزرق الشهير عالمياً وسط جبال الشاي والضباب، وصعود قمة آدم الصغيرة في إيلا، والاستمتاع بأجواء نوارا إيليا الساحرة.",
    },
    "wildlife-safari-southern-coast": {
      title: "سفاري الحياة البرية والساحل الجنوبي",
      tag: "الطبيعة والسفاري",
      description:
        "شاهد النمور البرية والأفيال في حديقة يالا الوطنية، واسترخ على شواطئ ميريسا الذهبية، وشاهد الحيتان الزرقاء العملاقة في المحيط.",
    },
    "grand-island-odyssey": {
      title: "ملحمة الجزيرة الكبرى",
      tag: "جولة شاملة",
      description:
        "عطلة سريلانكية متكاملة لمدة 14 يوماً تغطي العواصم القديمة، وقمم المرتفعات الخضراء، ومحميات السفاري، والشواطئ الهادئة.",
    },
    "cultural-triangle-ancient-wonders": {
      title: "المثلث الثقافي وعجائب التاريخ",
      tag: "تراث اليونسكو",
      description:
        "انغمس في حضارة تمتد لأكثر من 2500 عام عبر أنورادابورا وبولوناروا ومعبد كهف دامبولا وقلعة سيغيريا الشامخة.",
    },
    "tropical-beach-escape-whale-watching": {
      title: "ملاذ الشواطئ الاستوائية ومشاهدة الحيتان",
      tag: "شواطئ واستجمام",
      description:
        "استمتع بغروب الشمس على الساحل الجنوبي، ورحلات مشاهدة الحيتان الخاصة، والمأكولات البحرية الطازجة، وجولات حصن غالي العريق.",
    },
  },
  de: {
    "classic-sri-lanka-heritage": {
      title: "Klassisches Sri Lanka Kulturerbe",
      tag: "Bestseller",
      description:
        "Entdecken Sie die Felsenfestung Sigiriya, die Tempel von Kandy, das historische Galle Fort und saftige Teeplantagen mit privatem Chauffeur.",
    },
    "scenic-hill-country-tea-trails": {
      title: "Malerisches Hochland & Teepfade",
      tag: "Panoramaroute",
      description:
        "Fahren Sie mit dem berühmten blauen Zug durch neblige Teegärten, besteigen Sie Little Adam's Peak in Ella und genießen Sie Ceylon-Tee in Nuwara Eliya.",
    },
    "wildlife-safari-southern-coast": {
      title: "Wildtier-Safari & Südküste",
      tag: "Natur & Safari",
      description:
        "Beobachten Sie Leoparden & Elefanten im Yala-Nationalpark, entspannen Sie an den Stränden von Mirissa und erleben Sie Blauwale im Ozean.",
    },
    "grand-island-odyssey": {
      title: "Große Insel-Odyssee",
      tag: "Komplettreise",
      description:
        "Die ultimative 14-tägige Rundreise: Antike Königsstädte, kühles Hochland, Safariparks und tropische Traumstrände in einem perfekten Urlaub.",
    },
    "cultural-triangle-ancient-wonders": {
      title: "Kulturelles Dreieck & Antike Wunder",
      tag: "UNESCO-Welterbe",
      description:
        "Tauchen Sie ein in 2.500 Jahre Geschichte in Anuradhapura, Polonnaruwa, dem Höhlentempel von Dambulla und dem Löwenfelsen von Sigiriya.",
    },
    "tropical-beach-escape-whale-watching": {
      title: "Tropische Strandauszeit & Walbeobachtung",
      tag: "Strand & Erholung",
      description:
        "Erholen Sie sich an Sri Lankas Südküste mit Sonnenuntergängen am Meer, privater Walbeobachtung, frischen Meeresfrüchten und Galle Fort Spaziergängen.",
    },
  },
  fr: {
    "classic-sri-lanka-heritage": {
      title: "Héritage Classique du Sri Lanka",
      tag: "Best-Seller",
      description:
        "Explorez la forteresse de Sigiriya, les temples de Kandy, le fort colonial de Galle et les plantations de thé avec chauffeur-guide privé.",
    },
    "scenic-hill-country-tea-trails": {
      title: "Hauts Plateaux & Route du Thé",
      tag: "Route Panoramique",
      description:
        "Montez à bord du mythique train bleu à travers les montagnes embrumées, grimpez Little Adam's Peak à Ella et savourez le thé de Ceylan.",
    },
    "wildlife-safari-southern-coast": {
      title: "Safari Faune Sauvage & Côte Sud",
      tag: "Nature & Safari",
      description:
        "Observez léopards et éléphants au parc national de Yala, prélassez-vous sur les plages de Mirissa et observez les baleines bleues au large.",
    },
    "grand-island-odyssey": {
      title: "Grande Odyssée de l'Île",
      tag: "Circuit Complet",
      description:
        "Le voyage ultime de 14 jours : capitales anciennes, montagnes verdoyantes, réserves animalières et plages dorées préservées.",
    },
    "cultural-triangle-ancient-wonders": {
      title: "Triangle Culturel & Merveilles Antiques",
      tag: "Patrimoine UNESCO",
      description:
        "Plongez dans 2 500 ans d'histoire à Anuradhapura, Polonnaruwa, au temple troglodyte de Dambulla et à l'impressionnant rocher de Sigiriya.",
    },
    "tropical-beach-escape-whale-watching": {
      title: "Échappée Plages Tropicales & Baleines",
      tag: "Détente & Plage",
      description:
        "Détendez-vous sur la côte sud entre couchers de soleil féeriques, croisières privées aux baleines et ruelles historiques de Galle.",
    },
  },
};

export const destinationTranslations: Record<
  Language,
  Record<string, ItemTranslation>
> = {
  en: {
    sigiriya: { name: "Sigiriya", tag: "Ancient Rock Fortress" },
    ella: { name: "Ella", tag: "Highland Gap & Train" },
    kandy: { name: "Kandy", tag: "Cultural Capital" },
    "nuwara-eliya": { name: "Nuwara Eliya", tag: "Little England & Tea" },
    mirissa: { name: "Mirissa", tag: "Beaches & Whales" },
    yala: { name: "Yala", tag: "Leopard Safari" },
    galle: { name: "Galle", tag: "Dutch Heritage Fort" },
    "arugam-bay": { name: "Arugam Bay", tag: "World Surfing Bay" },
  },
  ar: {
    sigiriya: { name: "سيغيريا", tag: "قلعة الصخرة القديمة" },
    ella: { name: "إيلا", tag: "ممر الجبال والقطار الأزرق" },
    kandy: { name: "كاندي", tag: "العاصمة الثقافية والتاريخية" },
    "nuwara-eliya": { name: "نوارا إيليا", tag: "إنجلترا الصغرى ومزارع الشاي" },
    mirissa: { name: "ميريسا", tag: "الشواطئ الذهبية والحيتان" },
    yala: { name: "يالا", tag: "سفاري النمور والحياة البرية" },
    galle: { name: "غالي", tag: "حصن التراث الهولندي" },
    "arugam-bay": { name: "خليج أروغام", tag: "جنة ركوب الأمواج العالمية" },
  },
  de: {
    sigiriya: { name: "Sigiriya", tag: "Antike Felsenfestung" },
    ella: { name: "Ella", tag: "Bergpanorama & Eisenbahn" },
    kandy: { name: "Kandy", tag: "Kulturhauptstadt" },
    "nuwara-eliya": { name: "Nuwara Eliya", tag: "Klein-England & Teefelder" },
    mirissa: { name: "Mirissa", tag: "Traumstrände & Wale" },
    yala: { name: "Yala", tag: "Leoparden-Safari" },
    galle: { name: "Galle", tag: "Holländisches Kolonialfort" },
    "arugam-bay": { name: "Arugam Bay", tag: "Weltbekannter Surfspot" },
  },
  fr: {
    sigiriya: { name: "Sigiriya", tag: "Forteresse Royale du Rocher" },
    ella: { name: "Ella", tag: "Montagnes & Train Bleu" },
    kandy: { name: "Kandy", tag: "Capitale Culturelle" },
    "nuwara-eliya": { name: "Nuwara Eliya", tag: "Petite Angleterre & Thé" },
    mirissa: { name: "Mirissa", tag: "Plages & Baleines" },
    yala: { name: "Yala", tag: "Safari aux Léopards" },
    galle: { name: "Galle", tag: "Fort Colonial Hollandais" },
    "arugam-bay": { name: "Arugam Bay", tag: "Paradis Mondial du Surf" },
  },
};
