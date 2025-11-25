import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section-spacing bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm available for new opportunities and exciting projects.
            Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
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
                    <p className="text-gray-300 text-sm">Location</p>
                    <p className="text-white">Montevideo, Uruguay</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Availability</p>
                    <p className="text-white">Open to remote opportunities worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
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
            <h3 className="text-2xl font-bold mb-6">Ready to Start a Project?</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm currently available for freelance work and full-time opportunities. Whether you need a complete web application,
              a landing page, or technical consultation, I'm here to help.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:mateoalvarezclavijo99@gmail.com"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center group"
              >
                <FaEnvelope className="mr-3 group-hover:animate-bounce" />
                Send Me an Email
              </a>

              <a
                href="/mateoalvarez.pdf"
                download="Mateo_Alvarez_Resume.pdf"
                className="w-full border border-gray-600 hover:bg-gray-700 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center group"
              >
                <FaDownload className="mr-3 group-hover:animate-bounce" />
                Download My Resume
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm text-center">
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 Mateo Álvarez. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
