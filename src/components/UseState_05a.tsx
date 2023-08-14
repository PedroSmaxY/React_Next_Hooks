export default function Button({
  setValor
}: {
  setValor: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  const alterar = () => setValor(() => 1000);

  return (
    <>
      <button onClick={alterar}>Alterar</button>
    </>
  );
}
