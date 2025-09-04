"use client";
import { useState, ReactNode } from "react";
import Link from "next/link";
import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 scroll-smooth">
      {/* Header */}
      <header className="w-full bg-purple-700 text-white py-4 shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl sm:text-2xl font-bold">Intinerário Extensionista</h1>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-2 flex-wrap items-center">
            <Link href="/" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-purple-500 transition flex items-center text-sm sm:text-base">
              Início
            </Link>
            <Link href="/sobre" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-purple-500 transition flex items-center text-sm sm:text-base">
              Sobre Nós
            </Link>
            <Link href="/duvidas" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-purple-500 transition flex items-center text-sm sm:text-base">
              Dúvidas
            </Link>
            {/* Contatos */}
            <a href="https://instagram.com/alvvezk" target="_blank" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-pink-500 transition flex items-center space-x-1 text-sm sm:text-base">
              <FaInstagram /> <span>Instagram</span>
            </a>
            <a href="mailto:k.alves1427@gmail.com" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-yellow-400 transition flex items-center space-x-1 text-sm sm:text-base">
              <FaEnvelope /> <span>Gmail</span>
            </a>
            <a href="https://wa.me/5511954610490" target="_blank" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-green-500 transition flex items-center space-x-1 text-sm sm:text-base">
              <FaWhatsapp /> <span>WhatsApp</span>
            </a>
          </nav>

          {/* Menu Mobile */}
          <button
            className="md:hidden bg-purple-600 p-2 rounded-lg hover:bg-purple-500 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Dropdown Mobile */}
        {menuOpen && (
          <div className="flex flex-col md:hidden bg-purple-700 px-4 py-2 space-y-2 animate-slide-down">
            <Link href="/" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-purple-500 transition text-sm flex justify-center">Início</Link>
            <Link href="/sobre" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-purple-500 transition text-sm flex justify-center">Sobre Nós</Link>
            <Link href="/duvidas" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-purple-500 transition text-sm flex justify-center">Dúvidas</Link>
            <a href="https://instagram.com/alvvezk" target="_blank" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-pink-500 transition flex items-center justify-center space-x-2 text-sm">
              <FaInstagram /> <span>Instagram</span>
            </a>
            <a href="mailto:k.alves1427@gmail.com" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-yellow-400 transition flex items-center justify-center space-x-2 text-sm">
              <FaEnvelope /> <span>Gmail</span>
            </a>
            <a href="https://wa.me/5511954610490" target="_blank" className="bg-purple-600 px-3 py-2 rounded-xl hover:bg-green-500 transition flex items-center justify-center space-x-2 text-sm">
              <FaWhatsapp /> <span>WhatsApp</span>
            </a>
          </div>
        )}
      </header>

      {/* Conteúdo */}
      <main className="flex-1 mt-28 max-w-4xl mx-auto px-4 space-y-6">
        {children}
      </main>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease forwards;
        }
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
