"use client";

import { useEffect, useState } from "react";

export default function GeneratedImage() {
  const [prompt, setPrompt] = useState("");
  const [imageBase64, setImageBase64] = useState("");
  const [loaded, setLoaded] = useState(false);

  const fetchNextImage = () => {
    fetch("/api/prompt")
      .then((res) => res.json())
      .then((data) => data.prompt)
      .then((data) => {
        setPrompt(data);
        console.log(data);

        fetch("/api/image?prompt=" + encodeURIComponent(data))
          .then((res) => res.json())
          .then((data) => data?.data?.openai?.items[0]?.image)
          .then((data) => {
            setImageBase64(data);
          });
      });
  };

  useEffect(() => {
    if (!loaded) {
      fetchNextImage();
    }
    setLoaded(true);
  }, []);

  console.log(prompt);
  return (
    <>
      <div className="relative flex place-items-center">
        {imageBase64 ? (
          <img src={`data:image/png;base64,${imageBase64}`} />
        ) : (
          ""
        )}
      </div>

      <div className="relative flex place-items-center">
        <button onClick={() => fetchNextImage()}>Next</button>
      </div>
    </>
  );
}
