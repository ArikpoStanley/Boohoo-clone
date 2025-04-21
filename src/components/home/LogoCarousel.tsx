"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface LogoCarouselProps {
  speed?: number; // Speed of the animation in pixels per second
}

// Sample logo data (replace with your own logos)
const logos = [
  { id: 1, name: "Boohoo", imageUrl: "/logos/logo.png" },
  { id: 2, name: "Maybeline", imageUrl: "/logos/may.png" },
  { id: 3, name: "Nyx", imageUrl: "/logos/nyx.png" },
  { id: 4, name: "Yours", imageUrl: "/logos/yours.png" },
  { id: 5, name: "Loreal", imageUrl: "/logos/loreal.png" },
  { id: 6, name: "Where", imageUrl: "/logos/where.png" },
  { id: 7, name: "DP", imageUrl: "/logos/dp.png" },
  { id: 8, name: "Azura", imageUrl: "/logos/azura.png" },
  { id: 9, name: "NYX", imageUrl: "/logos/wallis.png" },
  { id: 10, name: "Coast", imageUrl: "/logos/coast.png" },
  { id: 11, name: "Warehouse", imageUrl: "/logos/warehouse.png" },
  { id: 12, name: "Nasty girl", imageUrl: "/logos/nasty.png" },
  { id: 13, name: "Debenhams", imageUrl: "/logos/debenhams.png" },
  { id: 14, name: "Misspap", imageUrl: "/logos/misspap.png" },
  { id: 15, name: "Oasis", imageUrl: "/logos/oasis.png" },
];

export default function LogoCarousel({ speed = 70 }: LogoCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    
    // Clone the logos to create a seamless loop
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach(item => {
      const clone = item.cloneNode(true);
      scrollerRef.current?.appendChild(clone);
    });

    // Animation to move the logos
    let animationId: number;
    let startTime: number | null = null;
    let prevTimestamp: number | null = null;
    let scrollPos = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      if (!prevTimestamp) prevTimestamp = timestamp;
      
      const elapsed = timestamp - prevTimestamp;
      prevTimestamp = timestamp;
      
      // Only move if not paused
      if (!isPaused) {
        // Calculate the distance to move based on elapsed time and speed
        const pixelsToMove = (speed * elapsed) / 1000;
        scrollPos += pixelsToMove;
        
        if (scrollerRef.current) {
          // Reset position when first set of logos is completely scrolled out
          const firstSetWidth = scrollerRef.current.scrollWidth / 2;
          if (scrollPos >= firstSetWidth) {
            scrollPos = 0;
          }
          
          scrollerRef.current.style.transform = `translateX(-${scrollPos}px)`;
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [speed, isPaused]);

  return (
    <div 
      className="w-full overflow-hidden bg-white mb-5" 
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="flex items-center" 
        ref={scrollerRef}
      >
        {logos.map((logo) => (
          <div 
            key={logo.id} 
            className="flex-none mx-8 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <div className="relative h-10 w-28 hover:scale-110 hover:opacity-70 transition-all duration-200">
              <Image
                src={logo.imageUrl}
                alt={logo.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}