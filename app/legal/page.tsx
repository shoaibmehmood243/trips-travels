import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice | Trips Travels Ltd",
  robots: {
    index: false,
    follow: true,
  },
};

export default function LegalPage() {
  return (
    <div className="relative overflow-hidden bg-navy min-h-screen pt-32 pb-20 font-sans text-left">
      {/* Parallax decorative backgrounds */}
      <div className="orb orb-blue -top-[10%] -left-[10%] opacity-50 animate-float-blue" />
      <div className="orb orb-gold top-[40%] -right-[10%] opacity-40 animate-float-gold" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Legal Notice
          </h1>
          <p className="text-muted text-sm">Regulatory Information & Disclosures</p>
        </div>

        <div className="space-y-10 text-muted leading-relaxed text-sm md:text-base">
          {/* Company Information */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              Company Information
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Company Name:</strong> Trips Travels Ltd</li>
              <li><strong>Legal Form:</strong> Private Limited Company</li>
              <li><strong>Head Office:</strong> 83 Eddish Road, Birmingham, England, B33 9RN</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              Contact Information
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+442070960718" className="hover:text-gold transition-colors font-medium text-white">
                  020 7096 0718
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@tripstravels.co.uk" className="hover:text-gold transition-colors font-medium text-white">
                  info@tripstravels.co.uk
                </a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a href="https://www.tripstravels.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors font-medium text-white">
                  https://www.tripstravels.co.uk
                </a>
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              Intellectual Property
            </h2>
            <p>
              All content on this website (texts, images, logos, etc.) is the property of Trips Travels Ltd or its partners. Reproduction, distribution, or use of any content without prior written consent is prohibited.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              Limitation of Liability
            </h2>
            <p>
              Trips Travels Ltd strives to provide accurate and up-to-date information, but makes no guarantees. We shall not be held responsible for any direct or indirect damage resulting from the use of this site.
            </p>
          </section>

          {/* Governing Law */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              Governing Law
            </h2>
            <p>
              This website is governed by the laws of England and Wales. Any disputes arising in connection with the use of this website shall be subject to the exclusive jurisdiction of the courts of England, specifically the courts located in London.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
