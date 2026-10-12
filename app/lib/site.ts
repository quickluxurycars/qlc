import { cars, Car } from '../data/cars';

export const SITE = {
  url: 'https://quickluxurycars.in',
  name: 'Quick Luxury Cars',
  phone: '+919899946298',
  email: 'quickluxurycars@gmail.com',
  instagram: 'https://www.instagram.com/quickluxurycars',
  whatsapp: 'https://wa.me/919899946298?text=Hi, I\'m interested in your luxury car rental services. Please provide more details.',
};

export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const carSlug = (car: Car) => slugify(car.name);
export const getCarBySlug = (slug: string) => cars.find((c) => carSlug(c) === slug);
export const absUrl = (path: string) => `${SITE.url}${path}`;

export interface FAQ { q: string; a: string }

export interface InfoPageData {
  slug: string;
  title: string;      // <title>
  h1: string;
  description: string;
  intro: string[];
  sections: { heading: string; body: string }[];
  faqs: FAQ[];
}

export const CITIES: InfoPageData[] = [
  {
    slug: 'delhi',
    title: 'Luxury Car Rental in Delhi | Chauffeur-Driven',
    h1: 'Luxury Car Rental in Delhi',
    description: 'Rent Mercedes, BMW, Rolls Royce, Bentley and more in Delhi. Chauffeur-driven luxury cars with professional chauffeur. Book on WhatsApp.',
    intro: [
      'Quick Luxury Cars offers premium chauffeur-driven car rental across Delhi, from Lutyens\' Delhi and Connaught Place to South Delhi, Dwarka and Rohini.',
      'Choose from sedans, SUVs and convertibles by Mercedes, BMW, Rolls Royce, Bentley, Jaguar, Range Rover and more. Our professional chauffeur arrives at your location with the car.',
    ],
    sections: [
      { heading: 'Popular uses in Delhi', body: 'Weddings and baraat transport, IGI Airport pick-ups and drops, corporate visits, hotel arrivals, photoshoots and special occasions.' },
      { heading: 'Areas we serve in Delhi', body: 'Connaught Place, Chanakyapuri, Vasant Vihar, Greater Kailash, Defence Colony, Aerocity, Dwarka, Rohini, Pitampura and the rest of Delhi.' },
    ],
    faqs: [
      { q: 'Do you offer luxury car rental with a chauffeur in Delhi?', a: 'Yes. All cars in our fleet are available with a professional chauffeur who stays with the car throughout your journey. Message us on WhatsApp to confirm availability.' },
      { q: 'Where can the chauffeur arrive with the car in Delhi?', a: 'Our chauffeur arrives at your location with the car. Share your location when you enquire.' },
    ],
  },
  {
    slug: 'noida',
    title: 'Luxury Car Rental in Noida | Chauffeur-Driven',
    h1: 'Luxury Car Rental in Noida',
    description: 'Premium luxury car rental in Noida and Greater Noida. Mercedes, BMW, Audi, Range Rover and more with chauffeur.',
    intro: [
      'Looking for a luxury car on rent in Noida? Quick Luxury Cars provides premium sedans, SUVs and convertibles to Noida and Greater Noida for weddings, events, business and leisure.',
      'Whether you need a Mercedes S Class for a corporate day or a Bentley Bentayga for a celebration, our professional chauffeur arrives at your location with the car.',
    ],
    sections: [
      { heading: 'Areas we serve in Noida', body: 'Sector 18, Sector 62, Sector 50, Noida Expressway, Greater Noida, Greater Noida West and nearby sectors.' },
      { heading: 'Popular uses', body: 'Wedding car hire, airport transfers to IGI and Jewar, corporate meetings, film and photo shoots, anniversaries and birthdays.' },
    ],
    faqs: [
      { q: 'Do you provide luxury cars on rent in Noida?', a: 'Yes. Our professional chauffeur arrives at your location with the car across Noida and Greater Noida.' },
      { q: 'How do I book a car in Noida?', a: 'Pick a car from our collection and send your date, duration and pick-up location on WhatsApp or the contact form.' },
    ],
  },
  {
    slug: 'gurgaon',
    title: 'Luxury Car Rental in Gurgaon | Chauffeur-Driven',
    h1: 'Luxury Car Rental in Gurgaon',
    description: 'Rent luxury cars in Gurgaon (Gurugram). Mercedes, BMW, Rolls Royce and SUVs with chauffeur. Professional chauffeur arrives at your location across Gurgaon.',
    intro: [
      'Quick Luxury Cars provides luxury car rental in Gurgaon (Gurugram) for corporate travel, weddings, events and special occasions.',
      'Our fleet includes Mercedes, BMW, Rolls Royce, Maybach, Range Rover and more, available with a professional chauffeur who stays with the car throughout your journey.',
    ],
    sections: [
      { heading: 'Areas we serve in Gurgaon', body: 'Cyber Hub, Golf Course Road, DLF Phases 1-5, Sohna Road, MG Road, Udyog Vihar and New Gurgaon.' },
      { heading: 'Popular uses', body: 'Executive transport, hotel and airport transfers, wedding hire, brand events and special occasions.' },
    ],
    faqs: [
      { q: 'Can I hire a luxury car with driver in Gurgaon?', a: 'Yes. Chauffeur-driven hire is available across Gurgaon for hourly, half-day and full-day bookings.' },
      { q: 'Do you serve Cyber Hub and Golf Course Road?', a: 'Yes, our chauffeur arrives at your location across Gurgaon. Share your address when you enquire.' },
    ],
  },
  {
    slug: 'ghaziabad',
    title: 'Luxury Car Rental in Ghaziabad | Chauffeur-Driven',
    h1: 'Luxury Car Rental in Ghaziabad',
    description: 'Luxury car rental in Ghaziabad: Indirapuram, Vaishali, Raj Nagar Extension and more. Chauffeur-driven Mercedes, BMW and SUVs.',
    intro: [
      'Quick Luxury Cars offers premium car rental in Ghaziabad for weddings, family functions, business travel and airport transfers.',
      'Our professional chauffeur arrives at your location with sedans, SUVs and convertibles in Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension, Kaushambi and nearby areas.',
    ],
    sections: [
      { heading: 'Popular uses', body: 'Wedding car hire, baraat and bride entry, birthday and anniversary celebrations, airport drops and corporate trips.' },
    ],
    faqs: [
      { q: 'Do you rent luxury cars in Ghaziabad?', a: 'Yes. Our professional chauffeur arrives at your location with the car in Ghaziabad.' },
    ],
  },
  {
    slug: 'faridabad',
    title: 'Luxury Car Rental in Faridabad | Chauffeur-Driven',
    h1: 'Luxury Car Rental in Faridabad',
    description: 'Rent luxury cars in Faridabad. Mercedes, BMW, Audi and SUVs with chauffeur. Professional chauffeur arrives at your location across Faridabad and Delhi NCR.',
    intro: [
      'Quick Luxury Cars provides luxury car rental in Faridabad for weddings, events, business travel and special occasions.',
      'Choose a sedan, SUV or convertible from our fleet and our professional chauffeur will arrive at your location in Faridabad or anywhere in Delhi NCR.',
    ],
    sections: [
      { heading: 'Popular uses', body: 'Wedding hire, corporate transport, airport transfers, celebrations and special occasions.' },
    ],
    faqs: [
      { q: 'Do you offer luxury car hire in Faridabad?', a: 'Yes. Contact us on WhatsApp with your date and duration and we will confirm availability.' },
    ],
  },
];

