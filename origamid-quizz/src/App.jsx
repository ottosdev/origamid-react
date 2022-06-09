import { useState } from 'react'
import './App.css'
import Radio from './Form/Radio'

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

function App() {
  const [respostas, setRespostas] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  })

  const [mostrarApenasUm, setMostrarApenasUm] = useState(0);
  const [resultadoF, setResultadoF] = useState(null)
  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value })
  }

  function resultado() {
    const corretas = perguntas.filter(({ id, resposta }) => respostas[id] === resposta)
    setResultadoF("Voce acertou: " + corretas.length + "de" + perguntas.length)
  }

  function handleClick() {
    if (mostrarApenasUm < perguntas.length - 1) {
      setMostrarApenasUm(mostrarApenasUm + 1)
    } else {
      setMostrarApenasUm(mostrarApenasUm + 1)
      resultado()
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={mostrarApenasUm === index}
          key={pergunta.id}
          {...pergunta}
          onChange={handleChange}
          value={respostas[pergunta.id]}

        />
      ))}


      {resultadoF ? <p>{resultadoF}</p> :
        <button onClick={handleClick}>Proximo</button>
      }
    </form>
  )
}

export default App
