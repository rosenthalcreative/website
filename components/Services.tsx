import { SERVICES } from '@/lib/constants';
import Link from 'next/link';

export default function Services() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-5xl sm:text-6xl font-bold text-[#D4AF37] mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E89B9B] to-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#FAF7F2] p-8 rounded-lg hover:bg-gradient-to-br hover:from-[#F5A6A6]/10 hover:to-[#E89B9B]/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[#2C2C2C] mb-4">
                {service.title}
              </h3>
              <p className="font-inter text-[#2C2C2C]/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 font-inter font-medium text-[#E89B9B] hover:text-[#D4AF37] transition-colors duration-200"
          >
            <span>Learn More About Our Services</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
