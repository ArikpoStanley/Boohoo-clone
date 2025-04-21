// app/components/ui/ProductCard.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

type ProductCardProps = {
  id: number
  name: string
  price: number
  originalPrice?: number
  imageUrl: string
  secondaryImageUrl?: string
  isNew?: boolean
  discountPercent?: number
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  imageUrl,
  secondaryImageUrl,
  isNew = false,
  discountPercent,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className="group relative" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${id}`}>
        <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
          {/* Image placeholders - in a real implementation, replace with actual images */}
          <div className="w-full h-full bg-gray-200 relative">
            <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered && secondaryImageUrl ? 'opacity-0' : 'opacity-100'}`}>
              {/* Primary image placeholder */}
              <div className="h-full w-full flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
              </div>
            </div>
            {secondaryImageUrl && (
              <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                {/* Secondary image placeholder */}
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-gray-400">Hover Image</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Product badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNew && (
              <span className="bg-black text-white text-xs px-2 py-1">
                NEW IN
              </span>
            )}
            {discountPercent && (
              <span className="bg-red-600 text-white text-xs px-2 py-1">
                {discountPercent}% OFF
              </span>
            )}
          </div>
          
          {/* Quick actions */}
          <div className="absolute bottom-4 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
            <button className="bg-white text-black text-xs font-medium py-2 px-4 mx-1 hover:bg-gray-100">
              Quick View
            </button>
            <button className="bg-black text-white text-xs font-medium py-2 px-4 mx-1 hover:bg-gray-800">
              Add to Bag
            </button>
          </div>
        </div>
      </Link>
      
      {/* Product info */}
      <div className="pt-4 pb-2 text-center">
        <h3 className="text-sm font-medium mb-1 text-gray-800">{name}</h3>
        <div className="flex items-center justify-center space-x-2">
          <span className="font-semibold">£{price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-gray-500 line-through text-sm">£{originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
      
      {/* Wishlist button */}
      <button className="absolute top-2 right-2 bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </button>
    </div>
  )
}