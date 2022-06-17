
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import UserStorage, { useAuth } from "./hooks/useAuth"
import Home from "./pages/Home"
import Login from "./pages/Login"
import User from "./pages/User"
import "./App.css"
import ProtectedRouter from "./components/ProtectedRouter"
function App() {

  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="conta/*" element={<ProtectedRouter><User /></ProtectedRouter>} />
            <Route path="*" element={<Navigate to ="login" />}/>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>

  )
}

export default App
