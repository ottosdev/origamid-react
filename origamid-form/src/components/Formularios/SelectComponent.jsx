import React from 'react'

export default function SelectComponent({ options, value, setValue, ...props }) {
    return (
        <>
            <select value={value} onChange={(event) => setValue(event.target.value)} {...props}>
                <option value="" disabled>Selecione</option>
                {options.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </>
    )
}
