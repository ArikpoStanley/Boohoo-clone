"use client"
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Brand {
  id: number;
  imageUrl: string;
}

const BrandsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const brands: Brand[] = [
    {
      id: 1,
      imageUrl: '/carousel/brandCarousel1.png',
    },
    {
      id: 2,
      imageUrl: '/carousel/brandCarousel2.png',
    },
    {
      id: 3,
      imageUrl: '/carousel/brandCarousel3.png',
    },
    {
      id: 4,
      imageUrl: '/carousel/brandCarousel4.png',
    },
    {
      id: 5,
      imageUrl: '/carousel/brandCarousel5.png',
    },
    {
      id: 6,
      imageUrl: '/carousel/brandCarousel6.png',
    },
    {
      id: 7,
      imageUrl: '/carousel/brandCarousel7.png',
    },
    {
      id: 8,
      imageUrl: '/carousel/oasis.png',
    },
    {
      id: 9,
      imageUrl: '/carousel/paris.png',
    },
    {
      id: 10,
      imageUrl: '/carousel/wallis.png',
    },
    {
      id: 11,
      imageUrl: '/carousel/dp.png',
    },
    {
      id: 12,
      imageUrl: '/carousel/coast.png',
    },
    {
      id: 13,
      imageUrl: '/carousel/ann.png',
    },
    {
      id: 14,
      imageUrl: '/carousel/where.png',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full py-5 bg-white">
      <div className="max-w-[95%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Brands on boohoo</h2>
        
        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 justify-between pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {brands.map((brand) => (
              <Link 
                href={`/brands/${brand.id}`} 
                key={brand.id}
                className="relative min-w-[110px] md:min-w-[337px] h-[150px] md:h-[420px] flex-shrink-0 snap-start overflow-hidden group"
              >
                <div className="absolute inset-0 transition-all duration-300 z-10" />
                <div className="w-full h-full relative">
                  {/* In a real implementation, replace with your actual images */}
                  <div className="bg-gray-200 w-full h-full relative">
                    <Image 
                      src={brand?.imageUrl} 
                      alt={brand?.imageUrl}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
             
              </Link>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-30 hover:bg-gray-100 transition-colors"
            aria-label="Previous brands"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-30 hover:bg-gray-100 transition-colors"
            aria-label="Next brands"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;