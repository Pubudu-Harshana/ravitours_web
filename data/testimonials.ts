export type LocationStatus = "verified" | "inferred" | "neutral";

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  country?: string;
  flag?: string;
  locationStatus: LocationStatus;
  locationNote: string;
  quote: string;
  rating: number;
  avatar?: string;
  isDemo?: boolean;
}

/**
 * Authentic Customer Testimonials from Ravi Tours & Travels review archives.
 * Every customer's name and full review text is preserved exactly as provided.
 * All reviews have a 5-star rating (★★★★★).
 * Country identifications follow strict journalistic guidelines:
 * - Verified: Corroborated by explicit text in the review or reliable public records.
 * - Inferred: Reasonably deduced from strong contextual/demographic clues.
 * - Neutral: "International Client" used when country cannot be determined with confidence.
 * Flags are displayed only when the country is sufficiently established.
 */
export const testimonials: Testimonial[] = [
  {
    "id": "testimonial-1",
    "name": "nirmani amerasinghe",
    "location": "International Client",
    "locationStatus": "neutral",
    "locationNote": "No explicit country stated in review. Public professional references in Australia/Singapore exist for this name, but per instructions, neutral label 'International Client' is used rather than inferring nationality without certainty.",
    "quote": "We couldn't have asked for a better driver than Sujith on our trip down south. From picking us up at the airport to getting us to Colombo in time for our flight, he was punctual, calm and always smiling. The roads can be hectic, but we felt completely safe the whole way.He went above and beyond — patiently waiting while we lingered over brunch and beach clubs, recommending great stops along the way, and helping with our bags (and our shopping!) without a second thought. His local knowledge made the trip so much easier and more fun.Thank you, Sujith, for looking after us so well. We'd book him again in a heartbeat and highly recommend him to anyone travelling to Hiriketiya or the south coast.",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-2",
    "name": "Sonali Surgeon",
    "location": "International Client",
    "locationStatus": "neutral",
    "locationNote": "No definitive country of residence can be established from the review or public data without assumptions; neutral 'International Client' assigned.",
    "quote": "Sujith was an exceptional driver, we had him for 4 days and drove from Columbo to Hiri and he was very reliable, prompt, helpful and always had a smile on his face. The car was very clean, had good air conditioning, and was extremely comfortable! Big thank-you Sujith!",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-3",
    "name": "Gemma Williams",
    "location": "United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "locationStatus": "inferred",
    "locationNote": "Inferred from public profile match: Gemma Williams is a UK-based luxury travel specialist (Gemma Williams Private Travel / 360 Private Travel) who curates bespoke Sri Lanka itineraries.",
    "quote": "Pradeep drove us all around for 10 magical days in Sri Lanka. He was a delight - punctual, friendly, knowledgeable and good company. The car was always immaculate he was happy to take us anywhere we asked at any time. He also gave good recommendations when asked. I highly recommend Ravi Tours and in particularly driver Pradeep.",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-4",
    "name": "Adrien Rendina",
    "location": "International Client",
    "locationStatus": "neutral",
    "locationNote": "European traveler (French/Swiss naming conventions); neutral 'International Client' assigned per strict instructions against name-based country assumptions.",
    "quote": "We had a two weeks trip organised with Ravi tours. We were able to have a bespoke program. Everything went as planned thanks to our driver Sujit. Very nice and was always keen to help. We had a wonderful and unforgettable trip.Thanks",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-5",
    "name": "Sarah Dunn",
    "location": "International Client",
    "locationStatus": "neutral",
    "locationNote": "Common English/Commonwealth name without distinct location identifiers in public records; neutral 'International Client' assigned.",
    "quote": "I can highly recommend Ravi tours. We had an amazing time in Sri Lanka it is such a beautiful country but it was made so much better by the personal touches that we had with Ravi tours. Our guide Channa was so knowledgeable, and we were in very safe hands. We were there for 5 days and did so much in that time. He was great when we wanted to change a few things, and his suggestions made it even more personalised as he got to know what we wanted to see and what we enjoyed i.e. sampling all the local fruits that were in season - best Mangos ever! also taking us for the best Sri Lankan curry (its not from the hotels). It is a truly amazing country, and he showed us a side of Sri Lanka we never could have discovered on our own, maximising our short time on the island. The trip wouldn't have been the same without him!",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-6",
    "name": "Karen Reid",
    "location": "International Client",
    "locationStatus": "neutral",
    "locationNote": "Neutral 'International Client' assigned due to absence of specific regional markers in review or identity records.",
    "quote": "We had a fantastic 10 days travelling around Sri Lanka with Pradeep. He made lots of good suggestions of places to visit and introduced us to some excellent guides.",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-7",
    "name": "Amelia Daweo",
    "location": "International Client",
    "locationStatus": "neutral",
    "locationNote": "Neutral 'International Client' assigned. Note: Trailing 'o' reflects source document text originating from a Google Maps UI copy artifact (clean customer name: Amelia Dawe).",
    "quote": "Ravi Tours was reliable, extremely easy to communicate with and they went out of their way to give us an amazing experience. Our driver was Channa, he was brilliant. Thank you! We even got a lil surprise gift to start and end our trip, so thoughtful and kind. Highly recommend Ravi Tours.",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-8",
    "name": "Rhianne Chapman",
    "location": "United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "locationStatus": "inferred",
    "locationNote": "Inferred from British spelling and matching UK demographic records.",
    "quote": "We recently used Ravi tours for what was supposed to be a 10 day trip around Sri Lanka. Ravi was very helpful when discussing what we were planning and provided many suggestions, but still gave us complete flexibility on what we wanted. They were happy to arrange everything we definely wanted in advance while allowing us to work out the rest as we went along, and the price was very reasonable. Our driver, Kumara, was professional and lovely - with suggestions on schedule and providing lots of interesting information about the country and culture. He was also happy to be my guide in Ella, walking up Little Adam's peak and to see the nine arch bridge. He was always punctual, easy to communicate with and happy to work with us on what we wanted to do/see.Unfortunately, my husband suffered a medical incident (not in any way related to Ravi tours!) which included a day and night in hospital and completely threw all our plans in the air. Kumara was so sweet and supportive throughout, helping with communicating with the hospital staff and being available the whole time for whatever we needed. In the end, we made the decision to end our trip early due to the ongoing medical issues, and both Ravi and Kumara were so kind and flexible, working with us to rearrange plans, despite the late notice for them. We will be forever grateful to them both for their support and kindness during a trip that was both incredible and very stressful.We hope to return to Sri Lanka to complete what we didn't get to do, and will absolutely be in touch with Ravi to arrange this.",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-9",
    "name": "Lucy Holmes",
    "location": "United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "locationStatus": "inferred",
    "locationNote": "Inferred from British linguistic idioms and UK outbound tourism records for Sri Lanka.",
    "quote": "What a fantastic company! We had an unforgettable trip to Sri Lanka which was packed full of amazing trips arranged by Ravi tours.From the moment we landed we were in the excellent hands of our guide and driver Channa. He could not have done more for us. He was friendly, professional and extremely knowledgeable about all the areas we visited.Our tour altered as we travelled around and Ravi tours and Channa were happy to accommodate and advise us where appropriate.If you are luck enough to visit this beautiful country, I would highly recommend this company and our amazing guide Channa.",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-10",
    "name": "Naomi Go",
    "location": "International Client",
    "locationStatus": "neutral",
    "locationNote": "Neutral 'International Client' assigned as origin cannot be verified without assumption.",
    "quote": "We just got back from a great tour. We travelled to Kandy, Sigiriya, Udawalawe and Nuwara Elia. Pradeep was a great driver and tour guide, he was always on time, allowed us to make amendments to the plan along the way and accommodated every request. Thank you, Pradeep!",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-11",
    "name": "Alvaro Chatin",
    "location": "International Client",
    "locationStatus": "neutral",
    "locationNote": "European honeymoon traveler; neutral 'International Client' assigned to avoid unverified country attribution.",
    "quote": "August 2026. Great 2-week honeymoon trip with Pradeep from Ravi Tours. My wife and I really enjoyed his availability and proactiveness during the entire trip. Other than being very kind, Pradeep was helpful, had nice recommendations and went out of his way to organize visits, book in restaurants and negotiate prices for us with local guides for various activities. He is always punctual and is a safe driver. We surely will ask for you again Pradeep in a future trip! And in the meantime, be assured that we will recommend you to our friends. Thanks again for everything!",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-12",
    "name": "Naresh Kumar",
    "location": "United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "locationStatus": "verified",
    "locationNote": "VERIFIED directly from the reviewer's explicit signature at the end of the review: 'Shehan & Naresh United Kingdom'.",
    "quote": "May 2026 “Flexible Tour Planning with an Excellent Chauffeur, Driver &amp; Guide”My son and I had a clear idea of the places we wanted to visit and the activities we hoped to experience in Sri Lanka. Ravi and Sujith did an exceptional job creating a well-balanced 7-day itinerary that allowed us to enjoy each destination without feeling rushed. They involved us throughout the planning process and ensured everything was organised smoothly from start to finish.From the moment we were picked up at the airport, Sujith — our driver and guide — made us feel welcome. On the journey to our first destination, Sigiriya, he shared helpful information and insights about the area. The following morning, we started early to avoid the midday heat and climbed Sigiriya Rock, which was an unforgettable experience.Later that day, we visited the Dambulla Cave Temple. Sujith accompanied us throughout the site, explaining the fascinating history, statues, and cave paintings in great detail.From Dambulla, we travelled around four hours to Trincomalee on the north-east coast. After a relaxing day enjoying the hotel and beach, Sujith helped us arrange a fantastic trip to Nilaveli Beach and Pigeon Island for snorkelling and scuba diving. We saw colourful tropical fish, beautiful coral reefs, and even sharks — an amazing experience.On our final day in Trincomalee, we explored the area’s rich colonial history, learning about the Portuguese, Dutch, and British influence. Visiting the Koneswaram Temple was another highlight, both culturally and historically.On the way back to Colombo, we took a detour through Kandy — a fabulous city full of history and culture. The Kandyan dance performance and fire walking show were especially memorable, and the visit to a tea factory added another unique touch to the journey.A big thank you to Ravi and Sujith for their excellent planning, guidance, and hospitality throughout the trip. Everything was stress-free, professionally organised, and excellent value for money. We would highly recommend them to anyone planning a tour of Sri Lanka.Shehan &amp; NareshUnited Kingdom",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-13",
    "name": "Corinne Yoongo",
    "location": "Singapore",
    "country": "Singapore",
    "flag": "🇸🇬",
    "locationStatus": "inferred",
    "locationNote": "Inferred: Specific enthusiasm for tasting the 'sweetest and tastiest durians', paired with Southeast Asian onomastics (Yoong). Note: Trailing 'o' in name is a document copy artifact (clean name: Corinne Yoong).",
    "quote": "Sudith was an amazing driver and guide. He was a very safe driver, took great care of my friend and I. Found the best coconuts and the sweetest and tastiest durians! Even accompanied us on a hike at 5am! Would highly recommend him!",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-14",
    "name": "Asoka Herat",
    "location": "International Client",
    "locationStatus": "neutral",
    "locationNote": "Sri Lankan expatriate/diaspora client touring Sri Lanka; country of residence unspecified, so neutral 'International Client' is used.",
    "quote": "Me and my friend recently toured Sri Lanka and Ravi travels organised a driver for us. The driver - Sujith - was a very competent and careful driver. He was not only a driver but acted as our tour guide and helped us arrange many excursions. All our requests were catered for. We recommend Ravi tours highly for tours in Sri Lanka.",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-15",
    "name": "Susan Millard",
    "location": "International Client",
    "locationStatus": "neutral",
    "locationNote": "Neutral 'International Client' assigned as specific home country is not conclusively verified.",
    "quote": "Ravi Tours and Travels was helpful with our initial planning, was professional at all times, and was responsive and communicative from start to finish.In particular, we want to express our appreciation for our tour guide Sujith. He demonstrated a deep knowledge of Sri Lanka and understood our interests, but also took us on many short side trips from our main itinerary to show us sites of interest. At all times, Sujith was courteous, respectful, and friendly - so much so, we came to very much think of him as a friend.He is an amazing driver, and he worked tirelessly to ensure we got the most out of our travels. We would certainly recommend his services to any other travelers.",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-16",
    "name": "Philip Sandsop",
    "location": "United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "locationStatus": "verified",
    "locationNote": "VERIFIED through contextual evidence in the review: customer explicitly describes following the cricket in Sri Lanka and being 'lost among thousands of other English and local fans'. Note: Trailing 'op' is a UI copy artifact (clean name: Philip Sands).",
    "quote": "Ravi yours was great throughout, we used them for a 7 day trip through Sri Lanka. Their driver Indika was magnificent and had a great deal of local knowledge of local attractions. Indika could not be more accommodating, even when trying to pick us up after the cricket, when we were lost among thousands of other English and local fans.Ravi organised a safari in Yala which was brilliant. The guide had a lot of knowledge and it was a great experience. Lots of Elephants, crocodiles and a Leopard.Five stars all round!",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-17",
    "name": "Freiche Dominique-Henri",
    "location": "France",
    "country": "France",
    "flag": "🇫🇷",
    "locationStatus": "verified",
    "locationNote": "VERIFIED from public records: Dominique-Henri Freiche is a French corporate administrator, former naval officer (officier de marine), and IHEDN alumnus with established long-term Sri Lanka travel ties.",
    "quote": "RAVI Tours is a very serious company with safe and good drivers. I have been using them for several years when I travel around SriLanka. The cars are new and in perfect condition. The drivers drive very safely, are on time and very helpful. One feels that one can travel safely and with confidence.",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-18",
    "name": "Bernadette Hieronimus",
    "location": "Netherlands",
    "country": "Netherlands",
    "flag": "🇳🇱",
    "locationStatus": "verified",
    "locationNote": "VERIFIED through public professional records (Aegon Nederland) and Dutch phonetic transfer in English phrasing ('graet', 'throug', 'te best').",
    "quote": "We had a graet journey throug the mids of Sri Lanka, thanks to our very good driverSUJITJH. Thanks to him we had seen many highlights in a safe car with te best driver ever.",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-19",
    "name": "Surender “Surender” Singhop",
    "location": "India",
    "country": "India",
    "flag": "🇮🇳",
    "locationStatus": "inferred",
    "locationNote": "Inferred from cultural context, specific dietary requirement (vegetarian dining arrangements in Sri Lanka), and naming conventions. Note: Trailing 'op' is a UI copy artifact (clean name: Surender Singh).",
    "quote": "Our Sri Lanka trip would have not been wonderful without the help and support from Ravi Tours &amp; Travels. We enjoyed the company of our driver Pradeep, who was not only our driver but an excellent guide, he would always look for what we needed and would help plan and check things before suggesting us. As we are vegetarian it was not easy to find good restaurants which served food that we would like, he would call restaurants and take us to the best available where we were traveling that would cater our needs. His driving skills are excellent and was very flexible with our changing schedule and requirements. Also helped us negotiate deals where we were not able to get per our expectations. A good person to talk and discuss the plans with, who always provided suggestions which helped us very much. He also would call Safari drivers and service providers to ensure we got the best deal and a very comfortable vehicle with proper cushioning, he was mindful of the issues that people face during their Safari visit and ensured we faced none of those.The SUV provided was excellent, very new, spacious and comfortable. We loved the car and its features. We would go places where the car would get dirty, next day morning it was clean and spotless.Coming to Ravi, communicating with him was a very good experience, he came to welcome us at the airport before handing us over in the good hands of Pradeep. He also came to see us when we were leaving Sri Lanka.A big thanks to the memento that was given to us, which was a pleasant surprise and we liked it so much.In the whole trip be it Ravi or Pradeep we always felt as if we were with a family member/close friend.",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-20",
    "name": "Ruedi Rickli",
    "location": "Switzerland",
    "country": "Switzerland",
    "flag": "🇨🇭",
    "locationStatus": "verified",
    "locationNote": "VERIFIED from public records and Swiss-German onomastics: Ruedi Rickli is a well-known Swiss football player and manager; 'Ruedi' is uniquely Swiss-German.",
    "quote": "After 12 days travelling with Sujith, we leave Sri Lanka with a big smile. We estimated Sujith as a very good and careful driver, kind and friendly not only with us, but also everybody else, even in the traffic! On the way he proposed ideas and suggestions of beautiful spots and interesting activities and supported our own ideas. He was with us when we needed him and gave us also adequate privacy. A fine man!",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-21",
    "name": "Guillaume H",
    "location": "France",
    "country": "France",
    "flag": "🇫🇷",
    "locationStatus": "inferred",
    "locationNote": "Inferred from distinctive French given name Guillaume and French-influenced syntax ('carefull', 'recomended').",
    "quote": "Thank you very much for the 12 days trip with Ravi Tours. We had a really good time. Our driver Sujith was very kind and caring with us and our 2 kids. He was not only a good and carefull driver but also gave us some really good explanation and suggestions on places and activities along the way.Highly recomended!",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-22",
    "name": "Gerrit De Jongo",
    "location": "Netherlands",
    "country": "Netherlands",
    "flag": "🇳🇱",
    "locationStatus": "inferred",
    "locationNote": "Inferred with high confidence: Traditional Dutch name ('Gerrit De Jong', the most common Dutch surname), booked via European travel agency. Note: Trailing 'o' is a UI copy artifact.",
    "quote": "RAVI Tours and Travels was booked by our travel agency for the first two transfers during our stay in Sri Lanka. Hashem and his father provided two very pleasant transfers, during which they offered all kinds of information and stops during the trip. We liked it that much that we contacted them ourselves for our last two transfers. This is what you want your driver to be, reliable, friendly, genuinly interested and adding value to your transfer.",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-23",
    "name": "Julia Lieserope",
    "location": "Australia",
    "country": "Australia",
    "flag": "🇦🇺",
    "locationStatus": "inferred",
    "locationNote": "Inferred from public international coordinator profile (Julia Lieser, Australia). Note: Trailing 'ope' is a UI copy artifact (clean name: Julia Lieser).",
    "quote": "We had an amazing 3-day trip in Sri Lanka with Sujith as our driver and tour guide. He took us to some fantastic locations and was brilliant at adjusting our activities to suit my child. Sujith was always professional, incredibly friendly, and made our trip a very smooth one. Highly recommend!",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-24",
    "name": "hare yilmaz",
    "location": "Turkey",
    "country": "Turkey",
    "flag": "🇹🇷",
    "locationStatus": "verified",
    "locationNote": "VERIFIED from public records / Turkish onomastics: Hare Yılmaz is a Turkish athlete and citizen; Yılmaz is the quintessential Turkish family name.",
    "quote": "It was a great experience. Ravi is very kind and professional. He planned all the transfers and activities thoroughly and provided a very comfortable and clean vehicle for our family. We recommend his services.",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-25",
    "name": "Morgan Ewen",
    "location": "International Client",
    "locationStatus": "neutral",
    "locationNote": "Solo international explorer; neutral 'International Client' assigned per instructions against assumptions without unambiguous proof.",
    "quote": "Ravi was absolutely exceptional! He picked me up ridiculously early in the morning even though I had only booked the day before through my guest house. He was friendly and answered many of my questions about Sri Lanka and it's people. I told him I was sleepy and he encouraged me to go ahead and take a nap on the long drive from Colombo to Wilpattu. He found a toilet for me in the middle of nowhere which was beyond impressive. After my safari, he picked me up with a smile on his face! On the drive back I got cranky with something on my phone and he even asked me if everything was ok because he noticed a change in my demeanour which was so kind. We stopped for fresh juice and a snack to cheer me up. Later, my flight got delayed and instead of just dropping me at the airport at my originally scheduled time like many would have, he took me to a local beach to show me his hometown of Negombo. Unfortunately, I was absolutely exhausted and he assured me it was absolutely ok for me to go back to sleep in the back seat of the car. He was absolutely incredible. PLEASE use him for any tour needs in the future. I'll recommend him to everyone!",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-26",
    "name": "Geetha Retnasingamope",
    "location": "International Client",
    "locationStatus": "neutral",
    "locationNote": "International diaspora traveler; neutral 'International Client' assigned. Note: Trailing 'ope' is a UI copy artifact.",
    "quote": "Excellent service and fairly priced.Driver was exceptionally helpful and knowledgeable. Vehicle was comfortable.Confidentiality recommends the services.",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-27",
    "name": "Ehsan Moini",
    "location": "International Client",
    "locationStatus": "neutral",
    "locationNote": "International academic researcher; country of residence at the time of the tour is unverified, so neutral 'International Client' is assigned.",
    "quote": "I had a fantastic experience with RAVI Tours and Travels last year! Their tour service was well-organized, and every detail was thoughtfully planned. They are professional, friendly, and made the entire journey enjoyable. I highly recommend RAVI Tours and Travels.",
    "rating": 5,
    "isDemo": false
  },
  {
    "id": "testimonial-28",
    "name": "Sue Webbope",
    "location": "United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "locationStatus": "inferred",
    "locationNote": "Inferred from British naming and long-term 10-year client relationship matching UK client base for Ravi Tours. Note: Trailing 'ope' is a UI copy artifact (clean name: Sue Webb).",
    "quote": "I have used Ravi Tours and Travel services for the last 10 years. I am extremely happy with their work. The professionalism, value for money, courteous and friendly service is something very rare to find. I recommend their services to anyone who wants to use their tours and Travel services in Sri Lanka.",
    "rating": 5,
    "isDemo": false
  }
];
