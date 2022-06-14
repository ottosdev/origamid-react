import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    function handleClick() {
        console.log('Faz o login');
        navigate('/sobre');
    }
    return (
        <div>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}
