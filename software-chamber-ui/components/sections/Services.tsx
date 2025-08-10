"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

type Service = {
  title: string;
  desc: string;
  href: string;
  highlight?: boolean;
};

const SERVICES: Service[] = [
  {
    title: "Web & Mobile App\nDevelopment",
    desc: "Software Chamber specializes in creating powerful, scalable, and secure e-",
    href: "/services/web-mobile",
  },
  {
    title: "Application\nSoftware Services",
    desc: "Software Chamber specializes in creating powerful, scalable, and secure e-",
    href: "/services/application",
    highlight: true,
  },
  {
    title: "Software Coding\n& Optimization",
    desc: "Software Chamber specializes in creating powerful, scalable, and secure e-",
    href: "/services/optimization",
  },
];

export default function Services() {
  return (
    <section className="relative bg-white text-[#0B0F13]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Header row */}
        <div className="mb-10 flex items-start justify-between gap-6 sm:mb-12">
          <h2 className="text-4xl font-extrabold tracking-[-0.015em] sm:text-6xl">
            Services{" "}
            <span className="inline-flex -translate-y-1 align-middle text-emerald-600">
              <Sparkles className="h-8 w-8" />
            </span>
          </h2>

          <Link
            href="/services"
            className="group hidden shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium ring-1 ring-black/10 shadow-sm hover:shadow transition sm:inline-flex"
          >
            All Services
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0B0F13] text-white transition group-hover:translate-x-0.5">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>

        {/* Mobile 'All Services' button */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium ring-1 ring-black/10 shadow-sm hover:shadow transition"
          >
            All Services
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0B0F13] text-white transition group-hover:translate-x-0.5">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, href, highlight }: Service) {
  const base =
    "relative overflow-hidden rounded-3xl p-7 sm:p-8 ring-1 transition-all";
  const normal =
    "bg-slate-100 ring-black/10 hover:-translate-y-[2px] hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)]";
  const hi =
    "bg-emerald-500 text-white ring-emerald-500/20 shadow-[0_10px_40px_-12px_rgba(16,185,129,0.6)]";

  return (
    <Link href={href} className={`${base} ${highlight ? hi : normal}`}>
      <div className="flex min-h-[220px] flex-col justify-between">
        <div>
          <h3
            className={`whitespace-pre-line text-2xl font-bold leading-snug sm:text-[28px] ${
              highlight ? "text-white" : "text-[#0B0F13]"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-3 max-w-[34ch] text-sm leading-6 ${
              highlight ? "text-white/90" : "text-gray-500"
            }`}
          >
            {desc}
          </p>
        </div>

        {/* circular arrow button */}
        <span
          className={`mt-6 inline-grid h-12 w-12 place-items-center rounded-full shadow-xl ring-1 ${
            highlight
              ? "bg-white text-[#0B0F13] ring-white/50"
              : "bg-white text-[#0B0F13] ring-black/10"
          }`}
        >
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </Link>
  );
}
