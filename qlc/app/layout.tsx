
import "./globals.css";
import Navbar from "./Navbar";

import { Libre_Baskerville } from 'next/font/google';

const libreBaskerville = Libre_Baskerville({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-libre-baskerville', // This creates a CSS variable
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${libreBaskerville.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}