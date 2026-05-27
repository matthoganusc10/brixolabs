"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import DitherCursor from "@/components/react-bits/dither-cursor";
import { useReducedMotion } from "@/lib/motion";
import { siteConfig } from "@/lib/metadata";

const ease = [0.16, 1, 0.3, 1] as const;

function useCountUp(target: number, durationMs: number, start: boolean): number {
  const [value, setValue] = useState(0);
  const reduced = useReducedMotion();
  const frame = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    // Reduced motion: snap to the target on the first frame instead of ticking.
    const effective = reduced ? 1 : durationMs;
    const begin = performance.now();
    const tick = (now: number): void => {
      const t = Math.min((now - begin) / effective, 1);
      // easeOutExpo for a "settling" ticker feel
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setValue(Math.round(target * eased));
      if (t < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [target, durationMs, start, reduced]);

  return value;
}

export function Hero(): ReactNode {
  const [tickerOn, setTickerOn] = useState(false);
  const dollars = useCountUp(siteConfig.waste.dollars, 1800, tickerOn);
  const teams = useCountUp(siteConfig.waste.teams, 1800, tickerOn);

  return (
    <section className="relative min-h-dvh w-full overflow-hidden bg-background flex items-center">
      <DitherCursor
        color="#0a0a0a"
        ditherSize={2}
        radius={0.05}
        decay={0.04}
        intensity={0.5}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-270 h-full">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-foreground/5" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-foreground/5" />
        </div>
      </div>

      <div className="relative z-20 mx-auto w-full max-w-5xl px-6 sm:px-8 pt-32 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-10"
        >
          AI cost intelligence
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-serif text-foreground leading-[1.05] tracking-tight max-w-4xl"
        >
          AI is expensive.{" "}
          <span className="italic text-foreground/60">Waste is optional.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="mt-10 text-lg sm:text-xl font-medium text-foreground max-w-2xl leading-snug"
        >
          Brixo audits your team&apos;s AI usage, finds the overspend, and shows
          you exactly what to cut.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease }}
          className="mt-12"
          onAnimationComplete={() => setTickerOn(true)}
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9, ease }}
          className="mt-10 flex items-center gap-3 text-sm text-muted-foreground"
        >
          <span
            className="relative flex h-2 w-2 shrink-0"
            aria-hidden="true"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
          </span>
          <p className="font-mono tabular-nums">
            Brixo has identified{" "}
            <span className="text-foreground font-medium">
              ${dollars.toLocaleString("en-US")}
            </span>{" "}
            in AI waste across{" "}
            <span className="text-foreground font-medium">{teams}</span> teams.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
