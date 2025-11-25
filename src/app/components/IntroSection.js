import React from 'react';
import Typewriter from './Typewriter';

export default function IntroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center section-spacing">
      <div className="max-w-6xl mx-auto text-center animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
            Mateo
            <span className="text-blue-600"> Álvarez</span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-600 font-light mb-8 h-20">
            <Typewriter
              phrases={[
                "Full-Stack Developer",
                "Problem Solver",
                "Tech Enthusiast",
                "Looking for new challenges"
              ]}
              typeSpeed={80}
              deleteSpeed={40}
              pause={2000}
            />
          </div>
        </div>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Computer Science student passionate about creating innovative solutions.
          Specialized in React, Node.js, and modern web technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}