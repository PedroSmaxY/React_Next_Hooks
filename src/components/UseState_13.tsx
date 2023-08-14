import { useState } from "react";
export default function HookState13(): JSX.Element {
  const [valor, setValor] = useState<string>(() => "Texto Inicial");

  return (
    <>
      <div>
        <h2>Exercício 11</h2>
        <h3>Input Data: {valor}</h3>
        <input
          type="text"
          name="caixatxt"
          id="caixatxt"
          placeholder="Digite aqui"
          value={valor}
          onChange={(evento: React.ChangeEvent<HTMLInputElement>) => {
            setValor(() => evento.target.value);
          }}
        />
      </div>
      <div>
        <p>{valor}</p>
        <h3>{valor}</h3>
        <p>O texto inserido é {valor}</p>
      </div>
    </>
  );
}
