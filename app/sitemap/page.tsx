import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Globe, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Sitemap | Trips Travels Ltd",
  description: "Browse all pages on the Trips Travels Ltd website.",
};

export default function SitemapPage() {
  const mainPages = [
    { name: "Home", href: "/" },
    { name: "Flights", href: "/flights" },
    { name: "About Us", href: "/about" },
    { name: "FAQs", href: "/faq" },
  ];

  const legalPages = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Legal Notice", href: "/legal" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  return (
    <div className="relative overflow-hidden bg-navy min-h-screen pt-32 pb-20 font-sans text-left">
      <div className="orb orb-blue -top-[10%] -left-[10%] opacity-50" />
      <div className="orb orb-gold top-[40%] -right-[10%] opacity-40" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gold uppercase tracking-wider">
            Navigation Map
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white">
            Sitemap
          </h1>
          <p className="text-muted text-base max-w-2xl mx-auto leading-relaxed">
            Quick links to navigate across the Trips Travels Ltd website. Find
            information about flights, company policies, and support services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Pages */}
          <div className="glass-card p-6 border-t-[3px] border-t-gold space-y-6">
            <div className="flex items-center space-x-3 text-gold">
              <Globe className="w-6 h-6" />
              <h2 className="text-xl font-bold font-display text-white">
                Main Pages
              </h2>
            </div>
            <ul className="space-y-4">
              {mainPages.map((page) => (
                <li
                  key={page.href}
                  className="border-b border-white/5 pb-2 last:border-0 last:pb-0"
                >
                  <Link
                    href={page.href}
                    className="text-muted hover:text-gold transition-colors font-medium flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 mr-2 group-hover:scale-150 transition-transform" />
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="glass-card p-6 border-t-[3px] border-t-gold space-y-6">
            <div className="flex items-center space-x-3 text-gold">
              <ShieldAlert className="w-6 h-6" />
              <h2 className="text-xl font-bold font-display text-white">
                Legal & Info
              </h2>
            </div>
            <ul className="space-y-4">
              {legalPages.map((page) => (
                <li
                  key={page.href}
                  className="border-b border-white/5 pb-2 last:border-0 last:pb-0"
                >
                  <Link
                    href={page.href}
                    className="text-muted hover:text-gold transition-colors font-medium flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 mr-2 group-hover:scale-150 transition-transform" />
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
