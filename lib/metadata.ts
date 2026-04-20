import type { Metadata } from "next";

export const siteConfig = {
  name: "Brixo Labs",
  description:
    "Brixo audits your team's AI usage, finds the overspend, and shows you exactly what to cut. 30 to 40 percent of AI spend is waste — we find it.",
  url: "https://brixolabs.com",
  ogImage: "/og-image.png",
  creator: "@brixolabs",
  bookingUrl: "https://zcal.co/i/k4jSoY55",
  // Seeded trust-strip figures, surfaced as a count-up ticker in the hero.
  // Update as new audit findings come in.
  waste: {
    dollars: 482000,
    teams: 14,
  },
  authors: [
    {
      name: "Brixo Labs",
      url: "https://brixolabs.com",
    },
  ],
  keywords: [
    "AI cost intelligence",
    "AI cost optimization",
    "AI spend audit",
    "token cost optimization",
    "LLM cost management",
    "FinOps for AI",
    "AI waste audit",
    "model routing",
  ],
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [...siteConfig.authors],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
  },
  manifest: "/site.webmanifest",
};

export function createMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: title ?? siteConfig.name,
      description: description ?? siteConfig.description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title ?? siteConfig.name,
        },
      ],
    },
    twitter: {
      title: title ?? siteConfig.name,
      description: description ?? siteConfig.description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
