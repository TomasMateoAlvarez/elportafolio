'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../translations/translations'

export default function Process() {
  const { language } = useLanguage()
  const t = useTranslations()[language].process

  return (
    <section id="proceso" className="section-pad bg-card">
      <div className="container-x">
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">{t.title}</h2>
        <ol className="mt-12 grid gap-x-10 gap-y-9 md:grid-cols-2">
          {t.steps.map((s, i) => (
            <li key={s.t} className="flex gap-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent-dark" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-bold">{s.t}</h3>
                <p className="mt-1 leading-relaxed text-muted">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
