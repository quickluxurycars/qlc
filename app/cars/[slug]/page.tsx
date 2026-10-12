import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cars } from '../../data/cars';
import JsonLd from '../../JsonLd';
import { absUrl, carSlug, getCarBySlug, breadcrumbSchema, faqSchema } from '../../lib/site';

export const dynamicParams = false;
export function generateStaticParams() {
  return cars.map((c) => ({ slug: carSlug(c) }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const car = getCarBySlug(params.slug);
  if (!car) return {};
  const title = `${car.name} Rental in Delhi NCR | Chauffeur & Self-Drive`;
  const description = `Rent the ${car.name} (${car.type}, ${car.seating} seats, ${car.color}) in Delhi, Noida, Gurgaon and Ghaziabad. Chauffeur-driven or self-drive with doorstep delivery.`;
  const url = `/cars/${carSlug(car)}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', images: [{ url: car.images[0], alt: `${car.name} rental Delhi NCR` }] },
    twitter: { card: 'summary_large_image', title, description, images: [car.images[0]] },
  };
}

export default function CarPage({ params }: { params: { slug: string } }) {
  const car = getCarBySlug(params.slug);
  if (!car) notFound();
  const path = `/cars/${carSlug(car)}`;
  const faqs = [
    { q: `Can I rent the ${car.name} with a chauffeur?`, a: `Yes, the ${car.name} is available with a professional chauffeur. Self-drive is available on selected cars; confirm on WhatsApp.` },
    { q: `Where can the ${car.name} be delivered?`, a: 'We deliver across Delhi, Noida, Gurgaon, Ghaziabad and Faridabad.' },
  ];
  const wa = `https://wa.me/919899946298?text=${encodeURIComponent(`Hi, I'd like to rent the ${car.name}. Please share availability and rates.`)}`;
  return (
    <main className="max-w-[1100px] mx-auto px-4 md:px-8 py-16 space-y-10">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Collection', path: '/collection' }, { name: car.name, path }])} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: `${car.name} Rental in Delhi NCR`,
        description: `${car.name} ${car.type} for rent with chauffeur or self-drive in Delhi NCR.`,
        brand: { '@type': 'Brand', name: car.brand },
        category: `${car.type} car rental`,
        color: car.color,
        image: car.images.map(absUrl),
        url: absUrl(path),
      }} />
      <nav className="text-sm text-text-muted" aria-label="Breadcrumb">
        <Link href="/">Home</Link> / <Link href="/collection">Collection</Link> / {car.name}
      </nav>
      <h1 className="text-4xl md:text-5xl text-text-primary font-headline-lg">{car.name} Rental in Delhi NCR</h1>
      <p className="text-lg text-text-muted">
        {car.brand} {car.name} · {car.type} · {car.seating} seats · {car.color}. Available with chauffeur, and self-drive on selected dates, across Delhi, Noida, Gurgaon, Ghaziabad and Faridabad.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {car.images.map((src, i) => (
          <div key={src} className="relative h-72 rounded-xl overflow-hidden">
            <Image src={src} alt={`${car.name} luxury car rental Delhi NCR - photo ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority={i === 0} />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        <a href={wa} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-primary-container text-on-primary-container uppercase tracking-wider font-semibold">Book on WhatsApp</a>
        <Link href={`/contactus?car=${encodeURIComponent(car.name)}`} className="px-8 py-3 rounded-full border border-primary text-primary uppercase tracking-wider">Enquire online</Link>
      </div>
      <section className="space-y-4">
        <h2 className="text-2xl text-text-primary font-headline-lg">FAQs</h2>
        {faqs.map((f) => (
          <div key={f.q}><h3 className="text-lg text-text-primary font-semibold">{f.q}</h3><p className="text-text-muted">{f.a}</p></div>
        ))}
      </section>
    </main>
  );
}
