"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const nodes = [
  { label: "Deploy", x: 150, y: 30 },
  { label: "Monitor", x: 270, y: 150 },
  { label: "Improve", x: 150, y: 270 },
  { label: "Feedback", x: 30, y: 150 },
];

function LoopDiagram(): ReactNode {
  return (
    <div className="w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 300 300"
        className="w-full h-auto"
        role="img"
        aria-label="Deploy, monitor, improve, feedback — continuous loop"
      >
        {/* arcs between nodes */}
        {nodes.map((node, i) => {
          const next = nodes[(i + 1) % nodes.length]!;
          return (
            <motion.path
              key={`arc-${i}`}
              d={`M ${node.x} ${node.y} A 120 120 0 0 1 ${next.x} ${next.y}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3 4"
              className="text-foreground/30"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease }}
            />
          );
        })}

        {/* arrowheads at each next-node entrance */}
        {nodes.map((node, i) => {
          const prev = nodes[(i + nodes.length - 1) % nodes.length]!;
          // simple static arrow triangle pointing inward along tangent
          const dx = node.x - prev.x;
          const dy = node.y - prev.y;
          const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
          return (
            <motion.polygon
              key={`arrow-${i}`}
              points="-5,-4 0,0 -5,4"
              fill="currentColor"
              className="text-foreground/50"
              transform={`translate(${node.x} ${node.y}) rotate(${angle})`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.0 + i * 0.1 }}
            />
          );
        })}

        {/* center label */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          <circle cx="150" cy="150" r="52" fill="currentColor" className="text-foreground" />
          <text
            x="150"
            y="147"
            textAnchor="middle"
            className="fill-background text-[11px] font-medium uppercase tracking-wider"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Agent
          </text>
          <text
            x="150"
            y="162"
            textAnchor="middle"
            className="fill-background text-[11px] font-medium uppercase tracking-wider"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Manager
          </text>
        </motion.g>

        {/* nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.label}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.12, ease }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r="22"
              className="fill-background stroke-foreground"
              strokeWidth="1.5"
            />
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              className="fill-foreground text-[10px] font-medium"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

export function Differentiator(): ReactNode {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6"
            >
              What makes us different
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-foreground"
            >
              Every agent ships with a manager.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              Each agent deploys with a dedicated Agent Manager. It monitors
              performance, catches problems, and sends feedback to the agent
              automatically. The agent gets better from real usage, not just
              from the data it started with.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="flex justify-center"
          >
            <LoopDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
