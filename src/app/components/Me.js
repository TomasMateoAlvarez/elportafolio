'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../translations/translations'

export default function Me() {
  const { language } = useLanguage()
  const t = useTranslations()[language].about

  return (
    <section id="sobre-mi" className="section-pad">
      <div className="container-x">
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">{t.title}</h2>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-start gap-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-line">
                <Image src="/foto-mateo.jpg" alt={t.photoAlt} fill sizes="96px" className="object-cover" />
              </div>
              <p className="pt-1 text-lg leading-relaxed text-ink">{t.paragraphs[0]}</p>
            </div>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              {t.paragraphs.slice(1).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold tracking-tight">{t.stackTitle}</h3>
            <dl className="mt-4 divide-y divide-line border-y border-line">
              {t.stack.map((s) => (
                <div key={s.g} className="grid gap-1 py-3.5 sm:grid-cols-[9rem_1fr]">
                  <dt className="font-semibold">{s.g}</dt>
                  <dd className="text-muted">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
