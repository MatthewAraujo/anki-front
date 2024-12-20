
import { cookies } from "next/headers";

export const getCookie = async (key: string): Promise<string | undefined> => {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(key);
  return cookieValue ? cookieValue.value : undefined;
};

