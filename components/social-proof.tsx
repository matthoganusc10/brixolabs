"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";
import ParallaxCarousel from "@/components/react-bits/parallax-carousel";

const ease = [0.16, 1, 0.3, 1] as const;

// Tweet/X screenshots for the social-proof strip.
// Replace these files in /public/tweets/ with real screenshots (any count).
const TWEETS = [
  "/tweets/tweet-1.png",
  "/tweets/tweet-2.png",
  "/tweets/tweet-3.png",
  "/tweets/tweet-4.png",
  "/tweets/tweet-5.png",
  "/tweets/tweet-6.png",
];

export function SocialProof(): ReactNode {
  return (
    <section className="relative w-full bg-foreground text-background py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-xs font-mono uppercase tracking-[0.2em] text-background/50"
        >
          Everyone&apos;s feeling it
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mt-6 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-background"
        >
          The bills are getting{" "}
          <span className="italic text-[#FE79BB]">absurd</span>.
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
        className="mt-14 h-[26rem] w-full sm:h-[32rem]"
      >
        <ParallaxCarousel
          images={TWEETS}
          imageWidth={320}
          imageHeight={400}
          gap={36}
          borderRadius={18}
          loop
          autoplaySpeed={28}
          pauseOnHover
          parallaxIntensity={0.35}
          uvScale={0.05}
          yAlign={1}
          showProgress={false}
        />
      </motion.div>

      <p className="mx-auto mt-12 max-w-6xl px-6 sm:px-8 text-sm text-background/40">
        Drag to explore. Real conversations from teams watching their AI spend
        climb.
      </p>
    </section>
  );
}
