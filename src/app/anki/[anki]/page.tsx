import { AnkiCard } from "@/components/Anki/AnkiCard";
import { Anki, GetAnkiById } from "@/utils/api";

interface PageProps {
  params: {
    anki: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { anki } = params;

  try {
    const response = await GetAnkiById(anki);

    if ("error" in response) {
      return <div>{response.error}</div>;
    }

    const ankiQuestions: Anki[] = response || [];

    if (!ankiQuestions.length) {
      return <div>No questions found for this Anki.</div>;
    }

    return (
      <div className="mx-auto h-full max-w-2xl w-full space-y-8 pt-10">
        {ankiQuestions.map((anki) => (
          <AnkiCard key={anki.id} anki={anki} />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch Anki:", error);
    return <div>Failed to load Anki data. Please try again later.</div>;
  }
}

