"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define the interface for carousel images
export interface CarouselImage {
  src: string;
  alt: string;
}

// Define the props interface for the component
interface ImageCarouselProps {
  images: CarouselImage[];
  autoplayInterval?: number; // Optional prop to customize the interval
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  autoplayInterval = 5000 // Default to 5 seconds if not specified
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left'); // Default to right
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Calculate how often to update the progress bar for smooth animation
  const progressUpdateFrequency = 60; // Update every 60ms
  const progressIncrement = (progressUpdateFrequency / autoplayInterval) * 100;

  // Reset the automatic slide interval
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    setProgress(0);
    
    // Use a single interval for progress and slide changes
    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + progressIncrement;
        if (newProgress >= 100) {
          // When reaching 100%, go to next slide from right direction
          setTimeout(() => {
            setSlideDirection('right');
            goToNext();
          }, 0);
          return 0;
        }
        return newProgress;
      });
    }, progressUpdateFrequency);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const goToPrevious = () => {
    setSlideDirection('left');
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    resetInterval();
  };

  const goToNext = () => {
    setSlideDirection('right');
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    resetInterval();
  };

  const goToSpecific = (index: number) => {
    // Determine direction based on the current index and target index
    const direction = index > currentIndex || (currentIndex === images.length - 1 && index === 0) ? 'right' : 'left';
    setSlideDirection(direction);
    setCurrentIndex(index);
    resetInterval();
  };

  // If no images are provided, show a placeholder or return null
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden min-h-[400px] sm:h-[80vh]">

      {/* Main carousel */}
      <div className="h-full">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10 translate-x-0' : 
              slideDirection === 'right' ? 
                (index === (currentIndex === 0 ? images.length - 1 : currentIndex - 1) ? 
                  'opacity-0 translate-x-full z-0' : 'opacity-0 -translate-x-full z-0') :
                (index === (currentIndex === images.length - 1 ? 0 : currentIndex + 1) ? 
                  'opacity-0 -translate-x-full z-0' : 'opacity-0 translate-x-full z-0')
            }`}
          >
            <Image 
            src={image.src} 
            alt={image.alt} 
            fill
            sizes="100%"
            priority={index === currentIndex}
            className="object-cover object-center"
            quality={90}
          />
            {/* Place the progress indicators inside each image slide */}
            {index === currentIndex && images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1 z-20">
                {images.map((_, i) => (
                  <div 
                    key={i}
                    className="relative h-[2px] w-16 bg-gray-500/60 rounded-sm overflow-hidden cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToSpecific(i);
                    }}
                  >
                    <div 
                      className="absolute top-0 left-0 h-full bg-white transition-all duration-100 ease-linear"
                      style={{ 
                        width: i === currentIndex ? `${progress}%` : i < currentIndex ? '100%' : '0%' 
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Only show navigation buttons if there's more than one image */}
      {images.length > 1 && (
        <>
          <button 
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/50 transition-colors z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="text-black" size={24} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/50 transition-colors z-20"
            aria-label="Next image"
          >
            <ChevronRight className="text-black" size={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;