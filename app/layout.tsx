
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Libre_Baskerville, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${playfairDisplay.variable} ${plusJakartaSans.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}