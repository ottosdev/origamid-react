
import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Produtos from "./components/Produtos/Produtos"
import Produto from "./components/Produto/Produto"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
// import Contato from "./components/Contato/Contato"

const Contato = lazy(() => import('./components/Contato/Contato'))
import './App.css'
function App() {

  return (
    <div className="App" >
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />

            <Route path="contato" element={
              <Suspense fallback={<p className="loading"></p>}>
                <Contato />
              </Suspense>
            } />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
