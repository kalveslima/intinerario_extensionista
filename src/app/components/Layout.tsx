"use client";
import { useState, ReactNode, useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

interface LayoutProps {
  children: ReactNode;
}

interface CascadeItem {
  left: string;
  delay: string;
  duration: string;
  phrase: string;
}

const phrases = [
  "Nada se perde, tudo se transforma",
  "Reciclar é reinventar",
  "Consciência verde",
  "O futuro é sustentável",
  "Reaproveitar é amar o planeta",
  "Pequenas ações, grandes mudanças",
  "Sustentabilidade já",
  "Transforme lixo em arte",
  "Cuidar do planeta é cuidar de nós",
  "Reduzir, Reutilizar, Reciclar",
];

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cascadeItems, setCascadeItems] = useState<CascadeItem[]>([]);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const items = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${5 + Math.random() * 10}s`,
      phrase: phrases[Math.floor(Math.random() * phrases.length)],
    }));
    setCascadeItems(items);

    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gray-900 text-white scroll-smooth">
      {/* Fundo cascata */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {cascadeItems.map((item, i) => (
          <span
            key={i}
            className="absolute text-green-400 opacity-20 text-sm animate-cascade"
            style={{
              left: item.left,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          >
            {item.phrase}
          </span>
        ))}
      </div>

      {/* Header */}
      <header className="w-full bg-gray-800/90 backdrop-blur-md text-white py-4 shadow-md fixed top-0 left-0 z-50 border-b border-green-500">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl sm:text-2xl font-bold text-yellow-400">
            Intinerário Extensionista
          </h1>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-2 flex-wrap items-center">
            <Link
              href="/"
              className="bg-green-600 px-3 py-2 rounded-xl hover:bg-green-500 transition flex items-center text-sm sm:text-base"
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="bg-green-600 px-3 py-2 rounded-xl hover:bg-green-500 transition flex items-center text-sm sm:text-base"
            >
              Sobre Nós
            </Link>
            <Link
              href="/duvidas"
              className="bg-green-600 px-3 py-2 rounded-xl hover:bg-green-500 transition flex items-center text-sm sm:text-base"
            >
              Dúvidas
            </Link>
            <a
              href="https://instagram.com/alvvezk"
              target="_blank"
              className="bg-green-600 px-3 py-2 rounded-xl hover:text-yellow-400 transition flex items-center space-x-1 text-sm sm:text-base"
            >
              <FaInstagram /> <span>Instagram</span>
            </a>
            <a
              href="mailto:k.alves1427@gmail.com"
              className="bg-green-600 px-3 py-2 rounded-xl hover:text-yellow-400 transition flex items-center space-x-1 text-sm sm:text-base"
            >
              <FaEnvelope /> <span>Gmail</span>
            </a>
            <a
              href="https://wa.me/5511954610490"
              target="_blank"
              className="bg-green-600 px-3 py-2 rounded-xl hover:text-yellow-400 transition flex items-center space-x-1 text-sm sm:text-base"
            >
              <FaWhatsapp /> <span>WhatsApp</span>
            </a>
          </nav>

          {/* Menu Mobile */}
          <button
            className="md:hidden bg-green-600 p-2 rounded-lg hover:bg-green-500 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Dropdown Mobile */}
        {menuOpen && (
          <div className="flex flex-col md:hidden bg-gray-800 px-4 py-2 space-y-2 animate-slide-down border-t border-green-500">
            <Link
              href="/"
              className="bg-green-600 px-3 py-2 rounded-xl hover:bg-green-500 transition text-sm flex justify-center"
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="bg-green-600 px-3 py-2 rounded-xl hover:bg-green-500 transition text-sm flex justify-center"
            >
              Sobre Nós
            </Link>
            <Link
              href="/duvidas"
              className="bg-green-600 px-3 py-2 rounded-xl hover:bg-green-500 transition text-sm flex justify-center"
            >
              Dúvidas
            </Link>
            <a
              href="https://instagram.com/alvvezk"
              target="_blank"
              className="bg-green-600 px-3 py-2 rounded-xl hover:text-yellow-400 transition flex items-center justify-center space-x-2 text-sm"
            >
              <FaInstagram /> <span>Instagram</span>
            </a>
            <a
              href="mailto:k.alves1427@gmail.com"
              className="bg-green-600 px-3 py-2 rounded-xl hover:text-yellow-400 transition flex items-center justify-center space-x-2 text-sm"
            >
              <FaEnvelope /> <span>Gmail</span>
            </a>
            <a
              href="https://wa.me/5511954610490"
              target="_blank"
              className="bg-green-600 px-3 py-2 rounded-xl hover:text-yellow-400 transition flex items-center justify-center space-x-2 text-sm"
            >
              <FaWhatsapp /> <span>WhatsApp</span>
            </a>
          </div>
        )}
      </header>

      {/* Conteúdo */}
      <main className="flex-1 mt-28 max-w-4xl mx-auto px-4 space-y-6 relative z-10 text-gray-100">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-center py-4 text-sm border-t border-green-500 text-yellow-400 relative z-10">
        © {year ?? ""} Intinerário Extensionista
      </footer>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease forwards;
        }
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-cascade {
          animation-name: cascade;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes cascade {
          0% {
            top: -5%;
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          100% {
            top: 110%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
