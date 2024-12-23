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

    </div >
  );
}
