import Link from 'next/link';
import HomeHero from './HomeHero';
import JsonLd from './JsonLd';
import { CITIES, SERVICES, SITE, faqSchema, orgSchema, FAQ } from './lib/site';
import { cars } from './data/cars';
import { carSlug } from './lib/site';

const faqs: FAQ[] = [
  { q: 'Do you offer luxury car rental in Delhi NCR?', a: 'Yes. Quick Luxury Cars offers chauffeur-driven luxury cars across Delhi NCR, Punjab, Rajasthan, Uttarakhand, and Uttar Pradesh.' },
  { q: 'Which luxury cars can I rent?', a: 'Our fleet includes Rolls Royce, Bentley Bentayga, Mercedes S Class, Maybach, G63, BMW 5 and 7 Series, Jaguar XF, Range Rover Evoque, Hummer H2 and Audi A3 Convertible.' },
  { q: 'Where can the chauffeur arrive with the car?', a: 'Our chauffeur arrives at your location with the car. The chauffeur stays with the car throughout your journey.' },
  { q: 'How do I book?', a: 'Choose a car from the collection and send us your date, duration and location on WhatsApp or the contact form. We will confirm availability and rates.' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.name, url: SITE.url }} />
      <JsonLd data={orgSchema()} />
      <JsonLd data={faqSchema(faqs)} />
      <HomeHero />
      <section className="max-w-[1100px] mx-auto px-4 md:px-8 py-12 space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl text-text-primary font-headline-lg">Luxury Car Rental in Delhi NCR</h2>
          <p className="text-text-muted leading-relaxed">
            Quick Luxury Cars is a premium car rental service in Delhi NCR offering chauffeur-driven luxury cars for weddings, corporate travel, airport transfers and special occasions. Every car is inspected and our professional chauffeur arrives at your location with the car across Delhi NCR, Punjab, Rajasthan, Uttarakhand, and Uttar Pradesh.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl text-text-primary font-headline-lg">Our luxury fleet</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2" style={{ color: 'var(--gold-light)' }}>
            {cars.map((c) => (<li key={c.id}><Link href={`/cars/${carSlug(c)}`}>{c.name} rental</Link></li>))}
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl text-text-primary font-headline-lg">Services</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2" style={{ color: 'var(--gold-light)' }}>
            {SERVICES.map((s) => (<li key={s.slug}><Link href={`/services/${s.slug}`}>{s.h1}</Link></li>))}
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl text-text-primary font-headline-lg">Areas we serve</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2" style={{ color: 'var(--gold-light)' }}>
            {CITIES.map((c) => (<li key={c.slug}><Link href={`/luxury-car-rental/${c.slug}`}>{c.h1}</Link></li>))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl text-text-primary font-headline-lg">Frequently asked questions</h2>
          {faqs.map((f) => (
            <div key={f.q}><h3 className="text-lg text-text-primary font-semibold">{f.q}</h3><p className="text-text-muted">{f.a}</p></div>
          ))}
        </div>
      </section>
    </>
  );
}
