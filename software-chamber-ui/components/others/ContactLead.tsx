"use client";

import { FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactLead() {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: hook up to your API route or 3rd-party form service
  };

  return (
    <section className="bg-white text-[#0B0F13]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.015em] sm:text-5xl">
            Let’s talk about your next project.{" "}
            <span className="text-gray-400">We’re here to help.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-black/60 sm:text-base">
            Deliver personalized experiences to your customers with AI-powered
            recommendation engines and dynamic content generation.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 items-start gap-8 md:mt-14 md:grid-cols-2 md:gap-12">
          {/* Left image */}
          <div className="order-2 md:order-1">
            <div className="overflow-hidden rounded-[22px] ring-1 ring-black/10 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.45)]">
              <img
                src="/images/contact/portrait.jpg"
                alt="Happy client"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="order-1 space-y-4 md:order-2">
            <Input placeholder="First Name" name="firstName" />
            <Input placeholder="Last Name" name="lastName" />
            <Input placeholder="Email" type="email" name="email" />

            {/* Phone row */}
            <div className="flex gap-3">
              <SelectCountry />
              <Input placeholder="Phone" name="phone" className="flex-1" />
            </div>

            <Input placeholder="Job Title" name="jobTitle" />
            <Textarea placeholder="Your message" name="message" rows={6} />

            {/* CTA */}
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_30px_-10px_rgba(16,185,129,0.7)] transition hover:translate-y-[-1px]"
            >
              Submit
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#0B0F13]">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* — helpers — */

function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl bg-slate-100 px-4 py-3 text-[14px] text-[#0B0F13] placeholder:text-black/40 ring-1 ring-black/5 outline-none focus:ring-emerald-400/50 ${className}`}
      required
    />
  );
}

function Textarea({
  className = "",
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { className?: string }) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-xl bg-slate-100 px-4 py-3 text-[14px] text-[#0B0F13] placeholder:text-black/40 ring-1 ring-black/5 outline-none focus:ring-emerald-400/50 ${className}`}
      required
    />
  );
}

function SelectCountry() {
  return (
    <div className="overflow-hidden rounded-xl ring-1 ring-black/5">
      <select
        name="countryCode"
        defaultValue="+1"
        className="h-[44px] rounded-xl bg-slate-100 px-3 text-[14px] text-[#0B0F13] outline-none"
      >
        <option value="+1">+1</option>
        <option value="+44">+44</option>
        <option value="+49">+49</option>
        <option value="+61">+61</option>
        <option value="+91">+91</option>
      </select>
    </div>
  );
}
