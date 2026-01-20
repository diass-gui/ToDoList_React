import { useState } from 'react'
import '../components/AddTarefa.css';

function AddTarefa(props) {

    const [tituloTarefa, setTituloTarefa] = useState('');
    const [descricaoTarefa, setDescricaoTarefa] = useState(''); 

    return (
        <div className='flex flex-col max-h-1/3'>
            <form 
            onSubmit={(event) => {
                event.preventDefault();
                props.handleAddTarefa(tituloTarefa, descricaoTarefa)
                setTituloTarefa('');
                setDescricaoTarefa('');
            }}
            className='text-black flex flex-col items-center max-h-1/3 p-8 bg-amber-50 w-1/3 border-2 border-black rounded-lg'
            >
                <h1 className='text-2xl'>Adicionar Tarefa</h1><br/>

                {/* inputs da tarefa */}
                <h4 className='flex self-start mb-1'>Título da Tarefa: </h4>
                <input 
                value={tituloTarefa}
                onChange={(event) => setTituloTarefa(event.target.value)}
                placeholder='Titulo da Tarefa' 
                className='rounded-lg border-2 bg-white self-start mb-5'></input>

                <h4 className='flex self-start mb-1'>Descrição da Tarefa: </h4>
                <textarea 
                value={descricaoTarefa}
                onChange={(event) => setDescricaoTarefa(event.target.value)}
                placeholder='Descrição da Tarefa' 
                className='rounded-lg border-2 bg-white self-start w-63 mb-8'></textarea>

                <button type="submit" className='bg-violet-400 p-3 rounded-lg text-white w-50 hover:bg-violet-600'>Criar Tarefa</button>
            </form>

            {/* <h3>iba iba iba</h3> */}

        </div>
    )   

}

export default AddTarefa;