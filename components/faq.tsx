"use client";

import { useState, type ReactNode } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const items: { q: string; a: ReactNode }[] = [
  {
    q: "We already monitor cloud costs.",
    a: "Cloud cost tools were not built for token economics, prompt waste, or routing across models and providers. The methods that track cloud spend miss most of what drives an AI bill. Different problem, different instrument.",
  },
  {
    q: "Will this put limits on my engineers?",
    a: (
      <>
        No. The goal is visibility, <em>not</em> restrictions. You see how AI
        gets used first, then you decide what, if anything, to change. Most
        teams find the win is routing commodity work to cheaper models, not
        slowing anyone down.
      </>
    ),
  },
  {
    q: "Will optimizing hurt output quality?",
    a: "No. Brixo looks for ways to lower inference cost without touching quality, mostly waste you would cut anyway (premium models on throwaway tasks, reloaded context, idle agents). Every change is surfaced for your team to approve. Nothing is forced.",
  },
  {
    q: "We are too early to think about this.",
    a: "If your AI bill is small and flat, you are. If it is growing fast and you have no answer for what it bought, that is the moment, not later. Per-engineer AI cost is heading toward a salary-sized line item. Easier to instrument now than to untangle at $200K a head.",
  },
  {
    q: "How long does it take?",
    a: "A full audit of your spend runs 5 to 10 days. From there, the ongoing back office (a standing set of agents that reconcile, forecast, and hunt waste continuously) is a separate conversation. Start with the audit.",
  },
  {
    q: "Do you see our prompts or our data?",
    a: "For the audit, no. We work from billing and usage metadata, not prompt or response content. If you later turn on request-level controls, you choose exactly what passes through and what stays private, and every decision lands in an audit log. Your data is yours.",
  },
  {
    q: "How do you pull spend from tools that have no real API?",
    a: "Cleanly where a provider offers it, and through billing capture where they do not. Think of it as Plaid for AI costs: one connected view across Anthropic, OpenAI, Cursor, Copilot, internal agents, and the rest, including the platforms that would rather you not see the bill.",
  },
  {
    q: "What about our agents?",
    a: "Agents are the spenders nobody watches. They run overnight, bill while you sleep, and rarely sit in anyone's budget. Brixo registers every agent, attributes its spend like a person's, and gives you a cap and a kill switch. In an agent-heavy org this is where the surprise bills come from.",
  },
];

export function FAQ(): ReactNode {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div className="flex flex-col items-start mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            Objections & FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-foreground"
          >
            The usual pushback.
          </motion.h2>
        </div>

        <div className="border-t border-border">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-border">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg sm:text-xl font-medium font-serif text-foreground">
                      {item.q}
                    </span>
                    <Plus
                      className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-11 text-base text-muted-foreground leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
