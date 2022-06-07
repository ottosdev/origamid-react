import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

export default function PrimeiroExercicios() {
  const { cliente, idade, compras, ativa } = mario;

  const total = compras
    .map((item) => Number(item.preco.replace("R$", "")))
    .reduce((acc, currentValue) => acc + currentValue);

  return (
    <>
      <h2>Nome: {cliente}</h2>
      <h2>Idade: {idade}</h2>
      <h2>
        Situação:{" "}
        <span style={{ color: ativa ? "green" : "red" }}>
          {ativa ? "Ativa" : "Inativa"}
        </span>
      </h2>
      <h2>Total Gasto: {total}</h2>
      <h2>
        {total > 10000
          ? "Voce esta gastando muito"
          : "Voce nao esta gastando muito"}
      </h2>
    </>
  );
}
