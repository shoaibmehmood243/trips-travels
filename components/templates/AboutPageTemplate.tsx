"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plane, Compass, Headphones, MapPin, Phone, Mail, ChevronRight, Check, Globe, Smile, Users, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const AboutPageTemplate: React.FC = () => {
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

  const stats = [
    { label: "Happy Travelers", value: "5,000+" },
    { label: "Destinations", value: "200+" },
    { label: "Support Desk", value: "24/7" },
    { label: "Security & Trust", value: "ATOL Protected" },
  ];

  const offers = [
    {
      icon: <Plane className="w-8 h-8 text-gold" />,
      title: "International Flights",
      desc: "Affordable rates on direct and connecting flights worldwide, with a special focus on flight deals from Birmingham Airport.",
    },
    {
      icon: <Compass className="w-8 h-8 text-gold" />,
      title: "Holiday Packages",
      desc: "Bespoke hotel accommodation, combined flights, and holiday booking transfers customized for your family requirements.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-gold" />,
      title: "Travel Consultation",
      desc: "Customized routing, stopover scheduling, and airline baggage policy guides provided by UK travel specialists.",
    },
  ];

  const values = [
    {
      title: "Transparency",
      desc: "We believe in honest travel planning. That means no hidden charges, clear ticket booking terms, and transparent quotes from GDS engines.",
      imageUrl: "/images/values/transparency.png",
    },
    {
      title: "Affordability",
      desc: "By comparing fares across all major airline alliances, we deliver discount flight tickets that save your family money.",
      imageUrl: "/images/values/affordability.png",
      reversed: true,
    },
    {
      title: "Expertise",
      desc: "With years of flight operations experience, our agents solve complex travel routings and secure flight tickets efficiently.",
      imageUrl: "/images/values/expertise.png",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-navy min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[40vh] pt-32 pb-16 flex items-center justify-center overflow-hidden"
        aria-label="About Us Hero"
      >
        {/* Parallax Orbs */}
        <div
          className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] pointer-events-none z-0 transition-transform duration-75 ease-out"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="orb orb-blue w-full h-full animate-float-blue" />
        </div>
        <div
          className="absolute top-[30%] -right-[10%] w-[400px] h-[400px] pointer-events-none z-0 transition-transform duration-75 ease-out"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        >
          <div className="orb orb-gold w-full h-full animate-float-gold" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-white leading-tight">
            About Trips Travels Ltd
          </h1>
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center space-x-2 text-sm text-muted">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">About Us</span>
          </nav>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        className="relative py-20 z-10 px-4 sm:px-6 lg:px-8"
        aria-label="Our Story"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left fade-up-element">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Birmingham&apos;s Dedicated Travel Experts
            </h2>
            <p className="text-muted leading-relaxed">
              Trips Travels Ltd is a premier travel agency based in the heart of
              Birmingham, England, dedicated to connecting UK travelers with global
              destinations. Founded with a passion for discovery and customer care,
              we specialize in sourcing competitive flight rates and bespoke travel plans.
            </p>
            <p className="text-muted leading-relaxed">
              Whether you are looking for direct family holiday flights to Dubai,
              business routes to Toronto, or budget-friendly flight options to Pakistan,
              our experienced travel consultants offer tailored advice and comprehensive GDS support.
            </p>
            <p className="text-muted leading-relaxed">
              Our mission is to make international travel accessible, affordable, and
              stress-free. We verify ticket options across multiple alliances to secure
              value, ensuring that your next journey is protected and expertly managed.
            </p>
          </div>

          <div className="fade-up-element" style={{ transitionDelay: "150ms" }}>
            <div className="glass-card p-8 border-t-[3px] border-t-gold relative overflow-hidden">
              <div className="absolute inset-0 bg-gold/5 blur-xl pointer-events-none" />
              <h3 className="text-2xl font-bold font-display text-white mb-6 text-center">
                Trips Travels in Numbers
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-3xl font-extrabold text-gold font-display mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted font-medium uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative py-12 bg-cream text-navy z-10 border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Check className="w-6 h-6 text-white" />,
                stat: "120k",
                label: "Booking Done",
              },
              {
                icon: <Globe className="w-6 h-6 text-white" />,
                stat: "200+",
                label: "Our Destination",
              },
              {
                icon: <Smile className="w-6 h-6 text-white" />,
                stat: "40k",
                label: "Happy Clients",
              },
              {
                icon: <Users className="w-6 h-6 text-white" />,
                stat: "180+",
                label: "Our Partners",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4 justify-center fade-up-element">
                <div className="w-12 h-12 rounded-2xl bg-sky flex items-center justify-center shadow-lg shadow-sky/20">
                  {item.icon}
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-display text-navy tracking-tight">{item.stat}</div>
                  <div className="text-xs font-semibold text-navy/60 uppercase tracking-wider">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section
        className="relative py-20 bg-cream text-navy z-10"
        aria-label="What We Offer"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Offer"
            subtitle="Explore our comprehensive services designed to make flight bookings and holiday planning a breeze."
            centered
            theme="light"
            className="fade-up-element"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, idx) => (
              <div
                key={idx}
                className="bg-white/40 border border-navy/10 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:-translate-y-1 transition-all duration-300 group fade-up-element"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {offer.icon}
                </div>
                <h3 className="text-xl font-bold font-sans text-navy mb-2">
                  {offer.title}
                </h3>
                <p className="text-navy/70 text-sm leading-relaxed">
                  {offer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section
        className="relative py-20 z-10 px-4 sm:px-6 lg:px-8"
        aria-label="Our Values"
      >
        <div className="max-w-5xl mx-auto space-y-16">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide how we help thousands of travelers fly safely and affordably from the UK."
            centered
            theme="dark"
            className="fade-up-element"
          />

          <div className="space-y-12">
            {values.map((val, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center fade-up-element ${val.reversed ? "md:flex-row-reverse" : ""
                  }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className={`${val.reversed ? "md:order-2" : ""} space-y-4 text-left`}>
                  <h3 className="text-2xl font-bold font-display text-white">
                    {val.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm md:text-base">
                    {val.desc}
                  </p>
                </div>
                <div
                  className={`h-48 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 relative overflow-hidden ${val.reversed ? "md:order-1" : ""
                    }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky/5 to-gold/5 pointer-events-none" />
                  <Image
                    src={val.imageUrl}
                    alt={val.title}
                    width={128}
                    height={128}
                    className="h-32 w-auto object-contain z-10 transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Card Section */}
      <section
        className="relative py-20 bg-deep-blue border-t border-white/5 z-10 px-4 sm:px-6 lg:px-8"
        aria-label="Contact Information"
      >
        <div className="max-w-3xl mx-auto text-center space-y-8 fade-up-element">
          <SectionHeading
            title="Plan Your Next Trip With Us"
            subtitle="Get in touch with our Birmingham agency team to request flight and holiday booking support."
            centered
            theme="dark"
          />

          <div className="glass-card p-8 md:p-10 border-t-[3px] border-t-gold space-y-8 text-left relative overflow-hidden">
            <div className="absolute inset-0 bg-gold/5 blur-xl pointer-events-none" />
            <h3 className="text-xl font-bold text-white mb-6 font-display text-center">
              Trips Travels Ltd Contact Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/5">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Office Address</h4>
                  <p className="text-sm text-muted mt-1 leading-relaxed">
                    83 Eddish Road<br />
                    Birmingham, England<br />
                    B33 9RN
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Call Us</h4>
                  <p className="text-sm text-muted mt-1">
                    <a href="tel:+442070960718" className="hover:text-gold transition-colors">
                      020 7096 0718
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Email Support</h4>
                  <p className="text-sm text-muted mt-1">
                    <a href="mailto:info@tripstravels.co.uk" className="hover:text-gold transition-colors">
                      info@tripstravels.co.uk
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 text-center">
              <Link href="/flights">
                <button className="px-6 py-3 bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full shadow-lg shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-sm">
                  Request a Flight Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO / DISCOUNT BANNERS SECTION */}
      <section className="relative py-20 bg-navy z-10" aria-label="Exclusive Travel Deals">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group min-h-[350px] flex items-center p-8 md:p-12 fade-up-element border border-white/5">
              <Image
                src="/images/promo/first-booking-bg.png"
                alt="First Booking Promo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-transparent md:bg-gradient-to-r md:from-navy/90 md:via-navy/75 md:to-transparent" />
              <div className="relative z-10 max-w-md space-y-4 text-left">
                <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight">
                  First Booking <span className="text-sky font-semibold">Get 70% Discount!</span>
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <div className="pt-2">
                  <Link href="/#quote">
                    <span className="inline-flex items-center px-6 py-3 bg-sky hover:bg-sky/90 text-white font-semibold rounded-full shadow-lg shadow-sky/20 transition-all duration-300 hover:translate-x-1 cursor-pointer text-sm">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group min-h-[350px] flex items-center p-8 md:p-12 fade-up-element border border-white/5" style={{ transitionDelay: "150ms" }}>
              <Image
                src="/images/promo/summer-deals-bg.png"
                alt="Summer Deals Promo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-transparent md:bg-gradient-to-r md:from-navy/90 md:via-navy/75 md:to-transparent" />
              <div className="relative z-10 max-w-md space-y-4 text-left">
                <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight">
                  Summer Deals <span className="text-sky font-semibold">Up To 50% Discount!</span>
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <div className="pt-2">
                  <Link href="/#quote">
                    <span className="inline-flex items-center px-6 py-3 bg-sky hover:bg-sky/90 text-white font-semibold rounded-full shadow-lg shadow-sky/20 transition-all duration-300 hover:translate-x-1 cursor-pointer text-sm">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutPageTemplate;
