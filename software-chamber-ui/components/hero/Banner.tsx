import React from "react"
import { ArrowRight, Menu, Play, ExternalLink, Sparkles } from "lucide-react"


export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0F13] text-white">
      <BackgroundFX />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-4 pt-5 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex items-center gap-2">
          <button className="group flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/90 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10">
            Contact Us
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/90 text-[#0B0F13] transition group-hover:bg-white">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <section className="relative z-10 mx-auto mt-10 flex w-full max-w-5xl flex-col items-center px-4 text-center sm:mt-14">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/20">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-400/20">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          Smarter ideas, instant solutions
        </span>

        <h1 className="text-balance text-[42px] font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          <span className="text-white/90">We are your </span>
          <span className="text-teal-300">Software</span>
          <br className="hidden sm:block" />
          <span className="text-white/90">Development </span>
          <span className="inline-flex items-center gap-2 align-middle">
            <EmojiPill>🧩</EmojiPill>
            <EmojiPill>👥</EmojiPill>
          </span>
          <span className="text-white/90"> Team</span>
          <br />
          <span className="text-white/90">in The Cloud</span>
        </h1>

        <div className="mt-8">
          <button className="group flex items-center gap-3 rounded-full bg-white/5 px-5 py-3 text-sm ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10">
            Contact Us
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#0B0F13] transition group-hover:translate-x-0.5">
              <Play className="ml-0.5 h-4 w-4" />
            </span>
          </button>
        </div>
      </section>

      <SideTags />

      <section className="relative z-10 mx-auto mt-10 w-full max-w-5xl px-4 sm:mt-16">
        <GlassGantt />
      </section>

      <div className="h-24" />
    </main>
  )
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-9 w-9 overflow-hidden rounded-xl ring-1 ring-white/10">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 opacity-90" />
        <div className="absolute inset-[2px] rounded-[10px] bg-[#0B0F13]" />
        <div className="relative z-10 grid h-full w-full place-items-center text-xl">🧠</div>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-wide">Software</div>
        <div className="text-[11px] text-white/60">Chamber</div>
      </div>
    </div>
  )
}

function EmojiPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
      {children}
    </span>
  )
}

// function SideTags() {
//   const tags = [
//     { label: "Website Development", side: "left", top: "34%" },
//     { label: "Mobile App Development", side: "left", top: "72%" },
//     { label: "UI/UX Engineering", side: "right", top: "44%" },
//     { label: "Software Services", side: "right", top: "76%" },
//   ] as const

//   return (
//     <>
//       {tags.map((t, i) => (
//         <div
//           key={i}
//           className={[
//             "pointer-events-none fixed z-10 hidden md:block",
//             t.side === "left" ? "left-3" : "right-3",
//           ].join(" ")}
//           style={{ top: t.top }}
//         >
//           <div className="flex items-center gap-3">
//             {t.side === "right" && <Line />} {/* line first if right */}
//             <div className="pointer-events-auto flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-[12px] ring-1 ring-white/10 backdrop-blur">
//               <span className="grid h-5 w-5 place-items-center rounded-md bg-white/10">
//                 <Play className="h-3 w-3" />
//               </span>
//               {t.label}
//             </div>
//             {t.side === "left" && <Line />}
//           </div>
//         </div>
//       ))}
//     </>
//   )
// }

function SideTags() {
  const tags = [
    { label: "Website Development", side: "left",  y: "-6rem" },
    { label: "Mobile App Development", side: "left",  y: "6rem"  },
    { label: "UI/UX Engineering",     side: "right", y: "-3rem" },
    { label: "Software Services",     side: "right", y: "9rem"  },
  ] as const;

  return (
    <>
      {tags.map((t, i) => (
        <div
          key={i}
          className={[
            "pointer-events-none absolute z-10 hidden md:block top-1/2 -translate-y-1/2",
            t.side === "left" ? "left-3" : "right-3",
          ].join(" ")}
          style={{ transform: `translateY(calc(-50% + ${t.y}))` }}
        >
          <div className="flex items-center gap-3">
            {t.side === "right" && <Line />}
            <div className="pointer-events-auto flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-[12px] ring-1 ring-white/10 backdrop-blur">
              <span className="grid h-5 w-5 place-items-center rounded-md bg-white/10">
                <Play className="h-3 w-3" />
              </span>
              {t.label}
            </div>
            {t.side === "left" && <Line />}
          </div>
        </div>
      ))}
    </>
  );
}


function Line() {
  return <div className="h-px w-20 bg-white/10" />
}

function GlassGantt() {
  return (
    <div className="relative mx-auto max-w-4xl rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Timeline */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-white/0 p-4 ring-1 ring-white/10">
          <div className="mb-3 flex items-center gap-6 text-xs text-white/60">
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
          </div>
          <div className="relative h-48 rounded-xl bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_60%)]">
            {/* bars */}
            <Bar label="Mobile app" left="28%" top="16%" width="40%" color="bg-sky-400/80" />
            <Bar label="Software" left="8%" top="48%" width="46%" color="bg-cyan-300/80" />
            <Bar label="Website" left="38%" top="70%" width="36%" color="bg-emerald-300/80" />
          </div>
          <div className="mt-3 flex justify-end gap-1 opacity-60">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="h-1.5 w-6 rounded-full bg-white/20" />
            ))}
          </div>
        </div>

        {/* Copy card */}
        <div className="relative rounded-2xl bg-gradient-to-b from-white/5 to-white/0 p-6 ring-1 ring-white/10">
          <h3 className="text-lg font-semibold">Software Service
            <br />Solutions
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Plan, track, and manage projects with precision tools.
          </p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10">
            Discover
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* stacked depth illusion */}
      <div className="pointer-events-none absolute inset-x-6 -bottom-6 grid gap-2">
        <div className="h-4 rounded-2xl bg-white/5 ring-1 ring-white/10" />
        <div className="h-3 rounded-2xl bg-white/5 ring-1 ring-white/10" />
      </div>
    </div>
  )
}

function Bar({ label, left, top, width, color }: { label: string; left: string; top: string; width: string; color: string }) {
  return (
    <div
      className={`absolute rounded-xl px-3 py-2 text-xs font-medium text-[#0B0F13] shadow-lg ${color}`}
      style={{ left, top, width }}
    >
      {label}
    </div>
  )
}

function BackgroundFX() {
  return (
    <>
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(31,196,200,0.22),transparent_60%),radial-gradient(700px_500px_at_10%_10%,rgba(118,255,210,0.12),transparent_60%),radial-gradient(800px_500px_at_90%_20%,rgba(0,255,199,0.10),transparent_60%),radial-gradient(1200px_600px_at_50%_120%,rgba(2,6,23,1),transparent_30%)]" />

      {/* Star field */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.55]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.35) 50%, transparent 51%)," +
              "radial-gradient(1px 1px at 70% 20%, rgba(255,255,255,0.25) 50%, transparent 51%)," +
              "radial-gradient(1px 1px at 40% 60%, rgba(255,255,255,0.28) 50%, transparent 51%)," +
              "radial-gradient(1px 1px at 80% 70%, rgba(255,255,255,0.22) 50%, transparent 51%)," +
              "radial-gradient(1px 1px at 10% 80%, rgba(255,255,255,0.20) 50%, transparent 51%)",
            backgroundRepeat: "repeat",
            backgroundSize: "180px 180px",
          }}
        />
      </div>
    </>
  )
}
