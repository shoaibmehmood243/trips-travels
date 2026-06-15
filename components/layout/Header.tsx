"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu } from "lucide-react";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Flights", href: "/flights" },
    { name: "About Us", href: "/about" },
    { name: "FAQs", href: "/faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-navy/92 backdrop-blur-md shadow-lg border-b border-white/5 py-4"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-gold rounded px-2"
            >
              <Image
                src="/logo.png"
                alt="Trips Travels Ltd"
                width={160}
                height={56}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-sans text-[15px] font-medium text-white hover:text-gold transition-colors relative py-1 focus:outline-none focus:ring-2 focus:ring-gold rounded px-1 group`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-gold transform origin-left transition-transform duration-300 ${isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                        }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right side utilities (Desktop) */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Phone */}
              <a
                href="tel:+442070960718"
                className="flex items-center text-muted hover:text-gold transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-gold rounded px-1"
              >
                <Phone className="w-4 h-4 mr-2 text-gold" />
                <span className="font-sans">020 7096 0718</span>
              </a>

              {/* CTA */}
              <Link href="/#quote" scroll={true}>
                <Button variant="primary">Get a Quote</Button>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center space-x-4">
              {/* Phone (Icon only on tiny devices) */}
              <a
                href="tel:+442070960718"
                className="text-muted hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded p-2"
                aria-label="Call Trips Travels"
              >
                <Phone className="w-5 h-5 text-gold" />
              </a>

              {/* Menu toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded p-2"
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide-in */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
export default Header;
