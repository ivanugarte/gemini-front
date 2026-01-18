import {
  Menu,
  X,
  Camera,
  ChevronRight,
  Github,
  Twitter,
  Instagram,
  Slice,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Camera className="text-blue-600 w-6 h-6" />
            <span className="font-bold text-xl tracking-tighter">
              PIXELGAZE
            </span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Inspirando a creadores visuales en todo el mundo a través de la
            curaduría de contenido excepcional.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-400">
            Empresa
          </h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Nosotros</li>
            <li className="hover:text-blue-600 cursor-pointer">Carreras</li>
            <li className="hover:text-blue-600 cursor-pointer">Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-400">
            Legal
          </h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Privacidad</li>
            <li className="hover:text-blue-600 cursor-pointer">Términos</li>
            <li className="hover:text-blue-600 cursor-pointer">Cookies</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-400">
            Síguenos
          </h4>
          <div className="flex gap-4">
            <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition">
              <Twitter size={18} />
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-pink-100 hover:text-pink-600 transition">
              <Instagram size={18} />
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
              <Github size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
        <p>© 2026 PixelGaze Studio. Hecho con Next.js y Tailwind CSS.</p>
      </div>
    </footer>
  );
}
