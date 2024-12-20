import { getCookie } from "./auth.server";


export interface Alternatives {
  a: string
  b: string
  c: string
  d: string
}

export interface Anki {
  id: number
  question: string
  alternatives: Alternatives
  right_answer: string
}

export async function GetAnkiById(ankiId: string) {
  try {
    const userToken = await getCookie("userToken");

    if (!userToken) {
      return { error: "Not logged in" };
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/anki/${ankiId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })


    if (!response.ok) {
      console.error(await response.text());
      if (response.status === 401) {
        throw new Error("Unauthorized");
      }
      throw new Error("Failed to get anki");
    }


    const { anki } = await response.json();

    return anki.questions as Anki[];
  } catch (err) {
    console.error(err);
    throw new Error("Failed to get anki");
  }
}