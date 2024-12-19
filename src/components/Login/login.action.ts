"use server";

import { revalidateTag } from "next/cache";

export async function loginUserAction(state: any, formData: FormData) {
  const { email, password } = Object.fromEntries(formData);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
    body: JSON.stringify({
      email,
      password,
    }),
    method: "POST",
  })

  if (!response.ok) {
    console.error(await response.text());
    if (response.status === 401) {
      return { error: "Email ou senha inválidos" };
    }
    return { error: "Failed to login" };
  }

  const { token } = await response.json();

  revalidateTag("user");

  return { success: true, token };
}