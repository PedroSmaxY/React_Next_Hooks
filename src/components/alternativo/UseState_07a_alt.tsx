export default function ValorArray({
  aumentarValor,
  diminuirValor,
}: {
  aumentarValor: () => void;
  diminuirValor: () => void;
}): JSX.Element {
  return (
    <>
      <div>
        <button onClick={diminuirValor}>-</button>
        <button onClick={aumentarValor}>+</button>
      </div>
    </>
  );
}
