import Tarefas from './components/Tarefas'
import AddTarefa from './components/AddTarefa';
import TarefasConcluidas from './components/TarefasConcluidas';
import { useState } from 'react'

function App() {

  const[tarefasAbertas, setTarefasAbertas] = useState([]);

  function handleAddTarefa(titulo, descricao) {
    setTarefasAbertas((valorAtualdoState) => {
      return [
        ...valorAtualdoState, {
        id: Math.random(),
        titulo: titulo,
        descricao: descricao
      }]
  })
    console.log("Deu certo")
  }

  function handleDeletarTarefa(tarefasId) {
    set
  }

  return (
    <div className='flex flex-row p-5 gap-5'>
      <div>
        <AddTarefa handleAddTarefa={handleAddTarefa} />
      </div>

      <div className='w-full'>
        <Tarefas tasks={tarefasAbertas} />
      </div>

      <div>
        <TarefasConcluidas />
      </div>
      
    </div>
  )
}

export default App;