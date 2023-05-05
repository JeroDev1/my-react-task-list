import { TaskList } from "./TaskList";
import { useState, useEffect } from 'react';

const tareasPendiente = [
    { id: 1, descripcion: 'Recoger carro', completado: false },
    { id: 2, descripcion: 'Entregar trabajo', completado: false },
    { id: 3, descripcion: 'Comprar leche', completado: false },
  ];

export const Home = () => {

    const [listaTareas, setListaTareas] = useState(
        JSON.parse(localStorage.getItem('listaTareas')) || tareasPendiente
      );
      const [nuevaTarea, setNuevaTarea] = useState('');
    
      useEffect(() => {
        localStorage.setItem('listaTareas', JSON.stringify(listaTareas));
      }, [listaTareas]);
    
      const agregar = evento => {
        evento.preventDefault();
        if (nuevaTarea.trim() !== '') {
          const nuevaTareaConId = {
            id: new Date().getTime(),
            descripcion: nuevaTarea,
            completado: false,
          };
          setListaTareas([...listaTareas, nuevaTareaConId]);
          setNuevaTarea('');
        }
      };
    
      const handleChange = evento => {
        setNuevaTarea(evento.target.value);
      };
    
      const eliminarTarea = id => {
        const nuevasTareas = listaTareas.filter(tarea => tarea.id !== id);
        setListaTareas(nuevasTareas);
      };
    
      const editarTarea = (id, nuevaDescripcion) => {
        const nuevasTareas = listaTareas.map(tarea => {
          if (tarea.id === id) {
            tarea.descripcion = nuevaDescripcion;
          }
          return tarea;
        });
        setListaTareas(nuevasTareas);
      };

    return (
    <div >
      <form className='F1'>
        <input className='primerimput' 
          type='text'
          maxlength="25"
          value={nuevaTarea}
          onChange={handleChange}
          placeholder='Ingrese tarea'
        />
        <button className='primerboton' type='submit' onClick={agregar}>
          Agregar Tarea
        </button>
      </form>
      <TaskList
        pendientes={listaTareas}
        onEliminar={eliminarTarea}
        onEditar={editarTarea}
      />
    </div>
    )
}