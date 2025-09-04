import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Intinerário Extensionista</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((post) => (
          <article key={post} className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <img
              src={`https://picsum.photos/800/400?random=${post}`}
              alt={`Post ${post}`}
              className="w-full h-48 sm:h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Título do Post {post}</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Texto ilustrativo do post {post}. Aqui você pode colocar notícias ou artigos do projeto.
              </p>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  );
}
