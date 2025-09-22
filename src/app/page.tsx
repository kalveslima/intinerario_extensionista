import Layout from "./components/Layout";

export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1581093588401-22b4f2b86f09", // Placa-mãe reciclada
    "https://images.unsplash.com/photo-1605902711622-cfb43c4437b1", // Peças de PC desmontadas
    "https://images.unsplash.com/photo-1611262588014-df4d3cddc889", // Reciclagem tecnológica
    "https://images.unsplash.com/photo-1612178537178-30e1ef8c1c36", // Computadores reciclados
  ];

  return (
    <Layout>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-yellow-400">
        Intinerário Extensionista
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img, index) => (
          <article
            key={index}
            className="bg-gray-800 rounded-2xl shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl text-white"
          >
            <div className="relative w-full h-48 sm:h-60 overflow-hidden">
              <img
                src={img}
                alt={`Post ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay verde/dourado */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-transparent"></div>
            </div>

            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-400">
                Título do Post {index + 1}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Texto ilustrativo do post {index + 1}. Aqui você pode colocar
                notícias, artigos ou novidades do projeto.
              </p>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  );
}
