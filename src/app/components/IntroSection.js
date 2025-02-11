// Agrega esta sección debajo del Header
import React from 'react';
import Typewriter from './Typewriter';

export default function IntroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-20 px-4 max-w-7xl mx-auto">
      {/* Contenedor izquierdo con efecto de escritura */}
      <div className="flex-1 text-left">
        <h1 className="text-5xl font-bold text-black">
         Mateo Alvarez
        </h1>
      </div>

      {/* Contenedor derecho con el efecto de tipeo */}
      <div className="flex-1 text-right">
        <h2 className="text-4xl font-semibold text-gray-800">
          <Typewriter 
            phrases={[
              "JR Developer.",
              "Self-taught.",
              "Pursuing a Bachelor's degree in Computer Sciences.",
              "Looking for new Challenges."
            ]}
            typeSpeed={100}
            deleteSpeed={50}
            pause={1500}
          />
        </h2>
      </div>
    </section>
  );
}