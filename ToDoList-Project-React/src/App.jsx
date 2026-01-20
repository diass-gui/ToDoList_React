import Tarefas from './components/Tarefas'
import AddTarefa from './components/AddTarefa';
import { useState } from 'react'

function App() {

  const[tarefas, setTarefas] = useState([]);

  function handleAddTarefa(titulo, descricao) {
    setTarefas((valorAtualdoState) => {
      return [
        ...valorAtualdoState, {
        id: Math.random(),
        titulo: titulo,
        descricao: descricao
      }]
  })
    console.log("Deu certo")
  }

  return (
    <div className='flex flex-col p-4 gap-5'>
      <div className=''>
        <AddTarefa handleAddTarefa={handleAddTarefa} />
      </div>

      <div className='w-full'>
        <Tarefas tasks={tarefas} />
        {/* {console.log(tarefas.map(tarefa => tarefa.titulo))} */}
      </div>
      
    </div>
  )
}

export default App;