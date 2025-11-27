'use client'

import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations/translations';

export default function Me(){
    const { language } = useLanguage();
    const translations = useTranslations();
    return(
        <section id="about" className="section-spacing bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {translations[language].aboutMe}
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Born and raised in <span className="text-blue-600 font-semibold">Uruguay</span>, {language === 'es' ? 'soy un estudiante entusiasta de Ciencias de la Computación con una pasión por el aprendizaje continuo y la innovación.' : 'I am an enthusiastic Computer Science student with a passion for continuous learning and innovation.'}
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {translations[language].aboutDescription2}
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {translations[language].aboutDescription3}
                        </p>

                        <div className="pt-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{translations[language].quickFacts}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600">2+</div>
                                    <div className="text-sm text-gray-600">{translations[language].yearsExperience}</div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600">10+</div>
                                    <div className="text-sm text-gray-600">{translations[language].projectsCompleted}</div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600">C1</div>
                                    <div className="text-sm text-gray-600">{translations[language].englishLevel}</div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                                    <div className="text-sm text-gray-600">{translations[language].availability}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                            <div className="text-center">
                                <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-white text-4xl font-bold">MA</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mateo Álvarez</h3>
                                <p className="text-blue-600 font-semibold mb-4">{translations[language].fullStackDeveloper}</p>
                                <div className="flex justify-center space-x-4">
                                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-600">React</span>
                                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-600">Node.js</span>
                                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-600">TypeScript</span>
                                </div>
                                 <div className="flex justify-center space-x-4 mt-2">
                                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-600">SpringBoot</span>
                                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-600">Java</span>
                                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-600">Ruby on rails</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 