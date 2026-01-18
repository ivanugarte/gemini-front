export default function Slide() {

  return (
    <div className="relative h-[500px] w-full bg-gray-900 overflow-hidden pt-16">
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          alt="Hero"
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Explora el Mundo</h1>
          <p className="text-lg text-gray-200 max-w-lg mx-auto">
            Descubre paisajes increíbles capturados por los mejores fotógrafos de la comunidad.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
            Saber más
          </button>
        </div>
      </div>
    </div>
  );
}