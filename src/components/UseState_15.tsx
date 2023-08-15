import { useState } from "react";

export default function HookState15(): JSX.Element {
  const [count, setCount] = useState(() => 0);

  const handleClick = () => {
    setCount((old) => old + 1);
  };

  console.log("component rendered");

  return (
    <>
      <div>
        <p>Count : {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    </>
  );
}
