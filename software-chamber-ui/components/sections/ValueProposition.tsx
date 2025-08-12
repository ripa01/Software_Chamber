"use client";

import Image from "next/image";

export default function ValueProposition() {
  return (
    <section className="relative bg-white text-[#0B0F13]">
      <div className="pointer-events-none absolute -top-6 left-0 right-0 h-6 bg-gradient-to-b from-black/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* <div className="font-display leading-[1.05] tracking-[-0.01em]">
  <div className="flex items-center gap-2">
    <span className="text-emerald-500 text-5xl">✦</span>
    <span className="text-black text-[clamp(28px,5vw,48px)] font-bold">
      At Software Chamber,
    </span>
    <span className="text-gray-400 text-[clamp(28px,5vw,48px)] font-bold">
      we specialize in
    </span>
  </div>

  <div className="text-black text-[clamp(28px,5vw,48px)] font-bold">
    turning complex challenges into elegant
  </div>

  <div className="flex items-baseline gap-1">
    <span className="text-gray-400 text-[clamp(28px,5vw,48px)] font-bold">
      digital solutions
    </span>
  </div>
</div> */}
        <div className="font-display leading-[1.05] tracking-[-0.01em]">
          {/* First line: icon + grouped text */}
          <div className="grid grid-cols-[auto_1fr] items-baseline gap-2">
            <span className="text-emerald-500 text-3xl md:text-5xl">✦</span>
            <span className="text-[clamp(28px,5vw,48px)] font-bold">
              <span className="text-black">At Software Chamber, </span>
              <span className="text-gray-400">we specialize in </span>
              <span className="text-black text-[clamp(28px,5vw,48px)] font-bold">
                turning complex challenges into elegant{" "}
              </span>
              <span className="text-gray-400 text-[clamp(28px,5vw,48px)] font-bold">
                digital solutions
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-7 gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
          <div className="order-3 flex flex-row justify-between gap-8 md:order-1 md:col-span-3 md:flex-col">
            <KPI k="20+" d="Tech Partners" />
            <KPI k="150+" d="Project Completed" />
            <KPI k="1K+" d="Satisfied Customers" />
          </div>

          <div className="order-1 md:order-2 md:col-span-5">
            <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/10">
              <Image
                src="/images/meeting.jpeg"
                alt="Team collaboration"
                width={880}
                height={660}
                className="h-auto w-full aspect-[4/3] object-cover"
                priority
                sizes="(min-width: 1024px) 560px, (min-width: 768px) 60vw, 100vw"
              />
            </div>
          </div>

          <div className="order-2 md:order-3 md:col-span-4">
            <ol className="space-y-6">
              <Bullet
                n={1}
                title="Your Team in the cloud"
                desc="We hire the best and brightest talent to build world-class technology."
              />
              <Divider />
              <Bullet
                n={2}
                title="Grow more with less"
                desc="We operate with a competitive, transparent pricing structure."
              />
              <Divider />
              <Bullet
                n={3}
                title="Weekly sprint and reviews"
                desc="Our fast review and feedback loop keeps you in the driver’s seat."
              />
              <Divider />
              <Bullet
                n={4}
                title="Communication First"
                desc="We use modern tools and rituals to collaborate effectively."
              />
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function KPI({ k, d }: { k: string; d: string }) {
  return (
    <div className="min-w-[110px]">
      <div className="font-display text-[28px] sm:text-[36px] lg:text-[44px] leading-[0.98] tracking-[-0.01em] font-bold">
        {k}
      </div>
      <div className="mt-1 text-sm text-black/60">{d}</div>
    </div>
  );
}

function Bullet({
  n,
  title,
  desc,
}: {
  n: number;
  title: string;
  desc: string;
}) {
  return (
    <li className="flex gap-4">
      <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-500 text-base font-semibold text-white">
        {n}
      </span>
      <div>
        <div className="font-display text-[18px] leading-[1.1] tracking-[-0.01em] font-semibold text-black">
          {title}
        </div>
        <p className="mt-1 text-[14px] leading-6 text-black/60">{desc}</p>
      </div>
    </li>
  );
}

function Divider() {
  return <div className="my-4 h-px w-full bg-black/10" />;
}
