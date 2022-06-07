import React, { Suspense, useEffect, useState } from "react";
import Produto from "./Produtos";

export default function QuintoExercicio() {
  // const [produto, setProduto] = React.useState([]);
  const [preferencia, setPreferencia] = useState(null);

  useEffect(() => {
    const preferenciaLocal = window.localStorage.getItem("produto");
    if (preferencia !== "null") setPreferencia(preferenciaLocal);
  }, []);

  useEffect(() => {
    if (preferencia !== null)
      window.localStorage.setItem("produto", preferencia);
  }, [preferencia]);

  function handleChangeTipo(value) {
    setPreferencia(value);
  }

  return (
    <>
      <h1>Preferencia: {preferencia}</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => handleChangeTipo("notebook")}>Notebook</button>
        <button onClick={() => handleChangeTipo("smartphone")}>
          SmartPhone
        </button>
      </div>
      <Suspense fallback={<h1>...carregando</h1>}>
        <Produto preferencia={preferencia}/>
      </Suspense>
    </>
  );
}
