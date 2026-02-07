import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SERVICES } from '@/lib/constants';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="font-cormorant text-6xl font-bold text-[#D4AF37] mb-4">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E89B9B] to-[#D4AF37] mx-auto mb-6"></div>
            <p className="font-inter text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto leading-relaxed">
              From concept to creation, we bring your vision to life with meticulous attention to detail
              and a passion for beautiful design.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="md:w-1/3 flex justify-center">
                  <div className="text-8xl transform hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <div className="md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="font-cormorant text-4xl font-bold text-[#E89B9B] mb-4">
                    {service.title}
                  </h2>
                  <p className="font-inter text-[#2C2C2C]/80 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={`/gallery?category=${service.id}`}
                    className="inline-flex items-center space-x-2 font-inter font-medium text-[#E89B9B] hover:text-[#D4AF37] transition-colors duration-200"
                  >
                    <span>View {service.title} Gallery</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-br from-[#F5A6A6]/20 to-[#E89B9B]/20 p-12 rounded-lg text-center">
            <h2 className="font-cormorant text-4xl font-bold text-[#D4AF37] mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="font-inter text-lg text-[#2C2C2C]/70 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something beautiful. Get in touch to discuss your vision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#E89B9B] bg-[#E89B9B] text-white font-inter font-medium rounded-full hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
