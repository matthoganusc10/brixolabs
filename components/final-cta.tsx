"use client";

import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "@/lib/metadata";

const ease = [0.16, 1, 0.3, 1] as const;

export function FinalCTA(): ReactNode {
  return (
    <section className="relative w-full bg-foreground text-background overflow-hidden">
      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 py-28 sm:py-36 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif leading-tight max-w-3xl mx-auto"
        >
          Ready to build an agent that hits the numbers?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="mt-12"
        >
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full text-sm font-medium hover:bg-background/90 active:scale-[0.98] transition-all duration-150"
          >
            Book a consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
