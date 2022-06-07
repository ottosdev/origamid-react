import React, { useState } from 'react'

export default function TextArea() {
    const [message, setMessage] = useState('')
    return (
        <>
            <form >
                <textarea rows={10} value={message} onChange={event => setMessage(event.target.value)} />
            </form>

            {message}
        </>
    )
}
