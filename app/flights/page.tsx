import React from "react";
import { Metadata } from "next";
import FlightsPageTemplate from "@/components/templates/FlightsPageTemplate";

export const metadata: Metadata = {
  title: "Cheap International Flights from Birmingham | Trips Travels Ltd",
  description:
    "Find cheap flights from Birmingham and across the UK. Trips Travels Ltd searches all major airlines to get you the best fares to destinations worldwide.",
  keywords: [
    "cheap flights Birmingham",
    "international flights UK",
    "affordable flight deals",
    "book flights online UK",
  ],
};

export default function FlightsPage() {
  return <FlightsPageTemplate />;
}
