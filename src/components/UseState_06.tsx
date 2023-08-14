import { useState } from "react";

// Css
import "./UseState_06.css";

// Components
import ButtonFive from "./UseState_06a ";
import ButtonTen from "./UseState_06b";

export default function HookState06(): JSX.Element {
  const [valor1, setValor1] = useState(() => 0);
  const [valor2, setValor2] = useState(() => 0);

  return (
    <>
      <div>
        <h2>Exercício 04</h2>
        <h3>
          A soma de{" "}
          <strong>
            {valor1} + {valor2} = {valor1 + valor2}
          </strong>
          <hr />
        </h3>
        <p>
          Valor: <strong>{valor1}</strong>
          <ButtonFive setValor1={setValor1} />
          <hr />
          Valor: <strong>{valor2}</strong>
          <ButtonTen setValor2={setValor2} />
        </p>
      </div>
    </>
  );
}