export const SERVICES: InfoPageData[] = [
  {
    slug: 'wedding-car-rental-delhi',
    title: 'Wedding Car Rental in Delhi NCR | Luxury Cars for Baraat & Bride',
    h1: 'Wedding Car Rental in Delhi NCR',
    description: 'Luxury wedding car rental in Delhi NCR. Rolls Royce, Bentley, Mercedes and more for baraat, bride entry and vidaai, with professional chauffeurs.',
    intro: [
      'Make your wedding entry unforgettable with a luxury car from Quick Luxury Cars. We provide Rolls Royce, Bentley, Maybach, Mercedes and other premium cars for weddings across Delhi NCR, Punjab, Rajasthan, Uttarakhand, and Uttar Pradesh.',
      'Our professional chauffeur arrives at your location with a clean, ready car and stays with you throughout the event.',
    ],
    sections: [
      { heading: 'Ideal for', body: 'Baraat, groom entry, bride entry, vidaai, pre-wedding shoots, reception arrivals and guest transport.' },
      { heading: 'Booking tip', body: 'Wedding dates fill quickly. Enquire early with the date, venue and timing so we can reserve your car.' },
    ],
    faqs: [
      { q: 'Which cars are best for a wedding?', a: 'Rolls Royce, Bentley Bentayga, Maybach and Mercedes S Class are popular for wedding entries. Browse the collection and message us for availability.' },
      { q: 'Is a chauffeur included for weddings?', a: 'Yes, a professional chauffeur is included and stays with the car throughout your wedding event.' },
    ],
  },
  {
    slug: 'chauffeur-driven-luxury-cars-delhi',
    title: 'Chauffeur-Driven Luxury Car Rental in Delhi NCR',
    h1: 'Chauffeur-Driven Luxury Cars in Delhi NCR',
    description: 'Hire a luxury car with a professional chauffeur in Delhi NCR for business, airport transfers and events. Hourly and full-day options.',
    intro: [
      'Arrive in style with a professional chauffeur. Quick Luxury Cars provides chauffeur-driven Mercedes, BMW, Jaguar, Range Rover and more across Delhi NCR.',
      'Hire by the hour or by the day for meetings, events, sightseeing or intercity travel.',
    ],
    sections: [
      { heading: 'Why choose a chauffeur', body: 'Relax, work or prepare on the way while an experienced driver handles traffic and parking.' },
    ],
    faqs: [
      { q: 'Can I hire a chauffeur-driven car for a few hours?', a: 'Yes. Our booking form offers durations from 4 hours to multiple days.' },
    ],
  },
  {
    slug: 'airport-transfer-delhi-luxury-car',
    title: 'Luxury Airport Transfer in Delhi | IGI Airport Car Rental',
    h1: 'Luxury Airport Transfers in Delhi NCR',
    description: 'Luxury airport pick-up and drop at Delhi IGI Airport. Mercedes, BMW and SUVs with professional chauffeurs across Delhi NCR.',
    intro: [
      'Start or end your trip in comfort with a luxury airport transfer to and from Indira Gandhi International Airport. Our chauffeurs serve Delhi NCR, Punjab, Rajasthan, Uttarakhand, and Uttar Pradesh.',
    ],
    sections: [
      { heading: 'How it works', body: 'Share your flight details and address on WhatsApp. We confirm the car and chauffeur for your time.' },
    ],
    faqs: [
      { q: 'Can you pick me up from IGI Airport?', a: 'Yes. Share your flight number and arrival time and we will arrange the pick-up.' },
    ],
  },
];

export const orgSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'AutoRental',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  image: absUrl('/images/cars/rolls_royce/1.jpeg'),
  priceRange: '₹₹₹',
  address: { '@type': 'PostalAddress', addressLocality: 'Delhi', addressRegion: 'Delhi', addressCountry: 'IN' },
  areaServed: ['Delhi', 'Noida', 'Gurgaon', 'Ghaziabad', 'Faridabad', 'Punjab', 'Rajasthan', 'Uttarakhand', 'Uttar Pradesh'].map((n) => ({ '@type': 'City', name: n })),
  sameAs: [SITE.instagram],
});

export const faqSchema = (faqs: FAQ[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: absUrl(it.path) })),
});
