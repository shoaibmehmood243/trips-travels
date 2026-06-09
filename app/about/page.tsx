import React from "react";
import { Metadata } from "next";
import AboutPageTemplate from "@/components/templates/AboutPageTemplate";

export const metadata: Metadata = {
  title: "About Us | Trips Travels Ltd — Birmingham Travel Agency",
  description:
    "Learn about Trips Travels Ltd, a trusted travel agency based in Birmingham, England. We specialise in cheap international flights and holiday packages across the UK.",
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Trips Travels Ltd",
    "image": "https://tripstravels.co.uk/logo.png",
    "@id": "https://tripstravels.co.uk/#agency",
    "url": "https://tripstravels.co.uk",
    "telephone": "+442070960718",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "83 Eddish Road",
      "addressLocality": "Birmingham",
      "postalCode": "B33 9RN",
      "addressCountry": "GB",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.4862,
      "longitude": -1.8904,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "00:00",
      "closes": "23:59",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutPageTemplate />
    </>
  );
}
