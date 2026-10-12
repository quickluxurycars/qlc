import Link from 'next/link';
import Image from 'next/image';
import { cars } from './data/cars';
import JsonLd from './JsonLd';
import { InfoPageData, CITIES, SERVICES, SITE, carSlug, faqSchema, breadcrumbSchema } from './lib/site';

export default function InfoPage({ page, basePath }: { page: InfoPageData; basePath: string }) {
  const path = `${basePath}/${page.slug}`;
  return (
    <main className="max-w-[1100px] mx-auto px-4 md:px-8 py-16 space-y-12">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: page.h1, path }])} />
      <JsonLd data={faqSchema(page.faqs)} />
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl text-text-primary font-headline-lg">{page.h1}</h1>
        {page.intro.map((p, i) => (
          <p key={i} className="text-lg text-text-muted leading-relaxed">{p}</p>
        ))}
        <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full bg-primary-container text-on-primary-container uppercase tracking-wider font-semibold">
          Book on WhatsApp
        </a>
      </header>

      {page.sections.map((s) => (
        <section key={s.heading} className="space-y-2">
          <h2 className="text-2xl text-text-primary font-headline-lg">{s.heading}</h2>
          <p className="text-text-muted leading-relaxed">{s.body}</p>
        </section>
      ))}

      <section className="space-y-6">
        <h2 className="text-2xl text-text-primary font-headline-lg">Our luxury car fleet</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cars.map((car) => (
            <Link key={car.id} href={`/cars/${carSlug(car)}`} className="rounded-xl overflow-hidden bg-surface-carbon block">
              <div className="relative h-32">
                <Image src={car.images[0]} alt={`${car.name} on rent in Delhi NCR`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="p-3 text-sm text-text-primary">{car.name}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl text-text-primary font-headline-lg">Frequently asked questions</h2>
        {page.faqs.map((f) => (
          <div key={f.q}>
            <h3 className="text-lg text-text-primary font-semibold">{f.q}</h3>
            <p className="text-text-muted">{f.a}</p>
          </div>
        ))}
      </section>

      <nav className="space-y-2" aria-label="Related pages">
        <h2 className="text-xl text-text-primary font-headline-lg">Also explore</h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-gold-light">
          {CITIES.map((c) => (<li key={c.slug}><Link href={`/luxury-car-rental/${c.slug}`}>{c.h1}</Link></li>))}
          {SERVICES.map((s) => (<li key={s.slug}><Link href={`/services/${s.slug}`}>{s.h1}</Link></li>))}
        </ul>
      </nav>
    </main>
  );
}
