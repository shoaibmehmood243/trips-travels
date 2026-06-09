import React from "react";
import { Metadata } from "next";
import HomePageTemplate from "@/components/templates/HomePageTemplate";

export const metadata: Metadata = {
  title: "Trips Travels Ltd | Cheap Flights & Holiday Packages from Birmingham",
  description:
    "Trips Travels Ltd is a trusted UK travel agency based in Birmingham offering cheap flights, holiday packages and travel planning services.",
  alternates: {
    canonical: "https://www.tripstravels.co.uk",
  },
  openGraph: {
    title: "Trips Travels Ltd | Cheap Flights & Holiday Packages",
    description:
      "Trips Travels Ltd is a trusted UK travel agency based in Birmingham offering cheap flights, holiday packages and travel planning services.",
    type: "website",
    locale: "en_GB",
    url: "https://www.tripstravels.co.uk",
    siteName: "Trips Travels Ltd",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trips Travels Ltd | Cheap Flights & Holiday Packages",
    description:
      "Trips Travels Ltd is a trusted UK travel agency based in Birmingham offering cheap flights, holiday packages and travel planning services.",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripstravels.co.uk/#agency",
        "name": "Trips Travels Ltd",
        "url": "https://www.tripstravels.co.uk",
        "image": "https://www.tripstravels.co.uk/logo.png",
        "telephone": "+442070960718",
        "email": "info@tripstravels.co.uk",
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
        "sameAs": [
          "https://www.facebook.com/tripstravelsltd",
          "https://www.instagram.com/tripstravelsltd",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tripstravels.co.uk/#website",
        "url": "https://www.tripstravels.co.uk",
        "name": "Trips Travels Ltd",
        "publisher": {
          "@id": "https://www.tripstravels.co.uk/#agency",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageTemplate />
    </>
  );
}
