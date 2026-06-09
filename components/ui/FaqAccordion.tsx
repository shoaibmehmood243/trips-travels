"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="glass-card overflow-hidden border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <button
              onClick={() => toggleItem(idx)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-white text-base md:text-lg">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gold transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[300px] border-t border-white/5" : "max-h-0"
              }`}
            >
              <p className="p-6 text-muted text-sm md:text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FaqAccordion;
