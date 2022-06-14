import React, { useEffect } from 'react'

export default function Head(props) {

    useEffect(() => {
        document.title = props.title
    }, [props])
    return (
        <></>
    )
}
