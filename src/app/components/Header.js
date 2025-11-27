'use client'

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations/translations';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const { language } = useLanguage();
  const translations = useTranslations();
  return (
    <header className="sticky top-0 glass-effect z-50 border-b border-gray-100/50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
          ma.
        </div>

        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                href="#about"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group"
              >
                {translations[language].about}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group"
              >
                {translations[language].projects}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group"
              >
                {translations[language].experience}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                {translations[language].contact}
              </Link>
            </li>
          </ul>

          <LanguageSelector />
        </div>

        <button className="md:hidden p-2">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
