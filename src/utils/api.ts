import { getCookie } from "./auth.server";
import { getUserId } from "./decodeJWT";
import { AnkiMinumum } from "./types";
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

export async function GetAnkisByUserId() {
  try {
    const userToken = await getCookie("userToken");

    if (!userToken) {
      return { error: "Not logged in" };
    }


    const userId = await getUserId()

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/anki/${userId}/user`, {
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

    const { ankis } = await response.json()

    return ankis as AnkiMinumum[];

  } catch (err) {
    console.error(err);
    throw new Error("Failed to get anki");
  }
}