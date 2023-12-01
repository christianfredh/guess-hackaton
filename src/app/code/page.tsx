"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const router = useRouter();
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [code, setCode] = useState<string>("");
  const handleInput = (inputIndex: number) => {
    console.log("test");
    if (inputIndex < inputRefs.length - 1) {
      // @ts-ignore: Object is possibly 'null'.
      inputRefs[inputIndex + 1].current.focus();
    }

    let _code = "";
    for (let index = 0; index < inputRefs.length; index++) {
      // @ts-ignore: Object is possibly 'null'.
      const element = inputRefs[index]?.current?.value;
      if (element) _code += element;
    }
    setCode(_code);
  };

  useEffect(() => {
    if (code.length === 4) router.push("/name");
  }, [code]);

  return (
    <>
      <h1 className="uppercase">Ange din unika kod för att gå med i spelet</h1>
      {inputRefs.map((ref, index) => (
        <input
          type="text"
          ref={ref}
          className="border-2 border-orange-500 bg-white w-12 h-12 text-center text-black rounded mx-2"
          minLength={1}
          maxLength={1}
          onInput={() => handleInput(index)}
          key={index}
        />
      ))}
    </>
  );
}
