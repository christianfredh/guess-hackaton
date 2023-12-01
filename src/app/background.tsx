"use client";
import Snowfall from "react-snowfall";
export const Background = () => {
  return (
    <>
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 100,
        }}
      />

      <div className="w-screen h-screen fixed z-10 bg-cover bg-center bg-[url('/images/background.jpeg')]"></div>
    </>
  );
};
