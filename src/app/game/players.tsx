"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

type Player = {
  name: string;
  score: number;
};

export const Players = () => {
  const players: Player[] = [
    { name: "karl", score: 0 },
    { name: "anja", score: 0 },
    { name: "tomp", score: 0 },
    { name: "chri", score: 0 },
    { name: "anna", score: 0 },
    { name: "nils", score: 0 },
  ];

  return (
    <>
      <h2 className="uppercase font-extrabold mb-4">
        deltagare {players.length}
      </h2>
      <ul className="uppercase list-none">
        {players.map((player, index) => (
          <li className="mb-4" key={index}>
            {player.name}: {player.score}
          </li>
        ))}
      </ul>
    </>
  );
};
