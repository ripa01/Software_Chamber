"use client";

import { useRef } from "react";
import {
  ArrowRight,
  ArrowLeft,
  ArrowRightCircle,
  BadgeCheck,
  Cog,
  Sparkles,
  Sun,
} from "lucide-react";

type Benefit = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  featured?: boolean; 
};

const BENEFITS: Benefit[] = [
  {
    title: "Efficiency",
    desc:
      "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
    icon: <BadgeCheck className="h-4 w-4" />,
  },
  {
    title: "Adaptability",
    desc:
      "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
    icon: <Sun className="h-4 w-4" />,
  },
  {
    title: "Scalability",
    desc:
      "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
    icon: <Sparkles className="h-4 w-4" />,
    // featured: true, // <- uncomment to highlight this one
  },
  {
    title: "Precision",
    desc:
      "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
    icon: <Cog className="h-4 w-4" />,
  },
];

export default function WhyChoose() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 20; 
    const cardWidth = card ? card.offsetWidth : 320;
    el.scrollBy({
      left: (dir === "next" ? 1 : -1) * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-white text-[#0B0F13]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-[-0.015em] sm:text-5xl">
            Why Choose
            <span className="block">Softwarechamber</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-black/60 sm:text-base">
            Deliver personalized experiences to your customers with AI-powered
            recommendation engines and dynamic content generation.
          </p>

          <button
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6)] transition hover:translate-y-[-1px] hover:shadow-[0_10px_28px_-10px_rgba(16,185,129,0.7)]"
            aria-label="Start a discussion"
          >
            Let’s Discuss
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#0B0F13]">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>

        {/* Cards + Arrows */}
        <div className="relative mt-10 sm:mt-14">
          {/* Prev/Next buttons (>= sm) */}
          <button
            onClick={() => scrollByCards("prev")}
            aria-label="Previous"
            className="absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 place-items-center rounded-full bg-black text-white shadow-xl ring-1 ring-black/10 sm:grid h-10 w-10 hover:bg-black/90"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => scrollByCards("next")}
            aria-label="Next"
            className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 place-items-center rounded-full bg-black text-white shadow-xl ring-1 ring-black/10 sm:grid h-10 w-10 hover:bg-black/90"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="hide-scrollbar flex items-stretch gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* hide scrollbars (webkit) */}
            <style jsx>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {BENEFITS.map((b) => {
              const featured = !!b.featured;
              return (
                <article
                  key={b.title}
                  data-card
                  className={[
                    "snap-start shrink-0 w-[85%] sm:w-[340px]",
                    "rounded-3xl ring-1 p-6 sm:p-7",
                    "shadow-[0_10px_40px_-12px_rgba(0,0,0,0.12)]",
                    "flex flex-col h-full",
                    featured
                      ? "bg-emerald-500 text-white ring-emerald-500/30"
                      : "bg-slate-100 text-[#0B0F13] ring-black/10",
                  ].join(" ")}
                >
                  {/* header */}
                  <div className="flex items-start justify-between">
                    <h3
                      className={`text-xl font-bold ${
                        featured ? "text-white" : "text-[#0B0F13]"
                      }`}
                    >
                      {b.title}
                    </h3>
                    <span
                      className={[
                        "grid h-8 w-8 place-items-center rounded-full ring-1",
                        featured
                          ? "bg-white/15 ring-white/30 text-white"
                          : "bg-emerald-100 text-emerald-600 ring-emerald-200",
                      ].join(" ")}
                      aria-hidden
                    >
                      {b.icon}
                    </span>
                  </div>

                  {/* divider */}
                  <div
                    className={`my-4 h-px w-full ${
                      featured ? "bg-white/25" : "bg-black/10"
                    }`}
                  />

                  {/* body (grows) */}
                  <p
                    className={`text-sm leading-6 ${
                      featured ? "text-white/90" : "text-black/60"
                    }`}
                  >
                    {b.desc}
                  </p>

                  {/* footer button (sticks to bottom) */}
                  <span
                    className={[
                      "mt-auto inline-grid h-10 w-10 place-items-center rounded-full ring-1 shadow-md",
                      featured
                        ? "bg-white text-[#0B0F13] ring-white/50"
                        : "bg-white text-[#0B0F13] ring-black/10",
                    ].join(" ")}
                    aria-hidden
                  >
                    <ArrowRightCircle className="h-5 w-5" />
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
