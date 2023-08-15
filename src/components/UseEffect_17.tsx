import { useState, useEffect } from "react";

export default () => {
  const [valor, setValor] = useState<number>(() => 0);

  const [nome, setNome] = useState<string>(() => "");

  const incremento = () => setValor((old) => old + 1);

  const definirNome = () => setNome(() => "Pedro Henrique");

  useEffect(() => {
    console.log("Executar apenas no arranque do componente");
  }, []);

  useEffect(() => {
    console.log("Executar apenas no arranque do VALOR");
  }, [valor]);

  useEffect(() => {
    console.log("Executar apenas no arranque do NOME");
  }, [nome]);

  useEffect(() => {
    console.log("Executar apenas no arranque do VALOR e do NOME");
  }, [valor, nome]);

  return (
    <>
      <div>
        <h3>UseEffect 01</h3>
        <h3>{valor}</h3>
        <button onClick={incremento}>Incremento</button>
        <div style={{ paddingTop: "20px" }}>
          <h3>{nome}</h3>
          <button onClick={definirNome}>Definir Nome</button>
        </div>
      </div>
    </>
  );
};
