"use client";

import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

type Industry = { label: string; img: string };

const INDUSTRIES: Industry[] = [
  { label: "Tech",         img: "/images/industries/tech.jpg" },
  { label: "Health Care",  img: "/images/industries/health.jpg" },
  { label: "Developers",   img: "/images/industries/dev.jpg" },
  { label: "Software",     img: "/images/industries/software.jpg" },
  { label: "Entertainment",img: "/images/industries/entertainment.jpg" },
  { label: "Hospitality",  img: "/images/industries/hospitality.jpg" },
  { label: "Manufacturing",img: "/images/industries/manufacturing.jpg" },
  { label: "Energy",       img: "/images/industries/energy.jpg" },
  { label: "Auto Motive",  img: "/images/industries/auto.jpg" },
];

export default function ProjectsShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTrack = (dir: "prev" | "next") => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const item = el.querySelector<HTMLElement>("[data-chip]");
    const step = item ? item.offsetWidth + 16 : 180;
    el.scrollBy({ left: (dir === "next" ? 1 : -1) * step * 2, behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#0B0F13] py-14 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Glass hero card */}
        <div className="relative overflow-hidden rounded-[28px] border border-emerald-300/20 bg-white/5 p-8 sm:p-12 lg:p-16 backdrop-blur">
          {/* teal vignettes */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.22),transparent_60%)]" />
            <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.25),transparent_60%)]" />
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage:
                "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.3) 50%, transparent 51%)," +
                "radial-gradient(1px 1px at 70% 20%, rgba(255,255,255,0.22) 50%, transparent 51%)," +
                "radial-gradient(1px 1px at 40% 60%, rgba(255,255,255,0.22) 50%, transparent 51%)," +
                "radial-gradient(1px 1px at 80% 70%, rgba(255,255,255,0.2) 50%, transparent 51%)",
            }} />
          </div>

          <div className="relative z-10 text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/20">
              <Sparkles className="h-4 w-4" />
              Smarter Idea, instant solutions
            </div>

            {/* logo blob */}
            <div className="mx-auto mt-6 grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#0B0F13] shadow ring-1 ring-black/10">
              <span className="text-xl font-extrabold">S</span>
            </div>

            {/* headline */}
            <h2 className="mt-6 text-balance text-3xl font-extrabold leading-tight tracking-[-0.015em] sm:text-5xl md:text-6xl">
              Uncover the Design and Development Projects{" "}
              <span className="text-gray-300">That Set Us Apart</span>
            </h2>

            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15">
              Contact Us
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#0B0F13]">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          </div>
        </div>

        {/* Industries strip */}
        <div className="mt-10 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/20">
            <Sparkles className="h-4 w-4" />
            Smarter Idea, instant solutions
          </div>
        </div>

        <div className="relative mt-6">
          {/* arrows */}
          <button
            aria-label="Previous"
            onClick={() => scrollTrack("prev")}
            className="absolute -left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/90 p-2 text-white shadow-xl ring-1 ring-black/30 sm:block"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollTrack("next")}
            className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/90 p-2 text-white shadow-xl ring-1 ring-black/30 sm:block"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* chips track */}
          <div
            ref={trackRef}
            className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
          >
            {INDUSTRIES.map((it) => (
              <IndustryChip key={it.label} label={it.label} img={it.img} />
            ))}
          </div>

          {/* hide scrollbar – webkit */}
          <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
          `}</style>
        </div>
      </div>
    </section>
  );
}

function IndustryChip({ label, img }: Industry) {
  return (
    <div className="snap-start" data-chip>
      <div className="mb-2 text-center text-[13px] font-medium text-white/90">
        {label}
      </div>
      <div className="relative h-16 w-[156px] overflow-hidden rounded-[999px] ring-1 ring-white/10 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)]">
        {/* image */}
        <img
          src={img}
          alt={label}
          className="h-full w-full object-cover"
          onError={(e) => {
            // nice fallback if image is missing
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        {/* gradient tint + subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,0,0,0)_10%,rgba(0,0,0,0.25)_70%)]" />
        <div className="absolute inset-0 opacity-35" style={{
          backgroundImage:
            "radial-gradient(1px 1px at 25% 40%, rgba(255,255,255,0.25), transparent 51%)," +
            "radial-gradient(1px 1px at 70% 65%, rgba(255,255,255,0.2), transparent 51%)",
          backgroundSize: "120px 120px",
        }} />
      </div>
    </div>
  );
}
