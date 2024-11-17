import { ReactNode, useState } from "react";

type CounterProps = {
  children: ReactNode;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = ({ setCount, children }: CounterProps) => {
  return (
    <>
      <h1>{children}</h1>
      <button onClick={() => setCount((prev) => --prev)}>--</button>
      <button onClick={() => setCount((prev) => ++prev)}>++</button>
    </>
  );
};

export default Counter;
