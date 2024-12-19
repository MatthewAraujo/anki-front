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
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { toast } from "sonner";
import { createUserAction } from "./signin-action";
import { redirect } from "next/navigation";
import { setAuthCookie } from "@/utils/auth"; // Importa as funções de cookies
import Link from "next/link";
import { FormField } from "../FormField";

export function SigninForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [state, formAction] = useActionState<
    {
      error?: string;
      success?: boolean;
      token?: string;
    } | null,
    FormData
  >(createUserAction, null);

  const handleToast = () => {
    if (state?.error) {
      console.error("errinho", state);
      toast.error("" + state.error);
    }

    if (state?.success && state?.token) {
      console.log("token", state.token);
      setAuthCookie("userToken", state.token, 7);
      toast.success("Conta criada");
      redirect("/");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Criar Conta</CardTitle>
          <CardDescription>
            Escreva seu email abaixo para criar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} onSubmit={handleToast}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <FormField id="name" label="Nome" type="text" placeholder="Matthew Araujo" required />
              </div>
              <div className="grid gap-2">
                <FormField id="email" label="Email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <FormField id="password" label="Senha" type="password" placeholder="****" required />
              </div>
              <Link href="/login" className="ml-auto inline-block text-sm underline-offset-4 hover:underline" >
                Já tem uma conta? Faça login
              </Link>
              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

