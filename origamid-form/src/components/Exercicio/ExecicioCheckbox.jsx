import React, { useState } from 'react'

const coresArray = ['azul', "vermelho"]

export default function ExercicioChecked() {

    // Sempre ira depender do value e do valor checked
    const [cores, setCores] = useState(["azul"])

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
            {coresArray.map((item, index) => (
                <label key={index} style={{textTransform: "capitalize"}}>
                    <input type='checkbox' value={item} checked={checkColor(item)} onChange={handleClick} />
                    {item}
                </label>
            ))}
        </form>
    )
}
