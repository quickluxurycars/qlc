import { MetadataRoute } from 'next'
import { cars } from './data/cars'
import { CITIES, SERVICES, SITE, carSlug } from './lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url
  const now = new Date()
  const entry = (path: string, priority: number, changeFrequency: 'daily' | 'weekly' | 'monthly') => ({
    url: `${base}${path}`, lastModified: now, changeFrequency, priority,
  })
  return [
    entry('', 1, 'daily'),
    entry('/collection', 0.9, 'weekly'),
    ...CITIES.map((c) => entry(`/luxury-car-rental/${c.slug}`, 0.85, 'monthly')),
    ...SERVICES.map((s) => entry(`/services/${s.slug}`, 0.85, 'monthly')),
    ...cars.map((c) => entry(`/cars/${carSlug(c)}`, 0.8, 'weekly')),
    entry('/contactus', 0.8, 'monthly'),
    entry('/aboutus', 0.7, 'monthly'),
  ]
}
