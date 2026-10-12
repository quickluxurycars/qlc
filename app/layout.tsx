
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Libre_Baskerville, Playfair_Display, Plus_Jakarta_Sans, Montserrat } from 'next/font/google';
import { Metadata } from 'next';

const libreBaskerville = Libre_Baskerville({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Luxury Car Rental in Delhi NCR | Chauffeur-Driven | Quick Luxury Cars',
  alternates: { canonical: '/' },
  description: 'Experience luxury car rental in Delhi NCR with Quick Luxury Cars. Rent Mercedes, BMW, Audi, Rolls Royce, Bentley & more. Premium chauffeur services for weddings, events, and travel across Delhi NCR, Punjab, Rajasthan, Uttarakhand, and Uttar Pradesh.',
  keywords: 'luxury car rental Delhi NCR, premium car hire, Mercedes rental, BMW rental, Audi rental, Rolls Royce rental, Bentley rental, chauffeur service Delhi, wedding car rental, airport transfer Delhi, supercar rental India, luxury car rental Punjab, luxury car rental Rajasthan, luxury car rental Uttarakhand, luxury car rental Uttar Pradesh',
  authors: [{ name: 'Quick Luxury Cars' }],
  creator: 'Quick Luxury Cars',
  publisher: 'Quick Luxury Cars',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://quickluxurycars.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://quickluxurycars.in',
    title: 'Quick Luxury Cars - Premium Car Rental in Delhi NCR',
    description: 'Rent luxury cars in Delhi NCR. Mercedes, BMW, Audi, Rolls Royce, Bentley & more. Chauffeur services available.',
    siteName: 'Quick Luxury Cars',
    images: [
      {
        url: '/images/cars/rolls_royce/1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Quick Luxury Cars - Premium Car Rental',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quick Luxury Cars - Premium Car Rental in Delhi NCR',
    description: 'Rent luxury cars in Delhi NCR. Mercedes, BMW, Audi, Rolls Royce, Bentley & more.',
    images: ['/images/cars/rolls_royce/1.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '9GipYLPFgBelUCE3suvs7d4yEVWS6d5xcalvtKWe-Pg',
  },

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${playfairDisplay.variable} ${plusJakartaSans.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}