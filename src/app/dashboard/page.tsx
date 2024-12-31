
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GetAnkisByUserId } from "@/utils/api";
import { AnkiMinumum } from "@/utils/types";
import Link from "next/link";

export default async function Page() {

  try {
    const response = await GetAnkisByUserId();

    if ("error" in response) {
      return <div>{response.error}</div>;
    }

    const ankiQuestions: AnkiMinumum[] = response || [];

    if (!ankiQuestions.length) {
      return <div>No questions found for this Anki.</div>;
    }

    return (
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div id="pricing" className="container py-24 lg:py-32">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 text-2xl">
            <h1>Meus Cards</h1>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center justify-center">
            {ankiQuestions.map((anki, id) => (
              <Link href={`/anki/${anki.id}`} key={id}>
                <Card >
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="mb-7">{anki.question}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>

            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch Anki:", error);
    return <div>Failed to load Anki data. Please try again later.</div>;
  }
}
