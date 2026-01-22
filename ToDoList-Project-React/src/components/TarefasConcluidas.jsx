import { useState } from 'react'

function TarefasConcluidas({ tarefasConcluidas }) {


    return (
        <div className='w-[650px] bg-amber-50 rounded-lg border-2'>
            <h1 className='p-4 text-2xl'>Tarefas Concluidas</h1>

            <ul className='space-y-2 min-h-[276px] max-h-full overflow-auto px-4 mb-4'>
                {tarefasConcluidas.map((task) => (
                    <li key={task.id} className='flex gap-2'>
                        <div className='p-4 rounded-xl border-2 min-h-22 w-145'>
                            <p>Titulo: {task.titulo}</p> 
                            <p>Descrição: {task.descricao}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default TarefasConcluidas;