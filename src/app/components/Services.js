'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../translations/translations'

export default function Services() {
  const { language } = useLanguage()
  const t = useTranslations()[language].services

  return (
    <section id="servicios" className="section-pad bg-card">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{t.title}</h2>
          <p className="mt-4 text-lg text-muted">{t.intro}</p>
        </div>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {t.items.map((s) => (
            <div key={s.name} className="grid gap-4 py-9 md:grid-cols-[1fr_1.6fr] md:gap-12">
              <h3 className="text-2xl font-bold tracking-tight">{s.name}</h3>
              <div>
                <p className="text-lg leading-relaxed text-muted">{s.text}</p>
                <p className="mt-3 text-sm font-medium text-accent">{s.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
