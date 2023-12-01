"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Players } from "./players";

export default function Home() {
  return (
    <>
      <div className="grid-cols-8"></div>
      <div className="grid-cols-4">
        <Players />
      </div>
    </>
  );
}
