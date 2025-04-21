// app/lib/utils.ts

// Format price to currency string
export function formatPrice(price: number, currency: string = '£'): string {
    return `${currency}${price.toFixed(2)}`;
  }
  
  // Calculate discount percentage
  export function calculateDiscountPercentage(originalPrice: number, salePrice: number): number {
    if (originalPrice <= 0 || salePrice >= originalPrice) return 0;
    return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
  }
  
  // Create a slug from a string
  export function createSlug(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  }
  
  // Truncate text with ellipsis if it exceeds maxLength
  export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  }