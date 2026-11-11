'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../translations/translations'
import { waLink, EMAIL, LINKEDIN, GITHUB } from '../lib/site'

export default function Contact() {
  const { language } = useLanguage()
  const t = useTranslations()[language]
  const c = t.contact

  return (
    <section id="contacto" className="bg-ink px-5 py-20 text-white md:px-8 md:py-28">
      <div className="container-x">
        <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">{c.title}</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#C9D6CE]">{c.text}</p>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href={waLink(language)} target="_blank" rel="noopener noreferrer" className="btn-primary !bg-[#2FA070] !text-ink hover:!bg-[#43B584]">
            {c.whatsapp}
          </a>
          <a href={`mailto:${EMAIL}`} className="font-semibold underline decoration-[#4B5A52] decoration-2 hover:decoration-[#2FA070]">
            {c.email}: {EMAIL}
          </a>
        </div>
        <p className="mt-4 text-sm text-[#C9D6CE]">{c.hours}</p>

        <div className="mt-16 flex flex-col gap-6 border-t border-[#2E3A34] pt-8 text-sm text-[#C9D6CE] md:flex-row md:items-center md:justify-between">
          <p>{c.location}</p>
          <div className="flex items-center gap-6">
            <a href="/mateoalvarez.pdf" download="Mateo_Alvarez_CV.pdf" className="font-semibold hover:text-white">
              {c.cv}
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-[#8FA196]">
          © {new Date().getFullYear()} {t.footer}
        </p>
      </div>
    </section>
  )
}
