import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/ui/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Trips Travels Ltd",
    default: "Trips Travels Ltd | Cheap Flights & Holiday Packages",
  },
  description:
    "Trips Travels Ltd is a trusted UK travel agency based in Birmingham offering cheap flights, holiday packages and travel planning services.",
  keywords: [
    "cheap flights Birmingham",
    "travel agents Birmingham UK",
    "affordable international flights UK",
    "Birmingham travel agency",
    "West Midlands travel agents",
  ],
  openGraph: {
    title: "Trips Travels Ltd | Cheap Flights & Holiday Packages",
    description:
      "Trips Travels Ltd is a trusted UK travel agency based in Birmingham offering cheap flights, holiday packages and travel planning services.",
    type: "website",
    locale: "en_GB",
    url: "https://www.tripstravels.co.uk",
    siteName: "Trips Travels Ltd",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1628",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased text-white bg-[#0A1628] min-h-screen flex flex-col justify-between">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gold text-navy px-4 py-2 rounded-md font-semibold z-50 transition-all"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-grow animate-page-fade">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
