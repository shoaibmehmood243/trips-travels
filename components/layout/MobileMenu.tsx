"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Phone } from "lucide-react";
import Button from "../ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ name: string; href: string }>;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
}) => {
  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#0A1628]/98 backdrop-blur-xl transition-all duration-300">
      {/* Header Area */}
      <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
        <Link href="/" onClick={onClose} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Trips Travels Ltd"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
        <button
          onClick={onClose}
          className="text-white hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded p-2"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col justify-center items-center space-y-8 px-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={onClose}
            className="font-sans text-2xl font-medium text-white hover:text-gold transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-gold rounded px-4"
          >
            {link.name}
          </Link>
        ))}

        {/* Phone contact in menu list */}
        <a
          href="tel:+442070960718"
          className="flex items-center text-muted hover:text-gold transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-gold rounded px-4 py-2"
        >
          <Phone className="w-5 h-5 mr-2 text-gold" />
          <span className="font-sans">020 7096 0718</span>
        </a>
      </nav>

      {/* Footer Area with CTA */}
      <div className="p-8 border-t border-white/5 flex flex-col space-y-4">
        <Link href="/#quote" onClick={onClose} className="w-full">
          <Button variant="primary" fullWidth>
            Get a Quote
          </Button>
        </Link>
        <p className="text-center text-sm text-muted">
          83 Eddish Road, Birmingham, B33 9RN
        </p>
      </div>
    </div>
  );
};
export default MobileMenu;
