import React, { useEffect, useState } from "react";
const url = "https://ranekapi.origamid.dev/json/api/produto/";

const Produto = ({ preferencia }) => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    if (preferencia !== null) {
      fetch(url + preferencia)
        .then((resposta) => resposta.json())
        .then((data) => setDados(data));
    }
  }, [preferencia]);

  if (dados === null) return null;
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  );
};

export default Produto;
