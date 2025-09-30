import Image from "next/image";
import Layout from "../components/Layout";

export default function Duvidas() {
  return (
    <Layout>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
        Perguntas Frequentes
      </h2>

      <div className="space-y-4">
        <p className="bg-white p-4 rounded-2xl shadow-md text-gray-700 text-sm sm:text-base">
          como doar? Entre em contato conosco por email ou whatsapp e agende uma coleta. estara falando com um de nossos membros, fique tranquilo a coleta e feita dentro da sua instituição de ensino.
          
          minhas peças nao serao revendidas ? De forma alguma, todas as peças doadas são
          reaproveitadas em nossas joias ou recicladas de forma responsável.

          quem ajudamos ? AJudamos mulheres em situação de vulnerabilidade social a terem uma nova fonte de renda.
        </p>

        <p className="bg-white p-4 rounded-2xl shadow-md text-gray-700 text-sm sm:text-base">
          Se tiver mais dúvidas, não hesite em nos contatar. Estamos aqui para ajudar! compartilhe nosso projeto atraves do QRcode

        </p>

        {/* Imagem + frase centralizadas */}
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
      </div>
    </Layout>
  );
}
