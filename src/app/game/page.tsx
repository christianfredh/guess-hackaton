"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Players } from "./players";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5">
      <div className="col-span-1 sm:col-span-4 p-4">
        <p>Testar att se huvudinnehåll </p>
      </div>
      <div className="col-span-1 sm:col-span-1 p-4">
        <Players />
      </div>
    </div>
  );
}
