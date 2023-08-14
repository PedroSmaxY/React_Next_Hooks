import { useState } from "react";

export default function HookState09() {
  const [login, setLogin] = useState<boolean>(() => false);

  const [btnText, setBtnText] = useState<string>(() => "Login");

  return (
    <>
      <div>
        <h2>Exercício 07</h2>
        <button
          onClick={() => {
            setLogin(() => !login);
            setBtnText(() => (login ? "Login" : "Logout"));
          }}
        >
          {btnText}
        </button>
        {login ? <p>Usuário logado!</p> : null}
      </div>
    </>
  );
}
