'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../translations/translations'

export default function Projects() {
  const { language } = useLanguage()
  const t = useTranslations()[language].cases

  return (
    <section id="casos" className="section-pad">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{t.title}</h2>
          <p className="mt-4 text-lg text-muted">{t.intro}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.items.map((c) => (
            <article key={c.title} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card">
              <div className="flex flex-1 flex-col p-7 md:p-9">
                <p className="text-sm font-semibold text-accent">{c.tag}</p>
                <h3 className="mt-2 text-xl font-bold leading-snug tracking-tight md:text-2xl">{c.title}</h3>
                <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs font-semibold text-accent-dark">
                  {c.flow.map((step, k) => (
                    <li key={step} className="flex items-center gap-2">
                      {k > 0 && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted" aria-hidden="true">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      )}
                      <span className="rounded-md bg-accent-soft px-2.5 py-1">{step}</span>
                    </li>
                  ))}
                </ol>
                <dl className="mt-6 space-y-4 text-[0.95rem] leading-relaxed">
                  <div>
                    <dt className="font-semibold text-ink">{t.problemLabel}</dt>
                    <dd className="text-muted">{c.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">{t.builtLabel}</dt>
                    <dd className="text-muted">{c.built}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">{t.resultLabel}</dt>
                    <dd className="text-muted">{c.result}</dd>
                  </div>
                </dl>
                <ul className="mt-auto flex flex-wrap gap-2 pt-7">
                  {c.stack.map((s) => (
                    <li key={s} className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent-dark">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-16 text-xl font-bold tracking-tight">{t.moreTitle}</h3>
        <div className="mt-5 divide-y divide-line border-y border-line">
          {t.more.map((m) => (
            <a key={m.title} href={m.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-6 py-5">
              <span>
                <span className="block font-semibold text-ink group-hover:text-accent">{m.title}</span>
                <span className="block text-sm text-muted">{m.text}</span>
              </span>
              <span className="shrink-0 text-sm font-semibold text-accent">{t.visit} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
