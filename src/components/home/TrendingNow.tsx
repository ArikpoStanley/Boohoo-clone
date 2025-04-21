"use client"
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface Product {
  id: number;
  brand: string;
  name: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  imageUrl: string;
  tag?: string;
}

const products: Product[] = [
  {
    id: 1,
    brand: 'Boohoo',
    name: 'Tall All Season Back Printed T-shirt & Short Set',
    currentPrice: 12.50,
    originalPrice: 25.00,
    discount: 50,
    imageUrl: '/trend/trendImage1.png',
    tag: 'Tall'
  },
  {
    id: 2,
    brand: 'Boohoo',
    name: 'New York Slogan 06 Zip Through Boxy Crop Hoodie',
    currentPrice: 17.50,
    originalPrice: 25.00,
    discount: 30,
    imageUrl: '/trend/trendImage2.png'
  },
  {
    id: 3,
    brand: 'Boohoo',
    name: 'Plus New York T-Shirt',
    currentPrice: 8.40,
    originalPrice: 12.00,
    discount: 30,
    imageUrl: '/trend/trendImage3.png',
    tag: 'Plus'
  },
  {
    id: 4,
    brand: 'Boohoo',
    name: 'Plus New York Oversized T-shirt',
    currentPrice: 10.00,
    originalPrice: 12.00,
    discount: 17,
    imageUrl: '/trend/trendImage4.png',
    tag: 'Plus'
  },
  {
    id: 5,
    brand: 'Boohoo',
    name: 'New York Graphic Back Print Oversized T-Shirt',
    currentPrice: 8.40,
    originalPrice: 12.00,
    discount: 30,
    imageUrl: '/trend/trendImage5.png'
  },
  {
    id: 6,
    brand: 'Boohoo',
    name: 'New York Graphic Back Print Oversized T-Shirt',
    currentPrice: 8.40,
    originalPrice: 12.00,
    discount: 30,
    imageUrl: '/trend/trendImage5.png'
  }
];

export default function TrendingNow() {
  const [selectedTab, setSelectedTab] = useState<'new-season' | 'trending' | 'holiday'>('trending');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Calculate item width, visible items, and maximum scroll based on container width
  useEffect(() => {
    const updateDimensions = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.clientWidth;
        const gap = 12; // 3px gap between items
        
        const calculatedItemWidth = window.innerWidth >= 768 
          ? 343.2 
          : 160; // w-40 for mobile
        
        setItemWidth(calculatedItemWidth + gap);
        
        const calculatedVisibleItems = Math.floor(containerWidth / (calculatedItemWidth + gap));
        setVisibleItems(Math.max(1, calculatedVisibleItems));
        
        const newMaxScroll = Math.max(0, products.length * (calculatedItemWidth + gap) - containerWidth);
        setMaxScroll(newMaxScroll);
      }
    };

    // Update on mount and window resize
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  
  // Handle scroll actions
  const scrollLeft = () => {
    if (carouselRef.current) {
      const newIndex = Math.max(0, currentIndex - visibleItems);
      setCurrentIndex(newIndex);
      const newPosition = newIndex * itemWidth;
      setScrollPosition(newPosition);
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const newIndex = Math.min(products.length - visibleItems, currentIndex + visibleItems);
      setCurrentIndex(newIndex);
      const newPosition = newIndex * itemWidth;
      setScrollPosition(newPosition);
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track scroll position
  const handleScroll = () => {
    if (carouselRef.current) {
      const newScrollPosition = carouselRef.current.scrollLeft;
      setScrollPosition(newScrollPosition);
      
      // Update current index based on scroll position
      if (itemWidth > 0) {
        const newIndex = Math.round(newScrollPosition / itemWidth);
        setCurrentIndex(newIndex);
      }
    }
  };
  
  // Add scroll event listener
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => {
        carousel.removeEventListener('scroll', handleScroll);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemWidth]);
  
  return (
    <section className="max-w-[97%] mx-auto px-4 pt-8 pb-24">
      <div className="flex xl:flex-row flex-col justify-between items-left md:items-center mb-2">
        <div>
        <h2 className="text-3xl font-bold">Trending Now</h2>
        <p className="text-gray-600 mb-6">Shop the latest fashion & beauty</p>
        </div>

        <div className="flex gap-3 ">
          <button 
            className={`px-4 py-2 rounded-md text-md font-medium border border-gray-200 ${selectedTab === 'new-season' ? 'bg-[#444444] text-white' : 'bg-white text-[#444444] hover:bg-gray-100'}`}
            onClick={() => setSelectedTab('new-season')}
          >
            New Season
          </button>
          <button 
            className={`px-4 py-2 rounded-md text-md font-medium border border-gray-200 ${selectedTab === 'trending' ? 'bg-[#444444] text-white' : 'bg-white text-[#444444] hover:bg-gray-100'}`}
            onClick={() => setSelectedTab('trending')}
          >
            Trending
          </button>
          <button 
            className={`px-4 py-2 rounded-md text-md font-medium border border-gray-200 ${selectedTab === 'holiday' ? 'bg-[#444444] text-white' : 'bg-white text-[#444444] hover:bg-gray-100'}`}
            onClick={() => setSelectedTab('holiday')}
          >
            Holiday
          </button>
        </div>
      </div>
      
      
      <div className="relative">
        <div 
          ref={carouselRef}
          className="flex overflow-x-hidden scroll-smooth gap-3"
          style={{ scrollBehavior: 'smooth', scrollSnapType: 'x mandatory' }}
        >
          {products.map((product, index) => (
            <div 
              key={index} 
              className="flex-none w-40 md:w-[343.2px] group cursor-pointer"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative bg-gray-100 aspect-[3/5] mb-3">
                <Image 
                  src={product.imageUrl} 
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-95 transition-opacity"
                />
                {product.tag && (
                  <div className="absolute bottom-3 left-3 bg-white px-3 py-1 text-xs">
                    {product.tag}
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold">{product.brand}</p>
                <p className="text-sm font-medium text-[#444444]">{product.name}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-red-500">£{product.currentPrice.toFixed(2)}</span>
                  <span className="text-sm text-[#444444] line-through">£{product.originalPrice.toFixed(2)}</span>
                  <span className="text-xs text-red-500">Save {product.discount}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Left navigation button - only visible when not at the beginning */}
        {scrollPosition > 0 && (
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-colors z-10"
            onClick={scrollLeft}
            aria-label="Previous items"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}
        
        {/* Right navigation button - only visible when not at the end */}
        {scrollPosition < maxScroll && (
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-colors z-10"
            onClick={scrollRight}
            aria-label="Next items"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </section>
  );
}