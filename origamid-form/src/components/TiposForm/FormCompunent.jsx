import { useState } from "react";

function FormComponent() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const [form, setForm] = useState({
    nome: "",
    email: ""
  })

  function handleSubmit(event) {
    event.preventDefault();

    console.log(form)
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value })
  }
  
  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <label htmlFor="nome"> Nome</label>
        <input type="text"
          value={form.nome}
          onChange={handleChange}
          name="nome"
          id="nome"
        />
        <label htmlFor="email">E-mail</label>
        <input type="email"
          value={form.email}
          onChange={handleChange}
          name="email"
          id="email"
        />
        <button type="submit">Enviar</button>
      </form>

      {nome}
    </div>
  )
}

export default App
