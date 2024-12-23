import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section id="hero" className="text-center py-20">
      <h1 className="text-4xl font-semibold">Aprenda Mais, Estude Menos</h1>
      <p className="mt-4 text-lg text-slate-500">
        Transforme documentos em flashcards inteligentes <br />
        com apenas dois passos simples. Nosso gerador, alimentado por IA, faz o resto!
      </p>
      <Button variant="default" className="mt-6 px-6 py-3 bg-black text-white rounded-full">
        Comece Agora
        <ArrowRight className="w-6 h-6 ml-2" />
      </Button>
    </section>
  );
}
