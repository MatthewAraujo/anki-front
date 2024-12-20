"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Alternatives {
  a: string;
  b: string;
  c: string;
  d: string;
}

interface Anki {
  id: number;
  question: string;
  alternatives: Alternatives;
  right_answer: string;
}

interface AnkiCardProps {
  anki: Anki;
}

export function AnkiCard({ anki }: AnkiCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (key: string) => {
    if (!isSubmitted) {
      setSelectedAnswer(key);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="mx-auto h-full max-w-2xl w-full space-y-8 pt-10">
      <Card>
        <CardHeader>
          <CardTitle>Question {anki.id % 10 === 0 ? 10 : anki.id % 10}</CardTitle>
          <CardDescription>{anki.question}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(anki.alternatives).map(([key, value]) => (
              <div
                key={key}
                onClick={() => handleOptionSelect(key)}
                className={`p-4 border rounded-md cursor-pointer
                  ${isSubmitted && key === anki.right_answer ? "bg-green-100 underline underline-offset-4 decoration-green-500" : ""}
                  ${isSubmitted && key === selectedAnswer && key !== anki.right_answer ? "bg-red-100" : ""}
                  ${selectedAnswer === key && !isSubmitted ? "bg-blue-100" : "bg-white"}
                `}
              >
                <strong>{key.toUpperCase()}:</strong> {value}
              </div>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            disabled={isSubmitted || selectedAnswer === null}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
          >
            Submit
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

