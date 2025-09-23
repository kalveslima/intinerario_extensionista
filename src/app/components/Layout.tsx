"use client";
import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

interface LayoutProps {
  children: ReactNode;
}

type CascadeItem = {
  text: string;
  left: string;
  delay: string;
  duration: string;
  size: string;
};

const PHRASES = [
  "Nada se perde, tudo se transforma",
  "Reciclar é reinventar",
  "Transformando lixo em arte",
  "Tecnologia sustentável",
  "Reaproveitar é amar o planeta",
  "Pequenas ações, grandes mudanças",
  "Reduzir, Reutilizar, Reciclar",
];

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cascadeItems, setCascadeItems] = useState<CascadeItem[]>([]);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const items: CascadeItem[] = Array.from({ length: 18 }).map(() => ({
      text: PHRASES[Math.floor(Math.random() * PHRASES.length)],
      left: `${Math.random() * 100}%`,
      delay: `${(Math.random() * 8).toFixed(2)}s`,
      duration: `${(6 + Math.random() * 10).toFixed(2)}s`,
      size: `${12 + Math.floor(Math.random() * 10)}px`,
    }));
    setCascadeItems(items);
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-white relative overflow-hidden">
      {/* Cascata verde sem blur */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {cascadeItems.map((it, idx) => (
          <span
            key={idx}
            className="cascade-item"
            style={{
              left: it.left,
              animationDelay: it.delay,
              animationDuration: it.duration,
              fontSize: it.size,
            }}
          >
            {it.text}
          </span>
        ))}
      </div>

      {/* Header transparente */}
      <header className="w-full bg-transparent text-white py-3 shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-lg sm:text-2xl font-bold text-yellow-400">
            Kintsugi
          </h1>

          <nav className="hidden md:flex space-x-2 items-center">
            <Link href="/" className="px-3 py-2 rounded-xl hover:bg-green-700 transition text-sm">
              Início
            </Link>
            <Link href="/sobre" className="px-3 py-2 rounded-xl hover:bg-green-700 transition text-sm">
              Sobre Nós
            </Link>
            <Link href="/duvidas" className="px-3 py-2 rounded-xl hover:bg-green-700 transition text-sm">
              Dúvidas
            </Link>

            <a
              href="https://instagram.com/alvvezk"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-xl hover:text-yellow-300 transition flex items-center space-x-2 text-sm"
            >
              <FaInstagram /> <span>Instagram</span>
            </a>
            <a
              href="mailto:k.alves1427@gmail.com"
              className="px-3 py-2 rounded-xl hover:text-yellow-300 transition flex items-center space-x-2 text-sm"
            >
              <FaEnvelope /> <span>Gmail</span>
            </a>
            <a
              href="https://wa.me/5511954610490"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-xl hover:text-yellow-300 transition flex items-center space-x-2 text-sm"
            >
              <FaWhatsapp /> <span>WhatsApp</span>
            </a>
          </nav>

          {/* Menu Mobile */}
          <button
            className="md:hidden bg-green-800 p-2 rounded-lg hover:bg-green-700 transition"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Abrir menu"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-green-900 px-4 py-3 space-y-2 animate-slide-down">
            <Link href="/" className="block px-3 py-2 rounded-xl hover:bg-green-700 text-center">
              Início
            </Link>
            <Link href="/sobre" className="block px-3 py-2 rounded-xl hover:bg-green-700 text-center">
              Sobre Nós
            </Link>
            <Link href="/duvidas" className="block px-3 py-2 rounded-xl hover:bg-green-700 text-center">
              Dúvidas
            </Link>
            <a href="https://instagram.com/alvvezk" target="_blank" rel="noreferrer" className="block px-3 py-2 rounded-xl hover:bg-pink-500 text-center">
              Instagram
            </a>
            <a href="mailto:k.alves1427@gmail.com" className="block px-3 py-2 rounded-xl hover:bg-yellow-400 text-center">
              Gmail
            </a>
            <a href="https://wa.me/5511954610490" target="_blank" rel="noreferrer" className="block px-3 py-2 rounded-xl hover:bg-green-500 text-center">
              WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* Área de conteúdo das páginas */}
      <main className="flex-1 mt-20 max-w-4xl mx-auto px-4 py-6 relative z-10">
        {children}
      </main>

      <footer className="w-full bg-gray-900/60 text-center py-4 text-sm border-t border-green-700 text-yellow-300 relative z-10">
        © {year ?? ""} Kuhakuuu. Todos os direitos reservados.
      </footer>

      <style jsx global>{`
        .cascade-item {
          position: absolute;
          top: -8vh;
          color: #34d399;
          opacity: 0.18;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          transform: translateY(0);
          will-change: transform, opacity;
          animation-name: cascade;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes cascade {
          0% {
            transform: translateY(-8vh);
            opacity: 0.25;
          }
          100% {
            transform: translateY(120vh);
            opacity: 0;
          }
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slideDown 0.22s ease-out forwards;
        }

        @keyframes zoomIn {
          0% {
            opacity: 0;
            transform: scale(0.96);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .modal-content {
          animation: slideUp 0.32s ease-out forwards;
        }
        @media (min-width: 768px) {
          .modal-content {
            animation: zoomIn 0.26s ease-out forwards;
          }
        }
      `}</style>
    </div>
  );
}
