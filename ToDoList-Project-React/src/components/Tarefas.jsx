
import { useState } from 'react'
import '../components/tarefas.css';
import '../App.css'

function Tarefas({ tasks, handleDeletarTarefa }) {

  function handleFinalizarTarefa(tarefaId, tituloTarefa, descricaoTarefa) {
        setTarefasConcluidas((valorAtualdoState) => {
          return [
            ...valorAtualdoState, {
                id: tarefaId,
                titulo: tituloTarefa,
                descricao: descricaoTarefa
            }
          ]})
    }

    return (
        <div className='w-[650px] bg-amber-50 rounded-lg border border-2'>
          <h1 className='p-4 text-2xl'>Tarefas criadas</h1>

          <ul className='space-y-2 min-h-[276px] max-h-full overflow-auto px-4 mb-4'>
          {tasks.map((task) => (
          <li key={task.id} className='flex gap-2'>
          <div className='p-4 rounded-xl border border-2 min-h-22 w-145'>
            <p>Tarefa: {task.titulo}</p>
            <p>Descrição: {task.descricao}</p>
            <div className='flex gap-2'>
              <button className='bg-green-300 p-2 rounded-lg mt-1.5 ml-80 hover:bg-green-500' onClick={() => handleFinalizarTarefa(task.id, task.titulo, task.descricao)}>Finalizar ✅</button>
              <button className="bg-red-300 rounded-lg hover:bg-red-500 p-2 h-10 mt-1.5" onClick={() => handleDeletarTarefa(task.id, task.titulo, task.descricao)}>Excluir ❌</button>
            </div>
          </div>
          </li>))}
          </ul>
        </div>
    )

}

export default Tarefas;