import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
export default function Header() {
    const activeStyle = {
        color: 'blue',
    };

    const location = useLocation()

    useEffect(() => {
        console.log('Mudou a rota')
    }, [location])

    return (

        <nav style={{ display: "flex", gap: "1rem" }}>
            <NavLink to="/" end style={({ isActive }) =>
                isActive ? activeStyle : undefined
            }>
                Home
            </NavLink>
            <NavLink to="sobre" style={({ isActive }) =>
                isActive ? activeStyle : undefined
            }>
                Sobre
            </NavLink>
            <NavLink to="contato" style={({ isActive }) =>
                isActive ? activeStyle : undefined
            }>
                Contato
            </NavLink>
            <NavLink to="login" style={({ isActive }) =>
                isActive ? activeStyle : undefined
            }>
                Login
            </NavLink>
        </nav >

    )
}
