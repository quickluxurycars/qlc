import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-surface-obsidian text-white py-16 w-full border-t border-surface-variant">
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
        {/* Journey Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-headline-lg text-gold-burnished">Your Journey Begins Here</h3>
          <p className="text-text-muted text-sm leading-relaxed">
            Book your luxury car today and redefine the way you travel.
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-4 md:border-l md:border-surface-variant md:pl-8 lg:pl-12">
          <h4 className="text-xl font-semibold mb-4 text-text-primary">Contact</h4>
          <div className="text-text-muted text-sm space-y-2">
            <a href="tel:+919899946298" className="block hover:text-gold-light transition-colors">
              +919899946298
            </a>
            <div className="mt-4">
              <p className="text-white font-medium mb-1">Email Address</p>
              <a href="mailto:quickluxurycars@gmail.com" className="block hover:text-gold-light transition-colors">
                quickluxurycars@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Social Section */}
        <div className="space-y-4 md:border-l md:border-surface-variant md:pl-8 lg:pl-12">
          <h4 className="text-xl font-semibold mb-4 text-text-primary">Social</h4>
          <div className="space-y-3">
            <Link href="https://www.instagram.com/quickluxurycars" target="_blank" className="flex items-center gap-3 text-text-muted hover:text-gold-light transition-colors">
              <FaInstagram size={20} />
              <span>Instagram</span>
            </Link>
            <Link href="https://wa.me/919899946298?text=Hi, I'm interested in your luxury car rental services. Please provide more details." target="_blank" className="flex items-center gap-3 text-text-muted hover:text-gold-light transition-colors">
              <FaWhatsapp size={20} />
              <span>WhatsApp</span>
            </Link>
          </div>
        </div>

        {/* Company Section */}
        <div className="space-y-4 md:border-l md:border-surface-variant md:pl-8 lg:pl-12">
          <h4 className="text-xl font-semibold mb-4 text-text-primary">Company</h4>
          <div className="space-y-3">
            <Link href="/" className="block text-text-muted hover:text-gold-light transition-colors">
              Home
            </Link>
            <Link href="/collection" className="block text-text-muted hover:text-gold-light transition-colors">
              Collection
            </Link>
            <Link href="/aboutus" className="block text-text-muted hover:text-gold-light transition-colors">
              About Us
            </Link>
            <Link href="/contactus" className="block text-text-muted hover:text-gold-light transition-colors">
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-[1440px] mx-auto mt-12 pt-8 border-t border-surface-variant">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © 2026 Quick Luxury Cars. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-text-muted text-sm">
            <Link href="#" className="hover:text-gold-light transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold-light transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
