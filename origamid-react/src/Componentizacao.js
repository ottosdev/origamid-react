import React from "react";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
      </ul>
    </header>
  );
};

const Titulo = (props) => {
  return <header>{props.texto}</header>;
};

const Home = () => {
  return (
    <section>
      <Titulo texto="Home" />
    </section>
  );
};

const Produto = ({nome, propriedades}) => {
  return (
      <div>
          <p>{nome}</p>
          <ul>
          {propriedades.map(item => (
              <li>{item}</li>
          ))}
          </ul>
      </div>
  )
};

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];
  return (
    <section>
      <Titulo texto="Produtos" />

      {produtos.map((item) => (
        <Produto  key={item.nome} {...item} />
      ))}
    </section>
  );
};

export default function TerceiroExercicio() {
  const { pathname } = window.location;
  let Pagina;

  Pagina = pathname === "/produtos" ? Produtos : Home;
  return (
    <>
      <Header />

      <Pagina />
    </>
  );
}
