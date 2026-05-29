"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const stages = [
  { label: "Use case", width: 100 },
  { label: "Data", width: 80 },
  { label: "Testing", width: 60 },
  { label: "Metrics", width: 40 },
  { label: "Production", width: 20 },
];

function Funnel(): ReactNode {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col gap-3">
        {stages.map((stage, i) => (
          <motion.div
            key={stage.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease }}
            className="grid grid-cols-[7rem_1fr_2.5rem] items-center gap-4"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-background/90 whitespace-nowrap">
              {stage.label}
            </div>
            <div className="relative h-10">
              <div
                className="h-full border border-background/20 bg-background/5 rounded-sm"
                style={{ width: `${stage.width}%` }}
              />
            </div>
            <div className="text-xs font-mono text-background/40 text-right tabular-nums">
              {stage.width}%
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6, ease }}
        className="mt-6 text-xs font-mono uppercase tracking-wider text-background/40 text-center"
      >
        Only a fraction reaches production
      </motion.p>
    </div>
  );
}

export function FeatureHighlight(): ReactNode {
  return (
    <section
      id="problem"
      className="relative w-full bg-foreground text-background py-24 sm:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-background/50 mb-6"
            >
              The problem
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-background"
            >
              The Agent{" "}
              <span className="italic text-background/60">Launch</span> Gap.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="mt-6 text-background/70 leading-relaxed max-w-lg text-lg"
            >
              Teams stall at every stage: wrong use case, missing data, no
              success metrics, no system to improve after deployment. The result
              is agents that never reach production, or agents running with no
              accountability.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease }}
              className="mt-6 text-background leading-relaxed max-w-lg text-lg font-medium"
            >
              The problem isn&apos;t the technology. It&apos;s the process.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="flex justify-center lg:justify-end"
          >
            <Funnel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
