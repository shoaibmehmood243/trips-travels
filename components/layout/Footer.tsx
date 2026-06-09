"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Headphones, MapPin, Mail, Lock, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 300) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 300) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Trips Travels Ltd",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "83 Eddish Road",
      "addressLocality": "Birmingham",
      "addressRegion": "England",
      "postalCode": "B33 9RN",
      "addressCountry": "GB",
    },
    "telephone": "+44-20-7096-0718",
    "url": "https://www.tripstravels.co.uk",
    "description":
      "Trips Travels Ltd is a Birmingham-based UK travel agency offering cheap international flights and holiday packages.",
  };

  return (
    <footer className="bg-navy border-t border-gold/20 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 — Brand Info */}
          <div className="space-y-5 text-left">
            <Link href="/" className="inline-block focus:outline-none focus:ring-2 focus:ring-gold rounded">
              <Image
                src="/logo.png"
                alt="Trips Travels Ltd"
                width={180}
                height={64}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              We are many variations of passages available but the majority have suffer alteration in some form by injected.
            </p>

            {/* 24/7 Support Block */}
            <div className="flex items-center space-x-3.5 pt-1">
              <div className="w-11 h-11 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center flex-shrink-0">
                <Headphones className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs text-muted">24/7 Support Service</p>
                <a
                  href="tel:+442070960718"
                  className="text-lg font-bold text-gold hover:underline tracking-wide block"
                >
                  020 7096 0718
                </a>
              </div>
            </div>

            {/* Physical Address */}
            <div className="flex items-start space-x-3 pt-1">
              <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted leading-relaxed">
                83 Eddish Road, Birmingham, England, B33 9RN
              </p>
            </div>

            {/* Email Address */}
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gold flex-shrink-0" />
              <a
                href="mailto:info@tripstravels.co.uk"
                className="text-sm text-muted hover:text-gold transition-colors break-all"
              >
                info@tripstravels.co.uk
              </a>
            </div>

            {/* Payment Systems */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                We Accept:
              </span>
              <div className="flex flex-wrap gap-2.5 items-center">
                <Image
                  src="/icons/paypal.svg"
                  alt="PayPal"
                  width={36}
                  height={24}
                  className="h-6 w-auto object-contain hover:opacity-100 opacity-85 transition-opacity duration-150"
                />
                <Image
                  src="/icons/mastercard.svg"
                  alt="MasterCard"
                  width={36}
                  height={24}
                  className="h-6 w-auto object-contain hover:opacity-100 opacity-85 transition-opacity duration-150"
                />
                <Image
                  src="/icons/visa.svg"
                  alt="VISA"
                  width={36}
                  height={24}
                  className="h-6 w-auto object-contain hover:opacity-100 opacity-85 transition-opacity duration-150"
                />
                <Image
                  src="/icons/discover.svg"
                  alt="Discover"
                  width={36}
                  height={24}
                  className="h-6 w-auto object-contain hover:opacity-100 opacity-85 transition-opacity duration-150"
                />
                <Image
                  src="/icons/amex.svg"
                  alt="American Express"
                  width={36}
                  height={24}
                  className="h-6 w-auto object-contain hover:opacity-100 opacity-85 transition-opacity duration-150"
                />
              </div>
            </div>
          </div>

          {/* Column 2 — Our Company */}
          <div className="space-y-5 text-left">
            <div className="relative pb-2">
              <h4 className="text-white font-sans font-bold text-lg tracking-wide">
                Our Company
              </h4>
              <div className="flex items-center space-x-1 mt-2">
                <span className="w-8 h-[3px] bg-gold rounded-full"></span>
                <span className="w-2 h-[3px] bg-gold rounded-full"></span>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link
                  href="/about"
                  className="inline-flex items-center hover:text-gold transition-all hover:translate-x-1 group"
                >
                  <span className="text-gold mr-2 font-bold transition-transform group-hover:scale-110">&raquo;</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#quote"
                  className="inline-flex items-center hover:text-gold transition-all hover:translate-x-1 group"
                >
                  <span className="text-gold mr-2 font-bold transition-transform group-hover:scale-110">&raquo;</span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Help Center */}
          <div className="space-y-5 text-left">
            <div className="relative pb-2">
              <h4 className="text-white font-sans font-bold text-lg tracking-wide">
                Help Center
              </h4>
              <div className="flex items-center space-x-1 mt-2">
                <span className="w-8 h-[3px] bg-gold rounded-full"></span>
                <span className="w-2 h-[3px] bg-gold rounded-full"></span>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link
                  href="/faq"
                  className="inline-flex items-center hover:text-gold transition-all hover:translate-x-1 group"
                >
                  <span className="text-gold mr-2 font-bold transition-transform group-hover:scale-110">&raquo;</span>
                  FAQ&apos;s
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="inline-flex items-center hover:text-gold transition-all hover:translate-x-1 group"
                >
                  <span className="text-gold mr-2 font-bold transition-transform group-hover:scale-110">&raquo;</span>
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="inline-flex items-center hover:text-gold transition-all hover:translate-x-1 group"
                >
                  <span className="text-gold mr-2 font-bold transition-transform group-hover:scale-110">&raquo;</span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="inline-flex items-center hover:text-gold transition-all hover:translate-x-1 group"
                >
                  <span className="text-gold mr-2 font-bold transition-transform group-hover:scale-110">&raquo;</span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="inline-flex items-center hover:text-gold transition-all hover:translate-x-1 group"
                >
                  <span className="text-gold mr-2 font-bold transition-transform group-hover:scale-110">&raquo;</span>
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div className="space-y-5 text-left">
            <div className="relative pb-2">
              <h4 className="text-white font-sans font-bold text-lg tracking-wide">
                Newsletter
              </h4>
              <div className="flex items-center space-x-1 mt-2">
                <span className="w-8 h-[3px] bg-gold rounded-full"></span>
                <span className="w-2 h-[3px] bg-gold rounded-full"></span>
              </div>
            </div>
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Successfully subscribed to our newsletter!");
              }}
            >
              <p className="text-sm text-muted leading-relaxed">
                Subscribe Our Newsletter To Get Latest Update And News
              </p>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/20 text-white text-sm rounded-lg pl-10 pr-4 py-2.5 focus:border-gold focus:ring-gold outline-none"
                  required
                />
              </div>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <input
                  type="tel"
                  placeholder="Your Contact"
                  className="w-full bg-white/5 border border-white/20 text-white text-sm rounded-lg pl-10 pr-4 py-2.5 focus:border-gold focus:ring-gold outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full min-h-[44px] bg-gold hover:bg-[#dca83d] text-navy font-bold rounded-lg flex items-center justify-center transition-all duration-150 text-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Subscribe Now</span>
                <svg
                  className="w-4 h-4 ml-2 transform rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
              <div className="flex items-center space-x-1.5 text-xs text-muted/70 justify-center">
                <Lock className="w-3.5 h-3.5 text-gold/85" />
                <span>Your information is safe with us.</span>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 text-center md:flex md:justify-between md:text-left text-sm text-muted space-y-4 md:space-y-0">
          <p>
            © {new Date().getFullYear()} Trips Travels Ltd. All rights reserved.
            Registered in England and Wales.
          </p>
          <p className="text-muted/60">
            Registered Address: 83 Eddish Road, Birmingham, England, B33 9RN
          </p>
        </div>
      </div>

      {/* Scroll to Top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-11 h-11 bg-gold hover:bg-[#dca83d] text-navy rounded-lg flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 z-50 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 font-bold" />
        </button>
      )}

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </footer>
  );
};
export default Footer;
