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
              AI pricing is built to confuse you. Token economics, cached versus
              uncached input, reasoning tokens, per-seat fees stacked on top of
              per-token fees, and four billing doors open at once &mdash; seats,
              prepaid credits, raw API, and agents that spend while nobody
              watches. The providers benefit from the fog. You do not.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-lg sm:text-xl text-background/80 leading-relaxed"
            >
              We built Brixo to get out of that fog ourselves. It reconciles
              every dollar of AI spend into one book of record, ties each dollar
              to a team, a person, and a task, and shows you which spend is
              producing output and which is not. Then it flags what to fix, in
              dollars, aligned to your priorities.
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
            The models are great.{" "}
            <span className="italic text-[#FE79BB]">
              Working out the ROI on your AI spend
            </span>{" "}
            shouldn&apos;t be this hard.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
