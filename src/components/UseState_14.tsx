import { useState } from "react";
export default function HookState14(): JSX.Element {
  const [valor, setValor] = useState<string>(() => "");
  const [nomes, setNomes] = useState<string[]>([]);

  return (
    <>
      <div>
        <h2>Exercício 11</h2>
        <h3>Input Data {"=>"} collection</h3>
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
        <button
          onClick={() => {
            if (valor !== "") {
              setNomes((OldArray: string[]) => {
                const newArray = [...OldArray];
                newArray.push(valor);
                return newArray;
              });
              setValor(() => "");
            } else {
              alert("digite Algo");
            }
          }}
        >
          Inserir
        </button>
        <div>
          <h2>Nomes: </h2>
          {nomes.map((array: string, index: number) => {
            return (
              <>
                <p key={index}>{array}</p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
