import { useRef } from "react";

export default function HookRef16(): JSX.Element {
  const valor = useRef<number>(10);

  const incremento = () => {
    valor.current = valor.current + 1;
    console.log(valor);
  };

  console.log("Componente renderizado");

  return (
    <>
      <div>
        <h2>React Hooks - UseRef</h2>
        <p>Valor: {valor.current}</p>
        <button onClick={incremento}>Incrementar</button>
      </div>
    </>
  );
}
