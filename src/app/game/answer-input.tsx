"use client";

export const AnswerInput = (parent: any) => {
  function keyUp(e: any) {
    if (e.key === "Enter") {
      parent.callback(e.target.value);
    }
  }

  return (
    <>
      <input
        type="text"
        className="uppercase border-2 border-orange-500 bg-white h-12 text-center text-black rounded mx-2"
        onKeyUp={keyUp}
      />
    </>
  );
};
