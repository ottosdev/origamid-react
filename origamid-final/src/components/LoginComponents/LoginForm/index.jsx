import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { TOKEN_POST } from '../../../api';
import useForm from '../../../hooks/useForm';
import Button from '../../Forms/Button';
import Input from '../../Forms/Input';
export default function LoginForm() {
  const username = useForm();
  const password = useForm();
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      getUser(token)
    }
  }, [])

  async function getUser(token) {
    const { url, options } = TOKEN_POST(token)

    const response = await fetch(url, options)
    const json = await response.json();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({ username: username.value, password: password.value })
      const response = await fetch(url, options)
      const json = await response.json()
      localStorage.setItem("token", json.token)

      console.log(json)
    }
  }
  return (
    <section>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>


      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}
