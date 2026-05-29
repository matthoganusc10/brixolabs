"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const cards = [
  {
    stat: "$18,000 a month, six months unnoticed.",
    body: "One team burned that on context thrashing — starting new sessions instead of continuing them — for half a year. The spend wasn't the surprise. The fact that nobody could see it was.",
  },
  {
    stat: "Token costs above payroll.",
    body: "A dev team was spending more on Codex per month than the team's salary line, and no one inside the org had a number for it until someone went looking.",
  },
  {
    stat: "112,000 tokens to say “hi.”",
    body: "A single greeting in Codex pulled the full session context. Two letters, a six-figure token cost, and zero visibility into why.",
  },
];

export function Problem(): ReactNode {
  return (
    <section
      id="problem"
      className="relative w-full bg-background text-foreground py-24 sm:py-32 overflow-hidden"
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
            The problem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-foreground"
          >
            The spend isn&apos;t the problem.{" "}
            <span className="italic text-[#FE79BB]">
              Not seeing it is.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {cards.map((card, i) => (
            <motion.div
              key={card.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="group relative bg-background p-8 sm:p-10 flex flex-col cursor-default transition-colors duration-300 hover:bg-foreground"
            >
              <span className="text-xs font-mono text-muted-foreground group-hover:text-background/50 tabular-nums mb-8 transition-colors">
                0{i + 1}
              </span>
              <h3 className="text-xl sm:text-2xl font-medium font-serif text-foreground group-hover:text-background leading-tight transition-colors">
                {card.stat}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed transition-colors">
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
          className="mt-20 border-t border-border pt-12 text-3xl sm:text-4xl md:text-5xl font-semibold font-serif text-foreground leading-[1.1] tracking-tight max-w-4xl"
        >
          Most teams can&apos;t answer a basic question: where did our AI spend
          actually go, by whom, on what, and is it working?{" "}
          <span className="text-[#FE79BB]">Brixo answers it.</span>
        </motion.p>
      </div>
    </section>
  );
}
