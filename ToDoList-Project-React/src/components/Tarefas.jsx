import ConcluirTarefa from './ConcluirTarefa';
import ExcluirTarefa from './ExcluirTarefa';
import '../components/tarefas.css';
import '../App.css'

function Tarefas({ tasks, handleFinalizarTarefa, handleDeletarTarefa }) {

    return (
        <div className='w-[650px] bg-amber-50 rounded-lg border-2'>
          <h1 className='p-4 text-2xl'>Tarefas criadas</h1>

          <ul className='space-y-2 min-h-[276px] max-h-full overflow-auto px-4 mb-4'>
          {tasks.map((task) => (
          <li key={task.id} className='flex gap-2'>
          <div className='p-4 rounded-xl border-2 min-h-22 w-145'>
            <p>Tarefa: {task.titulo}</p>
            <p>Descrição: {task.descricao}</p>
            <div className='flex gap-2'>
              <ConcluirTarefa handleFinalizarTarefa={handleFinalizarTarefa} taskId={task.id} tituloTask={task.titulo} descricaoTask={task.descricao} />
              <ExcluirTarefa handleDeletarTarefa={handleDeletarTarefa} taskId={task.id}/>
            </div>
          </div>
          </li>))}
          </ul>
        </div>
    )
}

export default Tarefas;