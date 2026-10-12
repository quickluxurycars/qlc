import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import InfoPage from '../../InfoPage';
import { CITIES } from '../../lib/site';

export const dynamicParams = false;
export function generateStaticParams() {
  return CITIES.map((p) => ({ city: p.slug }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const page = CITIES.find((p) => p.slug === params.city);
  if (!page) return {};
  const url = `/luxury-car-rental/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: { title: page.title, description: page.description, url, type: 'website' },
  };
}

export default function Page({ params }: { params: { city: string } }) {
  const page = CITIES.find((p) => p.slug === params.city);
  if (!page) notFound();
  return <InfoPage page={page} basePath="/luxury-car-rental" />;
}
