import type { Metadata } from 'next';
import CollectionClient from './CollectionClient';
import JsonLd from '../JsonLd';
import { cars } from '../data/cars';
import { absUrl, carSlug, breadcrumbSchema } from '../lib/site';

export const metadata: Metadata = {
  title: 'Luxury Car Collection | Rent Mercedes, BMW, Rolls Royce in Delhi NCR',
  description: 'Browse our luxury car fleet in Delhi NCR: Rolls Royce, Bentley Bentayga, Mercedes S Class, Maybach, G63, BMW 7 Series, Range Rover and more. Available across Delhi NCR, Punjab, Rajasthan, Uttarakhand, and Uttar Pradesh.',
  alternates: { canonical: '/collection' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Collection', path: '/collection' }])} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: cars.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, url: absUrl(`/cars/${carSlug(c)}`), image: absUrl(c.images[0]) })),
      }} />
      <CollectionClient />
    </>
  );
}
