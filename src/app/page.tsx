import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto">

      <Hero />
      <Features />
      <section id="about" className="py-16 container" >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Por que usar o Anki AI Generator?
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <h3 className="text-lg font-semibold text-teal-600">
              Automatização
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Criação de cartões sem esforço.
            </p>
          </Card>
          <Card className="text-center p-6">
            <h3 className="text-lg font-semibold text-teal-600">
              Resumos Inteligentes
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Obtenha o que realmente importa.
            </p>
          </Card>
          <Card className="text-center p-6">
            <h3 className="text-lg font-semibold text-teal-600">
              Economia de Tempo
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Foco no que é importante: aprender!
            </p>
          </Card>
        </div>
      </section >

      < section id="how-it-works" className="py-16 bg-gray-50" >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Como Usar
        </h2>
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 container">
          <Card className="p-6 text-center">
            <h3 className="font-semibold">1. Upload</h3>
            <p className="mt-2 text-sm text-gray-600">
              Adicione seu material de estudo.
            </p>
          </Card>
          <Card className="p-6 text-center">
            <h3 className="font-semibold">2. Configuração</h3>
            <p className="mt-2 text-sm text-gray-600">
              Escolha suas preferências.
            </p>
          </Card>
          <Card className="p-6 text-center">
            <h3 className="font-semibold">3. Geração</h3>
            <p className="mt-2 text-sm text-gray-600">
              Baixe seus cartões prontos!
            </p>
          </Card>
        </div>
      </section >
    </div >
  );
}
