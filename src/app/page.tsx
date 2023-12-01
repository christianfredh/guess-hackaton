"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/code");
  }, []);

  return (
    <>
      <h1 className="uppercase text-center">Välkommen till Holken</h1>
    </>
  );
}
