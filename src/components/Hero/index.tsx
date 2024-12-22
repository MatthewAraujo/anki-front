import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section id="hero" className="text-center py-20 " >
      <h1 className="text-4xl font-semibold">Learn More, Study Less</h1>
      <p className="mt-4 text-lg text-slate-500">
        Create and sutyd flashcards in less time using <br />
        our AI powered flashcards generator.
      </p>
      <Button variant="default" className="mt-6 px-6 py-3 bg-black text-white rounded-full">
        Get Started
        <ArrowRight className="w-6 h-6 ml-2" />
      </Button>
    </section >
  )
}