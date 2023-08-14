import { useState } from "react";

// components
import ValorArray from "./UseState_07a_alt";

// Interface
interface ObjetoValor {
  id: number;
  valor: number;
}

export default function HookState07Alt(): JSX.Element {
  const [valor, setValor] = useState<ObjetoValor[]>(() => [
    { id: 1, valor: 100 },
    { id: 2, valor: 500 },
    { id: 3, valor: 1000 },
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
      <div>
        {valor.map((objeto, index) => {
          return (
            <div key={objeto.id}>
              Valor: {objeto.valor}
              <ValorArray
                aumentarValor={() => aumentarValor(index)}
                diminuirValor={() => diminuirValor(index)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}