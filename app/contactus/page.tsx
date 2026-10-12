import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Book a Luxury Car in Delhi NCR | Contact Quick Luxury Cars',
  description: 'Contact Quick Luxury Cars to book a chauffeur-driven luxury car in Delhi NCR, Punjab, Rajasthan, Uttarakhand, and Uttar Pradesh. Call or WhatsApp +91 98999 46298.',
  alternates: { canonical: '/contactus' },
};

export default function Page() {
  return <ContactClient />;
}
