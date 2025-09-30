import Layout from "../components/Layout";
import Image from "next/image";
export default function Sobre() {
  return (
    <Layout>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Sobre Nós</h2>
      <div className="space-y-4">
        <p className="bg-white p-4 rounded-2xl shadow-md text-gray-700 text-sm sm:text-base">
          Somos uma ONG chamada TechArt, dedicada a transformar lixo eletrônico em joias únicas e sustentáveis.
          coletamos peças doadas que não funcionam mais, como placas-mãe, chips e outros componentes eletrônicos.
          usamos as peças para criar acessórios como colares, pulseiras e brincos, dando uma nova vida a esses materiais.
          assim ajudamos a reduzir o impacto ambiental do lixo eletrônico e promovemos a reciclagem criativa.
          tambem ajudamos mulheres em situação de vulnerabilidade social a terem uma nova fonte de renda.
          assim fazemos um trabalho incrivelmente importante de reciclagem e inclusão social.
        </p>
        <p className="bg-white p-4 rounded-2xl shadow-md text-gray-700 text-sm sm:text-base">
          
          Se tiver mais dúvidas, não hesite em nos contatar. Estamos aqui para ajudar! compartilhe nosso projeto atarves do QRcode !
        </p>
      </div>
      
<div className="flex flex-col items-center justify-center text-center">
          <Image
            src="/post5.jpg"
            alt="Imagem do projeto"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full max-w-md"
            priority={false}
          />
          <p className="mt-3 text-green-700 font-medium italic tracking-wide text-sm">
            Compartilhe com um amigo
          </p>
        </div>


    </Layout>
  );
}

// Duvidas: apenas mude o título e textos
