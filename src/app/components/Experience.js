export default function ExperienciaYEducacion() {
    return (
      <section id="experience" className="py-20 px-4 max-w-7xl mx-auto space-y-20">
        <h2 className="text-4xl font-bold text-black text-center">Experiencia y Educación</h2>
  
        {/* Línea de Tiempo de Experiencia */}
        <div className="space-y-12">
          <h3 className="text-3xl font-semibold text-black">Experiencia Laboral</h3>
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 h-full border-l-2 border-gray-300"></div>
  
            <div className="space-y-8">
              {/* Primer trabajo */}
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-x-4">
                <div className="flex-shrink-0 text-left">
                  <div className="text-lg font-semibold text-black">2024 - NOW</div>
                  <div className="text-sm text-gray-500">Maldonado, Uruguay</div>
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-2xl font-semibold text-black">Network Admin & IT Support</h4>
                  <p className="text-lg text-gray-700">
                  Provided technical support for computer
systems and software. Responded to user
inquiries, troubleshooting and resolving issues.                  </p>
                </div>
              </div>
  
              {/* Segundo trabajo */}
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-x-4">
                <div className="flex-shrink-0 text-left">
                  <div className="text-lg font-semibold text-black">2021 - 2023</div>
                  <div className="text-sm text-gray-500">Montevideo, Uruguay</div>
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-2xl font-semibold text-black">Mercado Libre - Fraud Preventionist</h4>
                  <p className="text-lg text-gray-700">
                  Analysis of bank accounts, identifying
movement patterns,
chargebacks, data analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Línea de Tiempo de Educación */}
        <div className="space-y-12">
          <h3 className="text-3xl font-semibold text-black">Educación</h3>
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 h-full border-l-2 border-gray-300"></div>
  
            <div className="space-y-8">
              {/* Primer título universitario */}
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-x-4">
                <div className="flex-shrink-0 text-left">
                  <div className="text-lg font-semibold text-black">Now</div>
                  <div className="text-sm text-gray-500">Montevideo, Uruguay</div>
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-2xl font-semibold text-black">React.JS Bootcamps | Udemy</h4>
                  <p className="text-lg text-gray-700">
                  Training in software development with an emphasis on programming languages such as React and Node.JS.

</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-x-4">
                <div className="flex-shrink-0 text-left">
                  <div className="text-lg font-semibold text-black">2022 - Now </div>
                  <div className="text-sm text-gray-500">Montevideo, Uruguay</div>
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-2xl font-semibold text-black">Bachelor's Degree in Computer Sciences | UTEC URUGUAY</h4>
                  <p className="text-lg text-gray-700">
                  Studying a degree focused on software development, databases, testing, and networks.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Sección de Skills */}
        <div className="space-y-12">
          <h3 className="text-3xl font-semibold text-black">Habilidades Técnicas</h3>
          <div className="space-y-4">
            <div className="flex space-x-6">
              <div className="text-lg font-medium text-gray-700">SQL</div>
              <div className="text-lg font-medium text-gray-700">Next.js</div>
              <div className="text-lg font-medium text-gray-700">Node.js</div>
              <div className="text-lg font-medium text-gray-700">React</div>
              <div className="text-lg font-medium text-gray-700">Swift</div>
              <div className="text-lg font-medium text-gray-700">Java</div>

            </div>
          </div>
        </div>
  
        {/* Sección de Idiomas */}
        <div className="space-y-12">
          <h3 className="text-3xl font-semibold text-black">Idiomas</h3>
          <div className="space-y-4">
            <div className="flex space-x-6">
              <div className="text-lg font-medium text-gray-700">Español - Nativo</div>
              <div className="text-lg font-medium text-gray-700">Inglés - C1</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  