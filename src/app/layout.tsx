import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "MarineTraffic Group | Customs Clearance & Logistics Tanzania",

  description:
    "MarineTraffic Group provides customs clearance, freight forwarding, import and export permits, trade compliance, warehousing and transportation services across Tanzania and East Africa.",

  keywords: [
    "Customs Clearance Tanzania",
    "Freight Forwarding Tanzania",
    "Import Export Permits",
    "Trade Compliance",
    "Logistics Tanzania",
    "MarineTraffic Group",
    "Dar es Salaam Logistics",
  ],

  openGraph: {
    title: "MarineTraffic Group",
    description:
      "Where Local Meets Global",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
