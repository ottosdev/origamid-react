import React from 'react'

export default function InputComponent({ label, id, type, setValue, ...props }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} name={id} onChange={(event) => setValue(event.target.value)} {...props} />
        </>
    )
}
