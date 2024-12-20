"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { redirect } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { CreateAnkiAction } from "./create-anki.action";

export function AnkiForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [state, formAction] = useActionState<
    {
      error?: string;
      redirect?: string;
    } | null,
    FormData
  >(CreateAnkiAction, null);

  const handleToast = () => {
    console.log(state);
    if (state?.error) {
      toast({
        title: "Erro ao criar o anki",
        description: state.error,
      })
    }

    if (state?.redirect) {
      redirect(state.redirect);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Crie o seu Anki</CardTitle>
          <CardDescription>Adicione o seu arquivo aqui e gere um anki com 10 perguntas para você</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} onSubmit={handleToast}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Input
                  id="file"
                  name="file"
                  type="file"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Criar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div >
  );
}


