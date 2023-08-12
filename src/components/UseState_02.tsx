import { useState } from "react";

export default function HookState02(): JSX.Element {
  const [valor, setValor] = useState(() => {
    return 0;
  });

  const aumentar = () => {
    return setValor((oldValor) => {
      return oldValor + 1;
    });
  };

  const diminuir = () => {
    return setValor((oldValor) => {
      return oldValor - 1;
    });
  };

  const diminuirValor = (parametro: number) => {
    return setValor((old) => {
      return old - parametro;
    });
  };

  return (
    <>
      <h2>useState</h2>
      <p>Valor: {valor}</p>
      <button
        onClick={() => {
          return diminuirValor(10);
        }}
      >
        Diminuir+
      </button>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={aumentar}>Aumentar</button>
    </>
  );
}
