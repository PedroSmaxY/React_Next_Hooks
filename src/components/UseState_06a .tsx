export default function ButtonFive({
  setValor1,
}: {
  setValor1: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  const aumentar = () => setValor1((oldValor: number) => oldValor + 5);
  const diminuir = () => setValor1((oldValor: number) => oldValor - 5);

  return (
    <>
      <div>
        <button onClick={diminuir}>-</button>
        <button onClick={aumentar}>+</button>
      </div>
    </>
  );
}
