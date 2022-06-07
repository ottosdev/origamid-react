import React, { Suspense, useEffect, useState } from "react";
const url = "https://ranekapi.origamid.dev/json/api/produto/";

export default function QuartoExercicio() {
  const [produtos, setProdutos] = useState([]);
  const [type, setType] = useState("tablet");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log("carregando")
    fetch(url + type)
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data);
        setLoading(false);
      });
      
  }, [type]);

  function handleChangeType(nome) {
    setType(nome);
  }

  return (
    <>
      <div>
        <button onClick={() => handleChangeType("tablet")}>Table</button>
        <button onClick={() => handleChangeType("smartphone")}>
          Smartphone
        </button>
        <button onClick={() => handleChangeType("notebook")}>Notebook</button>
      </div>
      {loading && <p>...carregando</p>}
      {!loading && produtos && (
        <ul>
          <li>{produtos.nome}</li>
          <li>R${produtos.preco}</li>
          <img src={produtos.fotos[0].src} />
        </ul>
      )}
    </>
  );
}
