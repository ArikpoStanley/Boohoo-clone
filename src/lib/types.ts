export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    imageUrl: string;
    secondaryImageUrl?: string;
    isNew?: boolean;
    discountPercent?: number;
  }
  
  export interface Category {
    id: number;
    name: string;
    href: string;
    subcategories?: string[];
    highlighted?: boolean;
  }
  
  export interface Banner {
    id: number;
    imageUrl: string;
    alt: string;
    title: string;
    subtitle: string;
    cta: string;
    link: string;
  }

  export interface CarouselImage {
    src: string;
    alt: string;
    mobile: string;
  }
  
  export interface ImageCarouselProps {
    images: CarouselImage[];
    autoplayInterval?: number; // Optional prop to customize the interval
  }


  export interface BrandLogo {
    name: string;
    logoUrl: string;
    width: number;
    height: number;
  }
  
  export interface PaymentMethod {
    name: string;
    logoUrl: string;
    width: number;
    height: number;
  }

  export interface DropdownContent {
    title: string;
    columns: {
      heading: string;
      links: Array<{
        label: string;
        href: string;
        highlight?: boolean;
      }>;
    }[];
    images?: {
      src: string;
      alt: string;
      caption: string;
      href: string;
    }[];
  }
  
  export interface NavItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
    isHighlighted?: boolean;
    dropdownContent?: DropdownContent;
  }
  
  export interface PromoMessage {
    text: string;
    boldFirstWord?: boolean;
  }
  
  export interface NavbarProps {
    logoSrc: string;
    logoWidth: number;
    logoHeight: number;
    navItems: NavItem[];
    promoMessages: PromoMessage[];
    rotationInterval?: number; // in milliseconds
  }