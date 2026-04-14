"use client";

import { type ReactNode } from "react";
import { Building2, Target, DollarSign, Cpu } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const reasons = [
  {
    icon: Building2,
    title: "We start with your business.",
    body: "We learn your operations and where work gets stuck before picking a solution.",
  },
  {
    icon: Target,
    title: "We pick the right use cases.",
    body: "Not every problem needs an agent. We recommend based on what will actually move numbers.",
  },
  {
    icon: DollarSign,
    title: "Transparent costs.",
    body: "You know what it costs to build, run, and maintain before we start.",
  },
  {
    icon: Cpu,
    title: "We've built this before.",
    body: "Multi-provider inference pipelines, autonomous crawlers, custom model deployment, and monitoring across hundreds of thousands of daily inferences.",
  },
];

export function Principles(): ReactNode {
  return (
    <section className="relative w-full bg-muted text-foreground py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-start mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            Why us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight"
          >
            Why teams choose us.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="relative bg-muted p-8 sm:p-10 flex flex-col"
              >
                <Icon
                  className="w-6 h-6 text-foreground mb-6"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="text-xl font-medium font-serif text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
