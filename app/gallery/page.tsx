'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { CATEGORIES, type CategoryKey } from '@/lib/constants';
import { getAssetPath } from '@/lib/utils';

// Import metadata
import imagesMetadata from '@/data/images-metadata.json';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter images based on selected category and search
  const filteredImages = useMemo(() => {
    return imagesMetadata.filter((image) => {
      const matchesCategory =
        selectedCategory === 'all' || image.categories.includes(selectedCategory);
      const matchesSearch =
        searchQuery === '' ||
        image.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="font-cormorant text-6xl font-bold text-[#D4AF37] mb-4">
              Gallery
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E89B9B] to-[#D4AF37] mx-auto mb-6"></div>
            <p className="font-inter text-lg text-[#2C2C2C]/70">
              Explore {imagesMetadata.length} images from our portfolio
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12 space-y-6">
            {/* Search */}
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search by caption or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 rounded-full border-2 border-[#E89B9B]/30 focus:border-[#E89B9B] focus:outline-none font-inter text-[#2C2C2C] placeholder:text-[#2C2C2C]/40"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(CATEGORIES).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key as CategoryKey | 'all')}
                  className={`px-6 py-2 rounded-full font-inter font-medium transition-all duration-200 ${
                    selectedCategory === key
                      ? 'bg-[#E89B9B] text-white shadow-lg'
                      : 'bg-white text-[#2C2C2C] hover:bg-[#E89B9B]/10 border-2 border-[#E89B9B]/20'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Results count */}
            <p className="text-center font-inter text-sm text-[#2C2C2C]/60">
              Showing {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
            </p>
          </div>

          {/* Masonry Gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={`${image.filename}-${index}`}
                className="break-inside-avoid relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={getAssetPath(`/images/${image.categories[0]}/${image.filename}`)}
                    alt={image.caption || 'Rosenthal Creative work'}
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  {image.caption && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                      <p className="font-inter text-sm text-white line-clamp-3">
                        {image.caption}
                      </p>
                      {image.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {image.tags.slice(0, 3).map((tag: string) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-[#E89B9B] text-white text-xs rounded-full font-inter"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="font-inter text-lg text-[#2C2C2C]/50">
                No images found matching your criteria
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
