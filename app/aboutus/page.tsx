export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black transition-colors">
      {/* Hero Section */}
      <div className="bg-black dark:bg-gray-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 text-[#C9A961]">About Us</h1>
          <p className="text-xl text-gray-300 dark:text-gray-400">We don’t just rent cars. We curate experiences for those who expect more from every drive.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        {/* QLC Introduction */}
        <section className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-4">
              At QLC, luxury is not an upgrade—it&apos;s a standard.
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            <p>
              We specialize in providing an exclusive selection of high-end and exotic vehicles for those who value 
              elegance, performance, and comfort in every journey. Whether you&apos;re arriving for business, celebrating 
              a milestone, or simply choosing to drive something extraordinary, we ensure your experience is seamless 
              from start to finish.
            </p>
            <p>
              Our fleet is carefully curated and meticulously maintained, featuring world-class luxury sedans, SUVs, 
              and performance cars from the most iconic automotive brands. Every vehicle reflects our commitment to 
              quality, safety, and uncompromising excellence.
            </p>
            <p>
              What truly sets us apart is our personalized approach. From flexible rental options to doorstep delivery 
              and discreet service, every detail is handled with precision and care. We believe luxury should feel 
              effortless—never complicated.
            </p>
            <p>
              Based in Delhi, we serve discerning clients who expect reliability, privacy, and a level of service 
              that goes beyond the ordinary. With QLC, every drive is more than transportation—it&apos;s a statement.
            </p>
            <p className="text-xl font-serif text-[#C9A961] text-center pt-4">
              Experience the art of refined mobility.
            </p>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#C9A961]/10 to-transparent dark:from-[#C9A961]/20 dark:to-transparent rounded-2xl p-8 border-2 border-[#C9A961]/30">
            <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-4xl">🎯</span> Our Vision
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To become the most trusted luxury mobility platform—where premium experiences are not occasional 
              indulgences, but a seamless part of modern living. We envision a future where renting a luxury car 
              feels intuitive, personalized, and as effortless as owning one—without the commitments.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[#C9A961]/10 to-transparent dark:from-[#C9A961]/20 dark:to-transparent rounded-2xl p-8 border-2 border-[#C9A961]/30">
            <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-4xl">🚀</span> Our Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To combine exceptional vehicles, intuitive technology, and refined service to deliver a luxury car 
              rental experience that exceeds expectations—every journey, every time.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-center">
              For travel, weddings and your special day, we supply the best and most trustworthy luxury 
              automobiles for rent. Call us at{' '}
              <a href="tel:+919899946298" className="text-[#C9A961] hover:underline font-semibold">
                +91 9899946298
              </a>{' '}
              or email us at{' '}
              <a href="mailto:quickluxurycars@gmail.com" className="text-[#C9A961] hover:underline font-semibold">
                quickluxurycars@gmail.com
              </a>{' '}
              to make a reservation.
            </p>
          </div>
        </section>

        {/* Our Fleet */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 dark:border-gray-700">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white mb-6 text-center">
            Premium Fleet Selection
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-center mb-8">
            We offer luxury cars like <span className="font-semibold">Jaguar, Mercedes, Rolls Royce, Mustang, 
            Range Rover, Audi,</span> and many more at competitive prices. We offer 24-hour online booking, 
            a large selection of luxury cars, and exceptional rental car services at extremely low rates.
          </p>
        </section>

        {/* Special Occasions */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white mb-6">
            Make Every Occasion Special
          </h2>
          <div className="bg-gradient-to-r from-[#C9A961]/10 to-transparent dark:from-[#C9A961]/20 dark:to-transparent rounded-xl p-8 border-l-4 border-[#C9A961]">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Our luxury cars are ready to zoom you for important occasions where you want to make an impression, 
              whether it&apos;s a business deal or a personal one. There are times in life when you want to make 
              yourself and someone special, or when you need to represent who you are on a formal vacation, 
              thus you can now rent our luxury cruises with our wonderful packs.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-transparent dark:border-gray-700">
            <div className="text-[#C9A961] text-4xl mb-4">🚗</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Wide Selection</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We provide the widest selection of cabs, allowing you to find the best car for your needs.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-transparent dark:border-gray-700">
            <div className="text-[#C9A961] text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">24/7 Booking</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Book your luxury car anytime with our convenient 24-hour online booking system.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-transparent dark:border-gray-700">
            <div className="text-[#C9A961] text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Competitive Prices</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Exceptional rental car services at extremely low rates without compromising quality.
            </p>
          </div>
        </section>

        {/* Service Area */}
        <section className="bg-black dark:bg-gray-950 text-white rounded-2xl p-8 md:p-12 text-center border border-transparent dark:border-gray-800">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#C9A961]">Service Area</h2>
          <p className="text-xl text-gray-300 dark:text-gray-400">
            Currently we operate in <span className="font-semibold text-white">Delhi and NCR region</span> only.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center py-8">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white mb-6">
            Ready to Experience Luxury?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919899946298" 
              className="inline-block bg-[#C9A961] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B8984F] transition-colors text-lg"
            >
              Call Now: +91 9899946298
            </a>
            <a 
              href="/collection" 
              className="inline-block bg-gray-900 dark:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors text-lg"
            >
              View Our Collection
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
