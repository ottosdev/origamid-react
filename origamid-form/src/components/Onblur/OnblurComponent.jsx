import React, { useState } from 'react'
import InputComponent from '../Formularios/InputComponent'

export default function OnblurComponent() {
    const [cep, setCep] = useState("")
    const [error, setError] = useState(null)

    function validateCep(value) {
        if (value.length === 0) {
            setError("preencha um valor");
            return false
        }
        else if (!/^\d{5}-?\d{3}$/.test(value)) {
            setError("Preencha um cep valido")
            return false
        } else {
            setError(null)
            return true

        }
    }


    function handleBlur(event) {
        validateCep(event.target.value)
        console.log(validateCep(event.target.value))
    }

    function handleChange(event) {
        if (error) {
            validateCep(event.target.value)
        }
        setCep(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(validateCep(cep)) {
            console.log("enviar")

        } else {
            console.log("Nao enviar")
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <InputComponent
                onBlur={handleBlur}
                label="CEP" type="text" id="cep" placeholder="00000-000" value={cep} onChange={handleChange} />

            {error && <p>{error}</p>}
            <button>EEnviar</button>
        </form>
    )
}

