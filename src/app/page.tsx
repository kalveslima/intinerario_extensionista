"use client";
import { useState } from "react";
import Layout from "./components/Layout";

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
  "top 3 animes, berserk, re zero, attack on titan",
 
];

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);

  const getImg = (idx: number) => `/images/post${idx + 1}.jpg`;

  return (
    <Layout>
      <h2 className="relative z-20 text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center text-yellow-300">
        Kintsugi
      </h2>

      {/* Grid de cards */}
      <div className="relative z-1 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
        {titles.map((title, idx) => (
          <article
            key={idx}
            onClick={() => setSelected(idx)}
            className="bg-white/20 backdrop-saturate-150 text-black-900 rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-150 hover:shadow-xl cursor-pointer"
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
              <h3 className="text-lg sm:text-xl font-semibold mb-1 text-yellow-400">
                {title}
              </h3>
              <p className="text-white-700 text-sm sm:text-base">
                {descriptions[idx]}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Pop-up */}
      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="modal-content bg-white rounded-4xl shadow-4xl max-w-md w-full relative"
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

            <div className="w-full h-60 sm:h-75 overflow-hidden rounded-t-2xl">
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
              <p className="text-black-700 text-sm sm:text-base">
                {descriptions[selected]}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
