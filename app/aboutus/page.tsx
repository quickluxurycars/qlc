export default function AboutUs() {
  return (
    <div className="min-h-screen transition-colors pt-4">
      {/* Atmospheric Ambient Background Light Glows */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-primary/10 rounded-full blur-[140px]"></div>
        <div className="pointer-events-none absolute top-[900px] -right-48 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[160px]"></div>

        {/* Main Content */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 space-y-12">
          {/* QLC Introduction */}
          <section className="space-y-6">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-px bg-primary"></span>
                <span className="text-sm uppercase tracking-[0.2em] text-gold-burnished">About Quick Luxury Cars</span>
                <span className="w-8 h-px bg-primary"></span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary font-headline-lg mb-4">
                At QLC, luxury is not an upgrade—it&apos;s a standard.
              </h2>
            </div>
            <div className="space-y-4 text-text-muted leading-relaxed text-lg max-w-4xl mx-auto">
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
              <p className="text-xl font-headline-lg text-gold-burnished text-center pt-4">
                Experience the art of refined mobility.
              </p>
            </div>
          </section>

          {/* Vision and Mission */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8 border border-gold-subtle">
              <h3 className="text-3xl font-headline-lg text-text-primary mb-6 flex items-center gap-3">
                <span className="text-4xl">🎯</span> Our Vision
              </h3>
              <p className="text-text-muted leading-relaxed">
                To become the most trusted luxury mobility platform—where premium experiences are not occasional
                indulgences, but a seamless part of modern living. We envision a future where renting a luxury car
                feels intuitive, personalized, and as effortless as owning one—without the commitments.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 border border-gold-subtle">
              <h3 className="text-3xl font-headline-lg text-text-primary mb-6 flex items-center gap-3">
                <span className="text-4xl">🚀</span> Our Mission
              </h3>
              <p className="text-text-muted leading-relaxed">
                To combine exceptional vehicles, intuitive technology, and refined service to deliver a luxury car
                rental experience that exceeds expectations—every journey, every time.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-text-muted leading-relaxed text-lg text-center">
                For travel, weddings and your special day, we supply the best and most trustworthy luxury
                automobiles for rent. Call us at{' '}
                <a href="tel:+919899946298" className="text-gold-burnished hover:text-primary transition-colors font-semibold">
                  +91 9899946298
                </a>{' '}
                or email us at{' '}
                <a href="mailto:quickluxurycars@gmail.com" className="text-gold-burnished hover:text-primary transition-colors font-semibold">
                  quickluxurycars@gmail.com
                </a>{' '}
                to make a reservation.
              </p>
            </div>
          </section>

          {/* Our Fleet */}
          <section className="glass rounded-2xl p-8 md:p-12 border border-gold-subtle">
            <h2 className="text-3xl md:text-4xl text-text-primary font-headline-lg mb-6 text-center">
              Premium Fleet Selection
            </h2>
            <p className="text-text-muted leading-relaxed text-lg text-center mb-8">
              We offer luxury cars like <span className="font-semibold text-gold-light">Jaguar, Mercedes, Rolls Royce, Mustang,
            Range Rover, Audi,</span> and many more. We offer 24-hour online booking,
            a large selection of luxury cars, and exceptional rental car services.
            </p>
          </section>

          {/* Special Occasions */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-text-primary font-headline-lg mb-6">
              Make Every Occasion Special
            </h2>
            <div className="glass rounded-xl p-8 border-l-4 border-primary">
              <p className="text-text-muted leading-relaxed text-lg">
                Our luxury cars are ready to zoom you for important occasions where you want to make an impression,
                whether it&apos;s a business deal or a personal one. There are times in life when you want to make
                yourself and someone special, or when you need to represent who you are on a formal vacation,
                thus you can now rent our luxury cruises with our wonderful packs.
              </p>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 hover:shadow-xl transition-shadow border border-gold-subtle">
              <div className="text-gold-burnished text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold mb-3 text-text-primary">Wide Selection</h3>
              <p className="text-text-muted">
                We provide the widest selection of cabs, allowing you to find the best car for your needs.
              </p>
            </div>

            <div className="glass rounded-xl p-6 hover:shadow-xl transition-shadow border border-gold-subtle">
              <div className="text-gold-burnished text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold mb-3 text-text-primary">24/7 Booking</h3>
              <p className="text-text-muted">
                Book your luxury car anytime with our convenient 24-hour online booking system.
              </p>
            </div>

            <div className="glass rounded-xl p-6 hover:shadow-xl transition-shadow border border-gold-subtle">
              <div className="text-gold-burnished text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-3 text-text-primary">Premium Service</h3>
              <p className="text-text-muted">
                Exceptional rental car services with quality you can trust.
              </p>
            </div>
          </section>

          {/* Service Area */}
          <section className="glass rounded-2xl p-8 md:p-12 text-center border border-gold-subtle">
            <h2 className="text-3xl md:text-4xl font-headline-lg mb-4 text-gold-burnished">Service Area</h2>
            <p className="text-xl text-text-muted">
              Currently we operate in <span className="font-semibold text-text-primary">Delhi and NCR region</span> only.
            </p>
          </section>

          {/* CTA Section */}
          <section className="text-center py-8">
            <h2 className="text-3xl md:text-4xl text-text-primary font-headline-lg mb-6">
              Ready to Experience Luxury?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919899946298"
                className="inline-block bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-on-primary transition-colors text-lg shadow-[0_0_20px_rgba(212,175,55,0.25)]"
              >
                Call Now: +91 9899946298
              </a>
              <a
                href="/collection"
                className="inline-block bg-surface-elevated text-gold-light px-8 py-4 rounded-lg font-semibold hover:bg-surface-container-high transition-colors text-lg border border-gold-subtle"
              >
                View Our Collection
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
