export default function ButtonTen({
  setValor2,
}: {
  setValor2: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  const aumentar = () => setValor2((oldValor: number) => oldValor + 10);
  const diminuir = () => setValor2((oldValor: number) => oldValor - 10);

  return (
    <>
      <div>
        <button onClick={diminuir}>-</button>
        <button onClick={aumentar}>+</button>
      </div>
    </>
  );
}
