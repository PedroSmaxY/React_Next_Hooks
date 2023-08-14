import { useState } from "react";

import HookState12A from "./UseState_12a";
import HookState12B from "./UseState_12b";

export default function HookState12(): JSX.Element {
  const [condicion, setCondicion] = useState(() => false);

  return (
    <>
      <div>
        <h2>Exercício 10</h2>
        {condicion ? <HookState12A /> : <HookState12B />}
      </div>
      <button onClick={() => setCondicion(!condicion)}>
        Alterar Componentes
      </button>
    </>
  );
}
