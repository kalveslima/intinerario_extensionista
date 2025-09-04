"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="w-full bg-purple-700 text-white py-4 shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl sm:text-2xl font-bold">Intinerário Extensionista</h1>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-3">
            <Link href="/" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-purple-500 transition text-sm sm:text-base">
              Início
            </Link>
            <Link href="/sobre" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-purple-500 transition text-sm sm:text-base">
              Sobre Nós
            </Link>
            <Link href="/duvidas" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-purple-500 transition text-sm sm:text-base">
              Dúvidas
            </Link>
            <a href="#contato" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-purple-500 transition text-sm sm:text-base">
              Contato
            </a>
          </nav>

          {/* Menu Mobile */}
          <button
            className="md:hidden bg-purple-600 p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Dropdown Mobile */}
        {menuOpen && (
          <div className="flex flex-col md:hidden bg-purple-700 px-4 py-2 space-y-2">
            <Link href="/" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-purple-500 transition text-sm">
              Início
            </Link>
            <Link href="/sobre" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-purple-500 transition text-sm">
              Sobre Nós
            </Link>
            <Link href="/duvidas" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-purple-500 transition text-sm">
              Dúvidas
            </Link>
            <a href="#contato" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-purple-500 transition text-sm">
              Contato
            </a>
          </div>
        )}
      </header>

      {/* Feed de posts */}
      <main className="flex-1 mt-28 max-w-4xl mx-auto px-4 space-y-6">
        {[1, 2, 3, 4].map((post) => (
          <article key={post} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <img
              src={`https://picsum.photos/800/400?random=${post}`}
              alt={`Post ${post}`}
              className="w-full h-48 sm:h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg sm:text-xl font-semibold mb-2">Título do Post {post}</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Este é um texto ilustrativo para o post {post}. Aqui você pode colocar informações, notícias ou artigos do seu projeto.
              </p>
            </div>
          </article>
        ))}
      </main>

      {/* Rodapé */}
      <footer id="contato" className="bg-purple-700 text-white py-6 mt-10 shadow-inner">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-lg font-semibold text-center sm:text-left">Entre em contato:</p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto items-center">
            <a href="https://instagram.com/alvvezk" target="_blank" className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-pink-500 transition w-full text-center sm:w-auto">
              📸 Instagram
            </a>
            <a href="mailto:k.alves1427@gmail.com" className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-yellow-400 transition w-full text-center sm:w-auto">
              📧 Gmail
            </a>
            <a href="https://wa.me/5511954610490" target="_blank" className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-green-500 transition w-full text-center sm:w-auto">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
