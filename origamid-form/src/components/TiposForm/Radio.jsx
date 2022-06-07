import React, { useState } from 'react'

export default function Radio() {
    const [radio, setRadio] = useState('')
    const [cor, setCor] = useState('')

    function handleChange(event) {
        setRadio(event.target.value)
    }

    function handleChangeCor(event) {
        setCor(event.target.value)
    }
    return (
        <form action="" style={{ display: "flex", flexDirection: "column", gap: '1rem', width: "200px" }}>
            <h2>Cor</h2>
            <label htmlFor="red">Red
                <input type="radio" value='red' checked={cor === 'red'} onChange={handleChangeCor} />
            </label>
            <label htmlFor="blue">Blue
                <input type="radio" value='blue' checked={cor === 'blue'} onChange={handleChangeCor} />
            </label>
            {cor}
            <h2>Produto</h2>
            <label htmlFor="smartphone">SmartPhone
                <input type="radio" value='smartphone' checked={radio === 'smartphone'} onChange={handleChange} />
            </label>
            <label htmlFor="notebook">Notebook
                <input type="radio" value='notebbok' onChange={handleChange} checked={radio === 'notebook'} />
            </label>
            {radio}
        </form>
    )
}
