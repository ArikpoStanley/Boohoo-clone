import { CarouselImage } from "./types";
import { NavItem, PromoMessage } from "./types";

export const categoryData = [
    {
      id: '1',
      name: 'NEW IN',
      imageUrl: '/category/categoryImage1.png', 
      link: '/new-in'
    },
    {
      id: '2',
      name: 'DRESSES',
      imageUrl: '/category/categoryImage2.png',
      link: '/dresses'
    },
    {
      id: '3',
      name: 'TOPS',
      imageUrl: '/category/categoryImage3.png',
      link: '/tops'
    },
    {
      id: '4',
      name: 'DSGN',
      imageUrl: '/category/categoryImage4.png',
      link: '/dsgn'
    },
    {
      id: '5',
      name: 'SUMMER',
      imageUrl: '/category/categoryImage5.png',
      link: '/summer'
    },
    {
      id: '6',
      name: 'OCCASION',
      imageUrl: '/category/categoryImage6.png',
      link: '/occasion'
    },
    {
      id: '7',
      name: 'SWIM',
      imageUrl: '/category/categoryImage7.png',
      link: '/swim'
    },
    {
      id: '8',
      name: 'SHOES & BOOTS',
      imageUrl: '/category/categoryImage8.png',
      link: '/shoes'
    },
    {
      id: '9',
      name: 'BEAUTY',
      imageUrl: '/category/categoryImage9.png',
      link: '/beauty'
    },
    {
      id: '10',
      name: 'SALE',
      imageUrl: '',
      link: '/sale'
    }
  ];
  
  export const promotionalData = [
    {
      id: '1',
      title: 'BEACHWEAR FROM £8',
      imageUrl: '/promo/promoImage1.png', 
      link: '/beachwear',
      buttonText: 'SHOP NOW'
    },
    {
      id: '2',
      title: 'DRESSES 30% OFF',
      imageUrl: '/promo/promoImage2.png',
      link: '/dresses-sale',
      buttonText: 'SHOP NOW'
    },
    {
      id: '3',
      title: 'SWIM 30% OFF',
      imageUrl: '/promo/promoImage3.png',
      link: '/swim-sale',
      buttonText: 'SHOP NOW'
    },
    {
      id: '4',
      title: 'CO-ORDS FROM £10',
      imageUrl: '/promo/promoImage4.png',
      link: '/co-ords',
      buttonText: 'SHOP NOW'
    },
    {
      id: '5',
      title: 'TOPS £10 & UNDER',
      imageUrl: '/promo/promoImage5.png',
      link: '/tops-sale',
      buttonText: 'SHOP NOW'
    }
  ];
  
  export const navItems: NavItem[] = [
    { 
      label: 'New In', 
      href: '/new-in', 
      hasDropdown: true,
      dropdownContent: {
        title: 'New In',
        
        columns: [
          {
            heading: 'New In',
            links: [
              { label: 'View All New In', href: '/new-in/view-all' },
              { label: 'New Season', href: '/new-in/new-season' },
              { label: 'New In This Week', href: '/new-in/this-week' },
              { label: 'New In Dresses', href: '/new-in/dresses' },
              { label: 'New In Tops', href: '/new-in/tops' },
              { label: 'New In Trousers', href: '/new-in/trousers' },
              { label: 'New In Coats & Jackets', href: '/new-in/coats-jackets' },
              { label: 'New In Shoes & Boots', href: '/new-in/shoes-boots' },
              { label: 'New In Accessories', href: '/new-in/accessories' },
              { label: 'New In Beauty', href: '/new-in/beauty' },
              { label: 'New In Home', href: '/new-in/home' },
              { label: 'New In Mens', href: '/new-in/mens' },
              { label: 'Back In Stock', href: '/new-in/back-in-stock' }
            ]
          },
          {
            heading: 'New In Brands',
            links: [
              { label: 'Ann Summers', href: '/brands/ann-summers' },
              { label: 'AX Paris', href: '/brands/ax-paris' },
              { label: 'Blue Vanilla', href: '/brands/blue-vanilla' },
              { label: 'Goddiva', href: '/brands/goddiva' },
              { label: 'Fashion-SZN Curve', href: '/brands/fashion-szn-curve' },
              { label: 'Love Lemonade', href: '/brands/love-lemonade' },
              { label: 'NYX', href: '/brands/nyx' },
              { label: 'Oasis', href: '/brands/oasis' },
              { label: 'Pink Vanilla', href: '/brands/pink-vanilla' },
              { label: 'PixieGirl', href: '/brands/pixiegirl' },
              { label: 'Quiz', href: '/brands/quiz' },
              { label: 'Urban Bliss', href: '/brands/urban-bliss' },
              { label: 'Warehouse', href: '/brands/warehouse' },
              { label: "Where's That From", href: '/brands/wheres-that-from' },
              { label: 'XY London', href: '/brands/xy-london' },
              { label: 'Yours Clothing', href: '/brands/yours-clothing' }
            ]
          },
          {
            heading: 'New In By Figure',
            links: [
              { label: 'New In Plus Size', href: '/new-in/plus-size' },
              { label: 'New In Petite', href: '/new-in/petite' },
              { label: 'New In Tall', href: '/new-in/tall' },
              { label: 'New In Maternity', href: '/new-in/maternity' }
            ]
          },
          {
            heading: 'New In Collections',
            links: [
              { label: 'Spring Outfits', href: '/collections/spring-outfits' },
              { label: 'Holiday', href: '/collections/holiday' },
              { label: 'Boohoo Basics', href: '/collections/boohoo-basics' },
              { label: 'Sports Femme', href: '/collections/sports-femme' },
              { label: 'Preloved Collection', href: '/collections/preloved' }
            ]
          },
          {
            heading: 'Trending Now',
            links: [
              { label: 'Butter Yellow', href: '/trending/butter-yellow' },
              { label: 'Animal Print', href: '/trending/animal-print' },
              { label: 'Stripes', href: '/trending/stripes' },
              { label: 'Chocolate', href: '/trending/chocolate' },
              { label: 'Gold Accents', href: '/trending/gold-accents' },
              { label: 'Suede', href: '/trending/suede' },
              { label: 'Western', href: '/trending/western' },
              { label: 'Denim Outfits', href: '/trending/denim-outfits' },
              { label: 'Picnic Outfits', href: '/trending/picnic-outfits' }
            ]
          }
        ],
        images: [
          {
            src: '/newin1.png',
            alt: 'Shop New Season',
            caption: 'Shop New Season',
            href: '/collections/new-season'
          },
          {
            src: '/newin2.png',
            alt: 'New In Dresses',
            caption: 'New In Dresses',
            href: '/new-in/dresses'
          }
        ]
      }
    },
    { 
      label: 'Womens', 
      href: '/womens', 
      hasDropdown: true,
      dropdownContent: {
        title: 'Womens',
        columns: [
          {
            heading: 'Womens',
            links: [
              { label: 'View all Womens', href: '/womens/view-all' },
              { label: 'Bestsellers', href: '/womens/bestsellers' },
              { label: 'New In', href: '/womens/new-in', highlight: true }
            ]
          },
          {
            heading: 'Shop By Category',
            links: [
              { label: 'Hoodies & Sweatshirts', href: '/category/hoodies' },
              { label: 'Knitwear', href: '/category/knitwear' },
              { label: 'Suits & Tailoring', href: '/category/suits' },
              { label: 'Blazers', href: '/category/blazers' },
              { label: 'Swimwear', href: '/category/swimwear' },
              { label: 'Beachwear', href: '/category/beachwear' }
            ]
          },
          {
            heading: 'Brands We Love',
            links: [
              { label: 'Boohoo', href: '/brands/boohoo' },
              { label: 'Adidas', href: '/brands/adidas' },
              { label: 'Ann Summers', href: '/brands/ann-summers' },
              { label: 'AX Paris', href: '/brands/ax-paris' },
              { label: 'Azura Exchange', href: '/brands/azura-exchange' }
            ]
          },
          {
            heading: 'Shop By Size',
            links: [
              { label: 'Size 4', href: '/size/4' },
              { label: 'Size 6', href: '/size/6' },
              { label: 'Size 8', href: '/size/8' },
              { label: 'Size 10', href: '/size/10' },
              { label: 'Size 12', href: '/size/12' }
            ]
          }
        ],
        images: [{
          src: '/promo/promoImage3.png',
          alt: 'Holiday Shop',
          caption: 'Holiday Shop',
          href: '/collections/holiday-shop'
        }]
      }
    },
    { 
      label: 'Dresses', 
      href: '/dresses', 
      hasDropdown: true,
      dropdownContent: {
        title: 'Dresses',
        columns: [
          {
            heading: 'Dresses',
            links: [
              { label: 'View All Dresses', href: '/dresses/view-all' },
              { label: 'New In Dresses', href: '/dresses/new-in' },
              { label: 'Maxi Dresses', href: '/dresses/maxi' },
              { label: 'Midi Dresses', href: '/dresses/midi' },
              { label: 'Mini Dresses', href: '/dresses/mini' },
              { label: 'Blazer Dresses', href: '/dresses/blazer' },
              { label: 'Bodycon Dresses', href: '/dresses/bodycon' },
              { label: 'Shirt Dresses', href: '/dresses/shirt' },
              { label: 'T-Shirt Dresses', href: '/dresses/t-shirt' },
              { label: 'Cami Dresses', href: '/dresses/cami' },
              { label: 'Skater Dresses', href: '/dresses/skater' },
              { label: 'Long Sleeve Dresses', href: '/dresses/long-sleeve' },
              { label: 'Jumper Dresses', href: '/dresses/jumper' },
              { label: 'Smock Dresses', href: '/dresses/smock' },
              { label: 'Wrap Dresses', href: '/dresses/wrap' },
              { label: 'A Line Dresses', href: '/dresses/a-line' }
            ]
          },
          {
            heading: 'Brands We Love',
            links: [
              { label: 'Boohoo', href: '/brands/boohoo' },
              { label: 'Coast', href: '/brands/coast' },
              { label: 'Dorothy Perkins', href: '/brands/dorothy-perkins' },
              { label: 'Fashion-SZN Curve', href: '/brands/fashion-szn-curve' },
              { label: 'Nasty Gal', href: '/brands/nasty-gal' },
              { label: 'Misspap', href: '/brands/misspap' },
              { label: 'Oasis', href: '/brands/oasis' },
              { label: 'Pink Vanilla', href: '/brands/pink-vanilla' },
              { label: 'PixieGirl', href: '/brands/pixiegirl' },
              { label: 'Quiz', href: '/brands/quiz' },
              { label: 'Warehouse', href: '/brands/warehouse' }
            ]
          },
          {
            heading: 'Dresses By Occasion',
            links: [
              { label: 'Wedding Guest Dresses', href: '/dresses/wedding-guest' },
              { label: 'Bridesmaid Dresses', href: '/dresses/bridesmaid' },
              { label: 'Going Out Dresses', href: '/dresses/going-out' },
              { label: 'Party Dresses', href: '/dresses/party' },
              { label: 'Evening Dresses', href: '/dresses/evening' },
              { label: 'Little Black Dresses', href: '/dresses/little-black' },
              { label: 'Black Tie Dresses', href: '/dresses/black-tie' },
              { label: 'Graduation Dresses', href: '/dresses/graduation' },
              { label: 'Prom Dresses', href: '/dresses/prom' },
              { label: 'Engagement Party Dresses', href: '/dresses/engagement-party' },
              { label: 'Race Day Dresses', href: '/dresses/race-day' },
              { label: 'Day Dresses', href: '/dresses/day' }
            ]
          },
          {
            heading: 'Dresses By Size',
            links: [
              { label: 'Size 4', href: '/dresses/size-4' },
              { label: 'Size 6', href: '/dresses/size-6' },
              { label: 'Size 8', href: '/dresses/size-8' },
              { label: 'Size 10', href: '/dresses/size-10' },
              { label: 'Size 12', href: '/dresses/size-12' },
              { label: 'Size 14', href: '/dresses/size-14' },
              { label: 'Size 16', href: '/dresses/size-16' },
              { label: 'Size 18', href: '/dresses/size-18' },
              { label: 'Size 20', href: '/dresses/size-20' },
              { label: 'Size 22', href: '/dresses/size-22' },
              { label: 'Size 24', href: '/dresses/size-24' },
              { label: 'Size 26', href: '/dresses/size-26' },
              { label: 'Size 28', href: '/dresses/size-28' }
            ]
          },
          {
            heading: 'Dresses By Trend',
            links: [
              { label: 'Holiday Dresses', href: '/dresses/holiday' },
              { label: 'Spring Dresses', href: '/dresses/spring' },
              { label: 'Animal Print', href: '/dresses/animal-print' },
              { label: 'Floral Dresses', href: '/dresses/floral' },
              { label: 'Milkmaid Dresses', href: '/dresses/milkmaid' },
              { label: 'Denim Dresses', href: '/dresses/denim' },
              { label: 'Mesh Dresses', href: '/dresses/mesh' },
              { label: 'Black Dresses', href: '/dresses/black' }
            ]
          },
          {
            heading: 'Dresses By Figure',
            links: [
              { label: 'Petite Dresses', href: '/dresses/petite' },
              { label: 'Plus Size Dresses', href: '/dresses/plus-size' },
              { label: 'Maternity Dresses', href: '/dresses/maternity' },
              { label: 'Tall Dresses', href: '/dresses/tall' }
            ]
          },
          {
            heading: 'Dresses By Price',
            links: [
              { label: '£5 & Under', href: '/dresses/under-5' },
              { label: '£10 & Under', href: '/dresses/under-10' },
              { label: '£10 - £20', href: '/dresses/10-20' },
              { label: '£20 - £30', href: '/dresses/20-30' },
              { label: '£30 - £50', href: '/dresses/30-50' },
              { label: 'Over £50', href: '/dresses/over-50' }
            ]
          }
        ],
        images: [{
          src: '/dresses.png',
          alt: 'New In Dresses',
          caption: 'New In Dresses',
          href: '/dresses/new-in'
        }]
      }
    },
    { 
      label: 'Shoes', 
      href: '/shoes', 
      hasDropdown: true,
      dropdownContent: {
        title: 'Shoes',
        columns: [
          {
            heading: 'Boots',
            links: [
              { label: 'View All Boots', href: '/shoes/boots/view-all' },
              { label: 'Ankle Boots', href: '/shoes/boots/ankle' },
              { label: 'Biker Boots', href: '/shoes/boots/biker' },
              { label: 'Black Boots', href: '/shoes/boots/black' },
              { label: 'Chelsea Boots', href: '/shoes/boots/chelsea' },
              { label: 'Cowboy Boots', href: '/shoes/boots/cowboy' },
              { label: 'Knee High Boots', href: '/shoes/boots/knee-high' },
              { label: 'Over The Knee Boots', href: '/shoes/boots/over-the-knee' },
              { label: 'Suede Boots', href: '/shoes/boots/suede' }
            ]
          },
          {
            heading: 'Shoes',
            links: [
              { label: 'Flats', href: '/shoes/flats' },
              { label: 'Heels', href: '/shoes/heels' },
              { label: 'Sandals', href: '/shoes/sandals' },
              { label: 'Wedges', href: '/shoes/wedges' },
              { label: 'Trainers', href: '/shoes/trainers' },
              { label: 'Ballet Pumps', href: '/shoes/ballet-pumps' },
              { label: 'Court Shoes', href: '/shoes/court-shoes' },
              { label: 'Loafers', href: '/shoes/loafers' },
              { label: 'Slippers', href: '/shoes/slippers' }
            ]
          },
          {
            heading: 'Shoes By Occasion',
            links: [
              { label: 'Party', href: '/shoes/occasion/party' },
              { label: 'Wedding', href: '/shoes/occasion/wedding' },
              { label: 'Work', href: '/shoes/occasion/work' }
            ]
          },
          {
            heading: 'Brands We Love',
            links: [
              { label: 'Boohoo', href: '/brands/boohoo' },
              { label: 'Coast', href: '/brands/coast' },
              { label: 'Crocs', href: '/brands/crocs' },
              { label: 'Dorothy Perkins', href: '/brands/dorothy-perkins' },
              { label: 'Faith', href: '/brands/faith' },
              { label: 'Good For The Sole', href: '/brands/good-for-the-sole' },
              { label: 'Love Lemonade', href: '/brands/love-lemonade' },
              { label: 'Nasty Gal', href: '/brands/nasty-gal' },
              { label: 'Quiz', href: '/brands/quiz' },
              { label: 'Warehouse', href: '/brands/warehouse' },
              { label: "Where's That From", href: '/brands/wheres-that-from' },
              { label: 'XY London', href: '/brands/xy-london' },
              { label: 'Nike', href: '/brands/nike' },
              { label: 'Puma', href: '/brands/puma' },
              { label: 'Gola', href: '/brands/gola' },
              { label: 'Preloved Collection', href: '/brands/preloved-collection' }
            ]
          },
          {
            heading: 'Shop By Size',
            links: [
              { label: 'Size 3', href: '/shoes/size-3' },
              { label: 'Size 4', href: '/shoes/size-4' },
              { label: 'Size 5', href: '/shoes/size-5' },
              { label: 'Size 6', href: '/shoes/size-6' },
              { label: 'Size 7', href: '/shoes/size-7' },
              { label: 'Size 8', href: '/shoes/size-8' }
            ]
          },
          {
            heading: 'Shop By Price',
            links: [
              { label: '£10 & Under', href: '/shoes/under-10' },
              { label: '£10 - £20', href: '/shoes/10-20' },
              { label: '£20 - £30', href: '/shoes/20-30' },
              { label: '£30 - £50', href: '/shoes/30-50' },
              { label: '£50 & Over', href: '/shoes/over-50' }
            ]
          },
          {
            heading: 'Shop By Heel Height',
            links: [
              { label: 'Low', href: '/shoes/heel-height/low' },
              { label: 'Mid', href: '/shoes/heel-height/mid' },
              { label: 'High', href: '/shoes/heel-height/high' }
            ]
          },
          {
            heading: 'Wide Fit Collection',
            links: [
              { label: 'Wide Fit Boots', href: '/shoes/wide-fit/boots' },
              { label: 'Wide Fit Heels', href: '/shoes/wide-fit/heels' },
              { label: 'Wide Fit Sandals', href: '/shoes/wide-fit/sandals' },
              { label: 'Wide Fit Flats', href: '/shoes/wide-fit/flats' }
            ]
          }
        ],
        images: [{
          src: '/shoes.png',
          alt: 'New In Shoes',
          caption: 'New In Shoes',
          href: '/shoes/new-in'
        }]
      }
    },
    { 
      label: 'Accessories', 
      href: '/accessories', 
      hasDropdown: true,
      dropdownContent: {
        title: 'Accessories',
        columns: [
          {
            heading: 'Accessories',
            links: [
              { label: 'View All Accessories', href: '/accessories/view-all' },
              { label: 'New In', href: '/accessories/new-in' },
              { label: 'Belts', href: '/accessories/belts' },
              { label: 'Gloves', href: '/accessories/gloves' },
              { label: 'Hats', href: '/accessories/hats' },
              { label: 'Scarves', href: '/accessories/scarves' },
              { label: 'Sunglasses', href: '/accessories/sunglasses' },
              { label: 'Socks', href: '/accessories/socks' },
              { label: 'Tights', href: '/accessories/tights' },
              { label: 'Hair Accessories', href: '/accessories/hair' },
              { label: 'Travel Accessories', href: '/accessories/travel' },
              { label: 'Phone Accessories', href: '/accessories/phone' }
            ]
          },
          {
            heading: 'Brands We Love',
            links: [
              { label: 'Bvlgari', href: '/brands/bvlgari' },
              { label: 'Chloe', href: '/brands/chloe' },
              { label: 'Gucci', href: '/brands/gucci' },
              { label: 'Guess', href: '/brands/guess' },
              { label: 'Infinity Leather', href: '/brands/infinity-leather' },
              { label: 'Jimmy Choo', href: '/brands/jimmy-choo' },
              { label: 'My Accessories London', href: '/brands/my-accessories-london' },
              { label: 'Prada', href: '/brands/prada' },
              { label: 'Ray-Ban', href: '/brands/ray-ban' },
              { label: 'Sekonda', href: '/brands/sekonda' },
              { label: 'SVNX', href: '/brands/svnx' }
            ]
          },
          {
            heading: 'Bags & Luggage',
            links: [
              { label: 'View All Bags', href: '/bags/view-all' },
              { label: 'Crossbody Bags', href: '/bags/crossbody' },
              { label: 'Handbags', href: '/bags/handbags' },
              { label: 'Tote Bags', href: '/bags/tote' },
              { label: 'Clutch Bags', href: '/bags/clutch' },
              { label: 'Shoulder Bags', href: '/bags/shoulder' },
              { label: 'Purses', href: '/bags/purses' },
              { label: 'Suitcases', href: '/bags/suitcases' },
              { label: 'Cabin Luggage', href: '/bags/cabin-luggage' },
              { label: 'Preloved Bags', href: '/bags/preloved' },
              { label: 'Preloved Accessories', href: '/accessories/preloved' }
            ]
          },
          {
            heading: 'Jewellery & Watches',
            links: [
              { label: 'View All Jewellery', href: '/jewellery/view-all' },
              { label: 'Necklaces', href: '/jewellery/necklaces' },
              { label: 'Earrings', href: '/jewellery/earrings' },
              { label: 'Rings', href: '/jewellery/rings' },
              { label: 'Bracelets', href: '/jewellery/bracelets' },
              { label: 'Jewellery Sets', href: '/jewellery/sets' },
              { label: 'Watches', href: '/jewellery/watches' }
            ]
          },
          {
            heading: 'Trending Now',
            links: [
              { label: 'Caps', href: '/accessories/caps' },
              { label: 'Cat Eye Sunglasses', href: '/accessories/cat-eye-sunglasses' },
              { label: 'Gold Accessories', href: '/accessories/gold' },
              { label: 'Summer Hats', href: '/accessories/summer-hats' }
            ]
          }
        ],
        images: [
          {
            src: '/accessories.png',
            alt: 'Sunglasses',
            caption: 'Sunglasses',
            href: '/accessories/sunglasses'
          },
          {
            src: '/accessories1.png',
            alt: 'Shop Bags',
            caption: 'Shop Bags',
            href: '/bags'
          }
        ]
      }
    },
    { 
      label: 'Trends', 
      href: '/trends', 
      hasDropdown: true,
      dropdownContent: {
        title: 'Trending Now',
        columns: [
          {
            heading: 'Trending Now',
            links: [
              { label: 'Trending Now', href: '/trending/view-all' },
              { label: 'Leopard Print Outfits', href: '/trending/leopard-print' },
              { label: 'Suede Outfits', href: '/trending/suede' },
              { label: 'Burgundy Outfits', href: '/trending/burgundy' },
              { label: 'Chocolate Outfits', href: '/trending/chocolate' },
              { label: 'Mocha Mousse', href: '/trending/mocha-mousse' },
              { label: 'Sports Femme', href: '/trending/sports-femme' },
              { label: 'Tartan', href: '/trending/tartan' },
              { label: 'Florals', href: '/trending/florals' },
              { label: 'Concert Outfits', href: '/trending/concert-outfits' },
              { label: 'Red Outfits', href: '/trending/red' }
            ]
          },
          {
            heading: 'More Trends',
            links: [
              { label: 'Butter Yellow', href: '/trending/butter-yellow' },
              { label: 'Graphic T-Shirts', href: '/trending/graphic-tshirts' },
              { label: 'Stripes', href: '/trending/stripes' },
              { label: 'Western', href: '/trending/western' },
              { label: 'Boho', href: '/trending/boho' },
              { label: 'Spring Outfits', href: '/trending/spring-outfits' },
              { label: 'Airport Outfits', href: '/trending/airport-outfits' },
              { label: 'Denim Outfits', href: '/trending/denim-outfits' },
              { label: 'Gold Accents', href: '/trending/gold-accents' },
              { label: 'Butter & Grey', href: '/trending/butter-grey' },
              { label: 'Picnic Outfits', href: '/trending/picnic-outfits' }
            ]
          },
          {
            heading: 'Brands We Love',
            links: [
              { label: 'Boohoo', href: '/brands/boohoo' },
              { label: 'AX Paris', href: '/brands/ax-paris' },
              { label: 'Misspap', href: '/brands/misspap' },
              { label: 'Nasty Gal', href: '/brands/nasty-gal' },
              { label: 'Oasis', href: '/brands/oasis' },
              { label: 'Pink Vanilla', href: '/brands/pink-vanilla' },
              { label: 'Quiz', href: '/brands/quiz' },
              { label: 'Urban Bliss', href: '/brands/urban-bliss' },
              { label: 'Warehouse', href: '/brands/warehouse' },
              { label: "Where's That From", href: '/brands/wheres-that-from' }
            ]
          }
        ],
        images: [
          {
            src: '/trends1.png',
            alt: 'Butter Yellow',
            caption: 'Butter Yellow',
            href: '/trending/butter-yellow'
          },
          {
            src: '/trends2.png',
            alt: 'Shop Stripes',
            caption: 'Shop Stripes',
            href: '/trending/stripes'
          }
        ]
      }
    },
    {
      label: 'Occasion',
      href: '/occasion',
      hasDropdown: true,
      dropdownContent: {
        title: 'Occasion',
        columns: [
          {
            heading: 'Going Out',
            links: [
              { label: 'View All Going Out', href: '/going-out/view-all' },
              { label: 'Party Dresses', href: '/going-out/party-dresses' },
              { label: 'Going Out Tops', href: '/going-out/tops' },
              { label: 'Going Out Coats & Jackets', href: '/going-out/coats-jackets' },
              { label: 'Plus Size Going Out', href: '/going-out/plus-size' },
              { label: 'Little Black Dresses', href: '/going-out/little-black-dresses' }
            ]
          },
          {
            heading: 'Brands We Love',
            links: [
              { label: 'Boohoo', href: '/brands/boohoo' },
              { label: 'AX Paris', href: '/brands/ax-paris' },
              { label: 'Coast', href: '/brands/coast' },
              { label: 'Dancing Leopard', href: '/brands/dancing-leopard' },
              { label: 'Debut London', href: '/brands/debut-london' },
              { label: 'Fashion-SZN Curve', href: '/brands/fashion-szn-curve' },
              { label: 'Goddiva', href: '/brands/goddiva' },
              { label: 'Misspap', href: '/brands/misspap' },
              { label: 'Nasty Gal', href: '/brands/nasty-gal' },
              { label: 'Quiz', href: '/brands/quiz' },
              { label: 'Oasis', href: '/brands/oasis' },
              { label: 'Warehouse', href: '/brands/warehouse' },
              { label: 'Yours Clothing', href: '/brands/yours-clothing' }
            ]
          },
          {
            heading: 'Shop By Event',
            links: [
              { label: 'All Going Out Outfits', href: '/event/all-going-out-outfits' },
              { label: 'Baby Shower Outfits', href: '/event/baby-shower-outfits' },
              { label: 'Black Tie Dresses', href: '/event/black-tie-dresses' },
              { label: 'Brunch Outfits', href: '/event/brunch-outfits' },
              { label: 'Christening Outfits', href: '/event/christening-outfits' },
              { label: 'Concert Outfits', href: '/event/concert-outfits' },
              { label: 'Day Drinking Outfits', href: '/event/day-drinking-outfits' },
              { label: 'Graduation Outfits', href: '/event/graduation-outfits' },
              { label: 'Hen Party Outfits', href: '/event/hen-party-outfits' },
              { label: 'Holiday Outfits', href: '/event/holiday-outfits' },
              { label: 'Rave Outfits', href: '/event/rave-outfits' },
              { label: 'Race Day Dresses', href: '/event/race-day-dresses' }
            ]
          },
          {
            heading: 'Wedding Shop',
            links: [
              { label: 'Wedding Guest Dresses', href: '/wedding/guest-dresses' },
              { label: 'Plus Size Wedding Guest Dresses', href: '/wedding/plus-size-guest-dresses' },
              { label: 'Wedding Guest Suits', href: '/wedding/guest-suits' },
              { label: 'Wedding Guest Jumpsuits', href: '/wedding/guest-jumpsuits' },
              { label: 'Mother Of The Bride', href: '/wedding/mother-of-the-bride' },
              { label: 'DIY Wedding', href: '/wedding/diy-wedding' }
            ]
          },
          {
            heading: 'Bridal Shop',
            links: [
              { label: 'Bridesmaid Dresses', href: '/bridal/bridesmaid-dresses' },
              { label: 'Bridal Lingerie', href: '/bridal/lingerie' },
              { label: 'Bridal Nightwear', href: '/bridal/nightwear' },
              { label: 'Bridal Shoes', href: '/bridal/shoes' },
              { label: 'Honeymoon Outfits', href: '/bridal/honeymoon-outfits' }
            ]
          },
          {
            heading: 'Shoes & Accessories',
            links: [
              { label: 'Evening Bags', href: '/shoes-accessories/evening-bags' },
              { label: 'Evening Shoes', href: '/shoes-accessories/evening-shoes' },
              { label: 'Fascinators', href: '/shoes-accessories/fascinators' },
              { label: 'Jewellery', href: '/shoes-accessories/jewellery' },
              { label: 'Occasion Accessories', href: '/shoes-accessories/occasion-accessories' },
              { label: 'Shapewear', href: '/shoes-accessories/shapewear' }
            ]
          },
          {
            heading: 'Gifts',
            links: [
              { label: 'Birthday Gifts', href: '/gifts/birthday' },
              { label: 'Christening Gifts', href: '/gifts/christening' },
              { label: 'Wedding Gifts', href: '/gifts/wedding' }
            ]
          }
        ],
        images: [
          {
            src: '/occasion.png',
            alt: 'Holiday Outfits',
            caption: 'Holiday Outfits',
            href: '/event/holiday-outfits'
          }
        ]
      }
    },
    {
      label: 'DSGN',
      href: '/DSGN',
      hasDropdown: true,
      dropdownContent: {
        title: 'DSGN',
        columns: [
          {
            heading: 'DSGN STUDIO',
            links: [
              { label: 'View All DSGN Studio', href: '/dsgn/view-all' },
              { label: 'DSGN Studio Hoodies', href: '/dsgn/hoodies' },
              { label: 'DSGN Studio Tracksuits', href: '/dsgn/tracksuits' },
              { label: 'DSGN Studio Joggers', href: '/dsgn/joggers' },
              { label: 'DSGN Studio Leggings', href: '/dsgn/leggings' },
              { label: 'DSGN Studio Tops', href: '/dsgn/tops' }
            ]
          },
          {
            heading: 'Shop By Fit',
            links: [
              { label: 'Plus Size DSGN Studio', href: '/dsgn/plus-size' },
              { label: 'Petite DSGN Studio', href: '/dsgn/petite' },
              { label: 'Tall DSGN Studio', href: '/dsgn/tall' },
              { label: 'Maternity DSGN Studio', href: '/dsgn/maternity' }
            ]
          }
        ],
        images: [
          {
            src: '/dsgn2.png',
            alt: 'New In DSGN',
            caption: 'New In DSGN',
            href: '/dsgn/new-in'
          },
          {
            src: '/dsgn1.png',
            alt: 'DSGN Tracksuits',
            caption: 'DSGN Tracksuits',
            href: '/dsgn/tracksuits'
          }
        ]
      }
    },
    {
      label: 'Mens',
      href: '/mens',
      hasDropdown: true,
      dropdownContent: {
        title: 'Mens',
        columns: [
          {
            heading: 'Mens',
            links: [
              { label: 'View All Mens Clothing', href: '/mens/view-all' },
              { label: 'New In Mens', href: '/mens/new-in' },
              { label: 'New in BoohooMAN', href: '/mens/new-in-boohooman' }
            ]
          },
          {
            heading: 'Shop By Category',
            links: [
              { label: 'T-Shirts', href: '/mens/t-shirts' },
              { label: 'Denim', href: '/mens/denim' },
              { label: 'Sets & Co-Ords', href: '/mens/sets-co-ords' },
              { label: 'Graphic T-Shirts', href: '/mens/graphic-t-shirts' },
              { label: 'Shirts', href: '/mens/shirts' },
              { label: 'Coats & Jackets', href: '/mens/coats-jackets' },
              { label: 'Hoodies & Sweatshirts', href: '/mens/hoodies-sweatshirts' },
              { label: 'Jeans', href: '/mens/jeans' },
              { label: 'Tracksuits', href: '/mens/tracksuits' },
              { label: 'Joggers', href: '/mens/joggers' },
              { label: 'Activewear', href: '/mens/activewear' },
              { label: 'Trousers', href: '/mens/trousers' },
              { label: 'Shorts', href: '/mens/shorts' },
              { label: 'Cargo Trousers', href: '/mens/cargo-trousers' },
              { label: 'Suits & Tailoring', href: '/mens/suits-tailoring' },
              { label: 'Swimwear', href: '/mens/swimwear' },
              { label: 'Knitwear', href: '/mens/knitwear' },
              { label: 'Loungewear', href: '/mens/loungewear' }
            ]
          },
          {
            heading: 'Brands We Love',
            links: [
              { label: 'BoohooMAN', href: '/brands/boohooman' },
              { label: 'Burton', href: '/brands/burton' },
              { label: 'Asics', href: '/brands/asics' },
              { label: 'BadRhino', href: '/brands/badrhino' },
              { label: 'Calvin Klein', href: '/brands/calvin-klein' },
              { label: 'Dsquared2', href: '/brands/dsquared2' },
              { label: 'Diesel', href: '/brands/diesel' },
              { label: 'Helly Hansen', href: '/brands/helly-hansen' },
              { label: 'Hugo Boss', href: '/brands/hugo-boss' },
              { label: 'Ice Watch', href: '/brands/ice-watch' },
              { label: 'Nike', href: '/brands/nike' },
              { label: 'Off White', href: '/brands/off-white' },
              { label: 'Palm Angels', href: '/brands/palm-angels' },
              { label: 'Puma', href: '/brands/puma' },
              { label: 'Rayban', href: '/brands/rayban' },
              { label: 'Sockshop', href: '/brands/sockshop' },
              { label: 'Superdry', href: '/brands/superdry' },
              { label: 'Ted Baker', href: '/brands/ted-baker' },
              { label: 'Tommy Hilfiger', href: '/brands/tommy-hilfiger' }
            ]
          },
          {
            heading: 'Going Out',
            links: [
              { label: 'View All Going Out', href: '/mens/going-out/view-all' },
              { label: 'Formal Shirts', href: '/mens/going-out/formal-shirts' },
              { label: 'Going Out Tops', href: '/mens/going-out/tops' },
              { label: 'Going Out Jackets', href: '/mens/going-out/jackets' },
              { label: 'Going Out Trousers', href: '/mens/going-out/trousers' },
              { label: 'Going Out Polo Shirts', href: '/mens/going-out/polo-shirts' },
              { label: 'Mens Blazers', href: '/mens/going-out/blazers' },
              { label: 'Mens Waistcoats', href: '/mens/going-out/waistcoats' },
              { label: 'Wedding Suits', href: '/mens/going-out/wedding-suits' }
            ]
          },
          {
            heading: 'Shop By Collection',
            links: [
              { label: 'Mens Holiday Shop', href: '/mens/collections/holiday-shop' },
              { label: 'Wedding Shop', href: '/mens/collections/wedding-shop' },
              { label: 'Going Out', href: '/mens/collections/going-out' },
              { label: 'Active Edit', href: '/mens/collections/active-edit' },
              { label: 'Spring Outfits', href: '/mens/collections/spring-outfits' },
              { label: 'Festival Outfits', href: '/mens/collections/festival-outfits' },
              { label: 'Airport Outfits', href: '/mens/collections/airport-outfits' },
              { label: 'Basics - Elevated', href: '/mens/collections/basics-elevated' },
              { label: 'Linen', href: '/mens/collections/linen' },
              { label: 'Crochet', href: '/mens/collections/crochet' }
            ]
          },
          {
            heading: 'Mens Shoes',
            links: [
              { label: 'View All Mens Shoes', href: '/mens/shoes/view-all' },
              { label: 'Trainers & Hi-Tops', href: '/mens/shoes/trainers-hi-tops' },
              { label: 'Boots', href: '/mens/shoes/boots' },
              { label: 'Smart Shoes', href: '/mens/shoes/smart' },
              { label: 'Sandals & Flipflops', href: '/mens/shoes/sandals-flipflops' }
            ]
          },
          {
            heading: 'Mens Accessories',
            links: [
              { label: 'Watches', href: '/mens/accessories/watches' },
              { label: 'Bags & Wallets', href: '/mens/accessories/bags-wallets' },
              { label: 'Belts', href: '/mens/accessories/belts' },
              { label: 'Hats, Gloves & Scarves', href: '/mens/accessories/hats-gloves-scarves' },
              { label: 'Mens Jewellery', href: '/mens/accessories/jewellery' },
              { label: 'Socks', href: '/mens/accessories/socks' },
              { label: 'Sunglasses', href: '/mens/accessories/sunglasses' },
              { label: 'Underwear', href: '/mens/accessories/underwear' },
              { label: "Men's Preloved", href: '/mens/accessories/preloved' },
              { label: 'Aftershave', href: '/mens/accessories/aftershave' }
            ]
          },
          {
            heading: 'Shop By Fit',
            links: [
              { label: 'Big & Tall', href: '/mens/shop-by-fit/big-tall' }
            ]
          },
          {
            heading: 'Mens Sale',
            links: [
              { label: 'Shop All Mens Sale', href: '/mens/sale/view-all' },
              { label: 'Sale T-Shirts & Vests', href: '/mens/sale/t-shirts-vests' },
              { label: 'Sale Denim', href: '/mens/sale/denim' },
              { label: 'Sale Trousers', href: '/mens/sale/trousers' },
              { label: 'Sale Shorts', href: '/mens/sale/shorts' },
              { label: 'Sale Tracksuits', href: '/mens/sale/tracksuits' },
              { label: 'Sale Shirts', href: '/mens/sale/shirts' },
              { label: 'Sale Hoodies & Sweatshirts', href: '/mens/sale/hoodies-sweatshirts' },
              { label: 'Sale Coats & Jackets', href: '/mens/sale/coats-jackets' },
              { label: 'Sale Suits & Tailoring', href: '/mens/sale/suits-tailoring' },
              { label: 'Sale Knitwear', href: '/mens/sale/knitwear' },
              { label: 'Sale Loungewear', href: '/mens/sale/loungewear' },
              { label: 'Sale Plus & Tall', href: '/mens/sale/plus-tall' },
              { label: 'Sale Gymwear', href: '/mens/sale/gymwear' },
              { label: 'Sale Shoes', href: '/mens/sale/shoes' },
              { label: 'Sale Accessories', href: '/mens/sale/accessories' }
            ]
          }
        ],
        images: [
          {
            src: '/newin1.png',
            alt: 'New In Mens',
            caption: 'New In Mens',
            href: '/mens/new-in'
          }
        ]
      }
    },
    {
      label: 'Brands',
      href: '/brands',
      hasDropdown: true,
      dropdownContent: {
        title: 'Brands',
        columns: [
          {
            heading: 'Brand Room',
            links: [
              { label: 'Fashion', href: '/brands/fashion' }
            ]
          },
          {
            heading: 'Fashion',
            links: [
              { label: 'Boohoo', href: '/brands/boohoo' },
              { label: 'DSGN Studio', href: '/brands/dsgn-studio' },
              { label: 'Adidas', href: '/brands/adidas' },
              { label: 'AX Paris', href: '/brands/ax-paris' },
              { label: 'BadRhino', href: '/brands/badrhino' },
              { label: 'Dancing Leopard', href: '/brands/dancing-leopard' },
              { label: 'Dorothy Perkins', href: '/brands/dorothy-perkins' },
              { label: 'Fashion-SZN Curve', href: '/brands/fashion-szn-curve' },
              { label: 'French Connection', href: '/brands/french-connection' },
              { label: 'FS Collection', href: '/brands/fs-collection' },
              { label: 'Goddiva', href: '/brands/goddiva' },
              { label: 'Gymshark', href: '/brands/gymshark' },
              { label: 'Misspap', href: '/brands/misspap' },
              { label: 'Nasty Gal', href: '/brands/nasty-gal' },
              { label: 'Oasis', href: '/brands/oasis' },
              { label: 'Quiz', href: '/brands/quiz' },
              { label: 'Pink Vanilla', href: '/brands/pink-vanilla' },
              { label: 'PixieGirl', href: '/brands/pixiegirl' },
              { label: 'Urban Bliss', href: '/brands/urban-bliss' },
              { label: 'Warehouse', href: '/brands/warehouse' },
              { label: 'Yours Clothing', href: '/brands/yours-clothing' }
            ]
          },
          {
            heading: 'Accessories',
            links: [
              { label: 'Boohoo', href: '/accessories/boohoo' },
              { label: 'Armani Exchange', href: '/accessories/armani-exchange' },
              { label: 'Balenciaga', href: '/accessories/balenciaga' },
              { label: 'Burberry', href: '/accessories/burberry' },
              { label: 'Chloe', href: '/accessories/chloe' },
              { label: 'Gucci', href: '/accessories/gucci' },
              { label: 'Louis Vuitton', href: '/accessories/louis-vuitton' },
              { label: 'Jimmy Choo', href: '/accessories/jimmy-choo' },
              { label: 'My Accessories London', href: '/accessories/my-accessories-london' },
              { label: 'Michael Kors', href: '/accessories/michael-kors' },
              { label: 'Prada', href: '/accessories/prada' },
              { label: 'Ray-Ban', href: '/accessories/ray-ban' },
              { label: 'Sekonda', href: '/accessories/sekonda' },
              { label: 'SYNX', href: '/accessories/synx' },
              { label: 'Shop all Accessories', href: '/accessories/shop-all' }
            ]
          },
          {
            heading: 'Preloved',
            links: [
              { label: 'Preloved Jewellery', href: '/preloved/jewellery' },
              { label: 'Preloved Accessories', href: '/preloved/accessories' },
              { label: 'Preloved Shoes', href: '/preloved/shoes' },
              { label: 'View All Preloved', href: '/preloved/view-all' }
            ]
          },
          {
            heading: 'Shoes',
            links: [
              { label: 'Boohoo', href: '/shoes/boohoo' },
              { label: 'Coast', href: '/shoes/coast' },
              { label: 'Crocs', href: '/shoes/crocs' },
              { label: 'Dorothy Perkins', href: '/shoes/dorothy-perkins' },
              { label: 'Faith', href: '/shoes/faith' },
              { label: 'Good For The Sole', href: '/shoes/good-for-the-sole' },
              { label: 'Love Lemonade', href: '/shoes/love-lemonade' },
              { label: 'Misspap', href: '/shoes/misspap' },
              { label: 'NastyCal', href: '/shoes/nastycal' },
              { label: 'New Balance', href: '/shoes/new-balance' },
              { label: 'Nike', href: '/shoes/nike' },
              { label: 'Oasis', href: '/shoes/oasis' },
              { label: 'Puma', href: '/shoes/puma' },
              { label: "Where's That From", href: '/shoes/wheres-that-from' },
              { label: 'XY London', href: '/shoes/xy-london' },
              { label: 'Shop All Shoes', href: '/shoes/shop-all' }
            ]
          },
          {
            heading: 'Beauty',
            links: [
              { label: 'Babyliss', href: '/beauty/babyliss' },
              { label: 'Beauty Works', href: '/beauty/beauty-works' },
              { label: 'Bondi Sands', href: '/beauty/bondi-sands' },
              { label: 'Dr. Paw Paw', href: '/beauty/dr-paw-paw' },
              { label: 'Garnier', href: '/beauty/garnier' },
              { label: 'Hawaiian Tropic', href: '/beauty/hawaiian-tropic' },
              { label: 'Korres', href: '/beauty/korres' },
              { label: "L'Oreal Paris", href: '/beauty/loreal-paris' },
              { label: 'Make-Up Revolution', href: '/beauty/make-up-revolution' },
              { label: 'Max Factor', href: '/beauty/max-factor' },
              { label: 'Maybelline', href: '/beauty/maybelline' },
              { label: 'Nails Inc', href: '/beauty/nails-inc' },
              { label: 'NYX', href: '/beauty/nyx' },
              { label: 'O.P.I', href: '/beauty/opi' },
              { label: 'Revolution', href: '/beauty/revolution' },
              { label: 'Rimmel London', href: '/beauty/rimmel-london' },
              { label: 'Sundae', href: '/beauty/sundae' },
              { label: 'View All Beauty', href: '/beauty/view-all' }
            ]
          },
          {
            heading: 'Lingerie',
            links: [
              { label: 'Boohoo', href: '/lingerie/boohoo' },
              { label: 'Ann Summers', href: '/lingerie/ann-summers' },
              { label: 'Gossard', href: '/lingerie/gossard' },
              { label: 'KBX', href: '/lingerie/kbx' },
              { label: 'Playful Promises', href: '/lingerie/playful-promises' },
              { label: 'Pretty Polly', href: '/lingerie/pretty-polly' },
              { label: 'View All Lingerie', href: '/lingerie/view-all' }
            ]
          },
          {
            heading: 'Home & Electrical',
            links: [
              { label: 'View All Home', href: '/home-electrical/view-all-home' },
              { label: 'View All Electrical', href: '/home-electrical/view-all-electrical' },
              { label: 'Orla Kiely', href: '/home-electrical/orla-kiely' },
              { label: 'Panasonic', href: '/home-electrical/panasonic' },
              { label: 'Pawhut', href: '/home-electrical/pawhut' },
              { label: 'Philips', href: '/home-electrical/philips' },
              { label: 'Yankee Candle', href: '/home-electrical/yankee-candle' }
            ]
          }
        ],
        images: [
          {
            src: '/brands.png',
            alt: 'Quiz',
            caption: 'Quiz',
            href: '/brands/quiz'
          }
        ]
      }
    },
    { 
      label: 'Beauty', 
      href: '/beauty', 
      hasDropdown: true,
      dropdownContent: {
        title: 'Beauty',
        columns: [
          {
            heading: 'Beauty',
            links: [
              { label: 'View All Beauty', href: '/beauty/view-all' },
              { label: 'New In Beauty', href: '/beauty/new-in' },
              { label: 'Beauty Sale', href: '/beauty/sale' }
            ]
          },
          {
            heading: 'Brands We Love',
            links: [
              { label: 'Babyliss', href: '/brands/babyliss' },
              { label: 'Bare By Vogue', href: '/brands/bare-by-vogue' },
              { label: 'Beauty Works', href: '/brands/beauty-works' },
              { label: 'Bondi Sands', href: '/brands/bondi-sands' },
              { label: 'Dr. Paw Paw', href: '/brands/dr-paw-paw' },
              { label: 'Garnier', href: '/brands/garnier' },
              { label: "L'Oréal Paris", href: '/brands/loreal-paris' },
              { label: 'Make-up Revolution', href: '/brands/make-up-revolution' },
              { label: 'Maybelline', href: '/brands/maybelline' },
              { label: 'Nails Inc', href: '/brands/nails-inc' },
              { label: 'NYX', href: '/brands/nyx' },
              { label: 'OPI', href: '/brands/opi' },
              { label: 'Real Techniques', href: '/brands/real-techniques' },
              { label: 'Revolution', href: '/brands/revolution' },
              { label: 'Rimmel London', href: '/brands/rimmel-london' },
              { label: 'Sigma', href: '/brands/sigma' }
            ]
          },
          {
            heading: 'Makeup',
            links: [
              { label: 'View All Makeup', href: '/beauty/makeup/view-all' },
              { label: 'Blusher', href: '/beauty/makeup/blusher' },
              { label: 'Bronzer', href: '/beauty/makeup/bronzer' },
              { label: 'Concealer', href: '/beauty/makeup/concealer' },
              { label: 'Foundation', href: '/beauty/makeup/foundation' },
              { label: 'Highlighter', href: '/beauty/makeup/highlighter' },
              { label: 'Powder', href: '/beauty/makeup/powder' },
              { label: 'Primer', href: '/beauty/makeup/primer' },
              { label: 'Eyebrows', href: '/beauty/makeup/eyebrows' },
              { label: 'Eyeliner', href: '/beauty/makeup/eyeliner' },
              { label: 'Eyeshadow', href: '/beauty/makeup/eyeshadow' },
              { label: 'Mascara', href: '/beauty/makeup/mascara' },
              { label: 'False Eyelashes', href: '/beauty/makeup/false-eyelashes' },
              { label: 'Lipstick', href: '/beauty/makeup/lipstick' },
              { label: 'Make-Up Accessories', href: '/beauty/makeup/accessories' },
              { label: 'Make-Up Bags & Storage', href: '/beauty/makeup/bags-storage' },
              { label: 'Makeup Brushes & Tools', href: '/beauty/makeup/brushes-tools' },
              { label: 'Make-up Gift Sets', href: '/beauty/makeup/gift-sets' },
              { label: 'Make-Up Mirrors', href: '/beauty/makeup/mirrors' }
            ]
          },
          {
            heading: 'Skincare',
            links: [
              { label: 'View All Skincare', href: '/beauty/skincare/view-all' },
              { label: 'Moisturisers', href: '/beauty/skincare/moisturisers' },
              { label: 'Cleansers', href: '/beauty/skincare/cleansers' },
              { label: 'Toners', href: '/beauty/skincare/toners' },
              { label: 'Serums', href: '/beauty/skincare/serums' },
              { label: 'Suncare & Tanning', href: '/beauty/skincare/suncare-tanning' },
              { label: 'Skincare Gift Sets', href: '/beauty/skincare/gift-sets' },
              { label: 'Travel Minis', href: '/beauty/skincare/travel-minis' }
            ]
          },
          {
            heading: 'Fragrances',
            links: [
              { label: 'View All Fragrances', href: '/beauty/fragrances/view-all' },
              { label: 'Perfume', href: '/beauty/fragrances/perfume' },
              { label: 'Aftershave', href: '/beauty/fragrances/aftershave' },
              { label: 'Eau De Parfum', href: '/beauty/fragrances/eau-de-parfum' },
              { label: 'Eau De Toilette', href: '/beauty/fragrances/eau-de-toilette' },
              { label: 'Body Spray & Mist', href: '/beauty/fragrances/body-spray-mist' },
              { label: 'Fragrance Gifts', href: '/beauty/fragrances/gifts' }
            ]
          },
          {
            heading: 'Hair',
            links: [
              { label: 'View All Haircare', href: '/beauty/hair/view-all' },
              { label: 'Hair Styling', href: '/beauty/hair/styling' },
              { label: 'Shampoo', href: '/beauty/hair/shampoo' },
              { label: 'Conditioner', href: '/beauty/hair/conditioner' },
              { label: 'Serums & Masks', href: '/beauty/hair/serums-masks' }
            ]
          },
          {
            heading: 'Body',
            links: [
              { label: 'View All Bodycare', href: '/beauty/body/view-all' },
              { label: 'Body Lotions & Soaps', href: '/beauty/body/lotions-soaps' },
              { label: 'Hand & Footcare', href: '/beauty/body/hand-footcare' },
              { label: 'Nails', href: '/beauty/body/nails' },
              { label: 'Tanning', href: '/beauty/body/tanning' }
            ]
          },
          {
            heading: 'Beauty Electricals',
            links: [
              { label: 'View All Beauty Electricals', href: '/beauty/electricals/view-all' },
              { label: 'Curling Tongs', href: '/beauty/electricals/curling-tongs' },
              { label: 'Hair Dryers', href: '/beauty/electricals/hair-dryers' },
              { label: 'Hair Straighteners', href: '/beauty/electricals/hair-straighteners' },
              { label: 'Hair Removal', href: '/beauty/electricals/hair-removal' },
              { label: 'Electric Toothbrushes', href: '/beauty/electricals/toothbrushes' }
            ]
          },
          {
            heading: 'Beauty Gift Sets',
            links: [
              { label: 'View All Gift Sets', href: '/beauty/gift-sets/view-all' },
              { label: 'Body Care Gift Sets', href: '/beauty/gift-sets/body-care' },
              { label: 'Makeup Gift Sets', href: '/beauty/gift-sets/makeup' },
              { label: 'Skincare Gift Sets', href: '/beauty/gift-sets/skincare' }
            ]
          },
          {
            heading: 'Wellbeing',
            links: [
              { label: 'View All Wellbeing', href: '/beauty/wellbeing/view-all' },
              { label: 'Vitamins & Supplements', href: '/beauty/wellbeing/vitamins-supplements' },
              { label: 'Sexual Wellness', href: '/beauty/wellbeing/sexual-wellness' }
            ]
          }
        ],
        images: [
          {
            src: '/beauty.png',
            alt: 'Shop Make-Up',
            caption: 'Shop Make-Up',
            href: '/beauty/makeup'
          }
        ]
      }
    },

    { 
      label: 'Shop By Fit', 
      href: '/shopByFit', 
      hasDropdown: true ,
      dropdownContent: {
        title: 'Plus Size',
        columns: [
          {
            heading: 'Plus Size',
            links: [
              { label: 'View All Plus Size', href: '/plus-size/view-all' },
              { label: 'New In Plus Size', href: '/plus-size/new-in' },
              { label: 'Plus Size Dresses', href: '/plus-size/dresses' },
              { label: 'Plus Size Tops', href: '/plus-size/tops' },
              { label: 'Plus Size Co-Ords', href: '/plus-size/co-ords' },
              { label: 'Plus Size Playsuits & Jumpsuits', href: '/plus-size/playsuits-jumpsuits' },
              { label: 'Plus Size Jeans', href: '/plus-size/jeans' },
              { label: 'Plus Size Trousers', href: '/plus-size/trousers' },
              { label: 'Plus Size Shorts', href: '/plus-size/shorts' },
              { label: 'Plus Size Skirts', href: '/plus-size/skirts' },
              { label: 'Plus Size Swimwear', href: '/plus-size/swimwear' },
              { label: 'Plus Size Tracksuits', href: '/plus-size/tracksuits' },
              { label: 'Plus Size Hoodies & Sweatshirts', href: '/plus-size/hoodies-sweatshirts' },
              { label: 'Plus Size Coats & Jackets', href: '/plus-size/coats-jackets' },
              { label: 'Plus Size Knitwear', href: '/plus-size/knitwear' },
              { label: 'Plus Size Nightwear', href: '/plus-size/nightwear' },
              { label: 'Plus Size Occasion', href: '/plus-size/occasion' }
            ]
          },
          {
            heading: 'Petite',
            links: [
              { label: 'View All Petite', href: '/petite/view-all' },
              { label: 'New In Petite', href: '/petite/new-in' },
              { label: 'Petite Dresses', href: '/petite/dresses' },
              { label: 'Petite Tops', href: '/petite/tops' },
              { label: 'Petite Co-Ords', href: '/petite/co-ords' },
              { label: 'Petite Jeans', href: '/petite/jeans' },
              { label: 'Petite Trousers', href: '/petite/trousers' },
              { label: 'Petite Skirts', href: '/petite/skirts' },
              { label: 'Petite Playsuits & Jumpsuits', href: '/petite/playsuits-jumpsuits' },
              { label: 'Petite Coats & Jackets', href: '/petite/coats-jackets' },
              { label: 'Petite Tracksuits', href: '/petite/tracksuits' },
              { label: 'Petite Hoodies & Sweatshirts', href: '/petite/hoodies-sweatshirts' },
              { label: 'Petite Knitwear', href: '/petite/knitwear' },
              { label: 'Petite Nightwear', href: '/petite/nightwear' }
            ]
          },
          {
            heading: 'Tall',
            links: [
              { label: 'View All Tall', href: '/tall/view-all' },
              { label: 'New In Tall', href: '/tall/new-in' },
              { label: 'Tall Dresses', href: '/tall/dresses' },
              { label: 'Tall Tops', href: '/tall/tops' },
              { label: 'Tall Co-Ords', href: '/tall/co-ords' },
              { label: 'Tall Trousers', href: '/tall/trousers' },
              { label: 'Tall Jeans', href: '/tall/jeans' },
              { label: 'Tall Playsuits & Jumpsuits', href: '/tall/playsuits-jumpsuits' },
              { label: 'Tall Skirts', href: '/tall/skirts' },
              { label: 'Tall Swimwear', href: '/tall/swimwear' },
              { label: 'Tall Tracksuits', href: '/tall/tracksuits' },
              { label: 'Tall Hoodies & Sweatshirts', href: '/tall/hoodies-sweatshirts' },
              { label: 'Tall Coats & Jackets', href: '/tall/coats-jackets' },
              { label: 'Tall Knitwear', href: '/tall/knitwear' },
              { label: 'Tall Nightwear', href: '/tall/nightwear' }
            ]
          },
          {
            heading: 'Maternity',
            links: [
              { label: 'View All Maternity', href: '/maternity/view-all' },
              { label: 'New In Maternity', href: '/maternity/new-in' },
              { label: 'Maternity Dresses', href: '/maternity/dresses' },
              { label: 'Maternity Tops', href: '/maternity/tops' },
              { label: 'Maternity Trousers', href: '/maternity/trousers' },
              { label: 'Maternity Jeans', href: '/maternity/jeans' },
              { label: 'Maternity Co-Ords', href: '/maternity/co-ords' },
              { label: 'Maternity Playsuits & Jumpsuits', href: '/maternity/playsuits-jumpsuits' },
              { label: 'Maternity Swimwear', href: '/maternity/swimwear' },
              { label: 'Maternity Skirts', href: '/maternity/skirts' },
              { label: 'Maternity Coats & Jackets', href: '/maternity/coats-jackets' },
              { label: 'Maternity Leggings', href: '/maternity/leggings' },
              { label: 'Maternity Lingerie', href: '/maternity/lingerie' },
              { label: 'Maternity Nightwear', href: '/maternity/nightwear' },
              { label: 'Maternity Loungewear', href: '/maternity/loungewear' }
            ]
          },
          {
            heading: 'Brands We Love',
            links: [
              { label: 'Boohoo', href: '/brands/boohoo' },
              { label: 'AX Paris', href: '/brands/ax-paris' },
              { label: 'Blue Vanilla', href: '/brands/blue-vanilla' },
              { label: 'Dancing Leopard', href: '/brands/dancing-leopard' },
              { label: 'Dorothy Perkins', href: '/brands/dorothy-perkins' },
              { label: 'Fashion-SZN Curve', href: '/brands/fashion-szn-curve' },
              { label: 'Misspap', href: '/brands/misspap' },
              { label: 'NastyGal', href: '/brands/nastygal' },
              { label: 'Oasis', href: '/brands/oasis' },
              { label: 'Quiz', href: '/brands/quiz' },
              { label: 'Wallis', href: '/brands/wallis' },
              { label: 'Warehouse', href: '/brands/warehouse' }
            ]
          }
        ],
        images: [
          {
            src: '/shop.png',
            alt: 'Plus Size Dresses',
            caption: 'Plus Size Dresses',
            href: '/plus-size/dresses'
          }
        ]
      }
    },
    {
      label: 'Lifestyle',
      href: '/lifestyle',
      hasDropdown: true,
      dropdownContent: {
        title: 'Lifestyle',
        columns: [
          {
            heading: 'Bedding',
            links: [
              { label: 'View All Lifestyle', href: '/lifestyle/view-all' },
              { label: 'Bedding', href: '/lifestyle/bedding' },
              { label: 'View All Bedding', href: '/lifestyle/bedding/view-all' },
              { label: 'Duvet Covers & Pillowcases', href: '/lifestyle/bedding/duvet-covers-pillowcases' },
              { label: 'Mattresses', href: '/lifestyle/bedding/mattresses' },
              { label: 'Bed Sheets', href: '/lifestyle/bedding/bed-sheets' },
              { label: 'Duvets', href: '/lifestyle/bedding/duvets' },
              { label: 'Pillows', href: '/lifestyle/bedding/pillows' },
              { label: 'Electric Blankets', href: '/lifestyle/bedding/electric-blankets' }
            ]
          },
          {
            heading: 'Home Decor',
            links: [
              { label: 'View All Home Decor', href: '/lifestyle/home-decor/view-all' },
              { label: 'Artificial Flowers & Plants', href: '/lifestyle/home-decor/artificial-flowers-plants' },
              { label: 'Curtains & Poles', href: '/lifestyle/home-decor/curtains-poles' },
              { label: 'Candles & Diffusers', href: '/lifestyle/home-decor/candles-diffusers' },
              { label: 'Cushions', href: '/lifestyle/home-decor/cushions' },
              { label: 'Home Accessories', href: '/lifestyle/home-decor/accessories' },
              { label: 'Mirrors', href: '/lifestyle/home-decor/mirrors' },
              { label: 'Photo Frames', href: '/lifestyle/home-decor/photo-frames' },
              { label: 'Rugs & Runners', href: '/lifestyle/home-decor/rugs-runners' },
              { label: 'Vases', href: '/lifestyle/home-decor/vases' },
              { label: 'Wallpaper', href: '/lifestyle/home-decor/wallpaper' }
            ]
          },
          {
            heading: 'Furniture',
            links: [
              { label: 'View All Furniture', href: '/lifestyle/furniture/view-all' },
              { label: 'Bathroom Furniture', href: '/lifestyle/furniture/bathroom' },
              { label: 'Beds', href: '/lifestyle/furniture/beds' },
              { label: 'Bedside Tables', href: '/lifestyle/furniture/bedside-tables' },
              { label: 'Chest Of Drawers', href: '/lifestyle/furniture/chest-of-drawers' },
              { label: 'Coffee & Side Tables', href: '/lifestyle/furniture/coffee-side-tables' },
              { label: 'Dining Table & Chairs', href: '/lifestyle/furniture/dining-table-chairs' },
              { label: 'Dressing Tables', href: '/lifestyle/furniture/dressing-tables' },
              { label: 'Office Furniture', href: '/lifestyle/furniture/office' },
              { label: 'Shelves & Bookcases', href: '/lifestyle/furniture/shelves-bookcases' },
              { label: 'Sideboards', href: '/lifestyle/furniture/sideboards' },
              { label: 'Sofas & Chairs', href: '/lifestyle/furniture/sofas-chairs' },
              { label: 'TV Units', href: '/lifestyle/furniture/tv-units' },
              { label: 'Wardrobes', href: '/lifestyle/furniture/wardrobes' }
            ]
          },
          {
            heading: 'Kitchen & Dining',
            links: [
              { label: 'View All Kitchenware', href: '/lifestyle/kitchen/view-all' },
              { label: 'Tableware', href: '/lifestyle/kitchen/tableware' },
              { label: 'Glassware', href: '/lifestyle/kitchen/glassware' },
              { label: 'Baking', href: '/lifestyle/kitchen/baking' },
              { label: 'Table Linen', href: '/lifestyle/kitchen/table-linen' }
            ]
          },
          {
            heading: 'Bathroom',
            links: [
              { label: 'View All Bathroom', href: '/lifestyle/bathroom/view-all' },
              { label: 'Bathroom Accessories', href: '/lifestyle/bathroom/accessories' },
              { label: 'Towels & Bathmats', href: '/lifestyle/bathroom/towels-bathmats' }
            ]
          },
          {
            heading: 'Electrical',
            links: [
              { label: 'Home Appliances', href: '/lifestyle/electrical/home-appliances' },
              { label: 'Home Electricals', href: '/lifestyle/electrical/home-electricals' },
              { label: 'Home Entertainment', href: '/lifestyle/electrical/home-entertainment' },
              { label: 'Kitchen Appliances', href: '/lifestyle/electrical/kitchen-appliances' },
              { label: 'Lighting', href: '/lifestyle/electrical/lighting' },
              { label: 'Beauty Electricals', href: '/lifestyle/electrical/beauty' }
            ]
          },
          {
            heading: 'Travel',
            links: [
              { label: 'View All Travel', href: '/lifestyle/travel/view-all' },
              { label: 'Beach Towels', href: '/lifestyle/travel/beach-towels' },
              { label: 'Cabin Bags', href: '/lifestyle/travel/cabin-bags' },
              { label: 'Suitcases & Luggage', href: '/lifestyle/travel/suitcases-luggage' },
              { label: 'Travel Accessories', href: '/lifestyle/travel/accessories' },
              { label: 'Travel Minis', href: '/lifestyle/travel/minis' }
            ]
          },
          {
            heading: 'Gifts',
            links: [
              { label: 'View All Gifts', href: '/lifestyle/gifts/view-all' },
              { label: 'Beauty Gift Sets', href: '/lifestyle/gifts/beauty-sets' },
              { label: 'CD & Vinyl', href: '/lifestyle/gifts/cd-vinyl' },
              { label: 'Food & Drink Gifts', href: '/lifestyle/gifts/food-drink' },
              { label: 'Gifts Under £20', href: '/lifestyle/gifts/under-20' },
              { label: 'Gifts For Her', href: '/lifestyle/gifts/for-her' },
              { label: 'Gifts For Him', href: '/lifestyle/gifts/for-him' },
              { label: 'Novelty Gifts', href: '/lifestyle/gifts/novelty' },
              { label: 'Wedding Gifts', href: '/lifestyle/gifts/wedding' }
            ]
          },
          {
            heading: 'Pets',
            links: [
              { label: 'View All Pets', href: '/lifestyle/pets/view-all' }
            ]
          },
          {
            heading: 'Brands We Love',
            links: [
              { label: 'Babyliss', href: '/brands/babyliss' },
              { label: 'Beauty Works', href: '/brands/beauty-works' },
              { label: 'Furn', href: '/brands/furn' },
              { label: 'Homescapes', href: '/brands/homescapes' },
              { label: 'JBL', href: '/brands/jbl' },
              { label: 'Orla Kiely', href: '/brands/orla-kiely' },
              { label: 'Panasonic', href: '/brands/panasonic' },
              { label: 'Pawhut', href: '/brands/pawhut' },
              { label: 'Woodwick', href: '/brands/woodwick' },
              { label: 'Yankee Candle', href: '/brands/yankee-candle' }
            ]
          }
        ],
        images: [
          {
            src: '/life.png',
            alt: 'New In Home',
            caption: 'New In Home',
            href: '/lifestyle/new-in-home'
          }
        ]
      }
    },
    {
      label: 'Sale',
      href: '/sale',
      isHighlighted: true,
      hasDropdown: true,
      dropdownContent: {
        title: 'Sale',
        columns: [
          {
            heading: 'Womens Sale By Category',
            links: [
              { label: 'Shop All Womens Sale', href: '/sale/womens/view-all' },
              { label: 'Dresses', href: '/sale/womens/dresses' },
              { label: 'Tops', href: '/sale/womens/tops' },
              { label: 'Co-ords', href: '/sale/womens/co-ords' },
              { label: 'Coats & Jackets', href: '/sale/womens/coats-jackets' },
              { label: 'Playsuits & Jumpsuits', href: '/sale/womens/playsuits-jumpsuits' },
              { label: 'Trousers', href: '/sale/womens/trousers' },
              { label: 'Knitwear', href: '/sale/womens/knitwear' },
              { label: 'Shorts', href: '/sale/womens/shorts' },
              { label: 'Skirts', href: '/sale/womens/skirts' },
              { label: 'Soft Tailoring', href: '/sale/womens/soft-tailoring' },
              { label: 'Swimwear', href: '/sale/womens/swimwear' }
            ]
          },
          {
            heading: 'Sale By Category',
            links: [
              { label: 'Shoes', href: '/sale/shoes' },
              { label: 'Accessories', href: '/sale/accessories' },
              { label: 'Nightwear', href: '/sale/nightwear' },
              { label: 'Loungewear', href: '/sale/loungewear' },
              { label: 'Lingerie', href: '/sale/lingerie' },
              { label: 'Mens', href: '/sale/mens' },
              { label: 'Beauty', href: '/sale/beauty' },
              { label: 'Home', href: '/sale/home' },
              { label: 'Shop All Sale', href: '/sale/view-all' }
            ]
          },
          {
            heading: 'Shop By Fit',
            links: [
              { label: 'Plus Size Sale', href: '/sale/plus-size' },
              { label: 'Petite Sale', href: '/sale/petite' },
              { label: 'Tall Sale', href: '/sale/tall' },
              { label: 'Maternity Sale', href: '/sale/maternity' }
            ]
          },
          {
            heading: 'Shop By Size',
            links: [
              { label: 'Size 4 Sale', href: '/sale/size-4' },
              { label: 'Size 6 Sale', href: '/sale/size-6' },
              { label: 'Size 8 Sale', href: '/sale/size-8' },
              { label: 'Size 10 Sale', href: '/sale/size-10' },
              { label: 'Size 12 Sale', href: '/sale/size-12' },
              { label: 'Size 14 Sale', href: '/sale/size-14' },
              { label: 'Size 16 Sale', href: '/sale/size-16' },
              { label: 'Size 18 Sale', href: '/sale/size-18' },
              { label: 'Size 20 Sale', href: '/sale/size-20' },
              { label: 'Size 22 Sale', href: '/sale/size-22' },
              { label: 'Size 24 Sale', href: '/sale/size-24' }
            ]
          },
          {
            heading: 'Brands We Love',
            links: [
              { label: 'Boohoo', href: '/brands/boohoo/sale' },
              { label: 'Ann Summers', href: '/brands/ann-summers/sale' },
              { label: 'AX Paris', href: '/brands/ax-paris/sale' },
              { label: 'Azura Exchange', href: '/brands/azura-exchange/sale' },
              { label: 'Blue Vanilla', href: '/brands/blue-vanilla/sale' },
              { label: 'Dorothy Perkins', href: '/brands/dorothy-perkins/sale' },
              { label: 'Misspap', href: '/brands/misspap/sale' },
              { label: 'Nasty Gal', href: '/brands/nasty-gal/sale' },
              { label: 'Oasis', href: '/brands/oasis/sale' },
              { label: 'Pink Vanilla', href: '/brands/pink-vanilla/sale' },
              { label: 'Quiz', href: '/brands/quiz/sale' },
              { label: 'Warehouse', href: '/brands/warehouse/sale' },
              { label: "Where's That From", href: '/brands/wheres-that-from/sale' }
            ]
          },
          {
            heading: 'Shop By Price',
            links: [
              { label: '£5 & Under', href: '/sale/price/5-under' },
              { label: '£10 & Under', href: '/sale/price/10-under' },
              { label: '£20 & Under', href: '/sale/price/20-under' },
              { label: '£30 - £50', href: '/sale/price/30-50' }
            ]
          }
        ],
        images: [
          {
            src: '/sale.png',
            alt: '£10 & Under Dresses',
            caption: '£10 & Under Dresses',
            href: '/sale/dresses/10-under'
          }
        ]
      }
    }
  ];

  export const promoMessages: PromoMessage[] = [
    { text: "PREMIER - £9.99 - UNLIMITED FREE DELIVERY & RETURNS", boldFirstWord: true },
    { text: "SALE - UP TO 70% OFF EVERYTHING", boldFirstWord: true },
    { text: "EASTER SALE - 30% OFF EVERYTHING!*", boldFirstWord: true }
  ];

  export const carouselImages: CarouselImage[] = [
    { src: "/images/carousel1.png", mobile: "/image", alt: "Fashion model in white blazer" }, 
    { src: "/images/carousel.png", mobile: "/image", alt: "New collection showcase" },
    { src: "/images/carousel2.png",  mobile: "/image", alt: "60% off brands promotion" },
  ]