"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, ChevronDown, ChevronUp  } from 'lucide-react';
import { FaPinterest } from 'react-icons/fa'
import { BrandLogo, PaymentMethod } from '@/lib/types';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

interface CollapsibleSectionProps {
  title: string;
  isOpen: boolean;
  toggleOpen: () => void;
  children: React.ReactNode;
}

export const brandLogos: BrandLogo[] = [
  { name: "Debenhams", logoUrl: "/logos/debenhams.png", width: 120, height: 25 },
  { name: "DP", logoUrl: "/logos/dp.png", width: 30, height: 20 },
  { name: "Wallis", logoUrl: "/logos/wallis.png", width: 60, height: 25 },
  { name: "Oasis", logoUrl: "/logos/oasis.png", width: 60, height: 25 },
  { name: "Coast", logoUrl: "/logos/coast.png", width: 60, height: 25 },
  { name: "Burton", logoUrl: "/logos/burton.png", width: 60, height: 25 },
  { name: "Miss Pap", logoUrl: "/logos/misspap.png", width: 60, height: 25 },
  { name: "Warehouse", logoUrl: "/logos/warehouse.png", width: 150, height: 25 },
  { name: "Nasty Gal", logoUrl: "/logos/nasty.png", width: 60, height: 24 }
];

export const paymentMethods: PaymentMethod[] = [
  { name: "Visa", logoUrl: "/brands/visa1.png", width: 50, height: 35 },
  { name: "Mastercard", logoUrl: "/brands/master.png", width: 50, height: 35 },
  { name: "American Express", logoUrl: "/brands/express.png", width: 50, height: 35 },
  { name: "Maestro", logoUrl: "/brands/brands4.png", width: 50, height: 35},
  { name: "Visa Electron", logoUrl: "/brands/visa.png", width: 50, height: 35 },
  { name: "Apple Pay", logoUrl: "/brands/apple.png", width: 50, height: 35 },
  { name: "Pay+", logoUrl: "/brands/pay+.png", width: 50, height: 35 },
  { name: "PayPal", logoUrl: "/brands/paypal.png", width: 50, height: 35 },
  { name: "Klarna", logoUrl: "/brands/klarna.png", width: 50, height: 35 },
  { name: "Clearpay", logoUrl: "/brands/clear.png", width: 50, height: 35 }
];

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link href={href} className="hover:underline mb-2 block text-[18px] font-extralight ">
    {children}
  </Link>
);

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, isOpen, toggleOpen, children }) => (
  <div className="border-b border-gray-200 py-4">
    <div 
      className="flex justify-between items-center cursor-pointer" 
      onClick={toggleOpen}
    >
      <h3 className="font-bold text-lg">{title}</h3>
      <div className="md:hidden">
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
    </div>
    <div className={`mt-4 ${isOpen ? 'block' : 'hidden md:block'}`}>
      {children}
    </div>
  </div>
);

