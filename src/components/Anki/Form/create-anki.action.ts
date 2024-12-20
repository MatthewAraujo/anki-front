"use server";

import { getCookie } from "@/utils/auth.server";

export async function CreateAnkiAction(state: any, formData: FormData) {
  try {
    const file = formData.get('file') as File | null;

    if (!file) {
      return { error: "No file uploaded" };
    }

    const userToken = await getCookie("userToken");

    if (!userToken) {
      return { error: "Not logged in" };
    }

    const formDataToSend = new FormData();
    formDataToSend.append("file", file);
    formDataToSend.append("name", file.name);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/anki/`, {
      method: "POST",
      body: formDataToSend,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    const { anki_id } = await response.json();

    // Return an object with a redirect URL
    return {
      redirect: `/anki/${anki_id}`,
    };
  } catch (err) {
    console.error(err);
    return { error: "Failed to upload the file" };
  }
}
