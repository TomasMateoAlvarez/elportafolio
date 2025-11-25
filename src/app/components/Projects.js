import Image from "next/image";
import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className="section-spacing bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills in web development and design.
          </p>
        </div>

        <div className="space-y-20">
          {/* Project 1 - SelfCare */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Web Development
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  SelfCare Landing Page
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A modern landing page designed for a local wellness business. Built with React and Next.js,
                  featuring responsive design, smooth animations, and optimized performance to help grow their audience.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Next.js</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Vercel</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Link
                    href="https://selfcareuy.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    View Code
                  </button>
                </div>
              </div>

              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-10"></div>
                <Image
                  src="/selfcareproject.png"
                  alt="SelfCare Landing Page"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Coming Soon Projects */}
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">More Projects Coming Soon</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                I'm constantly working on new projects. Check back soon for more examples of my work,
                including e-commerce platforms, mobile applications, and enterprise solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
