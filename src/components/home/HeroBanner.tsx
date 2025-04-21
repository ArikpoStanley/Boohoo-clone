'use client'

import ImageCarousel from './ImageCarousel'

const banners = [
  {
    id: 1,
    src: '/hero/heroImage1.png',
    alt: 'New Season Collection',
    title: 'NEW SEASON',
    subtitle: 'SUMMER STYLES',
    cta: 'SHOP NOW',
    link: '#',
  },
  {
    id: 2,
    src: '/hero/heroImage2.png',
    alt: 'Sale Collection',
    title: 'UP TO 70% OFF',
    subtitle: 'SALE FINAL REDUCTIONS',
    cta: 'SHOP SALE',
    link: '#',
  },
]

export default function HeroBanner() {

  return (
    <div  >
      <ImageCarousel images={banners} autoplayInterval={5000} />
    </div>
  )
}