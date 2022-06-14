import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Head from '../Head/Head'
import styles from "./Produtos.module.css"
export default function Produtos() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then(res => res.json())
      .then(data => setProdutos(data))
  }, [])


  if (!produtos) return null
  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head title="Produtos" />
      <div>
        <h1>Produtos</h1>
        {
          produtos.map(item => (
            <Link key={item.id} to={`produto/${item.id}`}>
              <img src={item.fotos[0].src} alt={item.fotos[0].titulo} />
              <h1 className={styles.nome}>{item.nome}</h1>
            </Link>
          ))
        }

      </div>

    </section>
  )
}
