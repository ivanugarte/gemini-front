import { useState } from "react";
import { Menu, X, Camera } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Camera className="text-blue-600" />
            <span className="font-bold text-xl">MiMarca</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Inicio</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Galería</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Servicios</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contacto</a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-2">
          <a href="#" className="block py-2 text-gray-600">Inicio</a>
          <a href="#" className="block py-2 text-gray-600">Galería</a>
          <a href="#" className="block py-2 text-gray-600">Servicios</a>
        </div>
      )}
    </nav>
  );
}