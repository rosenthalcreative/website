import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';
import imagesMetadata from '@/data/images-metadata.json';

export default function GalleryPreview() {
  // Get 6 random images from the gallery
  const previewImages = imagesMetadata
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-5xl sm:text-6xl font-bold text-[#D4AF37] mb-4">
            Featured Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E89B9B] to-[#D4AF37] mx-auto mb-6"></div>
          <p className="font-inter text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
            Explore our portfolio of beautiful events, elegant interiors, and custom creations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previewImages.map((image, index) => (
            <Link
              key={index}
              href="/gallery"
              className="group relative aspect-square overflow-hidden rounded-lg bg-[#E89B9B]/10"
            >
              <Image
                src={getAssetPath(`/images/${image.categories[0]}/${image.filename}`)}
                alt={image.caption || 'Rosenthal Creative work'}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="font-inter text-white font-medium px-6 py-3 border-2 border-white rounded-full">
                  View Project
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#E89B9B] bg-[#E89B9B] text-white font-inter font-medium rounded-full hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 transform hover:scale-105"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
