"use client";

import { type ReactNode } from "react";
import { Ruler, Rocket, BarChart3, Activity } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const stages = [
  {
    icon: Ruler,
    title: "Design",
    items: [
      "Prioritizing Use Cases",
      "Mapping Workflows (& Systems)",
      "Success Criteria",
    ],
  },
  {
    icon: Rocket,
    title: "Deployment",
    items: ["Model Selection", "Frameworks", "Guardrails & Testing"],
  },
  {
    icon: BarChart3,
    title: "Agent Analytics",
    items: ["Experience Analytics", "Intent Analysis"],
  },
  {
    icon: Activity,
    title: "Agent Management",
    items: ["Recursive Learning", "Maximizing Accountability"],
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
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.title}
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
                <h3 className="text-xl font-medium font-serif text-foreground mb-5">
                  {stage.title}
                </h3>
                <ul className="space-y-3">
                  {stage.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span
                        className="mt-[9px] w-1 h-1 rounded-full bg-foreground/40 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
