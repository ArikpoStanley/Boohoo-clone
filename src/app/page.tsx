import HeroBanner from '../components/home/HeroBanner'
import FeaturedCategories from '../components/home/FeaturedCategories'
import TrendingNow from '../components/home/TrendingNow'
import PromoSection from '../components/home/PromoSection'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Banner from '../components/home/Banner'
import BrandsCarousel from '../components/home/BrandCarousel'
import EmailSubscription from '../components/home/EmailSubscription'
import ImageCarousel from '../components/home/ImageCarousel'
import { categoryData, promotionalData, carouselImages,  navItems, promoMessages} from '@/lib/dummys'
import LogoCarousel from '@/components/home/LogoCarousel'

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar 
        logoSrc="/logos/logo.png"
        logoWidth={130}
        logoHeight={25}
        navItems={navItems}
        promoMessages={promoMessages}
        rotationInterval={3000} // Optional, defaults to 3000ms (3 seconds)
      />
      <HeroBanner />
      <FeaturedCategories categories={categoryData} />
      <PromoSection banners={promotionalData}/>
      <Banner image="/banner/banner2.png" />
      <BrandsCarousel />
      <LogoCarousel />
      <ImageCarousel images={carouselImages} autoplayInterval={5000} />
      <Banner image="/banner/banner1.png" />
      <TrendingNow />
      <EmailSubscription />
      <Footer />
    </div>
  )
}