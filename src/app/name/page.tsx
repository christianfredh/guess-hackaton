"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const router = useRouter();
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [name, setName] = useState<string>("");
  const handleInput = (index: number) => {
    console.log("test");
    if (index < inputRefs.length - 1) {
      // @ts-ignore: Object is possibly 'null'.
      inputRefs[index + 1].current.focus();
    }

    let _name = "";
    for (let index = 0; index < inputRefs.length; index++) {
      // @ts-ignore: Object is possibly 'null'.
      const element = inputRefs[index]?.current?.value;
      if (element) _name += element;
    }
    setName(_name);
  };

  useEffect(() => {
    if (name.length === 4) router.push("/game");
  }, [name]);

  return (
    <>
      <h1 className="uppercase text-center">Ange ditt namn</h1>
      {inputRefs.map((ref, index) => (
        <input
          type="text"
          ref={ref}
          className="uppercase border-2 border-orange-500 bg-white w-12 h-12 text-center text-black rounded mx-2"
          minLength={1}
          maxLength={1}
          onInput={() => handleInput(index)}
          key={index}
        />
      ))}
    </>
  );
}
