"use client";

import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "@/lib/metadata";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero(): ReactNode {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden bg-background flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-270 h-full">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-foreground/5" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-foreground/5" />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6 sm:px-8 pt-32 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-10"
        >
          Brixo Labs — AI agents, built to hit numbers
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-serif text-foreground leading-[1.05] tracking-tight max-w-4xl"
        >
          Most agent pilots fail.
          <br />
          <span className="text-foreground/60">
            Not because the technology doesn&apos;t work, but because nobody
            defined what success looks like.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="mt-10 text-lg sm:text-xl font-medium text-foreground max-w-2xl leading-snug"
        >
          Brixo Labs designs, builds, and manages AI agents that hit the numbers
          you care about.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease }}
          className="mt-12"
        >
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 active:scale-[0.98] transition-all duration-150"
          >
            Book a consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