const Footer: React.FC = () => {
  // Set "Shopping with Boohoo" to be initially open, others closed
  const [openSections, setOpenSections] = useState({
    shopping: false,
    customerCare: false,
    privacy: false,
    moreFrom: false,
    countries: false
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="pt-10 pb-8 border-t border-gray-200 bg-white flex justify-center w-full">
      <div className="w-[95%] flex flex-col">

        {/* Brand logos */}
        <div className="border-t-2 border-gray-200 py-6 mb-8 xl:hidden flex flex-col justify-center items-center">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              {brandLogos.map((brand) => (
                <Image
                  key={brand.name}
                  src={brand.logoUrl}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                />
              ))}
            </div>

            <div className="flex flex-wrap gap-2 items-center justify-center mx-auto place-self-center">
              {paymentMethods.map((method) => (
                <Image
                  key={method.name}
                  src={method.logoUrl}
                  alt={method.name}
                  width={method.width}
                  height={method.height}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main footer links and social */}
        <div className="flex xl:flex-row flex-col justify-between items-center">
          <div className="md:grid md:grid-cols-5 gap-8 mb-12 xl:w-[70%] w-full">
            {/* Shopping with Boohoo */}
            <CollapsibleSection 
              title="Shopping with Boohoo" 
              isOpen={openSections.shopping}
              toggleOpen={() => toggleSection('shopping')}
            >
              <FooterLink href="/premier-delivery">Premier Delivery</FooterLink>
              <FooterLink href="/paypal">PayPal</FooterLink>
              <FooterLink href="/clearpay">Clearpay</FooterLink>
              <FooterLink href="/klarna">Klarna</FooterLink>
              <FooterLink href="/student-beans">Student Beans</FooterLink>
              <FooterLink href="/unidays">UNIDAYS</FooterLink>
              <FooterLink href="/size-guide">Size Guide</FooterLink>
              <FooterLink href="/app">Boohoo App</FooterLink>
            </CollapsibleSection>

            {/* Customer Care */}
            <CollapsibleSection 
              title="Customer Care" 
              isOpen={openSections.customerCare}
              toggleOpen={() => toggleSection('customerCare')}
            >
              <FooterLink href="/return-order">Return Your Order</FooterLink>
              <FooterLink href="/faq">Frequently Asked Questions</FooterLink>
              <FooterLink href="/delivery-information">Delivery Information</FooterLink>
              <FooterLink href="/returns-information">Returns Information</FooterLink>
              <FooterLink href="/contact-us">Contact Us</FooterLink>
            </CollapsibleSection>

            {/* Privacy & Legal */}
            <CollapsibleSection 
              title="Privacy & Legal" 
              isOpen={openSections.privacy}
              toggleOpen={() => toggleSection('privacy')}
            >
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-conditions">Terms & Conditions</FooterLink>
              <FooterLink href="/about-cookies">About Cookies</FooterLink>
              <FooterLink href="/terms-of-use">Terms of Use</FooterLink>
              <FooterLink href="/product">Product</FooterLink>
            </CollapsibleSection>

            {/* More From Boohoo */}
            <CollapsibleSection 
              title="More From Boohoo" 
              isOpen={openSections.moreFrom}
              toggleOpen={() => toggleSection('moreFrom')}
            >
              <FooterLink href="/careers">Careers At Boohoo</FooterLink>
              <FooterLink href="/modern-slavery">Modern Slavery Statement</FooterLink>
            </CollapsibleSection>

            {/* Other Countries */}
            <CollapsibleSection 
              title="Other Countries" 
              isOpen={openSections.countries}
              toggleOpen={() => toggleSection('countries')}
            >
              <FooterLink href="/us">United States</FooterLink>
              <FooterLink href="/fr">France</FooterLink>
              <FooterLink href="/ie">Ireland</FooterLink>
              <FooterLink href="/nl">Netherlands</FooterLink>
              <FooterLink href="/de">Germany</FooterLink>
              <FooterLink href="/au">Australia</FooterLink>
            </CollapsibleSection>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center xl:items-start mb-8 xl:w-[20%] w-full">
          <h3 className="font-bold text-base mb-4">Follow Us On Social Media</h3>
          <div className="flex space-x-4">
            <Link href="https://instagram.com/boohoo" className="hover:opacity-80">
              <Instagram size={24} />
            </Link>
            <Link href="https://instagram.com/boohoo" className="hover:opacity-80">
              <FaPinterest size={24} />
            </Link>
            <Link href="https://facebook.com/boohoo" className="hover:opacity-80">
              <Facebook size={24} />
            </Link>
            <Link href="https://twitter.com/boohoo" className="hover:opacity-80">
              <Twitter size={24} />
            </Link>
          </div>
        </div>


           {/* Brand logos */}
        

        </div>
        <div className="border-t-2 border-gray-200 py-6 mb-8 xl:block hidden">
          <div className="flex flex-wrap items-center justify-between gap-6">

          <div className="flex flex-wrap gap-8 items-center">
          {brandLogos.map((brand) => (
            <Image 
              key={brand.name}
              src={brand.logoUrl} 
              alt={brand.name} 
              width={brand.width} 
              height={brand.height} 
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          {paymentMethods.map((method) => (
            <Image 
              key={method.name}
              src={method.logoUrl} 
              alt={method.name} 
              width={method.width} 
              height={method.height} 
            />
          ))}
        </div>

          </div>
        </div>

        {/* Bottom logo and copyright */}
        <div className="flex flex-col items-center justify-center">
          <div className="mb-3">
            <Image src="/logos/logo.png" alt="boohoo" width={100} height={24} />
          </div>
          <p className="text-gray-500 text-xs">COPYRIGHT © {new Date().getFullYear()} BOOHOO</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;