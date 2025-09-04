import Link from "next/link";

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="w-full bg-purple-700 text-white py-4 shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Intinerário Extensionista</h1>
          <nav className="flex space-x-3">
            <Link href="/" className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-purple-500 transition">Início</Link>
            <Link href="/sobre" className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-purple-500 transition">Sobre Nós</Link>
            <Link href="/duvidas" className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-purple-500 transition">Dúvidas</Link>
            <a href="#contato" className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-purple-500 transition">Contato</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 mt-24 max-w-4xl mx-auto px-4 p-6">
        <h1 className="text-3xl font-bold mb-4">Sobre Nós</h1>
        <p className="text-gray-700">
          Aqui você pode contar a história do projeto, missão e valores.  
          Explique o que é o Intinerário Extensionista e quais os objetivos do blog.
        </p>
      </main>
    </div>
  );
}
