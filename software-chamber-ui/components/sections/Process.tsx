"use client";


export default function Process() {
  const pct = (v: number) => `${v.toFixed(4)}%`;
  // tuned angles so ends don't sit on the edges
  const steps = [
    { n: 1, label: "Code",    angle: 162 },
    { n: 2, label: "Build",   angle: 132 },
    { n: 3, label: "Test",    angle: 102 },
    { n: 4, label: "Release", angle:  78 },
    { n: 5, label: "Deploy",  angle:  50 },
    { n: 6, label: "Monitor", angle:  24 },
    { n: 7, label: "Build",   angle:    6 },
  ] as const;

  // fixed SVG space keeps math responsive
  const W = 1200, H = 600;
  const cx = W / 2;  // 600
  const cy = 520;    // raise/lower arc here
  const R  = 455;    // arc radius (inset to avoid clipping)
  const PATH = `M ${cx - R} ${cy} A ${R} ${R} 0 0 1 ${cx + R} ${cy}`;

  return (
    <section className="relative bg-[#0B0F13] py-20 text-white sm:py-28">
      {/* dotted grid bg */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="h-full w-full bg-[linear-gradient(rgba(24,180,160,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(24,180,160,0.12)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* header + cta */}
      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/20">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-400/20">★</span>
          Smarter ideas, instant solutions
        </div>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-white/70 sm:text-base">
          Deliver personalized experiences to your customers with AI-powered recommendation engines and dynamic content generation.
        </p>
        <div className="mt-6 flex justify-center">
          <button className="group flex items-center gap-3 rounded-full bg-white/5 px-5 py-3 text-sm ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10">
            Contact Us
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#0B0F13] transition group-hover:translate-x-0.5">➤</span>
          </button>
        </div>
      </div>

      {/* arc + pins + labels + globe */}
      <div className="relative mx-auto mt-16 max-w-6xl px-4">
        <div className="relative aspect-[2/1] overflow-visible sm:aspect-[5/2]">
          {/* dashed semicircle */}
          <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full overflow-visible z-30">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d={PATH}
              fill="none"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="2"
              strokeDasharray="6 10"
              filter="url(#glow)"
            />
          </svg>

          {/* pins */}
          {steps.map((s, i) => {
            const rad = (Math.PI / 180) * s.angle;
            const x = cx + R * Math.cos(Math.PI + rad);
            const y = cy + R * Math.sin(Math.PI + rad);
            return (
              <div
                key={i}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: pct((x / W) * 100), top: pct((y / H) * 100) }}
              >
                <div className="grid h-8 w-8 place-items-center rounded-full bg-white/18 ring-1 ring-white/35 backdrop-blur">
                  <span className="text-sm text-white/90">{s.n}</span>
                </div>
              </div>
            );
          })}

          {/* labels above arc */}
          {steps.map((s, i) => {
            const rad = (Math.PI / 180) * s.angle;
            const x = cx + (R + 52) * Math.cos(Math.PI + rad);
            const y = cy + (R + 52) * Math.sin(Math.PI + rad);
            return (
              <div
                key={`label-${i}`}
                className="absolute z-10 -translate-x-1/2 -translate-y-full"
                style={{ left: pct((x / W) * 100), top: pct((y / H) * 100) }}
              >
                <div className={`text-base font-semibold sm:text-lg ${i % 2 === 0 ? "text-teal-300" : "text-white"}`}>
                  {s.label}
                </div>
              </div>
            );
          })}

          {/* hemisphere globe (glow + dotted mask) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-[-32%] flex justify-center z-0" style={{ height: "60%" }}>
            <div className="relative w-[60vw] max-w-[700px] aspect-square">
              {/* teal glow underlay */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_70%,rgba(16,185,129,0.55),rgba(16,185,129,0.18)_50%,transparent_80%)]" />
              {/* dotted sphere clipped to a hemisphere */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(45,255,220,0.55) 0.7px, transparent 0.7px)",
                  backgroundSize: "4px 4px",
                  WebkitMaskImage:
                    "linear-gradient(to top, transparent 0%, #000 50%, #000 100%)",
                  maskImage:
                    "linear-gradient(to top, transparent 0%, #000 50%, #000 100%)",
                  opacity: 0.95,
                  filter: "drop-shadow(0 0 40px rgba(16,185,129,0.35))",
                }}
              />
              {/* crisp rim */}
              <div
                className="absolute inset-0 rounded-full ring-2 ring-emerald-400/40"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to top, transparent 0%, #000 50%, #000 100%)",
                  maskImage:
                    "linear-gradient(to top, transparent 0%, #000 50%, #000 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
