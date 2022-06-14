import React from 'react'
import styles from "./Header.module.css"
import { Link } from "react-router-dom"
import { ReactComponent as Dogs } from "../../assets/dogs.svg"

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <nav  className={`${styles.nav} container`}>
        <Link to="/" aria-label='Dogs - Home' className={styles.logo}>
          <Dogs />
        </Link>
        <Link className={styles.login} to="login" >Login</Link>
      </nav>
    </header>
  )
}
