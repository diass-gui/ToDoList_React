import Tarefas from './components/Tarefas'
import AddTarefa from './components/AddTarefa';
import TarefasConcluidas from './components/TarefasConcluidas';
import { useState } from 'react'

function App() {

  const[tarefasAbertas, setTarefasAbertas] = useState([]);
  const[tarefasConcluidas, setTarefasConcluidas] = useState([])
  let[acumuladorId, setAcumuladorId] = useState(0)

  
  function handleAddTarefa(titulo, descricao) {
    setTarefasAbertas((valorAtualdoState) => {
      acumuladorId++;
      return [
        ...valorAtualdoState, {
          id: acumuladorId,
          titulo: titulo,
          descricao: descricao,
          completed: false
        }]   
      }
    )
    setAcumuladorId(acumuladorId); 
    console.log("Deu certo")
  }

  function handleFinalizarTarefa(taskId, completed) {
    setTarefasConcluidas((tasks) => {
      return valor 
    })
  }

  // function handleFinalizarTarefa(tarefaId, tituloTarefa, descricaoTarefa) {
  //       setTarefasConcluidas((valorAtualdoState) => {
  //         return [
  //           ...valorAtualdoState, {
  //               id: tarefaId,
  //               titulo: tituloTarefa,
  //               descricao: descricaoTarefa
  //           }
  //         ]})
  //         console.log("Tarefa finalizada")
  //         console.log(tarefasConcluidas)
  //   }
  
  function handleDeletarTarefa(tarefasId) {
    setTarefasAbertas((valorAtualdoState) => {
      return valorAtualdoState.filter((task) => task.id != tarefasId)
    })
  }

  return (
    <div className='flex flex-row p-4 gap-5'>
      <div>
        <AddTarefa handleAddTarefa={handleAddTarefa} />
      </div>

      <div>
        <Tarefas tasks={tarefasAbertas} handleDeletarTarefa={handleDeletarTarefa} handleFinalizarTarefa={handleFinalizarTarefa} />
      </div>

      <div>
        <TarefasConcluidas tarefasConcluidas={tarefasConcluidas} />
      </div>
      
    </div>
  )
}

export default App;