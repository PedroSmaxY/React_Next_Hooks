export default function AlterarArray({
  somarValores,
  diminuirValores,
}: {
  somarValores: () => void;
  diminuirValores: () => void;
}): JSX.Element {
  return (
    <>
      <div>
        <button onClick={diminuirValores}>-</button>
        <button onClick={somarValores}>+</button>
      </div>
    </>
  );
}
