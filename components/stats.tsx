"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const phases = [
  {
    label: "Kickoff",
    body: "Identify use cases. Define goals.",
  },
  {
    label: "Proposal",
    body: "Recommended use cases. ROI estimate.",
  },
  {
    label: "Selection",
    body: "Finalize use case. Confirm data access.",
  },
  {
    label: "Build",
    body: "Implementation. Infrastructure. Review cycles.",
  },
  {
    label: "Delivery",
    body: "Production launch with safety checks.",
  },
  {
    label: "Measurement",
    body: "30-day performance reviews. Ongoing optimization.",
  },
];

export function Stats(): ReactNode {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-start mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            Timeline
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-foreground"
          >
            How an engagement moves.
          </motion.h2>
        </div>

        <div className="relative">
          {/* connecting line — desktop horizontal */}
          <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-border" />
          {/* connecting line — mobile vertical */}
          <div className="md:hidden absolute top-0 bottom-0 left-5 w-px bg-border" />

          <ol className="grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-4 relative">
            {phases.map((phase, i) => (
              <motion.li
                key={phase.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="relative flex md:flex-col gap-4 md:gap-0"
              >
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-full bg-background border border-foreground flex items-center justify-center">
                    <span className="text-xs font-mono font-medium text-foreground tabular-nums">
                      {i + 1}
                    </span>
                  </div>
                </div>
                <div className="md:mt-6 flex-1">
                  <h3 className="text-sm font-medium font-serif text-foreground">
                    {phase.label}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {phase.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
