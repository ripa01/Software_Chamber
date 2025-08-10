import Link from "next/link";

export default function LetsTalkPanel() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F13] text-white">
      {/* teal vignette */}
      <div className="pointer-events-none absolute -right-[15%] top-0 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.26),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          {/* Left copy */}
          <div className="md:col-span-5">
            <h3 className="text-5xl font-extrabold leading-none sm:text-6xl">
              LET’S TALK
            </h3>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/70">
              A new era of energy, elegance, and elite competition begins here.
              Where passion meets performance on the court like never before.
            </p>

            <div className="mt-8">
              <div className="text-sm font-semibold">Social media</div>
              <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-white/85 sm:grid-cols-3">
                <Social href="#" label="Instagram" />
                <Social href="#" label="Twitter" />
                <Social href="#" label="Tiktok" />
                <Social href="#" label="Facebook" />
                <Social href="#" label="Linkedin" />
                <Social href="#" label="Youtube" />
              </ul>
            </div>
          </div>

          {/* Middle details */}
          <div className="md:col-span-4">
            <Detail heading="ADDRESS">
              1901 Thornridge Cir,<br />Shiloh, Hawaii 81063
            </Detail>
            <Detail heading="PHONE">[+1] 872-298-3989</Detail>
            <Detail heading="EMAIL">hello@tranzit.com</Detail>
          </div>

          {/* Right image */}
          <div className="md:col-span-3">
            <div className="ml-auto w-full max-w-[260px] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.6)]">
              <img
                src="/images/contact/team.jpg"
                alt="Team meeting"
                className="aspect-[3/4] h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* dashed divider */}
        <div className="mt-10 h-px w-full border-t border-dashed border-white/15" />

        {/* bottom row */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-sm text-white/70 sm:flex-row">
          <div>2024 Software Chamber All Rights Reserved</div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* — helpers — */

function Social({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="group inline-flex items-center gap-1 hover:text-white">
        {label}
        <span className="translate-y-[1px] transition group-hover:translate-x-0.5">↗</span>
      </Link>
    </li>
  );
}

function Detail({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <div className="text-[12px] font-semibold tracking-widest text-white/75">{heading}</div>
      <div className="mt-2 text-[15px] leading-6">{children}</div>
    </div>
  );
}
