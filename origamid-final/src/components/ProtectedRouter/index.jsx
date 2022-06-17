import React, { useContext } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Navigate } from "react-router-dom"
export default function ProtectedRouter({ children }) {
    const { login } = useAuth()
    return (
        login ? children  : <Navigate to="/login" />
    )
}
