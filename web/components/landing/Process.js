import config from "@/config"

export default function Process() {
  const { eyebrow, title, subtitle, steps } = config.landing.process

  return (
    <section id="metodo" className="border-t border-base-200 bg-primary py-20 text-primary-content md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-primary-content/70">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-primary-content/75">{subtitle}</p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-primary-content/20 bg-primary-content/20 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="bg-primary p-7 md:p-9">
              <span className="font-heading text-sm font-bold tracking-[0.2em] text-primary-content/55">
                {step.number}
              </span>
              <h3 className="mt-8 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-7 text-primary-content/75">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
