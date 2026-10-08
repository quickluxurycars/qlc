
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Libre_Baskerville, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
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

export const metadata: Metadata = {
  title: 'Quick Luxury Cars - Premium Car Rental in Delhi NCR | Chauffeur & Self-Drive',
  description: 'Experience luxury car rental in Delhi NCR with Quick Luxury Cars. Rent Mercedes, BMW, Audi, Rolls Royce, Bentley & more. Premium chauffeur and self-drive services for weddings, events, and travel.',
  keywords: 'luxury car rental Delhi NCR, premium car hire, Mercedes rental, BMW rental, Audi rental, Rolls Royce rental, Bentley rental, chauffeur service Delhi, self-drive luxury cars, wedding car rental, airport transfer Delhi, supercar rental India',
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
    description: 'Rent luxury cars in Delhi NCR. Mercedes, BMW, Audi, Rolls Royce, Bentley & more. Chauffeur and self-drive services available.',
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
    <html lang="en" className={`${libreBaskerville.variable} ${playfairDisplay.variable} ${plusJakartaSans.variable}`}>
      <head>
        <meta name="google-site-verification" content="9GipYLPFgBelUCE3suvs7d4yEVWS6d5xcalvtKWe-Pg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Quick Luxury Cars",
              "description": "Premium luxury car rental service in Delhi NCR offering chauffeur and self-drive options for Mercedes, BMW, Audi, Rolls Royce, Bentley and more.",
              "url": "https://quickluxurycars.in",
              "telephone": "+919899946298",
              "email": "quickluxurycars@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Delhi NCR",
                "addressRegion": "Delhi",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.6139",
                "longitude": "77.2090"
              },
              "areaServed": ["Delhi", "Noida", "Gurgaon", "Faridabad", "Ghaziabad"],
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "₹₹₹",
              "image": "https://quickluxurycars.in/images/cars/rolls_royce/1.jpeg",
              "sameAs": [
                "https://www.instagram.com/quickluxurycars"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Car",
                    "name": "Audi A3",
                    "brand": { "@type": "Brand", "name": "Audi" },
                    "vehicleConfiguration": "Convertible",
                    "vehicleSeatingCapacity": 5,
                    "color": "Black",
                    "image": "https://quickluxurycars.in/images/cars/audi_a3/1.jpeg"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Car",
                    "name": "Mercedes E400",
                    "brand": { "@type": "Brand", "name": "Mercedes" },
                    "vehicleConfiguration": "Sedan",
                    "vehicleSeatingCapacity": 5,
                    "color": "White",
                    "image": "https://quickluxurycars.in/images/cars/mercedes_e400/1.jpeg"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Car",
                    "name": "Mercedes G63",
                    "brand": { "@type": "Brand", "name": "Mercedes" },
                    "vehicleConfiguration": "SUV",
                    "vehicleSeatingCapacity": 5,
                    "color": "Black",
                    "image": "https://quickluxurycars.in/images/cars/mercedes_g63/1.jpeg"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}