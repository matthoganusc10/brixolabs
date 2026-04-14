"use client";

import { type ReactNode } from "react";
import { Search, Ruler, Wrench, Rocket } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    icon: Search,
    title: "Discover",
    body: "We audit your operations to find the agent use cases worth building.",
  },
  {
    icon: Ruler,
    title: "Design",
    body: "We define what success looks like, build a plan, and estimate costs before writing code.",
  },
  {
    icon: Wrench,
    title: "Build & Test",
    body: "We build the agent, select the right models, and test against your success criteria.",
  },
  {
    icon: Rocket,
    title: "Deploy & Manage",
    body: "Every agent launches with safety checks and a dedicated Agent Manager tracking performance week over week.",
  },
];

export function FeatureCards(): ReactNode {
  return (
    <section
      id="how-it-works"
      className="relative w-full bg-muted py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-start mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            How we work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground leading-tight"
          >
            From use case to production.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="relative bg-muted p-8 flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <Icon
                    className="w-6 h-6 text-foreground"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-mono text-muted-foreground tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-medium font-serif text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
