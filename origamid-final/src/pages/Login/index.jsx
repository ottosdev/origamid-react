import React from 'react'
import {Route, Routes} from "react-router-dom"
import LoginForm from "../../components/LoginComponents/LoginForm"
import LoginCreate from "../../components/LoginComponents/LoginCreate"
import LoginPasswordLost from "../../components/LoginComponents/LoginPasswordLost"
import LoginPasswordReset from "../../components/LoginComponents/LoginPasswordReset"
export default function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="criar" element={<LoginCreate/>}/>
        <Route path="perdeu" element={<LoginPasswordLost/>}/>
        <Route path="resetar" element={<LoginPasswordReset/>}/>
      </Routes>
    </div>
  )
}
