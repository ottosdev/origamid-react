import React, { useState } from 'react'

export default function Checkbox() {

    // Sempre ira depender do value e do valor checked
    const [cores, setCores] = useState(["azul", "verde"])

    function handleClick(event) {
        if (event.target.checked) {
            setCores([...cores, event.target.value])
        } else {
            setCores(cores.filter(cor => cor !== event.target.value))
        }
    }

    function checkColor(cor) {
        return cores.includes(cor)
    }

    return (
        <form>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <h2>Cores selecionadas: </h2>
                {cores && cores.map((item, index) => (
                    <p key={index}> {item}</p>
                ))}
            </div>
            <label htmlFor="">
                <input type='checkbox' value="vermelho" checked={checkColor('vermelho')} onChange={handleClick} />
                Vermelho
            </label>
            <label htmlFor="">
                <input type='checkbox' value="azul" checked={checkColor('azul')} onChange={handleClick} />
                Azul
            </label>
            <label htmlFor="">
                <input type='checkbox' value="verde" checked={checkColor('verde')} onChange={handleClick} />
                Verde
            </label>
        </form>
    )
}
