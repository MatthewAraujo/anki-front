"use server";


export async function loginUserAction(state: any, formData: FormData) {
  try {
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

    return { success: true, token };
  } catch (err) {
    console.error(err);
    return { error: "Failed to login" };
  }
}