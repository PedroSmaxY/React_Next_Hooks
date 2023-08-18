import { useState } from "react";

// components
import ValorArray from "./UseState_07a_alt";

// Interface
interface ObjetoValor {
  valor: number;
}

export default function HookState07Alt(): JSX.Element {
  const [valor, setValor] = useState<ObjetoValor[]>(() => [
    { valor: 100 },
    { valor: 500 },
    { valor: 1000 },
  ]);

  const aumentarValor = (index: number) => {
    setValor((oldArray: ObjetoValor[]) => {
      const newArray = [...oldArray];
      newArray[index].valor += 5;
      return newArray;
    });
  };

  const diminuirValor = (index: number) => {
    setValor((oldArray: ObjetoValor[]) => {
      const newArray = [...oldArray];
      newArray[index].valor -= 5;
      return newArray;
    });
  };

  return (
    <>
      <h2>Exercício 05</h2>
      <hr />
      <div>
        {valor.map((objeto, index) => {
          return (
            <div key={index}>
              Valor: {objeto.valor}
              <ValorArray
                aumentarValor={() => aumentarValor(index)}
                diminuirValor={() => diminuirValor(index)}
              />
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
}
