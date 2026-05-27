"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export function WhyBrixo(): ReactNode {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground"
          >
            Why Brixo
          </motion.p>

          <div className="flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-lg sm:text-xl text-foreground/80 leading-relaxed"
            >
              AI pricing is complex on purpose. Token economics, cached vs.
              uncached input, reasoning tokens, per-seat fees stacked on
              per-token fees. The providers benefit from the confusion. Their
              customers don&apos;t.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-lg sm:text-xl text-foreground/80 leading-relaxed"
            >
              Brixo exists to give teams the information they need to stop
              overpaying. We look at your invoice, find the $4,200 you wasted on
              Opus for tasks Haiku handles fine, and tell you about it.
            </motion.p>
          </div>
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-20 border-t border-border pt-16"
        >
          <p className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground leading-[1.15] tracking-tight max-w-4xl">
            The models are great but the invoices are{" "}
            <span className="italic text-foreground/60">absurd</span>, and
            getting worse.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
