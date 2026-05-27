import { Audit } from "@/components/audit";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { WhyBrixo } from "@/components/why-brixo";
import { Who } from "@/components/who";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: `${siteConfig.name} — AI is expensive. Waste is optional.`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <Hero />
        <Problem />
        <Who />
        <Audit />
        <WhyBrixo />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
