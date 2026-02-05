import Link from 'next/link';
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 w-full">
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
        {/* Journey Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-serif text-[#C9A961]">Your Journey Begins Here</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Book your luxury car today and redefine the way you travel.
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-4 md:border-l md:border-gray-700 md:pl-8 lg:pl-12">
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <div className="text-gray-400 text-sm space-y-2">
            <a href="tel:+919899946298" className="block hover:text-white transition-colors">
              +919899946298
            </a>
            <div className="mt-4">
              <p className="text-white font-medium mb-1">Email Address</p>
              <a href="mailto:quickluxurycars@gmail.com" className="block hover:text-white transition-colors">
                quickluxurycars@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Social Section */}
        <div className="space-y-4 md:border-l md:border-gray-700 md:pl-8 lg:pl-12">
          <h4 className="text-xl font-semibold mb-4">Social</h4>
          <div className="space-y-3">
            <Link href="https://www.instagram.com/quickluxurycars" target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <FaInstagram size={20} />
              <span>Instagram</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <FaFacebook size={20} />
              <span>Facebook</span>
            </Link>
          </div>
        </div>

        {/* Company Section */}
        <div className="space-y-4 md:border-l md:border-gray-700 md:pl-8 lg:pl-12">
          <h4 className="text-xl font-semibold mb-4">Company</h4>
          <div className="space-y-3">
            <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/collection" className="block text-gray-400 hover:text-white transition-colors">
              Collection
            </Link>
            <Link href="/aboutus" className="block text-gray-400 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/contactus" className="block text-gray-400 hover:text-white transition-colors">
              Contact us
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}
