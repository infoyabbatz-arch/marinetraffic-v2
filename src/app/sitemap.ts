import type { MetadataRoute } from "next";

const baseUrl = "https://www.marinetraffic.co.tz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, priority: 1.0 },
    { url: `${baseUrl}/about`, priority: 0.9 },
    { url: `${baseUrl}/services`, priority: 0.9 },
    { url: `${baseUrl}/industries`, priority: 0.9 },
    { url: `${baseUrl}/academy`, priority: 0.9 },
    { url: `${baseUrl}/contact`, priority: 0.8 },
    { url: `${baseUrl}/quote`, priority: 0.9 },
    { url: `${baseUrl}/track`, priority: 0.9 },

    { url: `${baseUrl}/bandari-salama`, priority: 1.0 },

    { url: `${baseUrl}/timevault`, priority: 1.0 },
    { url: `${baseUrl}/timevault/logistics`, priority: 0.9 },
    { url: `${baseUrl}/timevault/customs-academy`, priority: 0.9 },
    { url: `${baseUrl}/timevault/tax-academy`, priority: 0.9 },
    { url: `${baseUrl}/timevault/investment`, priority: 0.9 },
    { url: `${baseUrl}/timevault/entrepreneurship`, priority: 0.9 },
    { url: `${baseUrl}/timevault/library`, priority: 0.8 },
    { url: `${baseUrl}/timevault/videos`, priority: 0.8 },

    { url: `${baseUrl}/portal/intelligence`, priority: 0.8 },
  ];
}
