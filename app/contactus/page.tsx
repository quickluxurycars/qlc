'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { cars } from '../data/cars';

function ContactUsForm() {
  const searchParams = useSearchParams();
  const prefilledCar = searchParams.get('car');

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    carModel: prefilledCar || '',
    rentalDuration: '',
    bookingDate: '',
    remarks: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Update carModel when prefilled car changes
  useEffect(() => {
    if (prefilledCar) {
      setFormData(prev => ({ ...prev, carModel: prefilledCar }));
    }
  }, [prefilledCar]);

  const carModels = [...cars.map(car => car.name), 'Other'];

  const rentalDurations = [
    '4 hours',
    '8 hours',
    '12 hours',
    '16 hours',
    '20 hours',
    '24 hours (1 day)',
    '2 days',
    '3 days',
    '4 days',
    '5+ days'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Validate required fields
      if (!formData.name || !formData.contact || !formData.carModel || 
          !formData.rentalDuration || !formData.bookingDate) {
        setSubmitStatus('error');
        return;
      }

      // Parse the date into year, month, day for Google Form
      const dateObj = new Date(formData.bookingDate + 'T00:00:00');
      
      // Validate date
      if (isNaN(dateObj.getTime())) {
        setSubmitStatus('error');
        return;
      }
      
      const year = dateObj.getFullYear().toString();
      const month = (dateObj.getMonth() + 1).toString();
      const day = dateObj.getDate().toString();
      const googleCarModel = formData.carModel === 'Other' ? 'Option 10' : formData.carModel;
      const normalizedRemarks = formData.remarks.trim();
      
      const formBody = new URLSearchParams();
      formBody.append('entry.634883967', formData.name.trim());
      formBody.append('entry.1351199764', formData.contact.trim());
      formBody.append('entry.232425082', googleCarModel);
      formBody.append('entry.522611408', formData.rentalDuration);
      formBody.append('entry.1737053830_year', year);
      formBody.append('entry.1737053830_month', month);
      formBody.append('entry.1737053830_day', day);
      formBody.append('entry.415551485', normalizedRemarks);

      // Create a timeout promise
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      );

      // Race between fetch and timeout
      await Promise.race([
        fetch('https://docs.google.com/forms/d/e/1FAIpQLSdWvpb6gIU9Y1cN4q4DR6RV42jo-0U8FmJoeXsAQH9ubDCOKg/formResponse', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: formBody,
        }),
        timeoutPromise
      ]);
      
      // Wait a bit to ensure submission completes
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setSubmitStatus('success');
      
      // Clear form on success
      setFormData({
        name: '',
        contact: '',
        carModel: '',
        rentalDuration: '',
        bookingDate: '',
        remarks: ''
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen transition-colors pt-4">
      {/* Atmospheric Ambient Background Light Glows */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-primary/10 rounded-full blur-[140px]"></div>
        <div className="pointer-events-none absolute top-[900px] -right-48 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[160px]"></div>

        {/* Main Content */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
          {/* Contact Form */}
          <div className="mb-16">
            <div className="max-w-3xl mx-auto glass rounded-2xl shadow-xl p-8 md:p-12 border border-gold-subtle">
              <h2 className="text-3xl md:text-4xl text-text-primary font-headline-lg mb-8 text-center">
                Book Your Luxury Experience
              </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-surface-variant bg-surface-carbon text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Contact Field */}
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-text-muted mb-2">
                  Mobile Number or Email Address*
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-surface-variant bg-surface-carbon text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Enter mobile number or email"
                />
              </div>

              {/* Car Model and Rental Duration - Side by Side on Desktop */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="carModel" className="block text-sm font-medium text-text-muted mb-2">
                    Car You&apos;re Interested In*
                  </label>
                  <select
                    id="carModel"
                    name="carModel"
                    required
                    value={formData.carModel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-surface-variant bg-surface-carbon text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select a car</option>
                    {carModels.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="rentalDuration" className="block text-sm font-medium text-text-muted mb-2">
                    Rental Duration*
                  </label>
                  <select
                    id="rentalDuration"
                    name="rentalDuration"
                    required
                    value={formData.rentalDuration}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-surface-variant bg-surface-carbon text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select duration</option>
                    {rentalDurations.map((duration) => (
                      <option key={duration} value={duration}>
                        {duration}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Booking Date */}
              <div>
                <label htmlFor="bookingDate" className="block text-sm font-medium text-text-muted mb-2">
                  Preferred Date*
                </label>
                <input
                  type="date"
                  id="bookingDate"
                  name="bookingDate"
                  required
                  value={formData.bookingDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-lg border border-surface-variant bg-surface-carbon text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>

              {/* Remarks */}
              <div>
                <label htmlFor="remarks" className="block text-sm font-medium text-text-muted mb-2">
                  Additional Comments
                </label>
                <textarea
                  id="remarks"
                  name="remarks"
                  rows={4}
                  value={formData.remarks}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-surface-variant bg-surface-carbon text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Enter any special requests or questions..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-container text-on-primary-container py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-on-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(212,175,55,0.25)]"
              >
                {isSubmitting ? 'Submitting...' : 'SUBMIT'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="glass border border-green-500/30 text-green-400 px-4 py-3 rounded-lg flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold">Success!</p>
                    <p>Thank you! Your inquiry has been submitted successfully. We&apos;ll get back to you soon.</p>
                  </div>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="glass border border-red-500/30 text-red-400 px-4 py-3 rounded-lg flex items-start gap-3">
                  <span className="text-2xl">⚠</span>
                  <div>
                    <p className="font-semibold">Submission Failed</p>
                    <p>Sorry, there was an error submitting your form. Please try again or contact us directly at{' '}
                      <a href="tel:+919899946298" className="underline font-semibold">+91 9899946298</a>
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-primary"></span>
            <span className="text-sm uppercase tracking-[0.2em] text-gold-burnished">Get In Touch</span>
            <span className="w-8 h-px bg-primary"></span>
          </div>
          <h2 className="text-3xl md:text-4xl text-gold-burnished font-headline-lg mb-4">Contact Info</h2>
        </div>

        {/* Map and Contact Details - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Google Map */}
          <div className="glass rounded-2xl shadow-lg overflow-hidden border border-gold-subtle h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d736.1433520217237!2d77.34482483093367!3d28.638522942222746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM4JzE4LjAiTiA3N8KwMjAnNDAuNyJF!5e0!3m2!1sen!2sin!4v1770302189629!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="QLC Location"
            />
          </div>

          {/* Contact Details */}
          <div className="glass rounded-2xl shadow-lg p-8 md:p-10 border border-gold-subtle space-y-8">
            {/* Email */}
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-3">
                <span className="text-2xl">📧</span> Email Address
              </h3>
              <a
                href="mailto:quickluxurycars@gmail.com"
                className="text-gold-burnished hover:text-primary transition-colors text-lg"
              >
                quickluxurycars@gmail.com
              </a>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-3">
                <span className="text-2xl">📍</span> Address
              </h3>
              <p className="text-text-muted leading-relaxed">
                E-1<br />
                Suraksha Apartments, Abhay Khand 3<br />
                Indirapuram, Ghaziabad - 201010
              </p>
            </div>

            {/* Phone Numbers */}
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-3">
                <span className="text-2xl">📞</span> Phone Numbers
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:+919899946298"
                  className="block text-gold-burnished hover:text-primary transition-colors text-lg"
                >
                  +91 9899946298
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-surface-variant">
              <p className="text-text-muted italic">
                Available 24/7 for your luxury car rental needs
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <hr className="border-t border-surface-variant mb-4 w-72" />
            <h2 className="text-3xl md:text-4xl text-gold-burnished font-headline-lg">We&apos;re Ready When You Are</h2>
          </div>
          <p className="text-lg text-text-muted leading-relaxed mt-4">
            Get in touch for reservations, pricing, or any assistance you need. Our experts are available to guide you every step of the way.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default function ContactUs() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-text-primary"><p>Loading...</p></div>}>
      <ContactUsForm />
    </Suspense>
  );
}
