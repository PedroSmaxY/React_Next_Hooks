import { useState } from "react";

interface ClientesObjeto {
  nome: string;
  apelido: string;
  cidade: string;
  email: string;
}

export default function HookState08() {
  const [clientes, setClientes] = useState(() => {
    return { nome: "", apelido: "", cidade: "", email: "" };
  });

  return (
    <>
      <h2>Exercício 07</h2>
      <hr />
      <div>
        <p>Nome: {clientes.nome}</p>
        <button
          onClick={() => {
            setClientes((oldObject): ClientesObjeto => {
              const newObject = { ...oldObject };
              newObject.nome = "Pedro Henrique da Silva Novais";
              return newObject;
            });
          }}
        >
          Alterar nome
        </button>
        <hr />
        <p>apelido: {clientes.apelido}</p>
        <button
          onClick={() => {
            setClientes((oldObject): ClientesObjeto => {
              const newObject = { ...oldObject };
              newObject.apelido = "SmaxY";
              return newObject;
            });
          }}
        >
          Alterar apelido
        </button>
        <hr />
        <p>cidade: {clientes.cidade}</p>
        <button
          onClick={() => {
            setClientes((oldObject): ClientesObjeto => {
              const newObject = { ...oldObject };
              newObject.cidade = "Petrópolis";
              return newObject;
            });
          }}
        >
          Aleterar cidade
        </button>
        <hr />
        <p>email: {clientes.email}</p>
        <button
          onClick={() => {
            setClientes((oldObject): ClientesObjeto => {
              const newObject = { ...oldObject };
              newObject.email = "pedrohnovais@outlook.com";
              return newObject;
            });
          }}
        >
          Alterar email
        </button>
        <hr />
      </div>
    </>
  );
}
