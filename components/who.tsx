"use client";

import { type ReactNode } from "react";
import { Landmark, Cpu } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const audiences = [
  {
    icon: Landmark,
    label: "Finance",
    quote: "AI is the fastest-growing line item finance doesn't track.",
    points: [
      "Forecast costs from real usage.",
      "Spot blowups the week they happen, not the month after.",
    ],
  },
  {
    icon: Cpu,
    label: "Product / Engineering",
    quote: "Know what your team is actually costing.",
    points: [
      "Per-rep attribution.",
      "Identify the workflows burning budget.",
      "Data to justify or defend AI investment.",
    ],
  },
];

export function Who(): ReactNode {
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
            Who has this problem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-foreground"
          >
            Two teams feel it first.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {audiences.map((audience, i) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={audience.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="relative bg-background p-8 sm:p-12 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-8">
                  <Icon
                    className="w-6 h-6 text-foreground"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    {audience.label}
                  </span>
                </div>
                <p className="text-xl sm:text-2xl font-medium font-serif text-foreground leading-snug">
                  “{audience.quote}”
                </p>
                <ul className="mt-8 space-y-4">
                  {audience.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-base text-muted-foreground leading-relaxed"
                    >
                      <span
                        className="mt-[10px] w-1 h-1 rounded-full bg-foreground/40 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
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
