import { Box } from "@chakra-ui/react";
import { Task } from "./Task";
import "./TaskList.css"

export const TaskList = (props) => {
    const { pendientes, onEliminar, onEditar } = props;
  
    const handleEliminar = (id) => {
        onEliminar(id);
    }
    
    const handleEditar = (id, nuevaDescripcion) => {
        onEditar(id, nuevaDescripcion);
    } // se crea esta funcion que verifica la edicion de la tarea

    return (
        <Box 
            w='100%'
        >
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
        </Box>
    );
};