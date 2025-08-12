import React from "react"


export default function StackShowcase() {
  const brands = [
    { name: "Spotify", icon: "🎵", offset: "translate-y-1" },
    { name: "TalentQI", icon: "🧠", offset: "-translate-y-4" },
    { name: "DropBox", icon: "📦", offset: "-translate-y-3" },
    { name: "Fliqpay", icon: "💳", offset: "translate-y-2" },
    { name: "Slack", icon: "🔷", offset: "-translate-y-8 sm:-translate-y-6" },
  ] as const

  return (
    <section className="relative overflow-hidden bg-[#0B0F13] py-16 text-white sm:py-24">
      {/* right vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.35),transparent_60%)] blur-0" />
        <div className="absolute inset-0 opacity-40" style={{backgroundImage:
          "radial-gradient(1px_1px_at_20%_30%,rgba(255,255,255,.25),transparent_51%),"+
          "radial-gradient(1px_1px_at_70%_20%,rgba(255,255,255,.18),transparent_51%),"+
          "radial-gradient(1px_1px_at_40%_60%,rgba(255,255,255,.2),transparent_51%),"+
          "radial-gradient(1px_1px_at_80%_70%,rgba(255,255,255,.18),transparent_51%)"}} />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Left copy */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Our Stack Powers of
            <br />
            the <span className="text-gray-300">World’s Most</span>
            <br />
            <span className="text-gray-300">Beloved</span> Companies
          </h2>
        </div>

        <div className="relative ml-auto grid w-full max-w-md grid-cols-1 gap-5 sm:max-w-none sm:grid-cols-2">
         
          <BrandPill label={brands[0].name} icon={brands[0].icon} className="justify-self-start sm:justify-self-start" />
          <BrandPill label={brands[1].name} icon={brands[1].icon} className="justify-self-center sm:justify-self-center sm:-translate-y-3" />

          <BrandPill label={brands[2].name} icon={brands[2].icon} className="justify-self-start sm:justify-self-start -translate-y-2" />
          <BrandPill label={brands[3].name} icon={brands[3].icon} className="justify-self-center sm:justify-self-center -translate-y-6" />

          <BrandPill label={brands[4].name} icon={brands[4].icon} className="col-span-1 sm:col-span-1 sm:justify-self-start -translate-y-6" />
        </div>
      </div>
    </section>
  )
}

function BrandPill({ label, icon, className = "" }: { label: string; icon: string; className?: string }) {
  return (
    <div className={`group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-emerald-500 to-teal-600 px-5 py-3 pr-6 shadow-[0_18px_40px_-12px_rgba(16,185,129,0.6)] ring-1 ring-white/10 backdrop-blur ${className}`}>
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#0B0F13] text-sm font-semibold ring-1 ring-black/10">
        {icon}
      </span>
      <span className="text-[15px] font-semibold tracking-wide">{label}</span>

      <div className="pointer-events-none absolute inset-x-6 -bottom-3 h-5 rounded-full bg-black/30 blur-xl" />
    </div>
  )
}
