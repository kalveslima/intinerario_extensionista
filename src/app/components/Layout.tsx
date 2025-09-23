
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
            Intinerário Extensionista
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

      <main className="flex-1 mt-20 max-w-4xl mx-auto px-4 py-6 relative z-10">
        {children}




        <main className="flex-1 mt-20 max-w-4xl mx-auto px-4 py-6 relative z-10">
  {/* Seus children */}
  {children}

  {/* Cards estilo Yu-Gi-Oh */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
    {PHRASES.map((title, idx) => (
      <article
        key={idx}
        className="relative bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer"
      >
        {/* Blur leve atrás da imagem */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Imagem centralizada */}
        <div className="relative w-full h-44 sm:h-52 flex items-center justify-center">
          <img
            src={`/images/post${idx + 1}.jpg`}
            alt={title}
            className="w-full h-full object-cover rounded-xl z-10"
          />
        </div>

        {/* Conteúdo do card */}
        <div className="relative z-20 p-4 sm:p-5 text-center">
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-y-black40 drop-shadow-lg">
            {title}
          </h3>
          <p className="text-gray-200 text-sm sm:text-base">
            Cada componente reaproveitado conta uma nova história.
          </p>
          <div className="mt-2 border-t border-yellow-400 pt-2 text-yellow-300 text-xs sm:text-sm">
            Detalhes do projeto
          </div>
        </div>

        {/* Bordas douradas */}
        <div className="pointer-events-none absolute inset-0 border-4 border-yellow-400 rounded-2xl"></div>
      </article>
    ))}
  </div>
</main>

      </main>

      <footer className="w-full bg-gray-900/60 text-center py-4 text-sm border-t border-green-700 text-yellow-300 relative z-10">
        © {year ?? ""} Intinerário Extensionista
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

        .card-image {
          object-fit: cover;
          object-position: center;
          filter: blur(2px);
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
