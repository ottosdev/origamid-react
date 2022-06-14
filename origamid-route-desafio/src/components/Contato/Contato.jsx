import React from 'react'
import styles from "./Contato.module.css"
import ImgContato from "../../assets/contato.jpg"
import Head from "../Head/Head"
export default function Contato() {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Contato" />
      <img src={ImgContato} alt="Contato" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>otto@email.com</li>
          <li>83 9999-9999</li>
          <li>Rua qualquer lugar esta bom</li>
        </ul>
      </div>
    </section>
  )
}
