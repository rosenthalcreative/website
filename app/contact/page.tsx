'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { COMPANY_INFO } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="font-cormorant text-6xl font-bold text-[#D4AF37] mb-4">
              Get in Touch
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E89B9B] to-[#D4AF37] mx-auto mb-6"></div>
            <p className="font-inter text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Ready to bring your vision to life? We'd love to hear about your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="font-cormorant text-3xl font-bold text-[#E89B9B] mb-6">
                Send us a Message
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                  <p className="font-inter text-green-700 text-sm">
                    Thank you! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-inter text-sm font-medium text-[#2C2C2C] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#E89B9B]/30 focus:border-[#E89B9B] focus:outline-none font-inter"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-inter text-sm font-medium text-[#2C2C2C] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#E89B9B]/30 focus:border-[#E89B9B] focus:outline-none font-inter"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-inter text-sm font-medium text-[#2C2C2C] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#E89B9B]/30 focus:border-[#E89B9B] focus:outline-none font-inter"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block font-inter text-sm font-medium text-[#2C2C2C] mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#E89B9B]/30 focus:border-[#E89B9B] focus:outline-none font-inter"
                  >
                    <option value="">Select a service...</option>
                    <option value="events">Event Management</option>
                    <option value="weddings">Weddings</option>
                    <option value="interior">Interior Design</option>
                    <option value="custom-builds">Custom Builds</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-inter text-sm font-medium text-[#2C2C2C] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#E89B9B]/30 focus:border-[#E89B9B] focus:outline-none font-inter resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#E89B9B] text-white font-inter font-medium rounded-full hover:bg-[#D4AF37] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="font-cormorant text-3xl font-bold text-[#E89B9B] mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-[#E89B9B] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h3 className="font-inter font-semibold text-[#2C2C2C] mb-1">Email</h3>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="font-inter text-[#2C2C2C]/70 hover:text-[#E89B9B] transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-[#E89B9B] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <div>
                      <h3 className="font-inter font-semibold text-[#2C2C2C] mb-1">Instagram</h3>
                      <a
                        href={COMPANY_INFO.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-inter text-[#2C2C2C]/70 hover:text-[#E89B9B] transition-colors"
                      >
                        {COMPANY_INFO.instagram}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#F5A6A6]/20 to-[#E89B9B]/20 p-8 rounded-lg">
                <h3 className="font-cormorant text-2xl font-bold text-[#D4AF37] mb-4">
                  Business Hours
                </h3>
                <p className="font-inter text-[#2C2C2C]/70">
                  We typically respond to inquiries within 24-48 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
