import React, { useState } from 'react'

const formFields = [
    {
        id: 'nome',
        label: 'Nome',
        type: 'text',
    },
    {
        id: 'email',
        label: 'Email',
        type: 'email',
    },
    {
        id: 'senha',
        label: 'Senha',
        type: 'password',
    },
    {
        id: 'cep',
        label: 'Cep',
        type: 'text',
    },
    {
        id: 'rua',
        label: 'Rua',
        type: 'text',
    },
    {
        id: 'numero',
        label: 'Numero',
        type: 'text',
    },
    {
        id: 'bairro',
        label: 'Bairro',
        type: 'text',
    },
    {
        id: 'cidade',
        label: 'Cidade',
        type: 'text',
    },
    {
        id: 'estado',
        label: 'Estado',
        type: 'text',
    },
];

// const forms = formFields.reduce((acc, field) => 
//     return {
//     ...acc,
//     [field.id]: ''
// }
// }, {})

export default function EnviandoDados() {
    const [response, setReponse] = useState(null)



    // const [form, setForm] = useState({
    //     nome: "",
    //     email: "",
    //     senha: "",
    //     cep: "",
    //     rua: "",
    //     numero: "",
    //     bairro: "",
    //     cidade: "",
    //     estado: "",
    // })
    const [form, setForm] = React.useState(
        formFields.reduce((acc, field) => {
            return { ...acc, [field.id]: '' };
        }, {}),
    );

    function handleChange({ target }) {
        const { id, value } = target;
        setForm({ ...form, [id]: value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch('https://ranekapi.origamid.dev/json/api/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // form é o objeto com os dados do formulário
            body: JSON.stringify(form),
        }).then(resposta => setReponse(resposta));
    }


    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: '1rem', width: "200px" }}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" value={form.nome} onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
            />
            <label htmlFor="senha">Senha</label>
            <input
                type="password"
                id="senha"
                value={form.senha}
                onChange={handleChange}
            />
            <label htmlFor="cep">Cep</label>
            <input type="text" id="cep" value={form.cep} onChange={handleChange} />
            <label htmlFor="senha">Rua</label>
            <input type="text" id="rua" value={form.rua} onChange={handleChange} />
            <label htmlFor="numero">Número</label>
            <input
                type="text"
                id="numero"
                value={form.numero}
                onChange={handleChange}
            />
            <label htmlFor="bairro">Bairro</label>
            <input
                type="text"
                id="bairro"
                value={form.bairro}
                onChange={handleChange}
            />
            <label htmlFor="cidade">Cidade</label>
            <input
                type="text"
                id="cidade"
                value={form.cidade}
                onChange={handleChange}
            />
            <label htmlFor="estado">Estado</label>
            <input
                type="text"
                id="estado"
                value={form.estado}
                onChange={handleChange}
            />
            <button>Enviar</button>
            {response && response.ok && <p>Usuário Criado</p>}
        </form>
    )
}
