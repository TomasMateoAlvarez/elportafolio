import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-black mb-8">Contact Me</h2>
      <div className="flex justify-center space-x-8">
  
        <a
          href="https://github.com/TomasMateoAlvarez" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-800 hover:text-blue-600 transition-colors"
        >
          <FaGithub />
        </a>

    
        <a
          href="https://www.linkedin.com/in/mateo-alvarez-b9b647195/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-800 hover:text-blue-600 transition-colors"
        >
          <FaLinkedin />
        </a>


        <a
          href="mailto:mateoalvarezclavijo99@gmail.com"
          className="text-3xl text-gray-800 hover:text-blue-600 transition-colors"
        >
          <FaEnvelope />
        </a>
        <a
      href="\mateoalvarez.pdf"          // Ruta relativa al archivo en la carpeta public
      download="Mateo_Alvarez_Resume.pdf"  // Nombre con el que se descargará el archivo
      className="bg-black-300 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded transition-colors"
    >
Resume    </a>
      </div>
    </section>
  );
}
