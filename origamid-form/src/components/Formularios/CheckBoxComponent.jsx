import React from 'react'

export default function CheckBoxComponent({ options, value, setValue }) {

    function handleChange(event) {
        if (event.target.checked) {
            setValue([...value, event.target.value])
        } else {
            setValue(value.filter(item => item !== event.target.value))
        }
    }

    return (
        <div>
            {options.map(item => (
                <label key={item}>
                    <input type="checkbox" value={item} checked={value.includes(item)} onChange={handleChange} />
                    {item}
                </label>
            ))}


        </div>
    )
}
