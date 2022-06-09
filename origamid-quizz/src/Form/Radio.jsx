import React, { useState } from 'react'

export default function Radio({ pergunta, options, onChange, value, active, id }) {


    if (active == false) return null;

    return (
        <fieldset>
            <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
            {options.map(item => (
                <label key={item} style={{ marginBottom: "1rem" }}>
                    <input id={id} type="radio" value={item} onChange={onChange} checked={value === item} />
                    {item}
                </label>
            ))}
        </fieldset>
    )
}
