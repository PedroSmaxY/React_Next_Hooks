import { useState, useEffect, useRef } from "react";

export default (): JSX.Element => {
  const [valor, setValor] = useState<number>(() => 0);

  const renderInicial = useRef<boolean>(true);

  const incremento = () => setValor((old) => old + 1);

  useEffect(() => {
    if (renderInicial.current) {
      renderInicial.current = false;
    } else {
      console.log("Código executado apenas quando o valor é alterado");
    }
  }, [valor]);

  return (
    <>
      <div>
        <h3>UseEffect 02</h3>
        <h3>{valor}</h3>
        <button onClick={incremento}>Incremento</button>
      </div>
    </>
  );
};
