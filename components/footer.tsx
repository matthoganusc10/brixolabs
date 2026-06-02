"use client";

import Image from "next/image";
import { type ReactNode } from "react";
import { siteConfig } from "@/lib/metadata";

const navLinks = [
  { label: "The Problem", href: "#problem" },
  { label: "Why Brixo", href: "#why" },
  { label: "FAQ", href: "#faq" },
  { label: "Security", href: "https://trust.brixo.com/", external: true },
  { label: "Privacy", href: "https://docs.brixo.com/security/privacy", external: true },
  {
    label: "Map your AI spend",
    href: siteConfig.bookingUrl,
    external: true,
  },
];

export function Footer(): ReactNode {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-background text-foreground border-t border-border">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between gap-8 items-start">
          <div className="flex flex-col gap-4">
            <Image
              src="/Brixo_Logo_Long.svg"
              alt="Brixo"
              width={136}
              height={36}
              priority={false}
            />
            <p className="text-sm text-muted-foreground max-w-xs">
              Visibility and control for AI spend. See where it goes, understand
              it, and stay ahead of it.
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
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {year} Brixo. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <p>Get control of your AI spend.</p>
            <a
              href="https://trust.brixo.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SOC 2 certified — view trust center"
            >
              <Image
                src="/soc2.png"
                alt="AICPA SOC 2 certified"
                width={48}
                height={48}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
