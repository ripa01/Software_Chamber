"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

type QA = { q: string; a: string };

const QAS: QA[] = [
  {
    q: "What software development services does your company offer?",
    a: "We provide end-to-end product development: discovery, UX/UI, web & mobile apps, cloud & DevOps, and ongoing maintenance with SLA.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We work across fintech, e-commerce, healthcare, logistics, education and B2B SaaS. Our teams adapt our process to each domain’s regulations and KPIs.",
  },
  {
    q: "What sets your company apart from the competition?",
    a: "Weekly sprints, transparent pricing, senior-first teams and a communication-first culture so you’re always in the driver’s seat.",
  },
  {
    q: "Is my project idea and information kept confidential?",
    a: "Yes. We sign mutual NDAs, follow least-privilege access, and store secrets safely. You retain full IP rights to all deliverables.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(1); // second item open (like screenshot)

  return (
    <section className="relative bg-white text-[#0B0F13]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Headline */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-[-0.015em] sm:text-5xl">
            Comprehensive Answers to the Most{" "}
            <span className="inline-flex items-center gap-2 align-baseline text-emerald-600">
              <Sparkles className="h-6 w-6" />
              Common Questions
            </span>{" "}
            <span className="text-gray-400">About Our Services</span>{" "}
            and <span className="text-gray-400">How We Work</span>{" "}
            <span className="align-super text-base text-gray-400">↟</span>
          </h2>
        </div>

        {/* Top row: Left big “FAQ” + Right All FAQ button */}
        <div className="mb-2 flex items-end justify-between">
          <div className="text-[52px] font-extrabold leading-none sm:text-[64px]">FAQ</div>

          <Link
            href="/faq"
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium ring-1 ring-black/10 shadow-sm hover:shadow transition sm:inline-flex"
          >
            All FAQ
            <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-500 text-white">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        {/* dashed divider */}
        <div className="mb-6 h-px w-full border-t border-dashed border-black/10" />

        {/* List */}
        <ul className="divide-y divide-black/10">
          {QAS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className="py-3 sm:py-4">
                <button
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="text-[15px] font-semibold sm:text-base">{item.q}</span>

                  <span
                    className={`grid h-9 w-9 place-items-center rounded-full transition
                      ${isOpen ? "bg-emerald-500 text-white" : "bg-black text-white/90"}
                    `}
                    aria-hidden
                  >
                    {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </span>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  className={`overflow-hidden pr-12 transition-[grid-template-rows] duration-300
                    ${isOpen ? "grid grid-rows-[1fr] pt-3" : "grid grid-rows-[0fr]"}
                  `}
                >
                  <div className="min-h-0">
                    <p className="max-w-3xl text-sm leading-6 text-black/60">{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Mobile All FAQ button */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium ring-1 ring-black/10 shadow-sm"
          >
            All FAQ
            <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-500 text-white">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
