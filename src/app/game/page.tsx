"use client";
import { Players } from "./players";
import GeneratedImage from "./generated-image";
import { AnswerInput } from "./answer-input";
import { useState } from "react";

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-5">
      <div className="col-span-1 sm:col-span-4 p-4">
        <h1 className="uppercase text-5xl text-center mb-5">Gissa staden</h1>
        <GeneratedImage
          gameStarted={() => {
            setGameStarted(true);
          }}
        />
        {gameStarted && (
          <AnswerInput
            callback={(answer: string) => {
              console.log(answer);
            }}
          />
        )}
      </div>
      <div className="col-span-1 sm:col-span-1 p-4">
        <Players />
      </div>
    </div>
  );
}
