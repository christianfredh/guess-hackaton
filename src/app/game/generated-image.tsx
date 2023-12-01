"use client";

import { useEffect, useState } from "react";
declare type GenerateImageProps = {
  gameStarted(): void;
};
export default function GeneratedImage({ gameStarted }: GenerateImageProps) {
  const [prompt, setPrompt] = useState("");
  const [imageBase64, setImageBase64] = useState("");
  const [clues, setClues] = useState(0);
  const [loading, setIsLoading] = useState(false);
  const fetchNextImage = () => {
    setIsLoading(true);
    setClues(clues + 1);
    fetch("/api/prompt")
      .then((res) => res.json())
      .then((data) => {
        setPrompt(data.prompt);
        fetch("/api/image?prompt=" + encodeURIComponent(data.prompt))
          .then((res) => res.json())
          .then((data) => data?.data?.openai?.items[0]?.image)
          .then((data) => {
            setImageBase64(data);
            setIsLoading(false);
            gameStarted();
          });
      });
  };

  console.log(prompt);
  return (
    <>
      <div className="relative flex place-items-center">
        {imageBase64 ? (
          <img
            style={{ maxHeight: "400px" }}
            className="max-w-400 h-auto rounded-full mx-auto"
            src={`data:image/png;base64,${imageBase64}`}
          />
        ) : (
          ""
        )}
      </div>

      <div className="relative flex place-items-center justify-self-end">
        {!loading && (
          <button onClick={() => fetchNextImage()}>
            {clues === 0 ? "Redo?" : "Nästa ledtråd"}
          </button>
        )}
        {loading && <>Laddar...</>}
      </div>
    </>
  );
}
