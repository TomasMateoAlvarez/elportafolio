'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations/translations';

export default function Contact() {
  const { language } = useLanguage();
  const translations = useTranslations();
  return (
    <section id="contact" className="section-spacing bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {translations[language].letsWorkTogether}
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {translations[language].contactSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">{translations[language].getInTouchTitle}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{translations[language].email}</p>
                    <a href="mailto:mateoalvarezclavijo99@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                      mateoalvarezclavijo99@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{translations[language].location}</p>
                    <p className="text-white">{translations[language].montevideoUruguay}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{translations[language].availabilityTitle}</p>
                    <p className="text-white">{translations[language].remoteOpportunities}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">{translations[language].connectWithMe}</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/TomasMateoAlvarez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <FaGithub className="text-white text-lg" />
                </a>

                <a
                  href="https://www.linkedin.com/in/mateo-alvarez-b9b647195/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <FaLinkedin className="text-white text-lg" />
                </a>

                <a
                  href="mailto:mateoalvarezclavijo99@gmail.com"
                  className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <FaEnvelope className="text-white text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">{translations[language].readyToStart}</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {translations[language].contactDescription}
            </p>

            <div className="space-y-4">
              <a
                href="mailto:mateoalvarezclavijo99@gmail.com"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center group"
              >
                <FaEnvelope className="mr-3 group-hover:animate-bounce" />
                {translations[language].sendEmail}
              </a>

              <a
                href="/mateoalvarez.pdf"
                download="Mateo_Alvarez_Resume.pdf"
                className="w-full border border-gray-600 hover:bg-gray-700 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center group"
              >
                <FaDownload className="mr-3 group-hover:animate-bounce" />
                {translations[language].downloadResume}
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm text-center">
                {translations[language].responseTime}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            {translations[language].footerText}
          </p>
        </div>
      </div>
    </section>
  );
}
