"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plane, Globe, PhoneCall, ShieldCheck, Check, ArrowRight, Smile, Users } from "lucide-react";
import EnquiryForm from "@/components/forms/EnquiryForm";
import SectionHeading from "@/components/ui/SectionHeading";

export const HomePageTemplate: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Intersection Observer for fade-up animations
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

  const whyChooseUs = [
    {
      icon: <Plane className="w-8 h-8 text-gold" />,
      title: "Best Price Guarantee",
      desc: "We search hundreds of airlines to find you the cheapest fares without compromising quality.",
    },
    {
      icon: <Globe className="w-8 h-8 text-gold" />,
      title: "Worldwide Destinations",
      desc: "Get cheap flights to over 200 destinations from Birmingham and all major UK airports.",
    },
    {
      icon: <PhoneCall className="w-8 h-8 text-gold" />,
      title: "24/7 Expert Support",
      desc: "Our UK-based travel specialists are available day and night to assist you.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold" />,
      title: "ATOL Protected",
      desc: "Book with absolute confidence. Your holiday and flight packages are fully protected.",
    },
  ];

  const popularDestinations = [
    {
      name: "Dubai",
      country: "United Arab Emirates",
      price: "389",
      imageUrl: "/images/destinations/dubai.png",
    },
    {
      name: "New York",
      country: "United States",
      price: "419",
      imageUrl: "/images/destinations/newyork.png",
    },
    {
      name: "Toronto",
      country: "Canada",
      price: "439",
      imageUrl: "/images/destinations/toronto.png",
    },
    {
      name: "Cape Town",
      country: "South Africa",
      price: "499",
      imageUrl: "/images/destinations/capetown.png",
    },
    {
      name: "Beijing",
      country: "China",
      price: "529",
      imageUrl: "/images/destinations/beijing.png",
    },
    {
      name: "Istanbul",
      country: "Turkey",
      price: "349",
      imageUrl: "/images/destinations/istanbul.png",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-navy min-h-screen">
      {/* 1. HERO SECTION */}
      <section
        id="quote"
        className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
        aria-label="Hero — Book your flights with Trips Travels Ltd"
      >
        {/* Parallax Orbs */}
        <div
          className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] pointer-events-none z-0 transition-transform duration-75 ease-out"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <div className="orb orb-blue w-full h-full animate-float-blue" />
        </div>
        <div
          className="absolute top-[50%] -right-[10%] w-[400px] h-[400px] pointer-events-none z-0 transition-transform duration-75 ease-out"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          <div className="orb orb-gold w-full h-full animate-float-gold" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-8">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gold uppercase tracking-wider backdrop-blur-sm">
            ✈ Birmingham&apos;s Trusted Travel Experts
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight leading-tight max-w-4xl mx-auto">
            <span className="animate-shimmer block sm:inline">
              Fly Anywhere in the World
            </span>
            <span className="block text-white mt-2">We Handle Everything</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Trips Travels Ltd offers cheap flights, tailored holiday packages and
            expert travel planning from Birmingham, UK.
          </p>

          {/* Enquiry Form */}
          <div className="w-full max-w-4xl mx-auto pt-4">
            <EnquiryForm />
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white backdrop-blur-sm shadow-md">
              <Check className="w-4 h-4 mr-2 text-gold" />
              ATOL Protected
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white backdrop-blur-sm shadow-md">
              <Check className="w-4 h-4 mr-2 text-gold" />
              Trusted UK Agency
            </span>
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

      {/* 2. WHY CHOOSE US */}
      <section
        className="relative py-20 md:py-28 bg-cream text-navy z-10"
        aria-label="Why Choose Trips Travels Ltd"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Thousands Trust Trips Travels Ltd"
            subtitle="We are committed to delivering the ultimate travel experience with cheap flights from Birmingham and reliable customer support."
            centered
            theme="light"
            className="fade-up-element"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/40 border border-[#0A1628]/10 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:-translate-y-1.5 transition-all duration-300 group fade-up-element"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-sans text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-navy/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. POPULAR DESTINATIONS */}
      <section
        className="relative py-20 md:py-28 bg-navy z-10"
        aria-label="Popular Flight Routes"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Popular Flight Routes from the UK"
            subtitle="Explore our top international flight deals with regular flight departures from Birmingham and London."
            centered
            theme="dark"
            className="fade-up-element"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDestinations.map((dest, idx) => (
              <div
                key={idx}
                className="glass-card overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/5 hover:border-white/20 transition-all duration-300 group fade-up-element"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Visual Accent Box */}
                <div
                  className="h-48 w-full relative overflow-hidden border-b border-white/5"
                >
                  <Image
                    src={dest.imageUrl}
                    alt={`${dest.name}, ${dest.country}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80" />
                  <span className="absolute top-4 right-4 bg-gold/90 text-white font-bold text-sm px-3 py-1 rounded-full shadow-lg">
                    From £{dest.price}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-white">
                      {dest.name}
                    </h3>
                    <p className="text-muted text-sm">{dest.country}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted">Direct & stopover deals</span>
                    <Link
                      href="#quote"
                      className="inline-flex items-center text-sm font-semibold text-gold hover:text-white transition-colors group/link"
                    >
                      Enquire Now
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
                <p className="text-cream text-sm leading-relaxed">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <div className="pt-2">
                  <Link href="#quote">
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
                <p className="text-cream text-sm leading-relaxed">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <div className="pt-2">
                  <Link href="#quote">
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

      {/* 4. HOW IT WORKS */}
      <section
        className="relative py-20 md:py-28 bg-deep-blue border-t border-white/5 z-10"
        aria-label="How to Book Your Flights"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Booking Your Flight Is Simple"
            subtitle="Follow our easy three-step enquiry process to secure your next international flight tickets."
            centered
            theme="dark"
            className="fade-up-element"
          />

          <div className="relative pt-6">
            {/* Desktop Dotted Connection Line */}
            <div className="hidden lg:block absolute top-[2.5rem] left-[15%] right-[15%] h-[2px] border-t border-dashed border-gold/30 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
              {[
                {
                  step: "01",
                  title: "Fill in our enquiry form",
                  desc: "Provide your travel dates, departure city, destination, and passenger details in the form above.",
                },
                {
                  step: "02",
                  title: "Receive personalised quotes",
                  desc: "Our Birmingham flight experts search every airline to find you the best rates within 24 hours.",
                },
                {
                  step: "03",
                  title: "Confirm your booking & travel",
                  desc: "Review your options, secure your tickets, receive your ATOL certificates, and start packing.",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center space-y-4 fade-up-element"
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-navy border-2 border-gold flex items-center justify-center text-gold font-bold text-xl shadow-lg shadow-gold/5">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section
        className="relative py-20 overflow-hidden bg-gradient-to-r from-navy to-[#1A6FD4]/30 z-10 border-t border-white/5"
        aria-label="Get a Flight Quote"
      >
        {/* Background Decorative Orbs */}
        <div className="orb orb-blue -bottom-40 -left-40 opacity-70" />
        <div className="orb orb-gold -top-20 -right-20 opacity-50" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 fade-up-element">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight">
            Ready to Book? Get a Free Flight Quote Today
          </h2>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            Based in Birmingham, serving clients across the UK. Speak to our
            specialists for cheap fares to Asia, Africa, America, and Europe.
          </p>
          <div className="pt-4">
            <Link href="#quote">
              <button className="px-8 py-4 bg-gold hover:bg-[#dca83d] text-navy font-semibold rounded-full shadow-lg shadow-gold/20 hover:scale-[1.03] active:scale-[0.97] transition-all duration-150 text-base md:text-lg cursor-pointer">
                Get Your Free Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePageTemplate;
