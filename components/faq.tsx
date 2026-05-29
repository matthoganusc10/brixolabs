"use client";

import { useState, type ReactNode } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const items = [
  {
    q: "We already monitor cloud costs.",
    a: "Cloud cost tools weren't built for token economics, prompt optimization, or multi-model routing. The tools that work for AWS don't work for this.",
  },
  {
    q: "Will this put limits on my engineers?",
    a: "No. Brixo gives you visibility and threshold alerts, not hard caps. You decide what to do with the information. Nobody on your team gets throttled or blocked mid-task.",
  },
  {
    q: "Will optimization hurt output quality?",
    a: "We're not changing what your tools do. We surface places where you pay more for the same result. Same output, lower bill, your call on whether to act.",
  },
  {
    q: "We're too early to think about this.",
    a: "The visibility gap compounds fast. Wrong model, wasted context, idle seats: these quietly run into five and six figures before anyone has a single view of the invoice. Earlier is cheaper.",
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
              <div key={item.q} className="border-b border-border">
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
