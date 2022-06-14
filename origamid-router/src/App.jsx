import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './Contato';
import Sobre from './Sobre';
import Home from './Home';
import Login from './Login';
import Pagina404 from './Pagina404';
import Produto from './Produto';
import Header from './Header';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoCustomizado from './ProdutoCustomizado';

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />}>
          <Route path='' element={<ProdutoDescricao />} />
          <Route path='customizado' element={<ProdutoDescricao />} />
          <Route path='avaliacao' element={<ProdutoCustomizado />} />
        </Route>
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
