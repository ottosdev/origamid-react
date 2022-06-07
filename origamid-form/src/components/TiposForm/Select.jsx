import React, { useState } from 'react'

export default function Select() {
    const [select, setSelect] = useState("")
    return (
        <form>
            <select id="produtos" value={select} onChange={event => setSelect(event.target.value)}>
                <option value="" disabled>Selecione</option>
                <option value="notebook">Notebbok</option>
                <option value="smartphone">SmartPhone</option>
                <option value="tablet">Tablet</option>
            </select>
            {select}
        </form>
    )
}
