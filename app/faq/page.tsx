import React from "react";
import { Metadata } from "next";
import FaqPageTemplate from "@/components/templates/FaqPageTemplate";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Trips Travels Ltd Birmingham",
  description:
    "Got questions about booking flights or holidays with Trips Travels Ltd? Find answers to our most frequently asked questions here.",
  keywords: [
    "travel agency FAQ Birmingham",
    "flight booking questions UK",
  ],
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why Choose Trips Travels Ltd for Your Booking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer competitive fares, flexible travel options, and top-tier customer service. From booking to your return trip, we’re here to assist you with any travel concerns, rebooking, or itinerary adjustments, ensuring your journey is smooth and stress-free.",
        },
      },
      {
        "@type": "Question",
        "name": "What’s the Easiest Way to Book a Flight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book online via our website, call or WhatsApp our travel experts for personalized recommendations, or even visit our office for in-person assistance. We’ll help you find the best deals tailored to your needs.",
        },
      },
      {
        "@type": "Question",
        "name": "What Are the Payment Options for My Ticket?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept a variety of secure payment methods including Debit/Credit Cards (Visa, MasterCard), Bank Transfers, Online Payment Gateways, and Cash (in-office).",
        },
      },
      {
        "@type": "Question",
        "name": "Can I Use Someone Else's Credit Card to Pay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can. However, we may require a signed authorization form along with the cardholder’s ID for security purposes.",
        },
      },
      {
        "@type": "Question",
        "name": "How Will I Receive My Ticket?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once your payment is confirmed, we’ll send your e-ticket to you via Email, WhatsApp, or any other preferred communication method.",
        },
      },
      {
        "@type": "Question",
        "name": "How Can I Change or Cancel My Ticket?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you need to make changes or cancel your booking, please contact us as soon as possible. Airline policies vary, and additional charges may apply. We’ll help you with rebooking, refunds (if applicable), and alternative options.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqPageTemplate />
    </>
  );
}
