"use server";

import { revalidateTag } from "next/cache";


export async function createUserAction(state: any, formData: FormData) {
  const { name, email, password } = Object.fromEntries(formData);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
    {
      body: JSON.stringify({
        name,
        email,
        password
      }),
      method: "POST",
    },
  );

  const user = await response.json();

  if (response.status === 409) {
    console.error(user.error);
    return { error: user.error };
  }

  const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
    body: JSON.stringify({
      email,
      password,
    }),
    method: "POST",
  })

  console.log(response2);

  if (!response2.ok) {
    console.error(await response2.text());
    return { error: "Failed to login" };
  }

  const token = await response2.json();
  console.log(token);


  revalidateTag("user");

  return { success: true, token };
}