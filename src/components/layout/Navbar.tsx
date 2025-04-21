'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, Camera, User, Heart, ShoppingBag, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { NavbarProps, NavItem } from '@/lib/types';

const Navbar: React.FC<NavbarProps> = ({
  logoSrc,
  logoWidth,
  logoHeight,
  navItems,
  promoMessages,
  rotationInterval = 3000
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const promoBannerRef = useRef<HTMLDivElement>(null);
  const originalOffsetTop = useRef<number | null>(null);
  
  useEffect(() => {
    // Set up automatic rotation
    const interval = setInterval(() => {
      nextPromo();
    }, rotationInterval);
    
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPromoIndex, rotationInterval]);
  
  useEffect(() => {
    const banner = promoBannerRef.current;
    
    if (banner) {
      // Store the banner's original position once it's mounted
      originalOffsetTop.current = banner.getBoundingClientRect().top + window.scrollY;
      
      const handleScroll = () => {
        if (originalOffsetTop.current === null) return;
        
        // Check if we should make the banner sticky
        if (window.scrollY > originalOffsetTop.current) {
          setIsSticky(true);
          // Apply any styles needed for sticky state
          banner.style.position = 'fixed';
          banner.style.top = '0';
          banner.style.left = '0';
          banner.style.width = '100%';
          banner.style.zIndex = '40';
        } else {
          setIsSticky(false);
          // Reset styles when not sticky
          banner.style.position = 'relative';
          banner.style.top = 'auto';
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      
      // Initial check
      handleScroll();
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  const handleMouseEnter = (category: string) => {
    if (window.innerWidth >= 768) { // Only activate dropdowns on larger screens
      setActiveDropdown(category);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  
  const nextPromo = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPromoIndex((prevIndex) => (prevIndex + 1) % promoMessages.length);
      setIsTransitioning(false);
    }, 500); // Half a second for the transition
  };

  const prevPromo = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPromoIndex((prevIndex) => 
        prevIndex === 0 ? promoMessages.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileDropdown = (category: string) => {
    if (activeDropdown === category) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(category);
    }
  };

  // Render dropdown content based on the navItem configuration
  const renderDropdownContent = (navItem: NavItem) => {
    if (!navItem.dropdownContent) {
      // Default dropdown content if specific content isn't provided
      return (
        <div className="p-4 md:p-8">
          <h3 className="font-medium mb-4">{navItem.label}</h3>
          <p>Browse our {navItem.label.toLowerCase()} collection</p>
        </div>
      );
    }
      
    const { columns, images } = navItem.dropdownContent;
    const hasImages = images && images.length > 0;
      
    return (
      <div className="p-4 md:p-8 mx-auto place-items-center">
        <div className="flex flex-row gap-10">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className=" mb-6">
              <h3 className="font-bold mb-4">{column.heading}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className={link.highlight ? "bg-gray-300 px-2 py-1" : "text-[#444444] hover:underline"}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Image columns - each image forms its own column */}
          {hasImages && images.map((image, index) => (
            <div key={index} className="mb-6">
              <Link href={image.href}>
                <div className="relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={250}
                    height={250}
                    className=" h-auto object-contain"
                  />
                  <p className="text-center mt-2 font-medium">{image.caption}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Mobile menu
  const renderMobileMenu = () => (
    <div className={`fixed inset-0 bg-white z-50 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center">
          <Image src={logoSrc} alt="Logo" width={logoWidth} height={logoHeight} />
        </div>
        <button onClick={toggleMobileMenu} className="text-[#444444]">
          <X size={24} />
        </button>
      </div>
      
      <div className="overflow-y-auto h-full pb-24">
        <ul className="divide-y">
          {navItems.map((item) => (
            <li key={item.label}>
              <div 
                onClick={() => toggleMobileDropdown(item.label)} 
                className="flex justify-between items-center p-4 cursor-pointer"
              >
                <Link href={item.href} className={`${item.label === "DSGN"? "font-bold" : ""} ${
                  item.isHighlighted && item.label === 'Sale' 
                    ? 'text-red-500 font-bold' 
                    : item.isHighlighted 
                      ? 'font-bold' 
                      : ''
                }`}>
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <ChevronRight 
                    size={20} 
                    className={`transition-transform ${activeDropdown === item.label ? 'rotate-90' : ''}`} 
                  />
                )}
              </div>
              
              {/* Mobile dropdown content (simplified) */}
              {activeDropdown === item.label && item.hasDropdown && (
                <div className="bg-gray-50 p-4">
                  {item.dropdownContent ? (
                    <div>
                      {item.dropdownContent.columns[0]?.links.map((link, index) => (
                        <Link key={index} href={link.href} className="block py-2">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <Link href={`${item.href}/view-all`} className="block py-2">View all {item.label}</Link>
                      <Link href={`${item.href}/featured`} className="block py-2">Featured {item.label}</Link>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <header className="w-full relative">
      {/* Mobile Navigation */}
      <div className="xl:hidden bg-white">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-3">
            <button onClick={toggleMobileMenu} className="p-1">
              <Menu size={30} color="gray" />
            </button>
            
            <Link href="/" className="flex items-center">
              <Image src={logoSrc} alt="Logo" width={logoWidth} height={logoHeight} />
            </Link>
          </div>
          
          <div className="flex items-center">
            <Link href="/search" className="p-2 text-[#444444] cursor-pointer">
              <Search size={22} />
            </Link>
            <Link href="/account" className="p-2 text-[#444444] cursor-pointer ">
              <User size={22} />
            </Link>
            <Link href="/wishlist" className="p-2 text-[#444444] cursor-pointer">
              <Heart size={22} />
            </Link>
            <Link href="/cart" className="p-2 text-[#444444] cursor-pointer">
              <ShoppingBag size={22} />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Tablet/Desktop Navigation */}
      <div className="hidden xl:block container mx-auto px-4 max-w-[74%]">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={logoSrc} alt="Logo" width={logoWidth} height={logoHeight} />
          </Link>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative flex-1 max-w-3xl mx-4">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-4">
              <input
                type="text"
                placeholder="Search Products and Brands"
                className="flex-1 bg-transparent outline-none text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="button" className="text-gray-500 mr-2 cursor-pointer ">  
                <Camera size={20}  />
              </button>
              <button type="submit" className="text-gray-500 cursor-pointer">
                <Search size={20} />
              </button>
            </div>
          </form>
          
          {/* Account Icons */}
          <div className="flex items-center space-x-4">
            {/* <Link href="/search" className="text-[#444444] hover:text-gray-600">
              <Search size={24} />
            </Link> */}
            <Link href="/account" className="text-[#444444] hover:text-gray-600">
              <User size={24} />
            </Link>
            <Link href="/wishlist" className="text-[#444444] hover:text-gray-600">
              <Heart size={24} />
            </Link>
            <Link href="/cart" className="text-[#444444] hover:text-gray-600">
              <ShoppingBag size={24} />
            </Link>
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="hidden md:flex justify-center overflow-x-auto relative">
          <ul className="flex space-x-2 py-4">
            {navItems.map((item) => (
              <li 
                key={item.label} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  href={item.href} 
                  className={`hover:bg-gray-100 px-2 py-3 ${item.label === "DSGN"? "font-bold" : ""} ${
                    item.isHighlighted && item.label === 'Sale' 
                      ? 'text-red-500 font-bold' 
                      : item.isHighlighted 
                        ? 'font-medium' 
                        : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Dropdown Menus (desktop only) */}
      {activeDropdown && window.innerWidth >= 768 && (
        <div 
          className="absolute left-0 w-full bg-white pb-10 shadow-lg z-50 border-t hidden md:block"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={handleMouseLeave}
        >
          {renderDropdownContent(navItems.find(item => item.label === activeDropdown) as NavItem)}
        </div>
      )}
      
      {/* Mobile Menu Drawer */}
      {renderMobileMenu()}
      
      {/* Promo Banner with Carousel */}
      <div 
        ref={promoBannerRef}
        className={`bg-[#FFD4E8] text-[#444444] py-3 px-4 transition-all duration-200 overflow-hidden ${
          isSticky ? 'shadow-md' : ''
        }`}
      >
        <div className="flex justify-center items-center gap-4 md:gap-16 xl:gap-52">
          <button 
            className="text-gray-600 z-10" 
            onClick={prevPromo}
            aria-label="Previous promotion"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="relative overflow-hidden">
            <div 
              className={`transition-transform duration-500 ease-in-out ${
                isTransitioning && 'transform -translate-x-full'
              }`}
            >
              <p className="text-xs md:text-sm font-medium text-center">
                {promoMessages[currentPromoIndex].boldFirstWord ? (
                  <>
                    <span className="font-bold text-sm md:text-md">
                      {promoMessages[currentPromoIndex].text.split(" ")[0]}
                    </span> 
                    {' ' + promoMessages[currentPromoIndex].text.split(" ").slice(1).join(" ")}
                  </>
                ) : (
                  promoMessages[currentPromoIndex].text
                )}
              </p>
            </div>
          </div>
          
          <button 
            className="text-gray-600 z-10" 
            onClick={nextPromo}
            aria-label="Next promotion"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      {/* Spacer div that takes up space when banner becomes fixed */}
      {isSticky && (
        <div style={{ height: promoBannerRef.current?.offsetHeight || 48 }}></div>
      )}
    </header>
  );
};

export default Navbar;