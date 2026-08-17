import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import config from "@/config"
import Logo from "@/components/Logo"

export default function Hero() {
  const { eyebrow, title, subtitle, cta, ctaSecondary, trustLine, areas } =
    config.landing.hero

  return (
    <section className="relative overflow-hidden bg-base-100">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="absolute -right-32 -top-40 size-[34rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-48 left-1/4 size-[30rem] rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 md:py-28 lg:grid-cols-[1.12fr_0.88fr] lg:py-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            {eyebrow}
          </div>

          <h1 className="mt-7 max-w-3xl text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-[4.1rem] lg:leading-[1.04]">
            {title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-base-content/70 md:text-xl">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href={cta.href} className="btn btn-accent btn-lg">
              {cta.label}
              <ArrowRight className="size-4" />
            </Link>
            {ctaSecondary && (
              <Link href={ctaSecondary.href} className="btn btn-ghost btn-lg">
                {ctaSecondary.label}
              </Link>
            )}
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm text-base-content/55">
            <Check className="size-4 text-primary" />
            {trustLine}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-primary/10 blur-2xl" />
          <div className="rounded-[2rem] border border-base-300 bg-base-100 p-7 shadow-xl shadow-primary/10 md:p-10">
            <Logo className="mx-auto h-56 w-full md:h-64" priority />
            <div className="mt-7 grid grid-cols-2 gap-2 border-t border-base-200 pt-7">
              {areas.map((area, index) => (
                <div
                  key={area}
                  className={`rounded-xl border border-base-200 bg-base-200/50 px-3 py-3 text-center text-sm font-medium text-base-content/75 ${
                    index === areas.length - 1 ? "col-span-2" : ""
                  }`}
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
