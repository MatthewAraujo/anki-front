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
import { loginUserAction } from "./login.action";
import { redirect } from "next/navigation";
import { setAuthCookie } from "@/utils/auth";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";
import { FormField } from "../FormField";
import { Label } from "@radix-ui/react-label";

export function LoginForm({
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
  >(loginUserAction, null);

  const handleToast = () => {
    if (state?.error) {
      toast({
        title: "Erro ao logar",
        description: state.error,
      })
    }
    if (state?.success && state?.token) {
      setAuthCookie("userToken", state.token, 7);
      toast({
        title: "Logado com sucesso",
        description: "Você foi logado com sucesso",
      })
      redirect("/");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Escreva seu email para logar</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} onSubmit={handleToast}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <FormField id="email" label="Email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                />
              </div>
              <Link href="/signin" className="ml-auto inline-block text-sm underline-offset-4 hover:underline" >
                Não tem uma conta? Crie uma aqui
              </Link>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

