import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Trips Travels Ltd",
  description:
    "Read the Terms & Conditions of booking flights and holiday travel with Trips Travels Ltd.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  const sections = [
    { id: "booking", title: "1. Booking & Payments" },
    { id: "cancel", title: "2. Cancellation & Refunds" },
    { id: "visa", title: "3. Travel Documents & Visa" },
    { id: "insurance", title: "4. Travel Insurance" },
    { id: "policies", title: "5. Flight & Hotel Policies" },
    { id: "liability", title: "6. Liability & Responsibility" },
    { id: "changes", title: "7. Changes to Terms & Conditions" },
  ];

  return (
    <div className="relative overflow-hidden bg-navy min-h-screen pt-32 pb-20 font-sans text-left">
      {/* Parallax decorative backgrounds */}
      <div className="orb orb-blue -top-[10%] -left-[10%] opacity-50 animate-float-blue" />
      <div className="orb orb-gold top-[40%] -right-[10%] opacity-40 animate-float-gold" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Terms & Conditions
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
          {/* 1. Booking & Payments */}
          <section id="booking" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              1. Booking & Payments
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>All bookings are dependent on confirmation from the airline, hotel, or other travel service providers.</li>
              <li>A deposit or full payment is required when making a reservation.</li>
              <li>Accepted payment methods include bank transfer, credit/debit card, and secure online payment systems.</li>
              <li>Prices are subject to change due to fare updates, exchange rates, or seasonal variations.</li>
            </ul>
          </section>

          {/* 2. Cancellation & Refunds */}
          <section id="cancel" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              2. Cancellation & Refunds
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>All online tickets are strictly non-refundable, regardless of the reason for cancellation or no-show.</li>
              <li>In case of cancellation all payments made are non-refundable and non-transferable.</li>
              <li>Service charges and booking fees remain non-refundable under all circumstances.</li>
              <li>If a flight is canceled by the airline, any rescheduling or refund will solely depend on the airline’s policy.</li>
            </ul>
          </section>

          {/* 3. Travel Documents & Visa */}
          <section id="visa" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              3. Travel Documents & Visa
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Travelers must ensure they hold valid passports, visas, and any required travel documentation.</li>
              <li>Visa approval is subject to the issuing {"embassy's"} discretion. We cannot guarantee visa issuance.</li>
              <li>Any visa delays or denials are the sole responsibility of the traveler.</li>
            </ul>
          </section>

          {/* 4. Travel Insurance */}
          <section id="insurance" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              4. Travel Insurance
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Travel insurance is strongly recommended to cover cancellations, health emergencies, and baggage loss.</li>
              <li>Trips Travels Ltd is not responsible for unexpected incidents or expenses during your trip.</li>
            </ul>
          </section>

          {/* 5. Flight & Hotel Policies */}
          <section id="policies" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              5. Flight & Hotel Policies
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Airline schedules and ticket prices can change without notice.</li>
              <li>Additional fees may apply for baggage, seat selection, and other optional services.</li>
              <li>Hotels may alter reservations based on availability and their internal policies.</li>
            </ul>
          </section>

          {/* 6. Liability & Responsibility */}
          <section id="liability" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              6. Liability & Responsibility
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Trips Travels Ltd operates as an agent for airlines, hotels, and travel providers. We are not accountable for delays, cancellations, or changes imposed by these third parties.</li>
              <li>We are not liable for any loss, injury, accident, or inconvenience during travel.</li>
            </ul>
          </section>

          {/* 7. Changes to Terms & Conditions */}
          <section id="changes" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
              7. Changes to Terms & Conditions
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>We reserve the right to update or change these Terms & Conditions at any time, without prior notice.</li>
              <li>By continuing to use our services, you accept any updates to these terms.</li>
            </ul>
            <p className="pt-2">
              For assistance, please contact us at{" "}
              <a href="tel:+442070960718" className="hover:text-gold transition-colors font-semibold text-white">
                020 7096 0718
              </a>{" "}
              or visit{" "}
              <a href="https://www.tripstravels.co.uk" className="hover:text-gold transition-colors font-semibold text-white">
                tripstravels.co.uk
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
