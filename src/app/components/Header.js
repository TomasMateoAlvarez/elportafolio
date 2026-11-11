'use client'

import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../translations/translations'
import LanguageSelector from './LanguageSelector'
import { waLink } from '../lib/site'

export default function Header() {
  const { language } = useLanguage()
  const t = useTranslations()[language]
  const [open, setOpen] = useState(false)

  const links = [
    ['#servicios', t.nav.services],
    ['#casos', t.nav.cases],
    ['#proceso', t.nav.process],
    ['#sobre-mi', t.nav.about],
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        {t.skip}
      </a>
      <nav className="container-x flex items-center justify-between px-5 py-3.5 md:px-8" aria-label="Principal">
        <a href="#" className="text-lg font-extrabold tracking-tight text-ink">
          Mateo Álvarez
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="text-sm font-medium text-muted transition-colors hover:text-ink">
              {label}
            </a>
          ))}
          <LanguageSelector />
          <a href={waLink(language)} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark">
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="menu-movil" className="border-t border-line bg-paper px-5 pb-6 pt-2 md:hidden">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-line py-3.5 text-base font-medium text-ink">
              {label}
            </a>
          ))}
          <div className="flex items-center justify-between pt-5">
            <LanguageSelector />
            <a href={waLink(language)} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white">
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
