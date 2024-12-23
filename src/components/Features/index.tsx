import { CheckIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";

interface Card {
  title: string;
  src: string;
  description: string;
}

const cards: Card[] = [
  {
    title: "Transforme Seus Estudos",
    src: "/images/ai-powered-tools.svg",
    description: "Adicione o seu documento"
  },
  {
    title: "Aprenda em Apenas 2 Passos",
    src: "/images/long-term-retention.svg",
    description: "Responda as suas perguntas"
  },
  {
    title: "Retenção de Longo Prazo",
    src: "/images/deep-learning.svg",
    description: "Aprenda e refaça os seus cards quantas vezes quiser"
  },
];

export function Features() {
  return (
    <section id="features" className="container py-20 text-center">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="flex flex-col gap-3 md:w-3/4">
            <h2 className="text-4xl font-semibold">Estudar Nunca Foi Tão Fácil</h2>
            <p className="text-lg text-slate-500 text-justify">
              Descubra uma nova forma de aprender com nossos flashcards inteligentes.
              Em apenas dois passos, você transforma qualquer documento em um material
              de estudo eficiente e personalizado.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {
            cards.map((plan, id) => (
              <Card key={id} className="text-start px-4">
                <CardHeader>
                  <Image width={428} height={428} src={plan.src} alt={plan.title} className="w-24 h-24" />
                </CardHeader>
                <CardDescription className="flex flex-col gap-2 justify-start text-justify">
                  <span className="font-semibold text-black">{plan.title}</span>
                  {plan.description}
                </CardDescription>
              </Card>
            ))
          }
        </div>
      </div>
    </section >
  );
}
