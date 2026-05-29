"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const agents = [
  {
    name: "Executive Assistant",
    tagline: "Calendar management, briefing prep, coordination across teams.",
    detail:
      "Prepares daily briefs, schedules across timezones, and coordinates handoffs between leadership and direct reports.",
  },
  {
    name: "Operations Manager",
    tagline: "Goal tracking, CRM hygiene, process compliance.",
    detail:
      "Monitors quarterly goals, flags stale pipeline records, and enforces the process rules your team agreed on.",
  },
  {
    name: "SDR Researcher",
    tagline: "Account and contact research before every outreach sequence.",
    detail:
      "Builds ICP-matched dossiers with recent triggers, org-chart context, and hooks before reps send a single email.",
  },
  {
    name: "Community Manager",
    tagline: "Proactive engagement across channels.",
    detail:
      "Surfaces unread threads, drafts replies in your voice, and escalates high-signal conversations to humans.",
  },
  {
    name: "Data Analyst",
    tagline: "Automated reporting and trend analysis on demand in Slack.",
    detail:
      "Answers business questions from your warehouse in Slack — with charts, SQL, and caveats included.",
  },
  {
    name: "Voice of the Customer",
    tagline: "Test campaigns, features, and messaging against your customer profile.",
    detail:
      "Simulated customer panels that pressure-test copy and product decisions before they ship.",
  },
  {
    name: "Sales Intelligence",
    tagline: "Surfaces objections, competitor mentions, and deal patterns from live calls.",
    detail:
      "Ingests call recordings, tags patterns across the team, and feeds insights back into playbooks and forecasting.",
  },
  {
    name: "Customer Success Monitor",
    tagline: "Flags account health risk before renewal conversations.",
    detail:
      "Blends product usage, support signals, and sentiment to give CSMs a 60-day early warning on at-risk accounts.",
  },
];

export function AgentsGrid(): ReactNode {
  return (
    <section id="agents" className="relative w-full bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-start mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            Agents we&apos;ve built
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-foreground"
          >
            A working catalog.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease }}
              className="group relative bg-muted p-6 flex flex-col min-h-52 cursor-default overflow-hidden hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              <span className="text-xs font-mono text-muted-foreground group-hover:text-background/60 tabular-nums mb-6 transition-colors">
                0{i + 1}
              </span>
              <h3 className="text-lg font-medium font-serif text-foreground group-hover:text-background leading-tight transition-colors">
                {agent.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed transition-colors">
                {agent.tagline}
              </p>
              <div className="mt-3 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                <p className="text-xs text-background/80 leading-relaxed border-t border-background/20 pt-3">
                  {agent.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
