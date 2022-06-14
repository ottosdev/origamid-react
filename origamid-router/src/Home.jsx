import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Head from './Head'

export default function Home() {
  return (
    <div>
      <Head title="home" description="Essa é a descricao da home"/>
      <h1>Home</h1>
      <Link to="produto/notebook">Notebook</Link>
      <Link to="produto/smarthphone">SmartPhone</Link>
    </div>
  )
}
