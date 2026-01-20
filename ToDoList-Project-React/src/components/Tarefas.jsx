import '../components/tarefas.css';
import AddTarefa from './AddTarefa'
import '../App.css'

function Tarefas({ handleAddTarefa }) {

    return (
        <div>
            <AddTarefa handleAddTarefa={handleAddTarefa}/>
        </div>
        
    )
}

export default Tarefas;