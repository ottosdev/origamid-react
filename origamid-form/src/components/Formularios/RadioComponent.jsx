import React from 'react'

export default function RadioComponent({ options, value, setValue, ...props }) {
    return (
        <>
            {options.map(item => (
                <label key={item} htmlFor={item}>
                    <input type="radio" value={item} checked={value === item}
                        onChange={(event) => setValue(event.target.value)} {...props}
                    />
                    {item}
                </label>
            ))}

        </>
    )
}
