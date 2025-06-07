// Language switching
const translations = {
  en: {
    "navbar.title": "Drivana",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.cars": "Cars",
    "nav.contact": "Contact",
    "nav.language": "Language",
    "lang.en": "English",
    "lang.fr": "French",
    "lang.sw": "Swahili",
    "lang.de": "German",
    "lang.es": "Spanish",
    "hero.title": "Fast & Easy Way To Rent A Car",
    "hero.subtitle": "Fast and Reliable car hire and taxi services for all your travel needs.",
    "hero.cta": "Easy steps for renting a car",
    "booking.title": "Make Your Trip",
    "booking.pickup": "Pick-Up Location",
    "booking.dropoff": "Drop-Off Location",
    "booking.pickupDate": "Pick-Up Date",
    "booking.dropoffDate": "Drop-Off Date",
    "booking.pickupTime": "Pick-Up Time",
    "booking.cta": "Rent A Car Now",
    "booking.stepsTitle": "Better Way to Rent Your Perfect Cars",
    "booking.step1": "Choose Your Pickup Location",
    "booking.step2": "Select the Best Deal",
    "booking.step3": "Reserve Your Rental Car",
    "booking.reserveCta": "Reserve Your Perfect Car",
    "services.title": "Our Ride Options",
    "services.economy": "Economy Ride",
    "services.economyDesc": "Affordable and efficient for short trips around the city.",
    "services.luxury": "Luxury Ride",
    "services.luxuryDesc": "Premium comfort for special occasions or business travel.",
    "services.convertible": "Convertible Ride",
    "services.convertibleDesc": "Enjoy the open air with style on scenic drives.",
    "services.van": "Van Ride",
    "services.vanDesc": "Perfect for large groups or family vacations.",
    "about.title": "About Us",
    "about.mission": "Our Mission",
    "about.description": "At Drivana, we are committed to providing seamless and reliable car hire and taxi services tailored to your travel needs. Whether you're heading to a wedding, exploring the city, or catching a flight, our diverse fleet and dedicated team ensure you travel in comfort and style. Let us drive you to your destination with ease!",
    "latest.title": "Our Latest Services",
    "latest.wedding": "Wedding Ceremony",
    "latest.weddingDesc": "Arrive in style with our luxury vehicles for your special day.",
    "latest.city": "City Transfer",
    "latest.cityDesc": "Effortless transfers within the city for your convenience.",
    "latest.airport": "Airport Transfer",
    "latest.airportDesc": "Reliable rides to and from the airport, on time every time.",
    "latest.tour": "Whole City Tour",
    "latest.tourDesc": "Explore the city with our guided tours in comfort.",
    "driver.title": "Drivana",
    "driver.promotion": "Do You Want To Earn With Us? So Don’t Be Late.",
    "driver.cta": "Become a Driver",
    "reviews.title": "What Our Customers Say",
    "reviews.testimonial1": "Drivana got me to my meeting on time with a clean, comfortable car!",
    "reviews.author1": "John K., Business Traveler",
    "reviews.testimonial2": "The luxury ride was perfect for my wedding day. Highly recommend!",
    "reviews.author2": "Mary W., Bride",
    "reviews.testimonial3": "I used Drivana for a family trip, and the SUV was spacious and reliable.",
    "reviews.author3": "Peter O., Family Traveler",
    "reviews.testimonial4": "The driver was friendly, and the booking process was so easy!",
    "reviews.author4": "Aisha M., Daily Commuter",
    "reviews.testimonial5": "Drivana’s economy ride saved me during a busy day of errands.",
    "reviews.author5": "Sarah K., Shopper",
    "reviews.testimonial6": "I travel often, and Drivana is now my go-to for airport transfers.",
    "reviews.author6": "David L., Frequent Flyer",
    "support.title": "Frequently Asked Questions",
    "support.subtitle": "Find answers to common questions about our car hire and taxi services.",
    "support.faq1": "How do I book a ride?",
    "support.faq1Desc": "Use the \"Book a Ride\" button below to submit your details, and we’ll confirm your booking.",
    "support.faq2": "Can I cancel my booking?",
    "support.faq2Desc": "Yes, cancellations are allowed up to 24 hours before your scheduled ride.",
    "support.faq3": "What payment methods are accepted?",
    "support.faq3Desc": "We accept mobile money, credit cards, and cash payments upon arrival.",
    "support.faq4": "Are there any additional fees for late returns?",
    "support.faq4Desc": "Yes, late returns may incur an additional fee based on the hourly rate of your rental.",
    "support.faq5": "Can I request a specific car model?",
    "support.faq5Desc": "We’ll do our best to accommodate your request, but availability may vary depending on the booking schedule.",
    "support.faq6": "Is insurance included in the rental price?",
    "support.faq6Desc": "Basic insurance is included, but you can opt for additional coverage for extra protection.",
    "contact.title": "Get in Touch",
    "contact.subtitle": "Your Journey Starts Here",
    "contact.description": "Need a ride? Contact us to book your next trip with Drivana.",
    "contact.details": "Contact Details",
    "contact.emailLabel": "Email:",
    "contact.phoneLabel": "Phone:",
    "contact.addressLabel": "Address:",
    "contact.response": "We respond within 1 business day.",
    "contact.formTitle": "Send a Message",
    "contact.formEmail": "Email",
    "contact.formMessage": "Message",
    "contact.formCta": "Send Message",
    "ride.title": "Book a Ride",
    "ride.name": "Full Name",
    "ride.pickup": "Pickup Location",
    "ride.dropoff": "Drop-off Location",
    "ride.date": "Date",
    "ride.time": "Time",
    "ride.type": "Ride Type",
    "ride.economy": "Economy Ride",
    "ride.luxury": "Luxury Ride",
    "ride.convertible": "Convertible Ride",
    "ride.van": "Van Ride",
    "ride.cta": "Book Now",
    "driverModal.title": "Become a Driver",
    "driverModal.name": "Full Name",
    "driverModal.email": "Email",
    "driverModal.phone": "Phone Number",
    "driverModal.license": "Driver's License Number",
    "driverModal.cta": "Submit Application",
    "footer.copyright": "© 2025 Drivana. All rights reserved."
  },
  fr: {
    "navbar.title": "Drivana",
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.pricing": "Tarification",
    "nav.cars": "Voitures",
    "nav.contact": "Contact",
    "nav.language": "Langue",
    "lang.en": "Anglais",
    "lang.fr": "Français",
    "lang.sw": "Swahili",
    "lang.de": "Allemand",
    "lang.es": "Espagnol",
    "hero.title": "Façon rapide et facile de louer une voiture",
    "hero.subtitle": "Services de location de voitures et de taxis rapides et fiables pour tous vos besoins de voyage.",
    "hero.cta": "Étapes faciles pour louer une voiture",
    "booking.title": "Planifiez votre voyage",
    "booking.pickup": "Lieu de prise en charge",
    "booking.dropoff": "Lieu de dépose",
    "booking.pickupDate": "Date de prise en charge",
    "booking.dropoffDate": "Date de dépose",
    "booking.pickupTime": "Heure de prise en charge",
    "booking.cta": "Louer une voiture maintenant",
    "booking.stepsTitle": "Meilleure façon de louer votre voiture parfaite",
    "booking.step1": "Choisissez votre lieu de prise en charge",
    "booking.step2": "Sélectionnez la meilleure offre",
    "booking.step3": "Réservez votre voiture de location",
    "booking.reserveCta": "Réservez votre voiture parfaite",
    "services.title": "Nos options de conduite",
    "services.economy": "Voiture économique",
    "services.economyDesc": "Abordable et efficace pour les courts trajets en ville.",
    "services.luxury": "Voiture de luxe",
    "services.luxuryDesc": "Confort premium pour les occasions spéciales ou les voyages d'affaires.",
    "services.convertible": "Cabriolet",
    "services.convertibleDesc": "Profitez de l'air libre avec style sur des routes pittoresques.",
    "services.van": "Minibus",
    "services.vanDesc": "Parfait pour les grands groupes ou les vacances en famille.",
    "about.title": "À propos de nous",
    "about.mission": "Notre mission",
    "about.description": "Chez Drivana, nous nous engageons à offrir des services de location de voitures et de taxis fiables et sans couture adaptés à vos besoins de voyage. Que vous vous rendiez à un mariage, exploriez la ville ou preniez un vol, notre flotte variée et notre équipe dévouée garantissent que vous voyagez dans le confort et le style. Laissez-nous vous conduire à votre destination avec facilité !",
    "latest.title": "Nos derniers services",
    "latest.wedding": "Cérémonie de mariage",
    "latest.weddingDesc": "Arrivez avec style avec nos véhicules de luxe pour votre grand jour.",
    "latest.city": "Transfert en ville",
    "latest.cityDesc": "Transferts faciles au sein de la ville pour votre commodité.",
    "latest.airport": "Transfert aéroport",
    "latest.airportDesc": "Des trajets fiables vers et depuis l’aéroport, à l’heure chaque fois.",
    "latest.tour": "Tour de la ville",
    "latest.tourDesc": "Explorez la ville avec nos visites guidées dans le confort.",
    "driver.title": "Drivana",
    "driver.promotion": "Voulez-vous gagner de l'argent avec nous ? Ne soyez pas en retard.",
    "driver.cta": "Devenir conducteur",
    "reviews.title": "Ce que nos clients disent",
    "reviews.testimonial1": "Drivana m'a conduit à ma réunion à temps avec une voiture propre et confortable !",
    "reviews.author1": "John K., Voyageur d'affaires",
    "reviews.testimonial2": "La voiture de luxe était parfaite pour mon jour de mariage. Je recommande vivement !",
    "reviews.author2": "Mary W., Mariée",
    "reviews.testimonial3": "J'ai utilisé Drivana pour un voyage en famille, et le SUV était spacieux et fiable.",
    "reviews.author3": "Peter O., Voyageur familial",
    "reviews.testimonial4": "Le conducteur était sympathique, et le processus de réservation était si facile !",
    "reviews.author4": "Aisha M., Navetteur quotidien",
    "reviews.testimonial5": "La voiture économique de Drivana m'a sauvé pendant une journée chargée de courses.",
    "reviews.author5": "Sarah K., Acheteuse",
    "reviews.testimonial6": "Je voyage souvent, et Drivana est maintenant mon choix pour les transferts aéroport.",
    "reviews.author6": "David L., Voyageur fréquent",
    "support.title": "Frequently Asked Questions",
    "support.subtitle": "Find answers to common questions about our car hire and taxi services.",
    "support.faq1": "Comment puis-je réserver un trajet ?",
    "support.faq1Desc": "Utilisez le bouton \"Réserver un trajet\" ci-dessous pour soumettre vos détails, et nous confirmerons votre réservation.",
    "support.faq2": "Puis-je annuler ma réservation ?",
    "support.faq2Desc": "Oui, les annulations sont autorisées jusqu'à 24 heures avant votre trajet prévu.",
    "support.faq3": "Quels modes de paiement sont acceptés ?",
    "support.faq3Desc": "Nous acceptons l'argent mobile, les cartes de crédit et les paiements en espèces à l'arrivée.",
    "support.faq4": "Y a-t-il des frais supplémentaires pour les retours tardifs ?",
    "support.faq4Desc": "Oui, les retours tardifs peuvent entraîner des frais supplémentaires basés sur le tarif horaire de votre location.",
    "support.faq5": "Puis-je demander un modèle de voiture spécifique ?",
    "support.faq5Desc": "Nous ferons de notre mieux pour répondre à votre demande, mais la disponibilité peut varier selon le calendrier des réservations.",
    "support.faq6": "L'assurance est-elle incluse dans le prix de location ?",
    "support.faq6Desc": "Une assurance de base est incluse, mais vous pouvez opter pour une couverture supplémentaire pour une protection accrue.",
    "contact.title": "Contactez-nous",
    "contact.subtitle": "Votre voyage commence ici",
    "contact.description": "Besoin d'un trajet ? Contactez-nous pour réserver votre prochain voyage avec Drivana.",
    "contact.details": "Détails de contact",
    "contact.emailLabel": "Email :",
    "contact.phoneLabel": "Téléphone :",
    "contact.addressLabel": "Adresse :",
    "contact.response": "Nous répondons dans un délai d'un jour ouvrable.",
    "contact.formTitle": "Envoyer un message",
    "contact.formEmail": "Email",
    "contact.formMessage": "Message",
    "contact.formCta": "Envoyer le message",
    "ride.title": "Réserver un trajet",
    "ride.name": "Nom complet",
    "ride.pickup": "Lieu de prise en charge",
    "ride.dropoff": "Lieu de dépose",
    "ride.date": "Date",
    "ride.time": "Heure",
    "ride.type": "Type de trajet",
    "ride.economy": "Voiture économique",
    "ride.luxury": "Voiture de luxe",
    "ride.convertible": "Cabriolet",
    "ride.van": "Minibus",
    "ride.cta": "Réserver maintenant",
    "driverModal.title": "Devenir conducteur",
    "driverModal.name": "Nom complet",
    "driverModal.email": "Email",
    "driverModal.phone": "Numéro de téléphone",
    "driverModal.license": "Numéro de permis de conduire",
    "driverModal.cta": "Soumettre la candidature",
    "footer.copyright": "© 2025 Drivana. Tous droits réservés."
  },
  sw: {
    "navbar.title": "Drivana",
    "nav.home": "Nyumbani",
    "nav.about": "Kuhusu",
    "nav.services": "Huduma",
    "nav.pricing": "Bei",
    "nav.cars": "Magari",
    "nav.contact": "Wasiliana",
    "nav.language": "Lugha",
    "lang.en": "Kiingereza",
    "lang.fr": "Kifaransa",
    "lang.sw": "Kiswahili",
    "lang.de": "Kijerumani",
    "lang.es": "Kihispania",
    "hero.title": "Njia ya Haraka na Rahisi ya Kukodisha Gari",
    "hero.subtitle": "Huduma za kukodisha gari na teksi za haraka na za kuaminika kwa mahitaji yako ya safari.",
    "hero.cta": "Hatua rahisi za kukodisha gari",
    "booking.title": "Fanya Safari Yako",
    "booking.pickup": "Eneo la Kuchukua",
    "booking.dropoff": "Eneo la Kushusha",
    "booking.pickupDate": "Tarehe ya Kuchukua",
    "booking.dropoffDate": "Tarehe ya Kushusha",
    "booking.pickupTime": "Saa ya Kuchukua",
    "booking.cta": "Kukodisha Gari Sasa",
    "booking.stepsTitle": "Njia Bora ya Kukodisha Gari Yako Bora",
    "booking.step1": "Chagua Eneo Lako la Kuchukua",
    "booking.step2": "Chagua Ofa Bora",
    "booking.step3": "Hifadhi Gari Yako ya Kukodisha",
    "booking.reserveCta": "Hifadhi Gari Yako Bora",
    "services.title": "Chaguzi Zetu za Kuendesha",
    "services.economy": "Gari la Uchumi",
    "services.economyDesc": "Bei nafuu na ufanisi kwa safari fupi za jiji.",
    "services.luxury": "Gari la Lujo",
    "services.luxuryDesc": "Raha ya juu kwa hafla za kipekee au safari za biashara.",
    "services.convertible": "Gari la Kubadilika",
    "services.convertibleDesc": "Furahia hewa ya nje kwa mtindo kwenye njia za kupendeza.",
    "services.van": "Van",
    "services.vanDesc": "Inafaa kwa makundi makubwa au likizo za familia.",
    "about.title": "Kuhusu Sisi",
    "about.mission": "Misheni Yetu",
    "about.description": "Kwa Drivana, tumejitolea kutoa huduma za kukodisha gari na teksi za kuaminika na za msisimko zinazolingana na mahitaji yako ya safari. Iwe unakwenda kwenye harusi, unachunguza jiji, au unachukua ndege, kundi letu la anuwai na timu yetu ya kujitolea inahakikisha unasafiri kwa raha na mtindo. Hebu tukuendeshe hadi unapokwenda kwa urahisi!",
    "latest.title": "Huduma Zetu za Hivi Karibuni",
    "latest.wedding": "Sherehe ya Harusi",
    "latest.weddingDesc": "Fika kwa mtindo na magari yetu ya kifahari kwa siku yako ya pekee.",
    "latest.city": "Uhamisho wa Jiji",
    "latest.cityDesc": "Uhamisho rahisi ndani ya jiji kwa urahisi wako.",
    "latest.airport": "Uhamisho wa Uwanja wa Ndege",
    "latest.airportDesc": "Safari za kuaminika kwenda na kutoka uwanja wa ndege, kwa wakati kila wakati.",
    "latest.tour": "Ziara ya Jiji Lote",
    "latest.tourDesc": "Chunguza jiji na ziara zetu za kuongozwa kwa raha.",
    "driver.title": "Drivana",
    "driver.promotion": "Je, Unataka Kupata Pesa Nasi? Basi Usichelewe.",
    "driver.cta": "Kuwa Dereva",
    "reviews.title": "Wateja Wetu Wanasema Nini",
    "reviews.testimonial1": "Drivana ilinifikisha kwenye mkutano wangu kwa wakati na gari safi na rahisi!",
    "reviews.author1": "John K., Msafiri wa Biashara",
    "reviews.testimonial2": "Gari la kifahari lilikuwa kamili kwa siku yangu ya harusi. Ninapendekeza sana!",
    "reviews.author2": "Mary W., Bibi Harusi",
    "reviews.testimonial3": "Nilitumia Drivana kwa safari ya familia, na SUV ilikuwa na nafasi na ya kuaminika.",
    "reviews.author3": "Peter O., Msafiri wa Familia",
    "reviews.testimonial4": "Dereva alikuwa rafiki, na mchakato wa kuhifadhi ulikuwa rahisi sana!",
    "reviews.author4": "Aisha M., Msafiri wa Kila Siku",
    "reviews.testimonial5": "Gari la uchumi la Drivana liliniokoa wakati wa siku ya shughuli nyingi za ununuzi.",
    "reviews.author5": "Sarah K., Mnunuzi",
    "reviews.testimonial6": "Ninasafiri mara kwa mara, na Drivana sasa ni chaguo langu kwa uhamisho wa uwanja wa ndege.",
    "reviews.author6": "David L., Msafiri wa Mara kwa Mara",
    "support.title": "Frequently Asked Questions",
    "support.subtitle": "Find answers to common questions about our car hire and taxi services.",
    "support.faq1": "Ninawezaje kuhifadhi safari?",
    "support.faq1Desc": "Tumia kitufe cha \"Hifadhi Safari\" hapo chini kuwasilisha maelezo yako, na tutathibitisha nafasi yako.",
    "support.faq2": "Je, ninaweza kughairi nafasi yangu?",
    "support.faq2Desc": "Ndiyo, ughairi unaruhusiwa hadi saa 24 kabla ya safari yako iliyopangwa.",
    "support.faq3": "Je, ni njia gani za maliao zinazokubaliwa?",
    "support.faq3Desc": "Tunakubali pesa za simu, kadi za mkopo, na maliao ya pesa taslimu unapofika.",
    "support.faq4": "Je, kuna ada za ziada kwa kurudi kwa kuchelewa?",
    "support.faq4Desc": "Ndiyo, kurudi kwa kuchelewa kunaweza kuleta ada ya ziada kulingana na kiwango cha saa cha ukodishaji wako.",
    "support.faq5": "Je, naweza kuomba aina maalum ya gari?",
    "support.faq5Desc": "Tutafanya juhudi za kulijibu ombi lako, lakini upatikanaji unaweza kutofautiana kulingana na ratiba ya uhifadhi.",
    "support.faq6": "Je, bima imejumuishwa katika bei ya ukodishaji?",
    "support.faq6Desc": "Bima ya msingi imejumuishwa, lakini unaweza kuchagua chanjo ya ziada kwa ulinzi wa ziada.",
    "contact.title": "Wasiliana Nasi",
    "contact.subtitle": "Safari Yako Inaanza Hapa",
    "contact.description": "Unahitaji safari? Wasiliana nasi kuhifadhi safari yako ya pili na Drivana.",
    "contact.details": "Maelezo ya Mawasiliano",
    "contact.emailLabel": "Barua pepe:",
    "contact.phoneLabel": "Simu:",
    "contact.addressLabel": "Anwani:",
    "contact.response": "Tunajibu ndani ya siku 1 ya kazi.",
    "contact.formTitle": "Tuma Ujumbe",
    "contact.formEmail": "Barua pepe",
    "contact.formMessage": "Ujumbe",
    "contact.formCta": "Tuma Ujumbe",
    "ride.title": "Hifadhi Safari",
    "ride.name": "Jina Kamili",
    "ride.pickup": "Eneo la Kuchukua",
    "ride.dropoff": "Eneo la Kushusha",
    "ride.date": "Tarehe",
    "ride.time": "Saa",
    "ride.type": "Aina ya Safari",
    "ride.economy": "Gari la Uchumi",
    "ride.luxury": "Gari la Lujo",
    "ride.convertible": "Gari la Kubadilika",
    "ride.van": "Van",
    "ride.cta": "Hifadhi Sasa",
    "driverModal.title": "Kuwa Dereva",
    "driverModal.name": "Jina Kamili",
    "driverModal.email": "Barua pepe",
    "driverModal.phone": "Nambari ya Simu",
    "driverModal.license": "Nambari ya Leseni ya Udereva",
    "driverModal.cta": "Wasilisha Ombo",
    "footer.copyright": "© 2025 Drivana. Haki Zote Zimehifadhiwa."
  },
  de: {
    "navbar.title": "Drivana",
    "nav.home": "Startseite",
    "nav.about": "Über uns",
    "nav.services": "Dienstleistungen",
    "nav.pricing": "Preise",
    "nav.cars": "Autos",
    "nav.contact": "Kontakt",
    "nav.language": "Sprache",
    "lang.en": "Englisch",
    "lang.fr": "Französisch",
    "lang.sw": "Swahili",
    "lang.de": "Deutsch",
    "lang.es": "Spanisch",
    "hero.title": "Schnelle und einfache Möglichkeit, ein Auto zu mieten",
    "hero.subtitle": "Schnelle und zuverlässige Autovermietung und Taxidienste für alle Ihre Reisebedürfnisse.",
    "hero.cta": "Einfache Schritte zum Mieten eines Autos",
    "booking.title": "Planen Sie Ihre Reise",
    "booking.pickup": "Abholort",
    "booking.dropoff": "Rückgabeort",
    "booking.pickupDate": "Abholdatum",
    "booking.dropoffDate": "Rückgabedatum",
    "booking.pickupTime": "Abholzeit",
    "booking.cta": "Jetzt ein Auto mieten",
    "booking.stepsTitle": "Bessere Möglichkeit, Ihr perfektes Auto zu mieten",
    "booking.step1": "Wählen Sie Ihren Abholort",
    "booking.step2": "Wählen Sie das beste Angebot",
    "booking.step3": "Reservieren Sie Ihr Mietauto",
    "booking.reserveCta": "Reservieren Sie Ihr perfektes Auto",
    "services.title": "Unsere Fahroptionen",
    "services.economy": "Economy-Fahrt",
    "services.economyDesc": "Erschwinglich und effizient für kurze Stadtfahrten.",
    "services.luxury": "Luxus-Fahrt",
    "services.luxuryDesc": "Premium-Komfort für besondere Anlässe oder Geschäftsreisen.",
    "services.convertible": "Cabrio-Fahrt",
    "services.convertibleDesc": "Genießen Sie die frische Luft mit Stil auf malerischen Fahrten.",
    "services.van": "Van-Fahrt",
    "services.vanDesc": "Perfekt für große Gruppen oder Familienurlaube.",
    "about.title": "Über uns",
    "about.mission": "Unsere Mission",
    "about.description": "Bei Drivana sind wir bestrebt, nahtlose und zuverlässige Autovermietungs- und Taxidienste anzubieten, die auf Ihre Reisebedürfnisse zugeschnitten sind. Egal, ob Sie zu einer Hochzeit fahren, die Stadt erkunden oder einen Flug erwischen, unsere vielfältige Flotte und unser engagiertes Team sorgen dafür, dass Sie bequem und stilvoll reisen. Lassen Sie uns Sie mit Leichtigkeit an Ihr Ziel bringen!",
    "latest.title": "Unsere neuesten Dienstleistungen",
    "latest.wedding": "Hochzeitszeremonie",
    "latest.weddingDesc": "Kommen Sie stilvoll mit unseren Luxusfahrzeugen für Ihren besonderen Tag an.",
    "latest.city": "Stadttransfer",
    "latest.cityDesc": "Mühelose Transfers innerhalb der Stadt für Ihre Bequemlichkeit.",
    "latest.airport": "Flughafentransfer",
    "latest.airportDesc": "Zuverlässige Fahrten zum und vom Flughafen, jedes Mal pünktlich.",
    "latest.tour": "Stadtrundfahrt",
    "latest.tourDesc": "Erkunden Sie die Stadt mit unseren geführten Touren in Komfort.",
    "driver.title": "Drivana",
    "driver.promotion": "Möchten Sie mit uns verdienen? Seien Sie nicht zu spät.",
    "driver.cta": "Fahrer werden",
    "reviews.title": "Was unsere Kunden sagen",
    "reviews.testimonial1": "Drivana hat mich pünktlich zu meinem Meeting gebracht mit einem sauberen, komfortablen Auto!",
    "reviews.author1": "John K., Geschäftsreisender",
    "reviews.testimonial2": "Die Luxusfahrt war perfekt für meinen Hochzeitstag. Sehr empfehlenswert!",
    "reviews.author2": "Mary W., Braut",
    "reviews.testimonial3": "Ich habe Drivana für eine Familienreise genutzt, und der SUV war geräumig und zuverlässig.",
    "reviews.author3": "Peter O., Familienreisender",
    "reviews.testimonial4": "Der Fahrer war freundlich, und der Buchungsprozess war so einfach!",
    "reviews.author4": "Aisha M., Pendlerin",
    "reviews.testimonial5": "Drivanas Economy-Fahrt hat mir an einem hektischen Tag mit Besorgungen geholfen.",
    "reviews.author5": "Sarah K., Käuferin",
    "reviews.testimonial6": "Ich reise oft, und Drivana ist jetzt meine erste Wahl für Flughafentransfers.",
    "reviews.author6": "David L., Vielflieger",
    "support.title": "Frequently Asked Questions",
    "support.subtitle": "Find answers to common questions about our car hire and taxi services.",
    "support.faq1": "Wie buche ich eine Fahrt?",
    "support.faq1Desc": "Verwenden Sie die Schaltfläche \"Fahrt buchen\" unten, um Ihre Daten einzureichen, und wir bestätigen Ihre Buchung.",
    "support.faq2": "Kann ich meine Buchung stornieren?",
    "support.faq2Desc": "Ja, Stornierungen sind bis zu 24 Stunden vor Ihrer geplanten Fahrt möglich.",
    "support.faq3": "Welche Zahlungsmethoden werden akzeptiert?",
    "support.faq3Desc": "Wir akzeptieren mobile Zahlungen, Kreditkarten und Barzahlungen bei Ankunft.",
    "support.faq4": "Gibt es zusätzliche Gebühren für verspätete Rückgaben?",
    "support.faq4Desc": "Ja, verspätete Rückgaben können zusätzliche Gebühren verursachen, basierend auf dem stündlichen Tarif Ihrer Miete.",
    "support.faq5": "Kann ich ein bestimmtes Fahrzeugmodell anfordern?",
    "support.faq5Desc": "Wir werden unser Bestes tun, um Ihrer Anfrage nachzukommen, aber die Verfügbarkeit kann je nach Buchungskalender variieren.",
    "support.faq6": "Ist Versicherung im Mietpreis enthalten?",
    "support.faq6Desc": "Grundversicherung ist enthalten, aber Sie können eine zusätzliche Deckung für extra Schutz wählen.",
    "contact.title": "Kontaktieren Sie uns",
    "contact.subtitle": "Ihre Reise beginnt hier",
    "contact.description": "Brauchen Sie eine Fahrt? Kontaktieren Sie uns, um Ihre nächste Reise mit Drivana zu buchen.",
    "contact.details": "Kontaktdaten",
    "contact.emailLabel": "E-Mail:",
    "contact.phoneLabel": "Telefon:",
    "contact.addressLabel": "Adresse:",
    "contact.response": "Wir antworten innerhalb eines Werktages.",
    "contact.formTitle": "Nachricht senden",
    "contact.formEmail": "E-Mail",
    "contact.formMessage": "Nachricht",
    "contact.formCta": "Nachricht senden",
    "ride.title": "Fahrt buchen",
    "ride.name": "Vollständiger Name",
    "ride.pickup": "Abholort",
    "ride.dropoff": "Rückgabeort",
    "ride.date": "Datum",
    "ride.time": "Zeit",
    "ride.type": "Fahrttyp",
    "ride.economy": "Economy-Fahrt",
    "ride.luxury": "Luxus-Fahrt",
    "ride.convertible": "Cabrio-Fahrt",
    "ride.van": "Van-Fahrt",
    "ride.cta": "Jetzt buchen",
    "driverModal.title": "Fahrer werden",
    "driverModal.name": "Vollständiger Name",
    "driverModal.email": "E-Mail",
    "driverModal.phone": "Telefonnummer",
    "driverModal.license": "Führerscheinnummer",
    "driverModal.cta": "Bewerbung einreichen",
    "footer.copyright": "© 2025 Drivana. Alle Rechte vorbehalten."
  },
  es: {
    "navbar.title": "Drivana",
    "nav.home": "Inicio",
    "nav.about": "Sobre nosotros",
    "nav.services": "Servicios",
    "nav.pricing": "Precios",
    "nav.cars": "Autos",
    "nav.contact": "Contacto",
    "nav.language": "Idioma",
    "lang.en": "Inglés",
    "lang.fr": "Francés",
    "lang.sw": "Suajili",
    "lang.de": "Alemán",
    "lang.es": "Español",
    "hero.title": "Forma rápida y fácil de alquilar un auto",
    "hero.subtitle": "Servicios de alquiler de autos y taxis rápidos y confiables para todas tus necesidades de viaje.",
    "hero.cta": "Pasos fáciles para alquilar un auto",
    "booking.title": "Planifica tu viaje",
    "booking.pickup": "Lugar de recogida",
    "booking.dropoff": "Lugar de entrega",
    "booking.pickupDate": "Fecha de recogida",
    "booking.dropoffDate": "Fecha de entrega",
    "booking.pickupTime": "Hora de recogida",
    "booking.cta": "Alquila un auto ahora",
    "booking.stepsTitle": "Mejor manera de alquilar tu auto perfecto",
    "booking.step1": "Elige tu lugar de recogida",
    "booking.step2": "Selecciona la mejor oferta",
    "booking.step3": "Reserva tu auto de alquiler",
    "booking.reserveCta": "Reserva tu auto perfecto",
    "services.title": "Nuestras opciones de viaje",
    "services.economy": "Viaje económico",
    "services.economyDesc": "Asequible y eficiente para viajes cortos por la ciudad.",
    "services.luxury": "Viaje de lujo",
    "services.luxuryDesc": "Comodidad premium para ocasiones especiales o viajes de negocios.",
    "services.convertible": "Viaje convertible",
    "services.convertibleDesc": "Disfruta del aire libre con estilo en paseos escénicos.",
    "services.van": "Viaje en furgoneta",
    "services.vanDesc": "Perfecto para grupos grandes o vacaciones familiares.",
    "about.title": "Sobre nosotros",
    "about.mission": "Nuestra misión",
    "about.description": "En Drivana, estamos comprometidos a proporcionar servicios de alquiler de autos y taxis confiables y sin problemas adaptados a tus necesidades de viaje. Ya sea que te dirijas a una boda, explores la ciudad o tomes un vuelo, nuestra flota diversa y equipo dedicado aseguran que viajes con comodidad y estilo. ¡Déjanos llevarte a tu destino con facilidad!",
    "latest.title": "Nuestros últimos servicios",
    "latest.wedding": "Ceremonia de boda",
    "latest.weddingDesc": "Llega con estilo con nuestros vehículos de lujo para tu día especial.",
    "latest.city": "Traslado en la ciudad",
    "latest.cityDesc": "Traslados sin esfuerzo dentro de la ciudad para tu conveniencia.",
    "latest.airport": "Traslado al aeropuerto",
    "latest.airportDesc": "Viajes confiables hacia y desde el aeropuerto, siempre a tiempo.",
    "latest.tour": "Tour por toda la ciudad",
    "latest.tourDesc": "Explora la ciudad con nuestros tours guiados en comodidad.",
    "driver.title": "Drivana",
    "driver.promotion": "¿Quieres ganar dinero con nosotros? ¡No llegues tarde!",
    "driver.cta": "Conviértete en conductor",
    "reviews.title": "Lo que dicen nuestros clientes",
    "reviews.testimonial1": "¡Drivana me llevó a mi reunión a tiempo con un auto limpio y cómodo!",
    "reviews.author1": "John K., Viajero de negocios",
    "reviews.testimonial2": "El viaje de lujo fue perfecto para mi día de boda. ¡Muy recomendado!",
    "reviews.author2": "Mary W., Novia",
    "reviews.testimonial3": "Usé Drivana para un viaje familiar, y el SUV fue espacioso y confiable.",
    "reviews.author3": "Peter O., Viajero familiar",
    "reviews.testimonial4": "El conductor fue amable, y el proceso de reserva fue muy fácil!",
    "reviews.author4": "Aisha M., Viajera diaria",
    "reviews.testimonial5": "El viaje económico de Drivana me salvó durante un día ocupado de recados.",
    "reviews.author5": "Sarah K., Compradora",
    "reviews.testimonial6": "Viajo a menudo, y Drivana ahora es mi opción para traslados al aeropuerto.",
    "reviews.author6": "David L., Viajero frecuente",
    "support.title": "Frequently Asked Questions",
    "support.subtitle": "Find answers to common questions about our car hire and taxi services.",
    "support.faq1": "¿Cómo reservo un viaje?",
    "support.faq1Desc": "Usa el botón \"Reservar un viaje\" a continuación para enviar tus datos, y confirmaremos tu reserva.",
    "support.faq2": "¿Puedo cancelar mi reserva?",
    "support.faq2Desc": "Sí, se permiten cancelaciones hasta 24 horas antes de tu viaje programado.",
    "support.faq3": "¿Qué métodos de pago se aceptan?",
    "support.faq3Desc": "Aceptamos dinero móvil, tarjetas de crédito y pagos en efectivo al llegar.",
    "support.faq4": "¿Hay cargos adicionales por devoluciones tardías?",
    "support.faq4Desc": "Sí, las devoluciones tardías pueden incurrir en un cargo adicional basado en la tarifa por hora de tu alquiler.",
    "support.faq5": "¿Puedo solicitar un modelo de auto específico?",
    "support.faq5Desc": "Haremos lo mejor para atender tu solicitud, pero la disponibilidad puede variar según el calendario de reservas.",
    "support.faq6": "¿Está incluida la seguro en el precio de alquiler?",
    "support.faq6Desc": "El seguro básico está incluido, pero puedes optar por una cobertura adicional para mayor protección.",
    "contact.title": "Contáctanos",
    "contact.subtitle": "Tu viaje comienza aquí",
    "contact.description": "¿Necesitas un viaje? Contáctanos para reservar tu próximo viaje con Drivana.",
    "contact.details": "Detalles de contacto",
    "contact.emailLabel": "Correo electrónico:",
    "contact.phoneLabel": "Teléfono:",
    "contact.addressLabel": "Dirección:",
    "contact.response": "Respondemos dentro de 1 día hábil.",
    "contact.formTitle": "Enviar un mensaje",
    "contact.formEmail": "Correo electrónico",
    "contact.formMessage": "Mensaje",
    "contact.formCta": "Enviar mensaje",
    "ride.title": "Reservar un viaje",
    "ride.name": "Nombre completo",
    "ride.pickup": "Lugar de recogida",
    "ride.dropoff": "Lugar de entrega",
    "ride.date": "Fecha",
    "ride.time": "Hora",
    "ride.type": "Tipo de viaje",
    "ride.economy": "Viaje económico",
    "ride.luxury": "Viaje de lujo",
    "ride.convertible": "Viaje convertible",
    "ride.van": "Viaje en furgoneta",
    "ride.cta": "Reservar ahora",
    "driverModal.title": "Conviértete en conductor",
    "driverModal.name": "Nombre completo",
    "driverModal.email": "Correo electrónico",
    "driverModal.phone": "Número de teléfono",
    "driverModal.license": "Número de licencia de conducir",
    "driverModal.cta": "Enviar solicitud",
    "footer.copyright": "© 2025 Drivana. Todos los derechos reservados."
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[lang][key] || element.textContent;
  });
  document.documentElement.lang = lang;
  localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  setLanguage(savedLang);

  // Language dropdown toggle
  const languageBtn = document.querySelector(".language-btn");
  const languageMenu = document.querySelector(".language-menu");

  languageBtn.addEventListener("click", () => {
    languageMenu.classList.toggle("hidden");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!languageBtn.contains(e.target) && !languageMenu.contains(e.target)) {
      languageMenu.classList.add("hidden");
    }
  });

  // Language selection
  document.querySelectorAll("[data-lang]").forEach(button => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-lang");
      setLanguage(lang);
      languageMenu.classList.add("hidden"); // Close dropdown after selection
    });
  });

  // Hamburger menu
  const hamburger = document.querySelector(".hamburger");
  const leftMenu = document.querySelector(".left-menu");
  const rightMenu = document.querySelector(".right-menu");

  hamburger.addEventListener("click", () => {
    leftMenu.classList.toggle("active");
    rightMenu.classList.toggle("active");
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !isExpanded);

    // Toggle hamburger lines to vertical
    const lines = hamburger.querySelectorAll("span");
    lines.forEach(line => {
      line.classList.toggle("vertical");
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        // Close mobile menu if open
        if (leftMenu.classList.contains("active")) {
          leftMenu.classList.remove("active");
          rightMenu.classList.remove("active");
          hamburger.setAttribute("aria-expanded", "false");
          const lines = hamburger.querySelectorAll("span");
          lines.forEach(line => line.classList.remove("vertical"));
        }
      }
    });
  });

  // Modal handling
  const modals = document.querySelectorAll(".modal");
  const modalCloses = document.querySelectorAll(".modal-close");

  modalCloses.forEach(close => {
    close.addEventListener("click", () => {
      modals.forEach(modal => modal.classList.add("hidden"));
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      modals.forEach(modal => modal.classList.add("hidden"));
    }
  });

  // Talk to Us button
  const talkButton = document.querySelector(".talk-to-us-btn");
  const talkModal = document.querySelector("#talk-modal");

  talkButton.addEventListener("click", () => {
    talkModal.classList.remove("hidden");
  });

  // Become a Driver button
  const becomeDriverBtn = document.querySelector(".become-driver-btn");
  const driverModal = document.querySelector("#driver-modal");

  becomeDriverBtn.addEventListener("click", () => {
    driverModal.classList.remove("hidden");
  });

  // Horizontal scrolling for cards and testimonials
  document.querySelectorAll(".scroll-arrow").forEach(arrow => {
    arrow.addEventListener("click", () => {
      const direction = arrow.classList.contains("left") ? -1 : 1;
      const grid = arrow.parentElement.querySelector(".card-grid, .testimonial-grid");
      const scrollAmount = grid.clientWidth * 0.8 * direction;
      grid.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  // Form submissions
  function sendMessage() {
    const email = document.querySelector("#contact-form #email").value;
    const message = document.querySelector("#contact-form #message").value;
    const feedback = document.querySelector("#contact-feedback");

    if (!email || !message) {
      feedback.textContent = "Please fill in all fields.";
      feedback.classList.remove("hidden");
      return;
    }

    feedback.textContent = "Message sent successfully!";
    feedback.classList.remove("hidden", "text-red-500");
    feedback.classList.add("text-green-500");
    setTimeout(() => feedback.classList.add("hidden"), 3000);
  }

  document.querySelector("#ride-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#ride-form #full-name").value;
    const pickup = document.querySelector("#ride-form #pickup").value;
    const dropoff = document.querySelector("#ride-form #dropoff").value;
    const date = document.querySelector("#ride-form #date").value;
    const time = document.querySelector("#ride-form #time").value;
    const rideType = document.querySelector("#ride-form #ride-type").value;
    const formMessage = document.querySelector("#ride-form .form-message");

    if (!name || !pickup || !dropoff || !date || !time || !rideType) {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.classList.remove("hidden");
      return;
    }

    formMessage.textContent = "Ride booked successfully!";
    formMessage.classList.remove("hidden", "text-red-500");
    formMessage.classList.add("text-green-500");
    document.querySelector("#ride-modal").classList.add("hidden");
    setTimeout(() => formMessage.classList.add("hidden"), 3000);
  });

  document.querySelector("#driver-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#driver-form #driver-name").value;
    const email = document.querySelector("#driver-form #driver-email").value;
    const phone = document.querySelector("#driver-form #driver-phone").value;
    const license = document.querySelector("#driver-form #driver-license").value;
    const driverMessage = document.querySelector("#driver-form .driver-message");

    if (!name || !email || !phone || !license) {
      driverMessage.textContent = "Please fill in all fields.";
      driverMessage.classList.remove("hidden");
      return;
    }

    driverMessage.textContent = "Application submitted successfully!";
    driverMessage.classList.remove("hidden", "text-red-500");
    driverMessage.classList.add("text-green-500");
    document.querySelector("#driver-modal").classList.add("hidden");
    setTimeout(() => driverMessage.classList.add("hidden"), 3000);
  });

  // FAQ toggle function
  function toggleFAQ(element) {
    const answer = element.querySelector('.faq-answer');
    const icon = element.querySelector('.text-teal-600');
    answer.classList.toggle('active');
    element.classList.toggle('active');
    icon.classList.toggle('active');
  }
});

// Add this CSS to style.css to handle the vertical hamburger lines
// .hamburger span {
//   transition: all 0.3s ease;
// }

// .hamburger.active span:nth-child(1) {
//   transform: rotate(0) translateY(0);
//   opacity: 1;
// }

// .hamburger.active span:nth-child(2) {
//   transform: rotate(0) translateY(8px);
//   opacity: 1;
// }

// .hamburger.active span:nth-child(3) {
//   transform: rotate(0) translateY(16px);
//   opacity: 1;
// }

// .hamburger span.vertical {
//   transform: rotate(90deg);
// }