const photos = [
  {
    id: 1,
    title: "Montañas Azules",
    desc: "Un amanecer frío en los Alpes.",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  },
  {
    id: 2,
    title: "Bosque de Pinos",
    desc: "La calma de la naturaleza profunda.",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  },
  {
    id: 3,
    title: "Desierto Infinito",
    desc: "Dunas doradas bajo el sol.",
    url: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0",
  },
];

export default function Galeria() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestra Galería</h2>

        {/* Grid de Fotos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{photo.title}</h3>
                <p className="text-gray-600 text-sm">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
