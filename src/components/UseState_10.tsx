import { ChangeEvent } from "react";
import { useState } from "react";

export default function HookState10(): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<string>(() => "Opção 1");

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(() => event.target.value);
  };

  return (
    <>
      <div>
        <h2>Exercício 08</h2>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="Opção 1">Opção 1</option>
          <option value="Opção 2">Opção 2</option>
          <option value="Opção 3">Opção 3</option>
        </select>
        <p>{selectedOption === "Opção 1" ? "Tab 1" : null}</p>
        <p>{selectedOption === "Opção 2" ? "Tab 2" : null}</p>
        <p>{selectedOption === "Opção 3" ? "Tab 3" : null}</p>
      </div>
    </>
  );
}
