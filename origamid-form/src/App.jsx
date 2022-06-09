import { useState } from "react"
import EnviandoDados from "./components/Exercicio/EnviandoDados"
import ExercicioChecked from "./components/Exercicio/ExecicioCheckbox"
import CheckBoxComponent from "./components/Formularios/CheckBoxComponent"
import InputComponent from "./components/Formularios/InputComponent"
import RadioComponent from "./components/Formularios/RadioComponent"
import SelectComponent from "./components/Formularios/SelectComponent"
import OnblurComponent from "./components/Onblur/OnblurComponent"

function App() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [select, setSelect] = useState("")
  const [cor, setCor] = useState("Vermelho")
  const [languages, setLanguages] = useState("")
  const [termos, setTermos] = useState([])

  function handleSubmit(event) {
    event.preventDefault();


    if (termos.length > 0) {
      const data = { nome, email, select, cor, languages }

      console.log(data)
    }
  }

  return (
    <div className="App">

      <OnblurComponent />
      

      {/* <form onSubmit={handleSubmit}>
        <h2>Termos</h2>
        <CheckBoxComponent options={["Aceito os termos"]} value={termos} setValue={setTermos} />
        <h2>CheckBox</h2>
        <CheckBoxComponent options={["Java", "js"]} value={languages} setValue={setLanguages} />
        <h2>Radio</h2>
        <RadioComponent options={['Azul', "Vermelho"]} value={cor} setValue={setCor} />
        <h2>Select</h2>
        <SelectComponent options={['smartphone', 'notebook']} value={select} setValue={setSelect} />
        <h2>Inputs</h2>
        <InputComponent label="Nome" id="nome" type="text" value={nome} setValue={setNome} required />
        <InputComponent label="E-mail" id="email" type="email" value={email} setValue={setEmail} />
        <button type="submit">Enviar</button>
      </form> */}
        {/* <InputComponent label="Nome" id="nome" type="nome" value={nome} onChange={setNome} />
        <InputComponent label="E-mail" id="email" type="email" value={email} onChange={setEmail} /> */}
        {/* <InputComponent label="E-mail" id="email" type="email" value={email} setValue={setEmail} />
        <InputComponent label="E-mail" id="email" type="email" value={email} setValue={setEmail} />
        <InputComponent label="E-mail" id="email" type="email" value={email} setValue={setEmail} />
        <InputComponent label="E-mail" id="email" type="email" value={email} setValue={setEmail} />
        <InputComponent label="E-mail" id="email" type="email" value={email} setValue={setEmail} /> */}

    </div>
  )
}

export default App
