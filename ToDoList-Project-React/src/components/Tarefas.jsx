import '../components/tarefas.css';
import '../App.css'

function Tarefas({ tasks }) {

    return (
        <div className='w-1/3 bg-amber-50 rounded-xl border border-2'>

        <h1 className='p-4 text-2xl'>Tarefas criadas</h1>

        <ul className='space-y-2 max-h-[400px] overflow-auto px-4 mb-4'>
        {tasks.map((task) => (
        <li key={task.id} className='flex gap-2'>
        <div className='p-4 rounded-xl border h-22 w-105'>
          <p>Tarefa: {task.titulo}</p>
          <p>Descrição: {task.descricao}</p>
        </div>
        {/* {console.log(task.id)} */}
        {/* <button onClick={() => handleDeleteClick(task.id)} className='p-1.5 rounded-xl'>🗑</button> */}
        </li>))}
      </ul>
        </div>
    )

}

export default Tarefas;