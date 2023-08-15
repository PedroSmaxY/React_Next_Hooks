import { useState, useEffect } from "react";

export default () => {
  const [valor, setValor] = useState<number>(() => 0);

  const incremento = () => setValor((old) => old + 1);

  useEffect(() => {
    console.log("atualizado");
  }, []);

  return (
    <>
      <div>
        <h3>UseEffect 01</h3>
        <button onClick={incremento}>Incremento</button>
        <h3>{valor}</h3>
      </div>
    </>
  );
};
