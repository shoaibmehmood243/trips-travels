"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Plane, Tags, PlaneTakeoff, CalendarCheck, ArrowRight } from "lucide-react";
import FlightEnquiryForm from "@/components/forms/FlightEnquiryForm";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const FlightsPageTemplate: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-up-element");
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const popularRoutes = [
    { from: "Birmingham", to: "Karachi" },
    { from: "Birmingham", to: "Lahore" },
    { from: "Birmingham", to: "Dubai" },
    { from: "London", to: "New York" },
    { from: "London", to: "Toronto" },
    { from: "Manchester", to: "Islamabad" },
    { from: "UK", to: "Lagos" },
    { from: "UK", to: "Nairobi" },
    { from: "UK", to: "Delhi" },
  ];

  const whyBook = [
    {
      icon: <Tags className="w-8 h-8 text-gold" />,
      title: "Competitive Fares",
      desc: "We search multiple GDS reservation systems to find airline ticket prices others miss.",
    },
    {
      icon: <PlaneTakeoff className="w-8 h-8 text-gold" />,
      title: "All Major Airlines",
      desc: "Fly with Emirates, Qatar Airways, Turkish Airlines, British Airways, and more.",
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-gold" />,
      title: "Flexible Booking",
      desc: "Secure packages with flexible date and airline options under full ATOL protection.",
    },
  ];

  const faqItems = [
    {
      question: "How do I find the cheapest flights from Birmingham?",
      answer: "The easiest way is to request a quote through our flight enquiry form. Our Birmingham-based agents compare direct and stopover flights across multiple GDS platforms to find you the best fares.",
    },
    {
      question: "Can I book one-way international flights through Trips Travels?",
      answer: "Yes, we support one-way, return, and complex multi-city flight booking requests to any destination globally.",
    },
    {
      question: "How long does it take to get a flight quote?",
      answer: "Our team typically returns tailored flight options and quotes within 24 hours of receiving your request.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-navy min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] pt-32 pb-16 flex items-center justify-center overflow-hidden"
        aria-label="Flights Hero"
      >
        {/* Parallax Orbs */}
        <div
          className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] pointer-events-none z-0 transition-transform duration-75 ease-out"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <div className="orb orb-blue w-full h-full animate-float-blue" />
        </div>
        <div
          className="absolute top-[40%] -right-[10%] w-[400px] h-[400px] pointer-events-none z-0 transition-transform duration-75 ease-out"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          <div className="orb orb-gold w-full h-full animate-float-gold" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gold uppercase tracking-wider backdrop-blur-sm">
            ✈ Flights Worldwide
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
            Cheap International Flights from the UK
          </h1>

          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Get personalised flight quotes from our Birmingham travel experts — we
            search every airline so you don&apos;t have to.
          </p>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section
        id="request-quote"
        className="relative pb-24 z-10 px-4 sm:px-6 lg:px-8"
        aria-label="Request Your Flight Quote"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <SectionHeading
            title="Request Your Flight Quote"
            subtitle="Fill in the details below, and our team will get to work searching the best deals for you."
            centered
            theme="dark"
            className="fade-up-element"
          />
          <div className="fade-up-element">
            <FlightEnquiryForm />
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section
        className="relative py-20 bg-[#0E2147] border-t border-white/5 z-10"
        aria-label="Popular Flight Routes"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Popular International Routes"
            subtitle="Search trending flight routes and request direct pricing from our agents."
            centered
            theme="dark"
            className="fade-up-element"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRoutes.map((route, idx) => (
              <Link
                key={idx}
                href="#request-quote"
                className="glass-card p-6 flex items-center justify-between hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/5 hover:border-white/20 transition-all duration-300 group fade-up-element"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <Plane className="w-5 h-5 text-gold group-hover:rotate-12 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      {route.from} &rarr; {route.to}
                    </h3>
                    <p className="text-sm text-muted">Enquire for current fares</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book Section */}
      <section
        className="relative py-20 bg-[#F5F0E8] text-navy z-10"
        aria-label="Why Book Flights With Us"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Book Flights With Us"
            subtitle="Discover the benefits of planning your next international trip with Trips Travels Ltd."
            centered
            theme="light"
            className="fade-up-element"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyBook.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/40 border border-[#0A1628]/10 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:-translate-y-1 transition-all duration-300 group fade-up-element"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-sans text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-navy/70 text-sm leading-relaxed border-t border-[#0A1628]/5 pt-2 mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="relative py-20 bg-navy border-t border-white/5 z-10"
        aria-label="Frequently Asked Questions About Flight Bookings"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Learn more about booking international flights from Birmingham with us."
            centered
            theme="dark"
            className="fade-up-element"
          />
          <div className="fade-up-element pt-6">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>
    </div>
  );
};
export default FlightsPageTemplate;
