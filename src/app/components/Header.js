// app/components/Header.js

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 text-gray-800 z-50">
    <nav className="max-w-7xl mx-auto px-4 py-3 w-full flex justify-between items-center"> {/* Cambiado a justify-between y items-center */}
      {/* Texto "ma." alineado a la izquierda */}
      <div className="text-lg font-semibold hover:text-blue-500">
        ma.
      </div>

      {/* Lista de enlaces alineada a la derecha */}
      <ul className="flex space-x-8">
        <li><Link href="#projects" className="text-lg font-semibold hover:text-blue-500 transition-colors">Project</Link></li>
        <li><Link href="#contact" className="text-lg font-semibold hover:text-blue-500 transition-colors">Contact</Link></li>
        <li><Link href="#experience" className="text-lg font-semibold hover:text-blue-500 transition-colors">Experience & Education </Link></li>
        
      </ul>
    </nav>
  </header>
  );
}
