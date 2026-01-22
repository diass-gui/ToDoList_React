import '../components/ConcluirTarefa.css'

function ConcluirTarefa({ handleFinalizarTarefa, taskId, tituloTask, descricaoTask }) {
    
    return (
        <button 
        className='bg-green-300 p-2 rounded-lg mt-1.5 ml-80 hover:bg-green-500' 
        onClick={() => handleFinalizarTarefa(taskId, tituloTask, descricaoTask)}>Finalizar ✅</button>
    )

}

export default ConcluirTarefa;