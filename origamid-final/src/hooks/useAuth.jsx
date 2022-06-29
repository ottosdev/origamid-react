import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from "../api"
export const UserContext = createContext()
export default function UserStorage({ children }) {
  const [data, setData] = useState()
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  async function getUser(token) {
    const { url, options } = GET_USER(token)
    const response = await fetch(url, options)
    const json = await response.json();
    setData(json)
    setLogin(true)
  }
  

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const { token } = await response.json();
      localStorage.setItem('token', token);
      await getUser(token);
      navigate("/conta")
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const logout = useCallback(async () => {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(true)
    localStorage.removeItem("token")
    // navigate("/login")
    window.location.href = '/login'
  }, [])




  useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem("token")
      if (token) {
        try {
          setError(null);
          setLoading(true)
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (response.ok) throw new Error("Token invalido")
          await getUser(token);
        } catch (err) {
          logout()
        } finally {
          setLoading(false)
        }
      } else {
        setLoading(false)
      }
    }
    autoLogin()
  }, [logout])


  return (
    <UserContext.Provider value={{ userLogin, data, logout, error, loading, login }}>{children}</UserContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(UserContext)
  return context
}