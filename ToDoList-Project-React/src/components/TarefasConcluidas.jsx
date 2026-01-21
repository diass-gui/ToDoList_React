import { useState } from 'react'

function TarefasConcluidas({ tarefasConcluidas }) {
    
    console.log(tarefasConcluidas)

    return (
        <div className='flex flex-col bg-amber-50 min-w-[600px] p-4 border border-2 rounded-lg'>
            <h1>Tarefas Concluidas</h1>

            {/* <ul>
                {tarefasConcluidas.map((task) => {
                    <li key={task.id} className='flex gap-2'>
                        <p>{task.titulo}</p>
                        <p>{task.descricao}</p>
                    </li>
                })}
            </ul> */}
        </div>
    )

}

export default TarefasConcluidas;