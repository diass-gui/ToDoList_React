import Tarefas from './components/Tarefas'
import AddTarefa from './components/AddTarefa';
import TarefasConcluidas from './components/TarefasConcluidas';
import { useState } from 'react'

function App() {

  const[tarefasAbertas, setTarefasAbertas] = useState([]);
  let[acumuladorId, setAcumuladorId] = useState(0)

  function handleAddTarefa(titulo, descricao) {
    setTarefasAbertas((valorAtualdoState) => {
      acumuladorId++;
      return [
        ...valorAtualdoState, {
        id: acumuladorId,
        titulo: titulo,
        descricao: descricao
      }]   
  }
)
    setAcumuladorId(acumuladorId); 
    console.log("Deu certo")
  }

  function handleDeletarTarefa(tarefasId) {
    setTarefasAbertas((valorAtualdoState) => {
      return valorAtualdoState.filter((task) => task.id != tarefasId)
    })
    console.log(tasks.filter((task) => task.id != tarefasId))
  }

  return (
    <div className='flex flex-row p-4 gap-5'>
      <div>
        <AddTarefa handleAddTarefa={handleAddTarefa} />
      </div>

      <div>
        <Tarefas tasks={tarefasAbertas} handleDeletarTarefa={handleDeletarTarefa} />
      </div>

      <div>
        <TarefasConcluidas />
      </div>
      
    </div>
  )
}

export default App;