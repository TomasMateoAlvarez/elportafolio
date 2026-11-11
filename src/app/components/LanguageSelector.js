'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageSelector() {
  const { language, changeLanguage } = useLanguage()
  const base = 'rounded px-2.5 py-1.5 text-xs font-bold tracking-wide transition-colors'

  return (
    <div className="flex items-center rounded-lg border border-line" role="group" aria-label="Idioma">
      {['es', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => changeLanguage(code)}
          aria-pressed={language === code}
          className={`${base} ${language === code ? 'bg-ink text-white' : 'text-muted hover:text-ink'}`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
