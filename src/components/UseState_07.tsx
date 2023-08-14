import { useState } from "react";
import AlterarArray from "./UseState_07a";

export default function HookState07(): JSX.Element {
  const [array, setArray] = useState(() => [100, 500, 1000]);

  const alterarValores = (index: number, unidade: number) => {
    setArray((oldArray: number[]) => {
      const newArray = [...oldArray];
      newArray[index] += unidade;
      return newArray;
    });
  };

  return (
    <>
      <h1>Exercício 5</h1>
      <hr />
      <div>
        Valor: {array[0]}
        <AlterarArray
          somarValores={() => alterarValores(0, 5)}
          diminuirValores={() => alterarValores(0, -5)}
        />
        <hr />
      </div>
      <div>
        Valor: {array[1]}
        <AlterarArray
          somarValores={() => alterarValores(1, 5)}
          diminuirValores={() => alterarValores(1, -5)}
        />
        <hr />
      </div>
      <div>
        Valor: {array[2]}
        <AlterarArray
          somarValores={() => alterarValores(2, 5)}
          diminuirValores={() => alterarValores(2, -5)}
        />
        <hr />
      </div>
    </>
  );
}
