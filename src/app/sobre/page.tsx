import Layout from "../components/Layout";

export default function Sobre() {
  return (
    <Layout>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Sobre Nós</h2>
      <div className="space-y-4">
        <p className="bg-white p-4 rounded-2xl shadow-md text-gray-700 text-sm sm:text-base">
          Este projeto tem como objetivo mostrar as atividades do extensionista.
        </p>
        <p className="bg-white p-4 rounded-2xl shadow-md text-gray-700 text-sm sm:text-base">
          Equipe dedicada, mobile-first e UX focada no usuário.
        </p>
      </div>
    </Layout>
  );
}

// Duvidas: apenas mude o título e textos
