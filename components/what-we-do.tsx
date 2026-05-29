"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const paragraphs = [
  "We have deep experience shipping agents.",
  "We developed both a process and a toolkit to maximize your probability of shipping a successful agent.",
  "We guide you through the agent development lifecycle from design to building to agent management.",
  "We eliminate the headaches that come with launching a reliable agent that produces your desired outcomes.",
];

export function WhatWeDo(): ReactNode {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6"
            >
              What we do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground leading-[1.1] tracking-tight"
            >
              We help you build agents that{" "}
              <span className="italic">deliver successful outcomes</span>, not
              just &ldquo;work.&rdquo;
            </motion.h2>
          </div>

          <div className="flex flex-col lg:pt-4">
            {paragraphs.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="flex gap-5 py-5 border-t border-border last:border-b"
              >
                <span className="text-xs font-mono text-muted-foreground tabular-nums pt-1 shrink-0">
                  0{i + 1}
                </span>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
