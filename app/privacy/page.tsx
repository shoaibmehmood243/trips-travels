import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Trips Travels Ltd",
  description:
    "Trips Travels Ltd Privacy Policy — read how we collect, use, protect, and process your personal travel details.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  const sections = [
    { id: "collect", title: "1. Information We Collect" },
    { id: "use", title: "2. How Your Information is Used" },
    { id: "security", title: "3. Data Security Measures" },
    { id: "legal", title: "4. Legal Notice" },
    { id: "cookies", title: "5. Cookies and Website Tracking" },
    { id: "rights", title: "6. Your Data Rights" },
    { id: "compliance", title: "7. Compliance and Verification" },
    { id: "updates", title: "8. Updates to This Policy" },
  ];

  return (
    <div className="relative overflow-hidden bg-navy min-h-screen pt-32 pb-20 font-sans text-left">
      {/* Parallax decorative backgrounds */}
      <div className="orb orb-blue -top-[10%] -left-[10%] opacity-50 animate-float-blue" />
      <div className="orb orb-gold top-[40%] -right-[10%] opacity-40 animate-float-gold" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted text-sm">Last Updated: June 2026</p>
        </div>

        {/* Table of Contents */}
        <div className="glass-card border-white/10 rounded-2xl p-6 mb-12 backdrop-blur-md">
          <h2 className="text-lg font-bold text-white mb-4 font-display">Table of Contents</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  className="text-muted hover:text-gold transition-colors hover:underline"
                >
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="space-y-10 text-muted leading-relaxed text-sm md:text-base">
          {/* 1. Information We Collect */}
          <section id="collect" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              1. Information We Collect
            </h2>
            <p>
              To deliver efficient and tailored travel services, we may gather the following types of information:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Personal Information:</strong> Full name, phone number, email address, date of birth, and passport details.
              </li>
              <li>
                <strong>Billing Details:</strong> Credit or debit card information used for payment processing.
              </li>
              <li>
                <strong>Travel Preferences:</strong> Choices regarding flights, accommodations, and travel plans.
              </li>
            </ul>
          </section>

          {/* 2. How Your Information is Used */}
          <section id="use" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              2. How Your Information is Used
            </h2>
            <p>
              The information collected may be used for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Managing travel bookings, payments, and arrangements.</li>
              <li>Providing customized travel suggestions and special offers.</li>
              <li>Enhancing our services, website functionality, and customer experience.</li>
              <li>Complying with legal and regulatory requirements.</li>
            </ul>
            <p>
              Your data is never sold. We only share it with trusted travel partners (airlines, hotels, car rental providers) to complete your bookings.
            </p>
          </section>

          {/* 3. Data Security Measures */}
          <section id="security" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              3. Data Security Measures
            </h2>
            <p>
              We implement robust security protocols to protect your personal data from unauthorized access, breaches, or misuse.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>All financial transactions are encrypted and processed via secure gateways.</li>
              <li>We adhere to the UK’s General Data Protection Regulation (GDPR) for ethical and lawful data handling.</li>
            </ul>
          </section>

          {/* 4. Legal Notice */}
          <section id="legal" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              4. Legal Notice
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong>Pricing Disclaimer:</strong> While we strive for pricing accuracy, occasional errors may happen. We reserve the right to amend or cancel reservations affected by incorrect pricing.
              </li>
              <li>
                <strong>Unforeseen Events:</strong> We are not accountable for travel interruptions caused by natural disasters, airline changes, government actions, or unexpected situations.
              </li>
              <li>
                <strong>Third-Party Responsibility:</strong> We function as a liaison between customers and travel providers. We are not liable for third-party policies or service disruptions.
              </li>
              <li>
                <strong>Visa Requirements:</strong> Ensuring proper documentation for travel (including visas) is the traveler’s responsibility. We are not liable for denied entry due to missing or incorrect documents.
              </li>
            </ul>
          </section>

          {/* 5. Cookies and Website Tracking */}
          <section id="cookies" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              5. Cookies and Website Tracking
            </h2>
            <p>
              Cookies are used to improve site performance, monitor website usage, and customize your browsing experience. You can manage cookie settings through your web browser.
            </p>
          </section>

          {/* 6. Your Data Rights */}
          <section id="rights" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              6. Your Data Rights
            </h2>
            <p>
              Under the UK GDPR, you are entitled to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request corrections or deletions of your information.</li>
              <li>Unsubscribe from marketing communications at any time.</li>
              <li>Raise a complaint if you believe your data is being mishandled.</li>
            </ul>
          </section>

          {/* 7. Compliance and Verification */}
          <section id="compliance" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              7. Compliance and Verification
            </h2>
            <p>
              We are a certified travel agency in the United Kingdom, adhering to all relevant legal and industry standards. Our official registration reflects our commitment to safe, transparent, and lawful operations.
            </p>
          </section>

          {/* 8. Updates to This Policy */}
          <section id="updates" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              8. Updates to This Policy
            </h2>
            <p>
              Our Privacy Policy may be revised periodically. Any updates will be published on our website. By continuing to use our services, you agree to the latest version of the policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
