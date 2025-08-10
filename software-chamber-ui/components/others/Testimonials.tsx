"use client";

import { Sparkles } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="relative bg-[#0B0F13] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Pill */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/20">
            <Sparkles className="h-4 w-4" />
            Smarter Idea, instant solutions
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-6 max-w-4xl text-center text-3xl font-extrabold leading-tight tracking-[-0.015em] sm:text-5xl">
          Don’t just take our word for it. Hear
          <br />
          what <span className="text-gray-300">our clients say</span>
        </h2>

        {/* Card */}
        <div className="relative mx-auto mt-10 max-w-5xl">
          {/* soft glow behind card */}
          <div className="pointer-events-none absolute -inset-x-8 -bottom-8 h-24 rounded-[28px] bg-emerald-500/25 blur-3xl" />

          <article className="relative overflow-hidden rounded-[22px] bg-white/5 backdrop-blur ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
            {/* accent line on top */}
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent" />

            <div className="p-7 sm:p-9 md:p-10">
              <blockquote className="max-w-3xl text-balance text-[17px] leading-8 sm:text-lg">
                “Sed sit varius neque turpis enim ut metus consectetur. Tortor urna
                risus phasellus nec. In facilisis pulvinar sagittis odio nibh
                condimentum aliquet commodo.”
              </blockquote>

              <div className="mt-8 flex items-center justify-between gap-6">
                {/* author */}
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/20">
                    <img
                      src="/images/avatar-alex.jpg"
                      alt="Alex Larkins"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        // graceful fallback if avatar missing
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                    {/* fallback circle */}
                    <div className="grid h-full w-full place-items-center bg-white/10 text-sm font-semibold text-white/80">
                      A
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Alex Larkins</div>
                    <div className="text-xs text-white/60">Art director at Airbnb</div>
                  </div>
                </div>

                {/* brand mark */}
                <div className="shrink-0 opacity-90">
                  <MonoLogo className="h-8 w-auto text-white/70" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function MonoLogo({ className = "" }: { className?: string }) {
  // simple “mono” wordmark + chevrons to resemble the mock
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="26" height="16" viewBox="0 0 26 16" fill="none">
        <path d="M2 2l6 6-6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M10 2l6 6-6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="text-lg font-semibold tracking-wide">mono</span>
    </div>
  );
}
