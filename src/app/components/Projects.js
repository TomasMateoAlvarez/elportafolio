import Image from "next/image";
import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      {/* Contenedor de los proyectos */}
      <h2 className="text-4xl font-bold text-black text-center py-10">Projects</h2>

      <div className="space-y-20"> {/* Aquí se aplica espacio entre los proyectos */}

        {/* Proyecto 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex-1 text-left">
            <h1 className="text-5xl font-bold text-black">
              Project 1: still working on it... <br /> 
              <Link
  href="https://selfcareuy.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-lg font-semibold hover:text-blue-500 transition-colors"
>
  Selfcare
</Link>

            </h1>
            <p>
              I have been working on a landing page for a local business, where we are looking to grow the audience, lorem ipsum.
            </p>
          </div>
          <div className="flex-1 text-center">
            <Image src="/selfcareproject.png" alt="Selfcare" width={600} height={800} />
          </div>
        </div>

        {/* Línea separadora */}
        {/* <hr className="border-t-2 border-gray-300 my-8 py-8" />

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 ">
          <div className="flex-1 text-left">
            <h1 className="text-5xl font-bold text-black">
              Project 2: <br /> ASUR
            </h1>
            <p>
              It´s a basic programm to help a organization to manage their members, events and more.
            </p>
          </div> */}
          {/* <div className="flex-1 text-center">
            <Image src="/window.svg" alt="Landing Page" width={400} height={400} />
          </div> */}
          {/* <h1 className="text-5xl font-bold text-black"> Coming soon... </h1>
        </div> */}

        {/* Línea separadora */}
        <hr className="border-t-2 border-gray-300 my-8" />

        {/* Proyecto 3 */}
        {/* <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex-1 text-left">
            <h1 className="text-5xl font-bold text-black">
              Project 3: <br /> E-commerce Store
            </h1>
            <p>
              A fully functional e-commerce store built with React and Node.js, lorem ipsum.
            </p>
            
          </div>
          <hr className="border-t-2 border-gray-300 my-8" /> */}

          {/* <div className="flex-1 text-center">
            <Image src="/window.svg" alt="E-commerce" width={400} height={400} />
          </div> */}
          
        </div>
        {/* <hr className="border-t-2 border-gray-300 my-8" />

      </div> */}
    </section>
  );
}
