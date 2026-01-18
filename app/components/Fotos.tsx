"use client";

const photos = [
  {
    id: 1,
    title: "Arquitectura Moderna",
    category: "Urbano",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
  {
    id: 2,
    title: "Minimalismo Natural",
    category: "Naturaleza",
    url: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",
  },
  {
    id: 3,
    title: "Luz de Ciudad",
    category: "Noche",
    url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
  },
  {
    id: 4,
    title: "Oasis en el Desierto",
    category: "Viajes",
    url: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0",
  },
  {
    id: 5,
    title: "Bosque de Niebla",
    category: "Aventura",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  },
  {
    id: 6,
    title: "Rascacielos",
    category: "Urbano",
    url: "https://images.unsplash.com/photo-1449156059431-787c5d7139b9",
  },
];
export default function Fotos() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Selección Destacada
          </h2>
          <div className="h-1 w-20 bg-blue-600 mt-2"></div>
        </div>
        <button className="text-blue-600 font-semibold hover:underline hidden sm:block">
          Ver todo el catálogo
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo) => (
          <div key={photo.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white text-sm font-medium bg-blue-600 px-3 py-1 rounded-full">
                  {photo.category}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">{photo.title}</h3>
              <p className="text-gray-500 text-sm">
                Fotografía de alta resolución
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
