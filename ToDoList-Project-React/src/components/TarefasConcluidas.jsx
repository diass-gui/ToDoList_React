import { useState } from 'react'

function TarefasConcluidas({ tarefasConcluidas }) {

    return (
        <div className='flex flex-col bg-amber-50 min-w-[600px] p-4 border border-2 rounded-lg'>
            <h1>Tarefas Concluidas</h1>

            <ul className='space-y-2 min-h-[276px] max-h-full overflow-auto px-4 mb-4'>
                {tarefasConcluidas.map((task) => {
                    <li key={task.id} className='flex gap-2'>
                        <div className='p-4 rounded-xl border border-2 min-h-22 w-145'>
                            <p>{task.titulo}</p> 
                            <p>{task.descricao}</p>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )

}

export default TarefasConcluidas;