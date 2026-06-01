import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  allowedDevOrigins: ["*.replit.dev", "*.kirk.replit.dev"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/auditpreview",
        destination: "/auditpreview/index.html",
      },
      {
        source: "/auditpreview/",
        destination: "/auditpreview/index.html",
      },
    ];
  },
};

export default nextConfig;
