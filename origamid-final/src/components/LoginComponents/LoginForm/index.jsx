import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useAuth } from '../../../hooks/useAuth';
import useForm from '../../../hooks/useForm';
import Error from '../../Error';
import Button from '../../Forms/Button';
import Input from '../../Forms/Input';
import styles from "./Login.module.css"
import stylesBtn from "../../Forms/Button/Button.module.css"


export default function LoginForm() {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useAuth()

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }
  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}

        <Error error={error} />
      </form>

      <Link className={styles.perdeu} to="/login/perdeu">Perdeu a senha</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda nao possui conta? Cadaster-se no site</p>
      </div>
      <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
    </section>
  )
}
