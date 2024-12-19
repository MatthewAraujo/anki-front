"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useActionState } from "react"
import { toast } from "sonner"
import { createUserAction } from "./signin-action"
import { redirect } from "next/navigation"

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

    if (state?.success) {
      localStorage.setItem("token", state?.token as string);
      toast.success("Conta criada");
      redirect("/");
    }
  }

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
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Matthew Araujo"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="****"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </div>
          </form>

        </CardContent>
      </Card>
    </div>
  )
}
