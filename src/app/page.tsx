"use client";
import { useState } from "react";
import Layout from "./components/Layout";
import { FaRecycle, FaLeaf, FaGlobe } from "react-icons/fa";

const items = [
  {
    title: "Nada se perde, tudo se transforma",
    description: "Mostrando como cada peça pode ter uma nova vida.",
    icon: <FaRecycle className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: "Reciclar é reinventar",
    description: "Cada componente reaproveitado conta uma nova história.",
    icon: <FaLeaf className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: "Transformando lixo em arte",
    description: "Artesanato feito a partir de materiais reciclados.",
    icon: <FaGlobe className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: "Tecnologia sustentável",
    description: "Projetos de tecnologia sustentável que impactam o planeta.",
    icon: <FaRecycle className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: "Reaproveitar é amar o planeta",
    description: "Pequenas ações que fazem grandes mudanças.",
    icon: <FaLeaf className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" />,
  },
];

export default function Home() {
  return (
    <Layout>
      <h2 className="relative z-20 text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center text-green-300">
        colocar alguma frase
      </h2>

      {/* Grid de blocos minimalistas */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start space-x-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm cursor-pointer transition hover:scale-105 hover:bg-white/20"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-1">
                {item.title}
              </h3>
              <p className="text-white text-sm sm:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
