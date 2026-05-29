"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export function WhyBrixo(): ReactNode {
  return (
    <section
      id="why"
      className="relative w-full bg-foreground text-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-background/50"
          >
            Why Brixo
          </motion.p>

          <div className="flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-lg sm:text-xl text-background/80 leading-relaxed"
            >
              AI pricing is complex on purpose. Token economics, cached versus
              uncached input, reasoning tokens, per-seat fees stacked on
              per-token fees. The providers benefit from the confusion. Their
              customers do not.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-lg sm:text-xl text-background/80 leading-relaxed"
            >
              Brixo exists to give teams the visibility and control they don&apos;t
              get from the providers. We pull every dollar of AI spend into one
              view, show you exactly where it goes, and flag where you can do
              better &mdash; on your terms.
            </motion.p>
          </div>
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-20 border-t border-background/15 pt-16"
        >
          <p className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-background leading-[1.15] tracking-tight max-w-4xl">
            The models are great. Knowing what they{" "}
            <span className="italic text-[#FE79BB]">cost you</span> shouldn&apos;t
            be this hard.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
