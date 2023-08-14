import { useState } from "react";
import "./UseState_11.css";

export default function HookState11(): JSX.Element {
  const [alteracao, setAlteracao] = useState(() => false);
  const [classOption, setClassOption] = useState<string>(() => "classUm");

  const alterar = () => {
    if (alteracao) {
      setClassOption(() => "classUm");
      setAlteracao(() => false);
    } else {
      setClassOption(() => "classDois");
      setAlteracao(() => true);
    }
  };

  return (
    <>
      <div className={classOption}>
        <h2>Título 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos alias
          a, quasi possimus ab, quis corporis autem veniam beatae nulla, soluta
          repellendus blanditiis dolores vitae. Voluptatibus ipsum in molestias
          sit.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
          praesentium voluptas aliquid voluptatum in voluptates quibusdam
          corporis necessitatibus vel ipsum reprehenderit soluta, nisi impedit
          sequi totam excepturi unde, dicta obcaecati.
        </p>
        <button onClick={alterar}>Alterar</button>
      </div>
    </>
  );
}
