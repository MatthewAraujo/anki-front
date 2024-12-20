"use client"
import { AnkiForm } from "@/components/Anki/Form";
import { isUserAuthenticated } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (!isUserAuthenticated()) {
      router.push('/login');
    }
  }, []);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <AnkiForm />
      </div>
    </div>
  )
}