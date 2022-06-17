import React from 'react'
import Input from "../../Forms/Input"
import Button from "../../Forms/Button"
import useForm from "../../../hooks/useForm"
import { useAuth } from '../../../hooks/useAuth';
import Error from "../../Error"
import { POST_USER } from '../../../api'
import useFetch from '../../../hooks/useFetch';

export default function LoginCreate() {
  const username = useForm()
  const password = useForm()
  const email = useForm()
  const { userLogin } = useAuth()
  const { loading, error, request } = useFetch()
  async function handleSubmit(event) {
    event.preventDefault()
    const { url, options } = POST_USER({
      username: username.value, password: password.value, email: email.value
    })
    const { response } = await request(url, options)

    if (response.ok) userLogin(username.value, password.value)

  }

  return (
    <section>
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password"  {...password} />
        <Input label="Email" type="email" name="email" {...email} />
        {loading ? <Button disabled >Cadastrando...</Button> : (<Button >Cadastrar</Button>)}
        <Error error={error}/>
      </form>
    </section>

  )
}
