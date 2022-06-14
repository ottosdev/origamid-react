import React from 'react'
import { NavLink, Route, Routes, useLocation, useParams, Outlet } from 'react-router-dom'
import ProdutoDescricao from "./ProdutoDescricao"
import ProdutoAvaliacao from "./ProdutoAvaliacao"
import ProdutoCustomizado from "./ProdutoCustomizado"
export default function Produto() {
  const params = useParams();


  const location = useLocation(); // Ficar tudo da rota atual (Pathname, search)
  const search = new URLSearchParams(location.search) // buscar por algo especifico
  console.log(search.get(''))
  return (
    <div>
      <h1>Produto {params.id}</h1>

      <nav>
        <NavLink to=''>Descricao</NavLink>
        <NavLink to='avaliacao'>Avaliacao</NavLink>
        <NavLink to='customizado'>Customizado</NavLink>
      </nav>

      
      <Outlet/>

    </div>

  )
}
