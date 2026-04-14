import { AgentsGrid } from "@/components/agents-grid";
import { Differentiator } from "@/components/differentiator";
import { FeatureCards } from "@/components/feature-cards";
import { FeatureHighlight } from "@/components/feature-highlight";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Principles } from "@/components/principles";
import { Stats } from "@/components/stats";
import { WhatWeDo } from "@/components/what-we-do";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: `${siteConfig.name} — AI agents, built to hit the numbers`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <Hero />
        <FeatureHighlight />
        <WhatWeDo />
        <FeatureCards />
        <Differentiator />
        <Principles />
        <Stats />
        <AgentsGrid />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
