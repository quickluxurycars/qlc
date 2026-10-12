import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import InfoPage from '../../InfoPage';
import { SERVICES } from '../../lib/site';

export function generateStaticParams() {
  return SERVICES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = SERVICES.find((p) => p.slug === params.slug);
  if (!page) return {};
  const url = `/services/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: { title: page.title, description: page.description, url, type: 'website' },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = SERVICES.find((p) => p.slug === params.slug);
  if (!page) notFound();
  return <InfoPage page={page} basePath="/services" />;
}
