import { useState } from "react";

// Components
import Button from "./UseState_05a";

export default function HookState05(): JSX.Element {
  const [valor, setValor]: [
    valor: number,
    setValor: React.Dispatch<React.SetStateAction<number>>
  ] = useState(() => 0);
  return (
    <>
      <h2>Exercício 03</h2>
      <p>Valor: {valor}</p>
      <hr />
      <Button setValor={setValor} />
    </>
  );
}
