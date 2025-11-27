'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageSelector() {
  const { language, changeLanguage } = useLanguage()

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => changeLanguage('es')}
        className={`p-1 rounded transition-all duration-200 ${
          language === 'es'
            ? 'ring-2 ring-blue-500 bg-blue-50'
            : 'hover:bg-gray-100'
        }`}
        title="Español"
      >
        <span className="text-lg">🇪🇸</span>
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`p-1 rounded transition-all duration-200 ${
          language === 'en'
            ? 'ring-2 ring-blue-500 bg-blue-50'
            : 'hover:bg-gray-100'
        }`}
        title="English"
      >
        <span className="text-lg">🇺🇸</span>
      </button>
    </div>
  )
}