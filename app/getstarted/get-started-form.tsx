"use client";

import { ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, type ReactNode, type FormEvent } from "react";
import { siteConfig } from "@/lib/metadata";
import { submitGetStarted } from "./actions";

const ease = [0.16, 1, 0.3, 1] as const;

const spendOptions = [
  { value: "", label: "Select a range…" },
  { value: "<1k", label: "Under $1,000 / mo" },
  { value: "1k-5k", label: "$1,000 – $5,000 / mo" },
  { value: "5k-25k", label: "$5,000 – $25,000 / mo" },
  { value: "25k+", label: "$25,000+ / mo" },
];

const features = [
  "Real-time spend visibility",
  "Seat reclaim",
  "Budget controls",
  "Browser billing capture",
  "Continuous auditor",
  "Weekly reporting",
];

export function GetStartedForm(): ReactNode {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    spend: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await submitGetStarted(form);
    setLoading(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
      {/* Left: value prop */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <p className="text-sm font-medium text-[#FE79BB] uppercase tracking-widest mb-4">
          Get Started
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif font-medium leading-tight text-foreground mb-6">
          This report is a snapshot.{" "}
          <em className="not-italic text-[#FE79BB]">Brixo</em> turns it into a
          live back office.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          Continuous monitoring tracks every AI dollar through seats, usage,
          agents, and credits — reconciles it against actual activity, and flags
          avoidable cost before it becomes a budget surprise.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FE79BB]/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#FE79BB]" strokeWidth={2.5} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Or book a call directly
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </motion.div>

      {/* Right: form card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
      >
        <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease }}
                className="flex flex-col items-center text-center py-8 gap-4"
              >
                <span className="w-12 h-12 rounded-full bg-[#FE79BB]/10 flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#FE79BB]" strokeWidth={2} />
                </span>
                <h2 className="text-xl font-serif font-medium text-foreground">
                  You&rsquo;re on the list.
                </h2>
                <p className="text-sm text-muted-foreground max-w-xs">
                  We&rsquo;ll be in touch shortly. In the meantime, book a call
                  to walk through your AI spend right now.
                </p>
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  Book a call with Brixo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-5"
              >
                <div>
                  <h2 className="text-xl font-serif font-medium text-foreground mb-1">
                    Book a call with Brixo
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Tell us a bit about yourself and we&rsquo;ll reach out to
                    set up a walkthrough.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Alex Johnson"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-muted px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="company"
                      className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-muted px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="alex@acme.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-muted px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="spend"
                    className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
                  >
                    Estimated monthly AI spend
                  </label>
                  <select
                    id="spend"
                    name="spend"
                    value={form.spend}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-muted px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition appearance-none cursor-pointer"
                  >
                    {spendOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-1 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 active:scale-[0.98] transition-all duration-150 disabled:opacity-60"
                >
                  {loading ? (
                    "Sending…"
                  ) : (
                    <>
                      Book a call with Brixo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  No spam, no hard sells. Just a focused conversation about your
                  AI spend.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
