import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { COMPANY_INFO, SERVICES } from '@/lib/constants';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="font-cormorant text-6xl font-bold text-[#D4AF37] mb-4">
              About Us
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E89B9B] to-[#D4AF37] mx-auto"></div>
          </div>

          {/* Story */}
          <div className="bg-white p-10 rounded-lg shadow-lg mb-12">
            <h2 className="font-cormorant text-4xl font-bold text-[#E89B9B] mb-6">
              Our Story
            </h2>
            <div className="space-y-4 font-inter text-[#2C2C2C]/80 leading-relaxed">
              <p>
                Established in {COMPANY_INFO.established}, <strong>{COMPANY_INFO.name}</strong> has been
                bringing creative visions to life through thoughtful design and expert craftsmanship.
              </p>
              <p>
                We specialize in creating unforgettable experiences and beautifully designed spaces
                that reflect our clients' unique style and personality. From intimate gatherings to
                grand celebrations, from residential interiors to custom installations, we approach
                every project with the same dedication to excellence.
              </p>
              <p>
                Our in-house workshop allows us to create bespoke pieces and custom builds,
                ensuring that every detail is perfectly tailored to your vision. We believe that
                great design is in the details, and we're passionate about bringing those details
                to life.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="bg-white p-10 rounded-lg shadow-lg mb-12">
            <h2 className="font-cormorant text-4xl font-bold text-[#E89B9B] mb-8">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.map((service) => (
                <div key={service.id} className="flex items-start space-x-4">
                  <div className="text-3xl flex-shrink-0">{service.icon}</div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-[#2C2C2C] mb-2">
                      {service.title}
                    </h3>
                    <p className="font-inter text-sm text-[#2C2C2C]/70">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-br from-[#F5A6A6]/20 to-[#E89B9B]/20 p-10 rounded-lg mb-12">
            <h2 className="font-cormorant text-4xl font-bold text-[#D4AF37] mb-6 text-center">
              Our Philosophy
            </h2>
            <blockquote className="font-inter text-xl text-[#2C2C2C]/80 italic text-center leading-relaxed">
              "Design + Make. We don't just dream up beautiful concepts—we bring them to life with
              our own hands, ensuring every detail exceeds expectations."
            </blockquote>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="font-inter text-lg text-[#2C2C2C]/70 mb-8">
              Ready to work together on your next project?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#E89B9B] bg-transparent text-[#E89B9B] font-inter font-medium rounded-full hover:bg-[#E89B9B]/10 transition-all duration-300"
              >
                View Our Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#E89B9B] bg-[#E89B9B] text-white font-inter font-medium rounded-full hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
