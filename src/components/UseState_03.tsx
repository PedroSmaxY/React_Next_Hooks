import { useState } from "react";

export default function HookState03(): JSX.Element {
  const [valor01, setValor01] = useState(1);
  const [valor02, setValor02] = useState(2);

  const diminuir01 = () => {
    setValor01((old) => {
      return old - 1;
    });
  };

  const aumentar01 = () => {
    setValor01((old) => {
      return old + 1;
    });
  };

  const diminuir02 = () => {
    setValor02((old) => {
      return old - 1;
    });
  };

  const aumentar02 = () => {
    setValor02((old) => {
      return old + 1;
    });
  };

  return (
    <>
      <h2>useState - Exercício 1</h2>
      <p>{valor01}</p>
      <button onClick={diminuir01}>-</button>
      <button onClick={aumentar01}>+</button>
      <hr />
      <p>{valor02}</p>
      <button onClick={diminuir02}>-</button>
      <button onClick={aumentar02}>+</button>
      <hr />
      <p>
        O resultado de {valor01} x {valor02} = {valor01 * valor02}
      </p>
    </>
  );
}
