import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CheckIcon } from "lucide-react";

interface PlanFeature {
  type: string;
  features: {
    name: string;
    price: number
  }[];
}

const planFeatures: PlanFeature[] = [
  {
    type: "Basic",
    features: [
      {
        name: "Generate 10 Flash Cards",
        price: 0,
      },
    ]
  },
  {
    type: "Pro",
    features: [
      {
        name: "Generate 30 Flash Cards",
        price: 20,
      },
    ]
  },
  {
    type: "Enterprise",
    features: [
      {
        name: "Generate Unlimited Flash Cards",
        price: 50,
      },
    ]
  },
];
export function PricingSectionCards() {
  return (
    <>
      <div id="pricing" className="container py-24 lg:py-32">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Pricing
          </h2>
          <p className="mt-1 text-muted-foreground">
            Whatever your status, our offers evolve according to your needs.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center justify-center">
          {planFeatures.map((plan, id) => (
            <Card key={id}>
              <CardHeader className="text-center pb-2">
                <CardTitle className="mb-7">{plan.type}</CardTitle>
                <span className="font-bold text-5xl">R${plan.features[0].price}</span>
              </CardHeader>
              <CardDescription className="text-center">
                Billed monthly
              </CardDescription>
              <CardContent>
                <ul className="mt-7 space-y-2.5 text-sm">
                  {plan.features.map((feature, id) => (
                    <li key={id} className="flex space-x-2">
                      <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                      <span className="text-muted-foreground">{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={"outline"}>
                  Sign up
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

