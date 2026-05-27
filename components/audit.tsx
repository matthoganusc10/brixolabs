"use client";

import { type ReactNode } from "react";
import { ArrowRight, FileText, Layers, Map, Presentation } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "@/lib/metadata";

const ease = [0.16, 1, 0.3, 1] as const;

const deliverables = [
  {
    icon: FileText,
    text: "Interactive report with dollar-specific findings on waste.",
  },
  {
    icon: Layers,
    text: "Breakdown by team, model, workflow, and engineer.",
  },
  {
    icon: Map,
    text: "Prioritized optimization roadmap with estimated savings.",
  },
  {
    icon: Presentation,
    text: "30-minute readout with leadership.",
  },
];

export function Audit(): ReactNode {
  return (
    <section id="audit" className="relative w-full bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6"
            >
              The audit
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif text-foreground leading-tight"
            >
              A fixed-scope engagement.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md"
            >
              Brixo connects to every engineer&apos;s AI tools, ticketing, git,
              and org chart.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease }}
              className="mt-10 flex items-baseline gap-4 border-t border-border pt-8"
            >
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                Timeline
              </span>
              <span className="text-xl font-medium font-serif text-foreground">
                Three weeks, end to end.
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease }}
              className="mt-10"
            >
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 active:scale-[0.98] transition-all duration-150"
              >
                Book an audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6"
            >
              What you get
            </motion.p>
            <div className="flex flex-col">
              {deliverables.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease }}
                    className="flex gap-5 py-5 border-t border-border last:border-b"
                  >
                    <Icon
                      className="w-5 h-5 text-foreground shrink-0 mt-0.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
