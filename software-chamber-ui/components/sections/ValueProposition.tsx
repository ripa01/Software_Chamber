"use client";

export default function ValueProposition() {
  return (
    <section className="relative bg-white text-[#0B0F13]">
      {/* soft fade from the dark hero */}
      <div className="pointer-events-none absolute -top-6 left-0 right-0 h-6 bg-gradient-to-b from-black/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* heading */}
        <div className="mb-10 sm:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 text-emerald-600">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-emerald-100">✦</span>
            <span className="text-sm font-semibold">At Software Chamber,</span>
          </div>
          <h2 className="text-left text-3xl font-extrabold leading-tight tracking-[-0.015em] sm:text-5xl md:text-[52px]">
            <span className="text-[#0B0F13]">we specialize in </span>
            <span className="text-gray-400">turning complex challenges into elegant</span>
            <br className="hidden sm:block" />
            <span className="text-gray-400">digital solutions</span>
            <span className="align-super text-base text-gray-500"> ↟</span>
          </h2>
        </div>

        {/* content grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* left KPIs */}
          <div className="order-3 flex flex-row justify-between gap-8 md:order-1 md:col-span-3 md:flex-col">
            <KPI k="20+" d="Tech Partners" />
            <KPI k="150+" d="Project Completed" />
            <KPI k="1K+" d="Satisfied Customers" />
          </div>

          {/* middle image */}
          <div className="order-1 md:order-2 md:col-span-5">
            <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/10">
              <img
                src="/images/meeting.jpeg"            // put your image here
                alt="Team collaboration"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* right bullets */}
          <div className="order-2 md:order-3 md:col-span-4">
            <ol className="space-y-6">
              <Bullet n={1} title="Your Team in the cloud" desc="We hire the best and brightest talent to build world-class technology." />
              <Divider />
              <Bullet n={2} title="Grow more with less" desc="We operate with a competitive, transparent pricing structure." />
              <Divider />
              <Bullet n={3} title="Weekly sprint and reviews" desc="Our fast review and feedback loop keeps you in the driver’s seat." />
              <Divider />
              <Bullet n={4} title="Communication First" desc="We use modern tools and rituals to collaborate effectively." />
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
      <div className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{k}</div>
      <div className="mt-1 text-sm text-black/60">{d}</div>
    </div>
  );
}

function Bullet({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <li className="flex gap-4">
      <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-500 text-base font-semibold text-white">
        {n}
      </span>
      <div>
        <div className="text-base font-semibold text-black">{title}</div>
        <p className="mt-1 text-sm leading-6 text-black/60">{desc}</p>
      </div>
    </li>
  );
}

function Divider() {
  return <div className="my-4 h-px w-full bg-black/10" />;
}
