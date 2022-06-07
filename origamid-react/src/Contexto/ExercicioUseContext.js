import React, { useContext } from "react";
import { useProduto } from "./useProduto";

export default function ExercicioUseContext() {
  const { produto, limparDados } = useProduto();

  if (!produto) return null;

  return (
    <div>
      <div>
        {produto.map((item) => (
          <li key={item.id}>
            {item.nome} {item.preco}
          </li>
        ))}
      </div>
      <button onClick={limparDados}>Limpar</button>
      {produto ? "aqui" : "nao limpou"}
    </div>
  );
}
