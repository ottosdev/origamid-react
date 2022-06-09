import React from 'react'

export default function InputComponent({ label, id, type, onChange, ...props }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} name={id} onChange={onChange} {...props} />
        </>
    )
}
