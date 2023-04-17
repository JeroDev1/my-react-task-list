import { Task } from "./Task";

export const TaskList = (props) => {
    const { pendientes, onEliminar, onEditar, } = props;
  
    const handleEliminar = (id) => {
        onEliminar(id);
    }
    
    const handleEditar = (id, nuevaDescripcion) => {
        onEditar(id, nuevaDescripcion);
    } // se crea esta funcion que verifica la edicion de la tarea

    return (
        <ul>
            {pendientes.map((tarea) => (
            <Task
                key={tarea.id}
                id={tarea.id}
                descripcion={tarea.descripcion}
                completado={tarea.completado}
                onEliminar={handleEliminar}
                onEditar={handleEditar}
            />
            ))}
        </ul>
    );
};