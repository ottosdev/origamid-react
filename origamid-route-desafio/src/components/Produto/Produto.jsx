import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Head from '../Head/Head';
import styles from "./Produto.module.css"
export default function Produto() {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { id } = useParams()

  // console.log(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true)
        const response = await fetch(url)
        const json = await response.json();
        setProduto(json)
      } catch (error) {
        setError("Um error ocorreu")
      } finally {
        setLoading(false)
      }
    }


    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  }, [id])

  if (loading) return <div className='loading'></div>
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className={styles.produto + ' animeLeft'}>
      <Head title={produto.nome} />
      <div>
        {produto.fotos.map(foto => (
          <img key={foto.src} src={foto.src} />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>{produto.preco}</span>
        <span className={styles.descricao}>{produto.descricao}</span>
      </div>

    </section>
  )
}
