import ExercicioUseContext from "./Contexto/ExercicioUseContext";
import ProdutoStore, { useProduto } from "./Contexto/useProduto";

function App() {
  return (
    <ProdutoStore>
      <ExercicioUseContext />
   
    </ProdutoStore>
  );
}

export default App;
