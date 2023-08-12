import { useState } from "react";

export default function HookState01(): JSX.Element {
  const [valor, setValor] = useState(() => {
    return 0;
  });

  const incremento = () => {
    return setValor((oldValor) => {
      return oldValor + 1;
    });
  };

  const decremento = () => {
    return setValor((oldValor) => {
      return oldValor - 1;
    });
  };

  return (
    <>
      <h2>useState</h2>
      <p>Valor: {valor}</p>
      <button onClick={decremento}>Diminuir</button>
      <button onClick={incremento}>Aumentar</button>
    </>
  );
}
