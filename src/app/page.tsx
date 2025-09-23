"use client";
import { useState } from "react";
import Layout from "./components/Layout";
import { FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";

const titles = [
  "Nada se perde, tudo se transforma",
  "Reciclar é reinventar",
  "Transformando lixo em arte",
  "Tecnologia sustentável",
  "Reaproveitar é amar o planeta",
];

const descriptions = [
  "Mostrando como cada peça pode ter uma nova vida.",
  "Cada componente reaproveitado conta uma nova história.",
  "Artesanato feito a partir de materiais reciclados.",
  "Projetos de tecnologia sustentável que impactam o planeta.",
  "Pequenas ações que fazem grandes mudanças.",
];

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);

  // Pega imagens locais de /public/images
  const getImg = (idx: number) => `/images/post${idx + 1}.jpg`;

  return (
    <Layout>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center text-yellow-300">
        Itinerário Extensionista
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {titles.map((title, idx) => (
          <article
            key={idx}
            onClick={() => setSelected(idx)}
            className="bg-white text-gray-900 rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer"
            role="button"
            aria-label={`Abrir detalhes: ${title}`}
          >
            <div className="w-full h-44 sm:h-52 overflow-hidden">
              <img
                src={getImg(idx)}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-3 sm:p-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 text-green-800">
                {title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {descriptions[idx]}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Pop-up modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="modal-content bg-white rounded-2xl shadow-2xl max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={titles[selected]}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-800 bg-gray-200 rounded-full p-2 sm:p-3 hover:bg-gray-300"
              aria-label="Fechar"
            >
              ✕
            </button>

            <div className="w-full h-48 sm:h-64 overflow-hidden rounded-t-2xl">
              <img
                src={getImg(selected)}
                alt={titles[selected]}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-2xl font-bold text-green-800 mb-2">
                {titles[selected]}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {descriptions[selected]}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer/contact curto (mobile-first) */}
      <footer className="mt-8 sm:mt-12 text-center text-sm sm:text-base text-gray-300">
        <p className="mb-3 font-semibold text-green-300">Entre em contato</p>
        <div className="flex justify-center gap-6 text-2xl sm:text-3xl text-green-300">
          <a href="tel:+5511954610490" aria-label="Telefone">
            <FaPhoneAlt />
          </a>
          <a href="mailto:k.alves1427@gmail.com" aria-label="E-mail">
            <FaEnvelope />
          </a>
          <a
            href="https://instagram.com/alvvezk"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </footer>
    </Layout>
  );
}
