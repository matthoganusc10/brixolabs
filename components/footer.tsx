"use client";

import Image from "next/image";
import { type ReactNode } from "react";
import { siteConfig } from "@/lib/metadata";

const navLinks = [
  { label: "How We Work", href: "#how-it-works" },
  { label: "Agents", href: "#agents" },
  { label: "Book a consultation", href: siteConfig.bookingUrl, external: true },
];

export function Footer(): ReactNode {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-background text-foreground border-t border-border">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between gap-8 items-start">
          <div className="flex flex-col gap-4">
            <Image
              src="/brixolabs.svg"
              alt="Brixo Labs"
              width={127}
              height={19}
              className="dark:invert"
              priority={false}
            />
            <p className="text-sm text-muted-foreground max-w-xs">
              Ship agents that deliver ROI without the headaches.
            </p>
            <p className="text-sm text-muted-foreground max-w-xs">
              Brought to you from the team behind{" "}
              <a
                href="https://www.brixo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-2 hover:text-foreground/70 transition-colors"
              >
                Brixo
              </a>
              .
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-6"
            aria-label="Footer navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {year} Brixo Labs. All rights reserved.</p>
          <p>Designed, built, and managed — end to end.</p>
        </div>
      </div>
    </footer>
  );
}
