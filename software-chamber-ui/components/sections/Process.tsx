"use client";

export default function Process() {


  return (
    <section className="relative bg-[#0B0F13] pt-15 text-white sm:pt-25">

      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="h-full w-full bg-[linear-gradient(rgba(24,180,160,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(24,180,160,0.12)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center">
    
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/20">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-400/20">
            ★
          </span>
          Smarter ideas, instant solutions
        </div>

        <h2 className="mt-6 font-display leading-[1.05] tracking-[-0.01em]">
          <span className="block text-white text-[clamp(28px,5vw,48px)] font-semibold">
            Our Software
          </span>
          <span className="block text-gray-400 text-[clamp(28px,5vw,48px)] font-semibold">
            Development Process
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-white/70 sm:text-base">
          Deliver personalized experiences to your customers with AI-powered
          recommendation engines and dynamic content generation.
        </p>

        <div className="mt-6 flex justify-center">
          <button className="group flex items-center gap-3 rounded-full bg-white/5 px-5 py-3 text-sm ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10">
            Contact Us
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#0B0F13] transition group-hover:translate-x-0.5">
              ➤
            </span>
          </button>
        </div>
      </div>

   <div className="w-full mb-0 mt-7">
    <img
      src="/images/globe2.png"
      alt="Contact Illustration"
      className="h-full w-full object-contain"
    />
  </div>
    </section>
  );
}
