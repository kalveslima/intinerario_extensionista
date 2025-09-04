import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="w-full bg-purple-700 text-white py-4 shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Intinerário Extensionista</h1>
          <nav className="flex space-x-3">
            <Link href="/" className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-purple-500 transition">
              Início
            </Link>
            <Link href="/sobre" className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-purple-500 transition">
              Sobre Nós
            </Link>
            <Link href="/duvidas" className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-purple-500 transition">
              Dúvidas
            </Link>
            <a href="#contato" className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-purple-500 transition">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Feed de posts */}
      <main className="flex-1 mt-24 max-w-4xl mx-auto px-4 space-y-6">
        {[1, 2, 3, 4].map((post) => (
          <article key={post} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src={`https://picsum.photos/800/400?random=${post}`}
              alt={`Post ${post}`}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Título do Post {post}</h2>
              <p className="text-gray-600">
                Este é um texto ilustrativo para o post {post}. Aqui você pode colocar informações, notícias ou artigos do seu projeto.
              </p>
            </div>
          </article>
        ))}
      </main>

      {/* Rodapé */}
      <footer id="contato" className="bg-purple-700 text-white py-6 mt-10 shadow-inner">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-lg font-semibold">Entre em contato:</p>
          <div className="flex space-x-4">
            <a href="https://instagram.com/alvvezk" target="_blank" className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-pink-500 transition">
              📸 Instagram
            </a>
            <a href="mailto:k.alves1427@gmail.com" className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-yellow-400 transition">
              📧 Gmail
            </a>
            <a href="https://wa.me/5511954610490" target="_blank" className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-green-500 transition">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
