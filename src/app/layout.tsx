import "./globals.css";
import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marinetraffic.co.tz"),

  title: {
    default:
      "MarineTraffic Group | Customs Clearance, Logistics & Trade Intelligence",
    template: "%s | MarineTraffic Group",
  },

  description:
    "MarineTraffic Group provides customs clearance, freight forwarding, trade compliance, logistics solutions, trade intelligence, investment insights and professional learning services across Tanzania and East Africa.",

  keywords: [
    "Customs Clearance Tanzania",
    "Freight Forwarding Tanzania",
    "Import Export Tanzania",
    "Trade Compliance",
    "Logistics Tanzania",
    "MarineTraffic Group",
    "Bandari Salama",
    "TimeVault",
    "East Africa Logistics",
    "Trade Intelligence",
    "Tax Intelligence",
    "Customs Academy",
    "Tax Academy",
    "Investment Opportunities Tanzania",
    "Port Operations",
    "Supply Chain Africa",
  ],

  alternates: {
    canonical: "https://www.marinetraffic.co.tz",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.marinetraffic.co.tz",
    siteName: "MarineTraffic Group",
    title:
      "MarineTraffic Group | Customs Clearance, Logistics & Trade Intelligence",
    description:
      "Where Local Meets Global. Customs, logistics, trade intelligence and investment insights for East Africa.",
    images: [
      {
        url: "/images/logo-full.png",
        width: 1200,
        height: 630,
        alt: "MarineTraffic Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "MarineTraffic Group | Customs Clearance, Logistics & Trade Intelligence",
    description:
      "Where Local Meets Global. Customs, logistics, trade intelligence and investment insights.",
    images: ["/images/logo-full.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "PASTE_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MarineTraffic Group",
    url: "https://www.marinetraffic.co.tz",
    logo:
      "https://www.marinetraffic.co.tz/images/logo-full.png",
    description:
      "Customs clearance, freight forwarding, logistics, trade intelligence and professional learning services across East Africa.",
    areaServed: [
      "Tanzania",
      "Kenya",
      "Uganda",
      "Rwanda",
      "Burundi",
      "DR Congo",
      "East Africa",
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
