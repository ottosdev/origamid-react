import React from 'react'
import styles from "./Header.module.css"
import { Link } from "react-router-dom"
import { ReactComponent as Dogs } from "../../assets/dogs.svg"
import { useAuth } from '../../hooks/useAuth'

export default function Header() {
  const { data, logout } = useAuth()

  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label='Dogs - Home' className={styles.logo}>
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="conta" >{data.nome}</Link>
        ) :
          <Link className={styles.login} to="login" >Login</Link>
        }
      </nav>
    </header>
  )
}
