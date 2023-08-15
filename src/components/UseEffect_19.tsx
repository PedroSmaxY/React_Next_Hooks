import { useState, useEffect } from "react";

export default (): JSX.Element => {
  const [paises, setPaises] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((data) => setPaises(() => data));
  }, []);
  return (
    <>
      <div>
        <h2>UseEffect 03 - Países</h2>
        <h3>Nome dos países</h3>
        <ul>
          {paises.map((pais: any) => {
            return <li key={pais.cca2}>{pais.name.common}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
