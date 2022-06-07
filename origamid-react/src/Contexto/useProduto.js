import { createContext, useContext, useEffect, useState } from "react";

const ProdutoContext = createContext();

export default function ProdutoStore({ children }) {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((resposta) => resposta.json())
      .then((data) => setProduto(data));
  }, []);

  function limparDados() {
    setProduto(null);
  }

  return (
    <ProdutoContext.Provider value={{ produto, limparDados }}>
      {children}
    </ProdutoContext.Provider>
  );
}
export function useProduto() {
  const context = useContext(ProdutoContext);
  return context;
}
