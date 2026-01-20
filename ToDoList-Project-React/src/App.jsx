import Tarefas from './components/Tarefas'
import { useState } from 'react'

function App() {

  const[tarefas, setTarefas] = useState([]);

  function handleAddTarefa(task) {
    setTarefas(tarefas.push(task));
    console.log("deu certo")
  }

  return (
    <div>
      <div>
        <Tarefas handleAddTarefa={handleAddTarefa} />
      </div>
    </div>
  )
}

export default App;