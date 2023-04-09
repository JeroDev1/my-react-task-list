import { Tarea } from "./Tarea";

export const TaskList = (props) =>{

    const {pendientes} = props;
    return <form>
        {
            pendientes.map(TaskList => <Tarea tarea={TaskList.tarea} />)
        }
    </form>
}