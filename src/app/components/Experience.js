'use client'

import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations/translations';

export default function ExperienciaYEducacion() {
    const { language } = useLanguage();
    const translations = useTranslations();
    const skills = [
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Next.js', level: 85 },
      { name: 'SQL', level: 75 },
      { name: 'Swift', level: 70 },
      { name: 'Java', level: 75 }
    ];

    return (
      <section id="experience" className="section-spacing bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {translations[language].experienceEducation}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience Section */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 8v10l4-2 4 2V8" />
                    </svg>
                  </div>
                  {translations[language].workExperience}
                </h3>

                <div className="space-y-8">
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-blue-600">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-gray-900">{translations[language].sapConsultant}</h4>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">{translations[language].current}</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-2">2024 - Present • Montevideo, Uruguay</p>
                    <p className="text-gray-600 leading-relaxed">
                      {translations[language].sapDescription}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-blue-600">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-gray-900">{translations[language].networkAdmin}</h4>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">{translations[language].current}</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-2">2024 - Present • Maldonado, Uruguay</p>
                    <p className="text-gray-600 leading-relaxed">
                      {translations[language].networkDescription}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-gray-300">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{translations[language].fraudPreventionist}</h4>
                    <p className="text-blue-600 font-medium mb-2">2021 - 2023 • Mercado Libre, Montevideo</p>
                    <p className="text-gray-600 leading-relaxed">
                      {translations[language].fraudDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  {translations[language].education}
                </h3>

                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-blue-600">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{translations[language].bachelorDegree}</h4>
                    <p className="text-blue-600 font-medium mb-2">2022 - Present • UTEC Uruguay</p>
                    <p className="text-gray-600 leading-relaxed">
                      {translations[language].bachelorDescription}
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-blue-600">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{translations[language].reactBootcamp}</h4>
                    <p className="text-blue-600 font-medium mb-2">2024 • Udemy</p>
                    <p className="text-gray-600 leading-relaxed">
                      {translations[language].bootcampDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  {translations[language].technicalSkills}
                </h3>

                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Languages */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{translations[language].languages}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">{translations[language].native}</div>
                      <div className="text-sm text-gray-600">{translations[language].spanish}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">C1</div>
                      <div className="text-sm text-gray-600">{translations[language].english}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  