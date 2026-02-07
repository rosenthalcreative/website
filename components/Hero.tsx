import { COMPANY_INFO } from '@/lib/constants';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] via-[#F5A6A6]/10 to-[#E89B9B]/20">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-block">
            <h1 className="font-cormorant text-6xl sm:text-7xl lg:text-8xl font-bold text-[#D4AF37] mb-2">
              {COMPANY_INFO.name}
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#E89B9B] to-transparent"></div>
          </div>
        </div>

        <p className="font-inter text-xl sm:text-2xl text-[#2C2C2C]/80 mb-4 tracking-wide">
          {COMPANY_INFO.tagline}
        </p>

        <p className="font-inter text-lg sm:text-xl text-[#2C2C2C]/60 mb-8">
          {COMPANY_INFO.description}
        </p>

        <p className="font-inter text-sm text-[#2C2C2C]/40 mb-12 tracking-widest">
          ESTABLISHED {COMPANY_INFO.established}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#E89B9B] bg-[#E89B9B] text-white font-inter font-medium rounded-full hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 transform hover:scale-105"
          >
            View Our Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#E89B9B] bg-transparent text-[#E89B9B] font-inter font-medium rounded-full hover:bg-[#E89B9B]/10 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#E89B9B]/50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
