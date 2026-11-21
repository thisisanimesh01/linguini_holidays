// tours_data.js - Complete tour data parsed directly from Linguini Holidays PDF itineraries
const toursData = [
  {
    id: "spiti-winter-circuit",
    code: "SP01",
    name: "Winter Spiti Circuit Expedition",
    destination: "Spiti Valley",
    category: "Himachal & Spiti",
    tag: "Trending Winter Expedition",
    badge: "LIMITED PERIOD OFFER",
    duration: "6 Nights / 7 Days",
    rating: 4.9,
    reviewsCount: 142,
    originalPrice: 28999,
    discountedPrice: 24999,
    discount: "SAVE ₹4,000",
    image: "images/spiti.jpg?v=2",
    pickupDrop: "Delhi to Delhi (ISBT KASHMERE GATE)",
    stay: "Narkanda (1N), Sangla/Rakcham (1N), Nako (1N), Kaza/Rangrik (2N), Kalpa (1N)",
    meals: "12 Meals (6 Breakfasts + 6 Dinners)",
    transport: "AC Semi-Sleeper Volvo (Delhi-Shimla) + Dedicated Tempo Traveller / SUV in Spiti",
    overview: "Embark on an unforgettable winter expedition through the high-altitude desert of Spiti Valley. Witness snow-covered Himalayan landscapes, explore ancient monasteries, visit the world's highest post office at Hikkim, discover the remote village of Chitkul near the Indo-Tibetan border, and experience frozen waterfalls and the breathtaking landscapes of Kinnaur.",
    highlights: [
      "Chitkul – Explore the last inhabited village of the picturesque Baspa Valley, near the Indo-Tibetan border",
      "Frozen Nako Lake – Experience the winter charm of Nako's beautiful frozen lake, surrounded by snow-covered Himalayan landscapes",
      "Ancient Tabo Monastery – Discover the 1,000+ year-old monastery, famously known as the \"Ajanta of the Himalayas\"",
      "Dhankar Monastery – Visit the spectacular cliffside monastery overlooking the confluence of the Spiti and Pin Rivers",
      "Gue Village – Witness the naturally preserved, approximately 500-year-old monk mummy",
      "Key Monastery – Explore the iconic 1,000-year-old monastery overlooking the breathtaking Spiti Valley",
      "Komic, Hikkim & Langza – Discover some of Spiti's highest villages, visit the world's highest post office and explore the famous Fossil Village with its giant Buddha statue",
      "Chicham Bridge & Kalpa – Experience the spectacular Himalayan landscapes and enjoy breathtaking views of the sacred Kinner Kailash Range"
    ],
    itinerary: [
      {
        day: "Day 0",
        title: "Departure from Delhi",
        desc: "Overnight journey to Shimla by AC semi sleeper volvo bus."
      },
      {
        day: "Day 1",
        title: "Shimla – Narkanda",
        desc: "Reach Shimla in the morning and meet your driver. Begin your scenic journey towards Narkanda. Breakfast stop at Kufri (Suggested: Sher-e-Punjab, Charabra). Reach Narkanda. Check in and freshen up & relax. Evening stroll near the market area or nearby locally. Dinner and overnight stay in Narkanda. (Overnight stay: Narkanda)"
      },
      {
        day: "Day 2",
        title: "Narkanda – Chitkul",
        desc: "After breakfast, start your journey towards Chitkul — the last inhabited village near the Indo-Tibet border. En route halts at Kinnaur Gate and Karcham Dam for photos and short breaks. Lunch suggestions: Zostel Chitkul or Saryu’s Restaurant (Sangla). Reach chitkul. Visit the famous Hindustan ka Akhiri Dhaba, have tea and maggie. Chill near the Baspa river and return to your stay. Reach stay. Check in and relax. Dinner and overnight stay in Sangla/Rakcham. (Overnight stay: Sangla/Rakcham)"
      },
      {
        day: "Day 3",
        title: "Nako",
        desc: "Wake up to the beautiful kinnaur valley and have breakfast. Proceed towards Nako with a halt at the beautiful Khab Sangam (confluence of Spiti & Sutlej rivers). Reach Nako by evening. Explore Nako Monastery and Nako Lake. Hotel check-in, dinner, and overnight stay in Nako. (Overnight stay: Nako)"
      },
      {
        day: "Day 4",
        title: "Nako – Kaza",
        desc: "Early breakfast & proceed towards Kaza & Visit: Tabo Monastery (Ajanta of Himalayas), Dhankar Monastery (cliff-top monastery), and halt at Lingti Waterfall. Reach Kaza by evening. Check-in and relax. Dinner & overnight stay in Kaza. (Overnight stay: Kaza/Rangrik)"
      },
      {
        day: "Day 5",
        title: "Kaza Local Sightseeing",
        desc: "Have Breakfast & full-day excursion: Hikkim – World’s highest post office; Komic – One of the highest motorable villages and Highest Restaurant; Langza – Fossil village with giant Buddha statue; Key Monastery – Iconic Spiti landmark; Chicham Bridge – Asia’s highest Suspension bridge. Return to Kaza by evening and explore kaza local market. Dinner & overnight stay in Kaza. (Overnight stay: Kaza/Rangrik)"
      },
      {
        day: "Day 6",
        title: "Kaza – Kalpa",
        desc: "Have breakfast and start your journey towards Kalpa. En route, cover any sightseeing points that may have been missed earlier, subject to time and route feasibility. Drive to Kalpa taking an optional halt at Recong peo market. Visit the local monastery and Narayan nagini temple if time permits. Witness mesmerizing views of Kinner Kailash Range. Check-in & relax. Dinner & overnight stay in Kalpa. (Overnight stay: Kalpa)"
      },
      {
        day: "Day 7",
        title: "Kalpa – Shimla & Departure",
        desc: "Breakfast & check-out from Kalpa. Start the scenic drive towards Shimla through the beautiful Kinnaur landscapes. En-route, take short halts for refreshments, photographs and to enjoy the mountain views. Reach Shimla in the evening. Evening departure for Delhi by volvo bus."
      },
      {
        day: "Day 8",
        title: "Arrival in Delhi",
        desc: "Arrive in Delhi early in the Morning. The trip concludes."
      }
    ],
    inclusions: [
      "06 Nights Accommodation in Hotels / Homestays",
      "All Applicable Tolls, Parking Charges and Driver Allowances",
      "AC Semi-Sleeper Volvo bus tickets Delhi - Shimla - Delhi",
      "Dedicated Tempo Traveller / SUV for internal transfers and sightseeing",
      "Hygienic Breakfasts and Dinners as per itinerary"
    ],
    exclusions: [
      "Entry Tickets, Monastery Fees, Camera Charges and Room Heaters",
      "Expenses Arising Due to Landslides, Snow Roadblocks, Adverse Weather or Other Unforeseen Circumstances",
      "Any Services or Expenses Not Specifically Mentioned Under Inclusions",
      "5% GST extra applicable"
    ]
  },
  {
    id: "bir-billing-rajgundha",
    code: "HP02",
    name: "Bir Billing & Rajgundha Valley Weekend Trek",
    destination: "Bir Billing",
    category: "Weekend Getaways",
    tag: "Adventure & Paragliding",
    badge: "WEEKEND SPECIAL",
    duration: "2 Nights / 3 Days",
    rating: 4.8,
    reviewsCount: 98,
    originalPrice: 11999,
    discountedPrice: 8499,
    discount: "SAVE ₹3,500",
    image: "images/Bir_Billing.jpg",
    pickupDrop: "Delhi to Delhi (Kashmiri Gate Metro)",
    stay: "Bir Hotel (1N) + Rajgundha Camps/Cottages (1N)",
    meals: "4 Meals (2 Breakfasts + 2 Dinners)",
    transport: "AC Pushback Tempo Traveller / Volvo",
    overview: "Soar high in the paragliding capital of India and immerse yourself in the untouched alpine beauty of Rajgundha Valley. Enjoy cozy bonfire nights, riverside treks along Uhl River, Tibetan cafe hopping, and a world-class tandem paragliding flight from Billing at 8,000 ft.",
    highlights: [
      "World's 2nd highest paragliding takeoff site at Billing (8,020 ft)",
      "Hidden 360-degree alpine village of Rajgundha",
      "Scenic Uhl River hiking trail through pine and deodar forests",
      "Sunset and evening chill vibes at Bir Landing Site",
      "Explore Chokling Monastery and vibrant Tibetan art cafes in Bir colony",
      "Bonfire and stargazing in pristine mountain wilderness"
    ],
    itinerary: [
      {
        day: "Day 0",
        title: "Departure from Delhi",
        desc: "Board AC Tempo Traveller from Kashmiri Gate Metro Station at 7:30 PM. Overnight journey to Himachal Pradesh."
      },
      {
        day: "Day 1",
        title: "Arrival at Bir & Tibetan Culture Exploration",
        desc: "Arrive in Bir by morning. Check into hotel/guest house. Visit Chokling Monastery, Baijnath Temple and experience the vibrant sunset vibes at Landing Site. Cafe hopping. Dinner & overnight stay in Bir."
      },
      {
        day: "Day 2",
        title: "Bir to Rajgundha Valley Trek & Uhl Riverside",
        desc: "Post breakfast, scenic transfer to Rajgundha Valley. Check in into campsite/wooden cottages. Undertake the Uhl River trek (4 km / 3-4 hrs) crossing wooden suspension bridges and crystal clear streams. Bonfire, music, and dinner under starry skies."
      },
      {
        day: "Day 3",
        title: "Rajgundha to Billing Paragliding & Departure for Delhi",
        desc: "Wake up to misty Himalayan peaks. Head to Billing takeoff point. Experience adrenaline-pumping paragliding flight gliding over Kangra Valley back to Bir (optional/included). Afternoon free for local shopping. Evening departure for Delhi."
      },
      {
        day: "Day 4",
        title: "Arrival at Delhi",
        desc: "Early morning drop at Kashmiri Gate Metro Station by 6:30 AM."
      }
    ],
    inclusions: [
      "Delhi to Delhi roundtrip in AC Tempo Traveller",
      "02 Nights stay: 1 Night in Bir + 1 Night in Rajgundha",
      "02 Breakfasts and 02 Dinners per person",
      "Uhl River guided trek & camp bonfire",
      "Experienced Trip Captain throughout the journey",
      "All toll taxes, parking, driver night charges"
    ],
    exclusions: [
      "5% GST extra applicable",
      "Tandem Paragliding flight with GoPro video (payable on spot)",
      "Lunches and any cafe orders not included in package",
      "Room heaters, laundry, and personal shopping"
    ]
  },
  {
    id: "jibhi-jalori-tirthan",
    code: "HP04",
    name: "Jibhi, Jalori Pass & Tirthan Valley 2N3D",
    destination: "Jibhi & Tirthan",
    category: "Weekend Getaways",
    tag: "Riverside & Forest Retreat",
    badge: "POPULAR",
    duration: "2 Nights / 3 Days",
    rating: 4.9,
    reviewsCount: 114,
    originalPrice: 11499,
    discountedPrice: 8499,
    discount: "SAVE ₹3,000",
    image: "images/jibhi.jpg",
    pickupDrop: "Delhi to Delhi (Kashmiri Gate)",
    stay: "Traditional Wooden Cottage / 3-Star Hotel in Jibhi (2N)",
    meals: "4 Meals (2 Breakfasts + 2 Dinners)",
    transport: "AC Tempo Traveller roundtrip",
    overview: "A magical escape into the untouched valleys of Kullu. Walk through dense pine groves, visit ancient stone-and-timber wooden homes, trek through snowy pines to the mystical Serolsar Lake from Jalori Pass (10,800 ft), and dip your feet in the crystal-clear waters of the Tirthan river.",
    highlights: [
      "Jalori Pass at 10,800 ft with panoramic 360-degree Dhauladhar peaks",
      "Serolsar Lake 5km trek to the sacred temple of Buddhi Nagin",
      "Charming Jibhi Waterfall with wooden log bridges",
      "Choi Waterfall trek along Tirthan River near Great Himalayan National Park",
      "Stay in authentic handcrafted Himachali wooden cottages",
      "Riverside bonfire, acoustic music sessions & cafe visits"
    ],
    itinerary: [
      {
        day: "Day 0",
        title: "Delhi to Jibhi Overnight Drive",
        desc: "Meet at Kashmiri Gate Metro Station at 7:00 PM. Overnight journey via Chandigarh and Mandi."
      },
      {
        day: "Day 1",
        title: "Arrival in Jibhi & Local Sightseeing",
        desc: "Morning arrival in Jibhi. Check in to cozy wooden riverside cottage. Freshen up and visit the lush Jibhi Waterfall and Mini Thailand rocky lagoon. Cafe hopping in the quaint hamlet. Dinner & overnight stay."
      },
      {
        day: "Day 2",
        title: "Jalori Pass & Trek to Mystical Serolsar Lake",
        desc: "Drive up the thrilling Jalori Pass (10,800 ft). Embark on the 5 km scenic forest trek to holy Serolsar Lake. Visit the revered Buddhi Nagin Temple. Evening return to cottage. Bonfire and musical evening."
      },
      {
        day: "Day 3",
        title: "Tirthan Valley Exploration & Departure",
        desc: "Check out after breakfast. Drive through the serene Tirthan Valley alongside Great Himalayan National Park (GHNP). Short hike to Choi Waterfall and trout fish farm. Evening departure for Delhi."
      },
      {
        day: "Day 4",
        title: "Arrival in Delhi",
        desc: "Arrive at Kashmiri Gate Metro Station by 6:30 AM."
      }
    ],
    inclusions: [
      "AC Tempo Traveller transfers Delhi - Jibhi - Delhi",
      "02 Nights stay in cozy wooden cottage/homestay in Jibhi",
      "02 Breakfasts and 02 Dinners per traveler",
      "Guided trek to Serolsar Lake & Jibhi Waterfall walk",
      "Dedicated Trip Captain and local guide",
      "First Aid support and 2 complimentary mineral water bottles (500ml)"
    ],
    exclusions: [
      "5% GST extra",
      "Lunches and extra snacks",
      "Trout fishing license or GHNP forest entry permits",
      "Any unexpected vehicle expenses due to heavy snowfall/roadblocks"
    ]
  },
  {
    id: "spiti-christmas-newyear",
    code: "SP02",
    name: "Spiti Valley Grand Expedition (Christmas & New Year)",
    destination: "Spiti Valley",
    category: "Signature Expeditions",
    tag: "10-Day Mega Roadtrip",
    badge: "LIMITED BATCH",
    duration: "9 Nights / 10 Days",
    rating: 5.0,
    reviewsCount: 76,
    originalPrice: 24999,
    discountedPrice: 19999,
    discount: "SAVE ₹5,000",
    image: "images/spiti2.JPG",
    pickupDrop: "Delhi to Delhi (Shimla to Kasol Circuit)",
    stay: "Sarahan (1N), Sangla (1N), Kalpa (1N), Kaza (3N), Tirthan (1N), Parvati Valley (2N)",
    meals: "18 Meals (9 Breakfasts + 9 Dinners)",
    transport: "AC Semi-Sleeper Volvo + 4x4 / Heavy Duty Tempo Traveller",
    overview: "The ultimate 10-day Himalayan odyssey combining Kinnaur, Spiti Valley, Tirthan Valley, and Parvati Valley with a special New Year celebration in Kasol. Experience snowed-in villages, high passes, ancient monasteries, and vibrant riverside music.",
    highlights: [
      "Complete Kinnaur & Spiti cross-valley roadtrip circuit",
      "New Year Eve grand celebration in Parvati Valley / Kasol with bonfire and DJ",
      "Kaza high-altitude villages: Langza, Hikkim, Komic & Key Monastery",
      "Sangla Valley & Indo-Tibet border at Chitkul",
      "Serene stay by Tirthan River and Manikaran Sahib Gurudwara",
      "Chicham Bridge & frozen waterfalls along Spiti river"
    ],
    itinerary: [
      { day: "Day 0", title: "Delhi to Shimla", desc: "Board overnight AC Volvo bus from Kashmiri Gate, Delhi." },
      { day: "Day 1", title: "Shimla to Sarahan", desc: "Meet captain in Shimla. Drive through Narkanda apple country. Visit Bhimakali Temple. Overnight in Sarahan." },
      { day: "Day 2", title: "Sarahan to Sangla & Chitkul", desc: "Explore Chitkul (last village of India), stay in charming Sangla." },
      { day: "Day 3", title: "Sangla to Kalpa", desc: "Drive along Sutlej. Sunset view of Kinner Kailash. Visit Roghi village." },
      { day: "Day 4", title: "Kalpa to Kaza via Tabo & Dhankar", desc: "Enter Spiti. Explore Tabo Monastery (1000+ yrs) and cliffside Dhankar Gompa." },
      { day: "Day 5", title: "Kaza & Key Monastery, Chicham Bridge", desc: "Witness world-famous Key Gompa, cross iconic Chicham Bridge (highest bridge in Asia)." },
      { day: "Day 6", title: "Highest Villages: Hikkim, Komic, Langza", desc: "Mail a letter from Hikkim, stand with Langza giant Buddha statue." },
      { day: "Day 7", title: "Kaza to Tirthan Valley", desc: "Scenic descent towards Tirthan river valley. Riverside bonfire." },
      { day: "Day 8", title: "Tirthan Valley to Parvati Valley (Kasol)", desc: "Drive to Kasol. Riverside stroll by Parvati River and cafe hopping." },
      { day: "Day 9", title: "Parvati Valley & New Year Eve Gala", desc: "Visit Manikaran Sahib Gurudwara hot springs. Massive New Year Eve party with bonfire, BBQ, and music." },
      { day: "Day 10", title: "Kasol to Delhi", desc: "Morning breakfast, departure for Delhi by Volvo bus." }
    ],
    inclusions: [
      "Volvo tickets Delhi-Shimla and Bhuntar-Delhi",
      "09 Nights accommodation (Hotels/Homestays/Luxury Swiss Camps)",
      "18 Meals: 9 Breakfasts + 9 Dinners included",
      "All transfers & sightseeing in dedicated mountain vehicle",
      "Special New Year Eve party with bonfire and celebration",
      "Experienced Tour Captain, oxygen cylinder backup, first aid kit"
    ],
    exclusions: [
      "5% GST",
      "Lunches and personal snacks",
      "Any adventure sports / rafting / monastery entries",
      "Emergency evacuation expenses"
    ]
  },
  {
    id: "udaipur-mount-abu",
    code: "RJ01",
    name: "Royal Udaipur & Mount Abu Weekend Getaway",
    destination: "Udaipur & Mount Abu",
    category: "Weekend Getaways",
    tag: "Heritage & Royal Lakes",
    badge: "HERITAGE SPECIAL",
    duration: "2 Nights / 3 Days",
    rating: 4.8,
    reviewsCount: 89,
    originalPrice: 12999,
    discountedPrice: 8999,
    discount: "SAVE ₹4,000",
    image: "images/udaipur.JPG",
    pickupDrop: "Delhi / Gurgaon (IFFCO Chowk) to Delhi",
    stay: "Handpicked 3-Star Heritage Hotel in Udaipur (2N)",
    meals: "4 Meals (2 Breakfasts + 2 Dinners)",
    transport: "AC Luxury Tempo Traveller",
    overview: "Experience royal Rajasthan in the Venice of the East and the serene oasis hill station of Mount Abu. Marvel at the grand City Palace, boat across Lake Pichola, witness sunsets from Sajjangarh Monsoon Palace, and explore the intricate marble carvings of Dilwara Jain Temples.",
    highlights: [
      "Majestic Udaipur City Palace overlooking Lake Pichola",
      "Scenic boat ride to Jagmandir Island",
      "Sajjangarh Fort (Monsoon Palace) perched high on the Aravalli hills",
      "World-famous Dilwara Jain Temples in Mount Abu (marble masterpiece)",
      "Boating at Nakki Lake and shopping in Mount Abu mall road",
      "Saheliyon ki Bari and Jagdish Temple architectural marvels"
    ],
    itinerary: [
      {
        day: "Day 0",
        title: "Departure from Delhi / Gurgaon",
        desc: "Pickup from IFFCO Chowk Gurgaon / Delhi at 6:30 PM. Overnight journey in AC Tempo Traveller."
      },
      {
        day: "Day 1",
        title: "Udaipur Arrival & Royal City Sightseeing",
        desc: "Morning arrival in the City of Lakes. Check in to 3-star hotel. Visit Jagdish Temple, the magnificent City Palace complex, boat ride on Lake Pichola to Jagmandir, and evening Bagore Ki Haveli folk dance show. Dinner and overnight stay."
      },
      {
        day: "Day 2",
        title: "Day Excursion to Mount Abu",
        desc: "After breakfast, scenic drive to Mount Abu (Rajasthan's only hill station). Visit the world-renowned Dilwara Marble Temples, boating at Nakki Lake, toad rock viewpoint, and local market shopping. Return to Udaipur for dinner and overnight stay."
      },
      {
        day: "Day 3",
        title: "Udaipur Sightseeing & Evening Departure",
        desc: "Check out post breakfast. Visit Saheliyon Ki Bari royal gardens, Karni Mata ropeway viewpoint, and the breathtaking Sajjangarh Fort (Monsoon Palace). Evening departure towards Delhi."
      },
      {
        day: "Day 4",
        title: "Morning Arrival at Delhi",
        desc: "Arrive at IFFCO Chowk Gurgaon / Delhi by 7:00 AM."
      }
    ],
    inclusions: [
      "01 AC Tempo Traveller for entire transfers and sightseeing",
      "02 Nights stay in handpicked 3-Star Hotel in Udaipur (Double/Triple Sharing)",
      "02 Breakfasts and 02 Dinners per person",
      "Full day guided excursion to Mount Abu",
      "Experienced Trip Captain",
      "Toll taxes, parking, driver allowances, and first aid kit"
    ],
    exclusions: [
      "5% GST extra",
      "Monument entry tickets, boating charges, Bagore ki Haveli show tickets",
      "Lunches and personal shopping expenses",
      "Anything not mentioned in the inclusions"
    ]
  },
  {
    id: "offbeat-himachal-circuit",
    code: "HP05",
    name: "Offbeat Himachal: Dharamkot, Bir, Shoja & Tosh",
    destination: "Offbeat Himachal",
    category: "Signature Expeditions",
    tag: "Hidden Trails & Valleys",
    badge: "BESTSELLER",
    duration: "6 Nights / 7 Days",
    rating: 4.9,
    reviewsCount: 125,
    originalPrice: 24000,
    discountedPrice: 18000,
    discount: "SAVE ₹6,000",
    image: "images/offbeat_himachal.JPG",
    pickupDrop: "Delhi to Delhi (Volvo / AC Tempo Traveller)",
    stay: "Hotels, Riverside Camps & Mountain Homestays (6N)",
    meals: "12 Meals (6 Breakfasts + 6 Dinners)",
    transport: "AC Semi-Sleeper Volvo / SUV / Tempo Traveller",
    overview: "Step away from crowded tourist spots into the authentic soul of Himachal Pradesh. From the spiritual tranquility of Dharamkot and paragliding skies of Bir, to the secluded pine forests of Shoja and magical fairy forests of Tosh & Kalga in Parvati Valley.",
    highlights: [
      "Dharamkot & Gallu Waterfall secret forest hike",
      "Bir Billing paragliding & Uhl River trek in Rajgundha Valley",
      "Scenic Barot Dam and Magica fountain",
      "Stay in the unspoiled high meadow hamlet of Shoja overlooking Jalori",
      "Tosh & Kutla Waterfall alpine hike",
      "Fairy Forest exploration in Kalga / Pulga and sacred Manikaran Gurudwara"
    ],
    itinerary: [
      { day: "Day 0", title: "Delhi to McLeodganj / Dharamkot", desc: "Overnight Volvo journey from Delhi to McLeodganj." },
      { day: "Day 1", title: "Arrival in Dharamkot & Gallu Waterfall Hike", desc: "Check in at Dharamkot property. Trek to Gallu Waterfall (4km) through oak forests. Visit Bhagsu and Dharamkot cafes." },
      { day: "Day 2", title: "Dharamkot to Bir via Baijnath Temple", desc: "Drive to Bir. En route visit historical 13th-century Baijnath Temple. Check in and visit Chokling Monastery. Sunset at landing site." },
      { day: "Day 3", title: "Bir to Rajgundha Valley & Uhl River Trek", desc: "Drive to pristine Rajgundha Valley. Undertake Uhl river hike. Camp under the stars." },
      { day: "Day 4", title: "Rajgundha to Barot Valley & Shoja", desc: "Visit Barot Dam and cross to Seraj Valley. Arrive at Shoja. Visit Jibhi waterfall. Dinner in cozy wooden retreat." },
      { day: "Day 5", title: "Shoja to Tosh via Kasol & Chalal", desc: "Descend to Parvati Valley. Riverside stroll at Kasol and Chalal. Hike up to Tosh village with sweeping glacier views." },
      { day: "Day 6", title: "Tosh to Kutla Waterfall & Kalga Fairy Forest", desc: "Trek to hidden Kutla Waterfall. Hike across to Kalga village and wander the famous enchanted Fairy Forest." },
      { day: "Day 7", title: "Manikaran Sahib & Evening Volvo to Delhi", desc: "Take a holy dip in the natural hot springs of Manikaran Sahib Gurudwara. Evening Volvo departure to Delhi." },
      { day: "Day 8", title: "Arrival in Delhi", desc: "Reach Delhi in the morning. End of journey." }
    ],
    inclusions: [
      "Delhi to Delhi roundtrip transfers (Volvo + Tempo Traveller)",
      "06 Nights accommodation in handpicked homestays, camps, & cottages",
      "12 Meals: 6 Breakfasts + 6 Dinners",
      "All inter-valley transfers and guided hikes as specified",
      "Trip Leader and certified local mountain guides",
      "All driver night charges, parking, toll taxes"
    ],
    exclusions: [
      "5% GST applicable",
      "Lunches and cafe hopping expenses",
      "Room heaters where charged separately",
      "Paragliding tandem flight charges"
    ]
  },
  {
    id: "manali-kasol-weekend",
    code: "HP01",
    name: "Manali & Kasol Riverside Weekend Escape",
    destination: "Himachal Pradesh",
    category: "Weekend Getaways",
    tag: "Mountain Vibes & Rivers",
    badge: "WEEKEND SPECIAL",
    duration: "2 Nights / 3 Days",
    rating: 4.7,
    reviewsCount: 164,
    originalPrice: 11499,
    discountedPrice: 8499,
    discount: "SAVE ₹3,000",
    image: "images/manali.jpg",
    pickupDrop: "Delhi to Delhi (Kashmiri Gate)",
    stay: "Riverside Resort in Kasol (1N) + Hotel in Manali (1N)",
    meals: "4 Meals (2 Breakfasts + 2 Dinners)",
    transport: "AC Semi-Sleeper Volvo / Tempo Traveller",
    overview: "The classic Himachal getaway. Unwind along the roaring Parvati river in Kasol, soak in the hippie cafe culture, visit the ancient wooden Hadimba Temple in Manali, and explore the snowy pine landscapes of Solang Valley.",
    highlights: [
      "Hadimba Devi Temple nestled in ancient giant deodars",
      "Riverside camping and cafe culture in Kasol & Chalal village",
      "Scenic Solang Valley snow adventure activities",
      "Manikaran Sahib Gurudwara & hot sulfur springs",
      "Jogini Waterfall trek overlooking Kullu Valley"
    ],
    itinerary: [
      { day: "Day 0", title: "Delhi to Manali Overnight Journey", desc: "Departure from Majnu Ka Tila / Kashmiri Gate by AC Volvo bus." },
      { day: "Day 1", title: "Manali Arrival & Local Sightseeing", desc: "Visit Hadimba Temple, Mall Road, and Jogini Waterfall. Overnight in Manali." },
      { day: "Day 2", title: "Solang Valley to Kasol Riverside", desc: "Drive through Kullu valley to Kasol. Riverside stroll in Chalal village, bonfire & music. Overnight in Kasol." },
      { day: "Day 3", title: "Manikaran Sahib & Return Journey", desc: "Visit Manikaran Sahib Gurudwara. Evening departure by Volvo for Delhi." },
      { day: "Day 4", title: "Arrival in Delhi", desc: "Reach Delhi morning by 7:00 AM." }
    ],
    inclusions: [
      "Roundtrip Volvo / AC Tempo Traveller Delhi-Manali-Kasol-Delhi",
      "02 Nights stay on double / triple sharing basis",
      "02 Breakfasts and 02 Dinners",
      "Trip Coordinator and all sightseeing transfers"
    ],
    exclusions: [
      "5% GST",
      "Adventure sports activities (ziplining, zorbing, skiing)",
      "Lunches and personal shopping"
    ]
  },
  {
    id: "dharamshala-mcleodganj-triund",
    code: "HP03",
    name: "Dharamshala, McLeodganj & Triund Trek 2N3D",
    destination: "Dharamshala",
    category: "Weekend Getaways",
    tag: "High Mountain Trek",
    badge: "WEEKEND SPECIAL",
    duration: "2 Nights / 3 Days",
    rating: 4.8,
    reviewsCount: 130,
    originalPrice: 11499,
    discountedPrice: 8499,
    discount: "SAVE ₹3,000",
    image: "images/dharamshala_triund.JPG",
    pickupDrop: "Delhi to Delhi (ISBT Kashmiri Gate)",
    stay: "Hotel in McLeodganj / Dharamkot (1N) + Alpine Camps at Triund (1N)",
    meals: "4 Meals (2 Breakfasts + 2 Dinners)",
    transport: "AC Semi-Sleeper Volvo / Tempo Traveller",
    overview: "Trek to the crown jewel of Dharamshala at Triund ridge (9,350 ft). Enjoy mesmerizing sunset over Kangra valley, gaze directly at the towering snow-covered Dhauladhar mountain face, and explore the residence of His Holiness Dalai Lama in Little Lhasa.",
    highlights: [
      "Epic Triund Ridge trek with dramatic views of Dhauladhar wall",
      "Camp under million stars with bonfire at Triund ridge",
      "Visit Tsuglagkhang Complex (Dalai Lama Temple)",
      "Stroll through Namgyal Monastery and Bhagsu Waterfall",
      "Dharamkot artistic cafes and Tibetan street markets"
    ],
    itinerary: [
      { day: "Day 0", title: "Delhi to McLeodganj Overnight Journey", desc: "Board AC Volvo from Kashmiri Gate at 7:30 PM." },
      { day: "Day 1", title: "Arrival in McLeodganj & Sightseeing", desc: "Arrive in McLeodganj, check in, visit Dalai Lama Temple, Bhagsu Waterfall, and Dharamkot cafes." },
      { day: "Day 2", title: "Trek to Triund Ridge & Sunset Camping", desc: "Start the scenic 9 km hike up Triund ridge. Experience dramatic sunset views over Kangra. Night alpine camping." },
      { day: "Day 3", title: "Descent from Triund & Departure for Delhi", desc: "Morning sunrise over snow peaks. Hike down to McLeodganj. Local shopping and evening Volvo to Delhi." },
      { day: "Day 4", title: "Morning Arrival at Delhi", desc: "Arrive at Delhi by 6:30 AM." }
    ],
    inclusions: [
      "Delhi - McLeodganj - Delhi Volvo / Tempo Traveller",
      "01 Night Hotel in McLeodganj/Dharamkot + 01 Night Camping at Triund",
      "02 Breakfasts and 02 Dinners",
      "Triund trek guide, camping permits, sleeping bags & tents",
      "Trip Coordinator"
    ],
    exclusions: [
      "5% GST",
      "Lunches and cafe meals",
      "Pony / Porter charges for personal backpack",
      "Personal gear and warm jackets"
    ]
  },
  {
    id: "spiti-summer-road-trip",
    code: "SP03",
    name: "Spiti Summer Road Trip (Chandratal Edition)",
    destination: "Spiti Valley",
    category: "Signature Expeditions",
    tag: "Lake & Mountain Circuit",
    badge: "SUMMER SPECIAL",
    duration: "06 Nights 07 Days",
    rating: 4.9,
    reviewsCount: 62,
    originalPrice: 22999,
    discountedPrice: 17999,
    discount: "SAVE ₹5,000",
    image: "images/spiti_summer.JPG",
    pickupDrop: "ISBT Kashmere Gate Bus stand",
    stay: "Sangla (1N), Kalpa (1N), Nako (1N), Kaza (2N), Chandratal Camps (1N)",
    meals: "12 Meals: 6 Breakfasts + 6 Dinners as per Itinerary",
    transport: "AC Semi-Sleeper Volvo (Delhi–Shimla & Manali–Delhi) + Tempo Traveller for entire trip",
    overview: "Embark on an unforgettable summer road trip through the breathtaking landscapes of Spiti Valley. Discover picturesque Himalayan villages, explore ancient monasteries, visit the world's highest post office at Hikkim, witness the stunning beauty of Chandratal Lake, and experience the dramatic mountain landscapes of Kinnaur and Lahaul.",
    highlights: [
      "Chitkul – Explore the last inhabited village of the picturesque Baspa Valley, near the Indo-Tibetan border",
      "Kalpa & Kinner Kailash – Experience breathtaking views of the sacred Kinner Kailash Range surrounded by the beautiful landscapes of Kinnaur",
      "Nako Lake & Monastery – Discover the peaceful Himalayan village of Nako, its ancient monastery and beautiful high-altitude lake",
      "Ancient Tabo Monastery – Explore the 1,000+ year-old monastery, famously known as the \"Ajanta of the Himalayas\"",
      "Dhankar Monastery & Gue Village – Visit the spectacular cliffside monastery and witness the naturally preserved, approximately 500-year-old monk mummy at Gue",
      "Komic, Hikkim & Langza – Explore some of Spiti's highest villages, visit the world's highest post office and discover the famous Fossil Village with its giant Buddha statue",
      "Key Monastery & Chicham Bridge – Discover Spiti's iconic Buddhist monastery and experience the spectacular Chicham suspension bridge",
      "Chandratal Lake & Kunzum La – Witness the mesmerising beauty of the high-altitude Chandratal Lake and drive through the spectacular Kunzum Pass"
    ],
    itinerary: [
      {
        day: "Day 0",
        title: "Departure from Delhi",
        desc: "Late evening departure from ISBT Kashmiri Gate, Delhi post 10:30 PM. Travel overnight in AC semi-sleeper Volvo bus towards Shimla. Comfortable overnight journey."
      },
      {
        day: "Day 1",
        title: "Shimla – Sangla",
        desc: "Reach Shimla early morning & transfer to Tempo Traveller. Begin your scenic drive towards Sangla Valley. Pass through beautiful Himalayan roads & apple orchards. Short halt at Kinnaur Gate for photos. Arrive in Sangla by evening. Check-in to hotel/homestay. Dinner & overnight stay in Sangla."
      },
      {
        day: "Day 2",
        title: "Sangla – Chitkul – Kalpa",
        desc: "Breakfast at hotel. Excursion to Chitkul – last inhabited village near Indo-Tibet border. Enjoy riverside views & peaceful Himalayan vibes. Later drive to Kalpa. Witness mesmerizing views of Kinner Kailash Range. Check-in & relax. Dinner & overnight stay in Kalpa. (Meals: Dinner, Breakfast)"
      },
      {
        day: "Day 3",
        title: "Kalpa – Nako",
        desc: "Breakfast & departure for Nako. Enroute stop at Khab Sangam (confluence of Sutlej & Spiti rivers). Visit Nako Monastery & Nako Lake. Arrive & check-in at homestay, relax after the journey. Dinner & overnight stay in Nako. (Meals: Dinner, Breakfast)"
      },
      {
        day: "Day 4",
        title: "Nako – Kaza",
        desc: "Early breakfast & proceed towards Kaza. Visit: Gue Monastery (famous mummy), Tabo Monastery (Ajanta of Himalayas), Dhankar Monastery (cliff-top monastery), and Lingti Waterfall. Reach Kaza by evening. Check-in to hotel/homestay. Dinner & overnight stay in Kaza. (Meals: Dinner, Breakfast)"
      },
      {
        day: "Day 5",
        title: "Kaza Local Sightseeing",
        desc: "Breakfast & full-day excursion: Hikkim – World’s highest post office; Komic – one of the highest motorable villages; Langza – fossil village with giant Buddha statue; Key Monastery – iconic Spiti landmark; Chicham Bridge – Asia’s highest bridge. Return to Kaza by evening. Dinner & overnight stay in Kaza. (Meals: Dinner, Breakfast)"
      },
      {
        day: "Day 6",
        title: "Kaza – Chandratal",
        desc: "Early morning departure towards Chandratal Lake. Enroute: Losar Village and Kunzum La Pass. Visit the stunning Chandratal Lake. Check-in to camps. Enjoy stargazing experience. Dinner & overnight stay in camps. (Meals: Dinner)"
      },
      {
        day: "Day 7",
        title: "Chandratal – Manali & Departure",
        desc: "Breakfast & depart for Manali. Cross Atal Tunnel / Rohtang region. Reach Manali by approx. 3 PM. Freshen up & explore Mall Road (if time permits). Evening departure for Delhi via AC semi-sleeper Volvo bus. Overnight journey. (Meals: Breakfast)"
      },
      {
        day: "Day 8",
        title: "Reach Delhi",
        desc: "Reach Delhi in the morning. Your trip ends here with a suitcase full of memories and friendships of a lifetime."
      }
    ],
    inclusions: [
      "AC Semi-Sleeper Volvo Bus Tickets (Delhi–Shimla & Manali–Delhi)",
      "Tempo Traveller for the Entire Trip, Including Internal Sightseeing & Transfers",
      "06 Nights Accommodation in Hotels / Homestays / Camps (Hotels in Sangla & Kalpa, Homestay in Nako, Hotels/Homestays in Kaza, Camps in Chandratal)",
      "12 Meals: 6 Breakfasts + 6 Dinners as per Itinerary",
      "All Sightseeing as Mentioned in the Itinerary",
      "Driver Allowances, Applicable Tolls, Fuel & Parking Charges"
    ],
    exclusions: [
      "5% GST Extra",
      "Guide / Porter Charges",
      "Lunches & Personal Expenses",
      "Entry Tickets, Monastery Fees & Camera Charges",
      "Expenses Arising Due to Adverse Weather, Road Blockages, Landslides or Other Unforeseen Circumstances",
      "Any Services or Expenses Not Specifically Mentioned Under Inclusions"
    ]
  }
];

// Company details from Linguini Holidays invoices and itineraries
const companyInfo = {
  name: "Linguini Holidays",
  tagline: "India's Handcrafted Mountain & Heritage Journeys",
  phone: "+91 96677 14524",
  phoneRaw: "9667714524",
  email: "bookings@linguiniholidays.com",
  bankDetails: {
    beneficiary: "LINGUINI HOLIDAYS PRIVATE LIMITED",
    bank: "HDFC BANK",
    accountNumber: "5020 0107 7597 44",
    ifsc: "HDFC0001552"
  },
  stats: {
    happyTravelers: "18,400+",
    curatedTrips: "450+",
    rating: "4.9 / 5.0",
    verifiedReviews: "3,280+"
  }
};
