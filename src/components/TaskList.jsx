import { Task } from "./Task";

export const TaskList = (props) =>{

    const {pendientes} = props;
    return <ul>
        {
            pendientes.map(tarea => (
            <Task
                key={tarea.id}
                id={tarea.id}
                descripcion={tarea.descripcion} 
                completado={tarea.completado}
            />))
        }
    </ul>
}