"use client";
import { useEffect, useState } from "react";

export const Background = () => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("test test");
      setShowWelcomeMessage(false);
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-[url('/images/background.jpeg')]">
      <h1
        className={`opacity-${
          showWelcomeMessage ? "100" : "0"
        } transition-opacity duration-500 text-4xl text-white font-bold`}
      >
        Välkommen!
      </h1>
    </div>
  );
};
