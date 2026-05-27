"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const cards = [
  {
    stat: "$8,000 a month, six months unnoticed.",
    body: "One team burned context thrashing — starting new sessions instead of continuing — for half a year before anyone caught it.",
  },
  {
    stat: "Token costs above salaries.",
    body: "A dev team was spending more on Codex per month than the team's payroll line.",
  },
  {
    stat: "112,000 tokens to say “hi.”",
    body: "A single greeting message in Codex pulled the full session context — a six-figure-token cost for two letters.",
  },
];

export function Problem(): ReactNode {
  return (
    <section
      id="problem"
      className="relative w-full bg-foreground text-background py-24 sm:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-start mb-16">
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
            AI spend leaks{" "}
            <span className="italic text-background/60">quietly</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-background/15">
          {cards.map((card, i) => (
            <motion.div
              key={card.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="relative bg-foreground p-8 sm:p-10 flex flex-col"
            >
              <span className="text-xs font-mono text-background/40 tabular-nums mb-8">
                0{i + 1}
              </span>
              <h3 className="text-xl sm:text-2xl font-medium font-serif text-background leading-tight">
                {card.stat}
              </h3>
              <p className="mt-4 text-sm text-background/60 leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-20 border-t border-background/15 pt-12 text-3xl sm:text-4xl md:text-5xl font-semibold font-serif text-background leading-[1.1] tracking-tight max-w-4xl"
        >
          30% of AI spend is waste and nobody knows where it goes
        </motion.p>
      </div>
    </section>
  );
}
