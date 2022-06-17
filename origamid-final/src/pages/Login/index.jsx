import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import LoginForm from "../../components/LoginComponents/LoginForm"
import LoginCreate from "../../components/LoginComponents/LoginCreate"
import LoginPasswordLost from "../../components/LoginComponents/LoginPasswordLost"
import LoginPasswordReset from "../../components/LoginComponents/LoginPasswordReset"
import { useAuth } from '../../hooks/useAuth'
import styles from "./Login.module.css"

export default function Login() {
  const { login } = useAuth()
  if (login === true) return <Navigate to="/conta" />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  )
}
