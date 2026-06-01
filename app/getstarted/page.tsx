import { Footer } from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GetStartedForm } from "./get-started-form";

export const metadata: Metadata = createMetadata({
  title: "Get Started",
  description:
    "Turn your AI spend snapshot into a live back office. Continuous monitoring, seat reclaim, budget controls, and weekly reporting — book a call with Brixo.",
  path: "/getstarted",
});

export default function GetStartedPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <section className="min-h-[calc(100vh-64px)] flex items-center py-24 px-6 sm:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <GetStartedForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
