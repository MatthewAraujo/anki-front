import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { PricingSectionCards } from "@/components/Pricing";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto">

      <Hero />
      <Features />
      <PricingSectionCards />


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
