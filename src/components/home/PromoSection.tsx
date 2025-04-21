"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PromotionalBanner {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
  buttonText: string;
}

interface PromotionalBannersProps {
  banners: PromotionalBanner[];
}

const PromotionalBanners: React.FC<PromotionalBannersProps> = ({ banners }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.85;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.85;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full my-10 relative">
      {/* Carousel container with snap scroll */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {banners.map((banner) => (
          <div 
            key={banner.id} 
            className="relative min-w-[85%] xl:min-w-[19%] pr-4 xl:pr-0 snap-start"
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={banner.imageUrl}
                alt={banner.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end">
                <div className="p-6">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-4 tracking-wide">
                    {banner.title}
                  </h3>
                  <Link href={banner.link} className="block">
                    <button className="bg-transparent hover:bg-white text-white hover:text-black py-3 w-full border border-white transition-colors duration-300 font-semibold">
                      {banner.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}       
      </div>

      {/* Navigation buttons */}
      <button 
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/90 rounded-full w-10 h-10 flex items-center justify-center shadow-md xl:hidden "
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button 
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/90 rounded-full w-10 h-10 flex items-center justify-center shadow-md xl:hidden"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Add this CSS to hide scrollbar */}
      <style jsx global>{`
        /* For Webkit browsers like Chrome/Safari */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default PromotionalBanners;