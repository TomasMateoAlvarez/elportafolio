export const SITE_URL = 'https://mateoalvarezdev.vercel.app'
export const WA_NUMBER = '59892611151'
export const EMAIL = 'mateoalvarezclavijo99@gmail.com'
export const LINKEDIN = 'https://www.linkedin.com/in/mateo-alvarez-b9b647195/'
export const GITHUB = 'https://github.com/TomasMateoAlvarez'

export function waLink(language) {
  const msg =
    language === 'en'
      ? 'Hi Mateo, I saw your website and I would like to talk about automating a process in my company.'
      : 'Hola Mateo, vi tu web y quiero consultarte por automatizar un proceso en mi empresa.'
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}
