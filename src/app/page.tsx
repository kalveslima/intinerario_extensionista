"use client";
import { useState } from "react";
import Layout from "./components/Layout";
import { FaRecycle, FaLeaf, FaGlobe } from "react-icons/fa";

const items = [
  {
    title: "Quem somos ?",
    description: "Somos a TechArt, uma ONG que coleta e armazena peças nao funcionais de computadores e celulares.",
    icon: <FaRecycle className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: "Oque fazemos ?",
    description: "Cada componente reaproveitado conta uma nova história. fazemos tratamentos nas peças doadas e as trasnformamos o lixo em joias. Assim fazendo um trabalho incrivelmente importante de reciclagem.",
    icon: <FaLeaf className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: "Quem ajudamos ?",
    description: "AJudamos mulheres em situação de vulnerabilidade social a terem uma nova fonte de renda.",
    icon: <FaGlobe className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: "Como doar ?",
    description: "Entre em contato conosco por email ou whatsapp e agende uma coleta. estara falando com um de nossos membros, fique tranquilo a coleta e feita dentro da sua instituição de ensino.",
    icon: <FaRecycle className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: "Duvidas?",
    description: "entre na sessão de duvidas abrindo menu e clicando em duvidas, la respondemos as perguntas mais frequentes.",
    icon: <FaLeaf className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" />,
  },
];

export default function Home() {
  return (
    <Layout>
      

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
