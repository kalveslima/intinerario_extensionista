"use client";
import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { FaInstagram, FaEnvelope, FaWhatsapp, FaRecycle, FaLeaf, FaGlobe } from "react-icons/fa";

interface LayoutProps {
  children: ReactNode;
}

type CascadeItem = {
  content: ReactNode;
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
  "Inovação verde",
  "top animes : berserk evangelino cowboy bebop death note",
  "feito por KUHAKU.",
];

const ICONS = [<FaRecycle key="recycle" />, <FaLeaf key="leaf" />, <FaGlobe key="globe" />];

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cascadeItems, setCascadeItems] = useState<CascadeItem[]>([]);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const items: CascadeItem[] = Array.from({ length: 20 }).map((_, idx) => {
      const isIcon = Math.random() > 0.6; // 40% ícones, 60% frases
      const content = isIcon
        ? ICONS[Math.floor(Math.random() * ICONS.length)]
        : <span key={`phrase-${idx}`}>{PHRASES[Math.floor(Math.random() * PHRASES.length)]}</span>;

      return {
        content,
        left: `${Math.random() * 100}%`,
        delay: `${(Math.random() * 8).toFixed(2)}s`,
        duration: `${(6 + Math.random() * 10).toFixed(2)}s`,
        size: `${14 + Math.floor(Math.random() * 14)}px`,
      };
    });
    setCascadeItems(items);
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white relative overflow-hidden scroll-smooth">
      {/* Cascata */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {cascadeItems.map((it, idx) => (
          <span
            key={`cascade-${idx}`}
            className="cascade-item"
            style={{
              left: it.left,
              animationDelay: it.delay,
              animationDuration: it.duration,
              fontSize: it.size,
            }}
          >
            {it.content}
          </span>
        ))}
      </div>

      {/* Header */}
      <header className="w-full bg-transparent text-white py-4 shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-green-400 tracking-wide">
            TechArt
          </h1>

          <nav className="hidden md:flex space-x-4 items-center text-base">
            <Link href="/" className="px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Início
            </Link>
            <Link href="/sobre" className="px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Sobre Nós
            </Link>
            <Link href="/duvidas" className="px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Dúvidas
            </Link>

            {/* 🔗 Novo link para o Google Forms */}
            <a
              href="https://forms.gle/seu-link-aqui"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg hover:bg-green-700 transition text-green-300 font-semibold"
            >
              Formulário
            </a>

            <a
              href="https://instagram.com/alvvezk"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 hover:text-green-300 transition"
            >
              <FaInstagram /> <span>Instagram</span>
            </a>
            <a
              href="mailto:k.alves1427@gmail.com"
              className="flex items-center space-x-2 hover:text-green-300 transition"
            >
              <FaEnvelope /> <span>Gmail</span>
            </a>
            <a
              href="https://wa.me/5511954610490"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 hover:text-green-300 transition"
            >
              <FaWhatsapp /> <span>WhatsApp</span>
            </a>
          </nav>

          {/* Menu Mobile */}
          <button
            className="md:hidden bg-green-800 p-2 rounded-lg hover:bg-green-700 transition top-0"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Abrir menu"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-green-900 px-6 py-4 space-y-3 animate-slide-down text-center">
            <Link href="/" className="block hover:bg-green-700 py-2 rounded-lg">Início</Link>
            <Link href="/sobre" className="block hover:bg-green-700 py-2 rounded-lg">Sobre Nós</Link>
            <Link href="/duvidas" className="block hover:bg-green-700 py-2 rounded-lg">Dúvidas</Link>

            {/* 🔗 Novo link também no menu mobile */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc6fflCD6OvKp1Sskp8YzvAJ2eic5PsqR37Dso4tb3Ns6HsFA/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-green-300 font-semibold"
            >
              Formulário
            </a>

            <a href="https://instagram.com/alvvezk" target="_blank" rel="noreferrer" className="block hover:text-pink-400">Instagram</a>
            <a href="mailto:k.alves1427@gmail.com" className="block hover:text-yellow-400">Gmail</a>
            <a href="https://wa.me/5511954610490" target="_blank" rel="noreferrer" className="block hover:text-green-400">WhatsApp</a>
          </div>
        )}
      </header>

      {/* Conteúdo */}
      <main className="flex-1 mt-28 max-w-5xl mx-auto px-6 py-10 relative z-10">
        {children}
      </main>

      {/* Rodapé */}
      <footer className="w-full bg-gray-950/70 text-center py-5 text-sm border-t border-green-700 text-green-400 relative z-10">
        © {year ?? ""} TechArt. Todos os direitos reservados.
      </footer>

      <style jsx global>{`
        .cascade-item {
          position: absolute;
          top: -8vh;
          color: #22c55e;
          opacity: 0.25;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          animation-name: cascade;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes cascade {
          0% {
            transform: translateY(-8vh);
            opacity: 0.3;
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
          animation: slideDown 0.25s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
