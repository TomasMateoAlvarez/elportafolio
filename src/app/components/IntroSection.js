'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../translations/translations'
import { waLink } from '../lib/site'

const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2Zm5.8 14.1c-.25.7-1.45 1.33-2 1.4-.52.07-1.17.1-1.88-.12a17 17 0 0 1-1.7-.63c-3-1.3-4.95-4.3-5.1-4.5-.14-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.52.25.6.85 2.07.92 2.22.08.15.13.32.03.5-.1.2-.15.32-.3.5-.15.17-.32.38-.45.5-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.05 1.13 1 2.1 1.32 2.4 1.47.3.15.47.12.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.82 2.02.97.3.15.5.22.57.35.07.12.07.72-.18 1.4Z" />
  </svg>
)

export default function IntroSection() {
  const { language } = useLanguage()
  const t = useTranslations()[language].hero

  return (
    <section className="px-5 pb-20 pt-14 md:px-8 md:pb-28 md:pt-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div className="hero-rise">
          <h1 className="text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]">
            {t.title}
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-muted">{t.proof}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={waLink(language)} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WaIcon />
              {t.primary}
            </a>
            <a href="#casos" className="btn-ghost">
              {t.secondary}
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-card p-6 shadow-[0_1px_2px_rgba(22,32,27,0.06),0_18px_40px_-24px_rgba(22,32,27,0.25)] md:p-8" aria-label="Antes y después">
          <div className="mb-4 grid grid-cols-2 gap-6 text-xs font-bold uppercase tracking-wider">
            <span className="text-muted">{t.beforeTitle}</span>
            <span className="text-accent">{t.afterTitle}</span>
          </div>
          <ul className="divide-y divide-line">
            {t.rows.map((r) => (
              <li key={r.before} className="grid grid-cols-2 gap-6 py-4 text-[0.95rem] leading-snug">
                <span className="text-muted line-through decoration-line decoration-2">{r.before}</span>
                <span className="font-medium text-ink">{r.after}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
