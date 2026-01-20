import '../components/AddTarefa.css';

function AddTarefa({ handleAddTarefa }) {

    return (
        <div className='flex flex-col max-h-3/4'>
            <div className='text-black flex flex-col items-center max-h-1/3 p-8 bg-amber-50 w-1/3 border-2 border-black rounded-lg'>
                <h1 className='text-2xl'>Adicionar Tarefa</h1><br/>

                {/* inputs da tarefa */}
                <h4 className='flex self-start'>Título da Tarefa: </h4>
                <input type='text' placeholder='Titulo da Tarefa' className='rounded-lg border-2 bg-white self-start mt-[3px]'></input>

                <button type="submit" onClick={handleAddTarefa}></button>
                {/* <h3>juma</h3> */}
            </div>

            <h3>iba iba iba</h3>

        </div>
    )

}

export default AddTarefa;