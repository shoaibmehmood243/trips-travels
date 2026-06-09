"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqGroup {
  category: string;
  items: FaqItem[];
}

export const FaqPageTemplate: React.FC = () => {
  const faqGroups: FaqGroup[] = [
    {
      category: "General Enquiries",
      items: [
        {
          id: "general-1",
          question: "Why Choose Trips Travels Ltd for Your Booking?",
          answer:
            "We offer competitive fares, flexible travel options, and top-tier customer service. From booking to your return trip, we’re here to assist you with any travel concerns, rebooking, or itinerary adjustments, ensuring your journey is smooth and stress-free.",
        },
        {
          id: "general-2",
          question: "What’s the Easiest Way to Book a Flight?",
          answer:
            "You can book online via our website, call or WhatsApp our travel experts for personalized recommendations, or even visit our office for in-person assistance. We’ll help you find the best deals tailored to your needs.",
        },
      ],
    },
    {
      category: "Payments & Security",
      items: [
        {
          id: "payment-1",
          question: "What Are the Payment Options for My Ticket?",
          answer:
            "We accept a variety of secure payment methods including Debit/Credit Cards (Visa, MasterCard), Bank Transfers, Online Payment Gateways, and Cash (in-office).",
        },
        {
          id: "payment-2",
          question: "Can I Use Someone Else's Credit Card to Pay?",
          answer:
            "Yes, you can. However, we may require a signed authorization form along with the cardholder’s ID for security purposes.",
        },
        {
          id: "payment-3",
          question: "How Will I Receive My Ticket?",
          answer:
            "Once your payment is confirmed, we’ll send your e-ticket to you via Email, WhatsApp, or any other preferred communication method.",
        },
      ],
    },
    {
      category: "Changes & Cancellations",
      items: [
        {
          id: "cancel-1",
          question: "How Can I Change or Cancel My Ticket?",
          answer:
            "If you need to make changes or cancel your booking, please contact us as soon as possible. Airline policies vary, and additional charges may apply. We’ll help you with rebooking, refunds (if applicable), and alternative options.",
        },
      ],
    },
  ];

  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="relative overflow-hidden bg-navy min-h-screen pt-32 pb-20 font-sans text-left">
      {/* Parallax decorative backgrounds */}
      <div className="orb orb-blue -top-[10%] -left-[10%] opacity-50 animate-float-blue" />
      <div className="orb orb-gold top-[40%] -right-[10%] opacity-40 animate-float-gold" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gold uppercase tracking-wider">
            Help Center
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-muted text-base max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about booking international flights,
            payment systems, and passenger regulations with Trips Travels Ltd.
          </p>
        </div>

        <div className="space-y-12">
          {faqGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold font-display text-gold border-l-2 border-gold pl-3">
                {group.category}
              </h2>
              <div className="space-y-4">
                {group.items.map((item) => {
                  const isOpen = openId === item.id;
                  return (
                    <div
                      key={item.id}
                      className="glass-card overflow-hidden border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                        aria-expanded={isOpen}
                        aria-controls={`faq-content-${item.id}`}
                        id={`faq-btn-${item.id}`}
                      >
                        <span className="font-semibold text-white text-sm md:text-base pr-4">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      <div
                        id={`faq-content-${item.id}`}
                        aria-labelledby={`faq-btn-${item.id}`}
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen
                            ? "max-h-[300px] border-t border-white/5"
                            : "max-h-0"
                          }`}
                      >
                        <p className="p-5 text-muted text-sm md:text-base leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FaqPageTemplate;
