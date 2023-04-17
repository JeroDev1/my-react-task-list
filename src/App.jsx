import {Header} from './components/Header'
import { TaskList } from './components/TaskList'
import { useState } from 'react'

const tareasPendiente = [
  { id:1, descripcion:"Recoger carro", completado:false},
  { id:2, descripcion:"Entregar trabajo", completado:false},
  { id:3, descripcion:"Comprar leche", completado:false},
]

function App() {

  const [listaTareas, setListaTareas] = useState(tareasPendiente)
  const [nuevaTarea, setNuevaTarea] = useState("")

  const agregar = (evento) => {
    evento.preventDefault()
    if (nuevaTarea.trim() !== "") { // Agrega una validación para evitar tareas vacías
      setListaTareas([...listaTareas, {id: new Date().getTime(), descripcion:nuevaTarea, completado:false}])
      setNuevaTarea("");//dejar en limpio
    }
  }

  const handleChange = (evento) => {
    setNuevaTarea(evento.target.value)
  }

  return (<div className="App">
    <Header />
    <form>
        <input type="text" value={nuevaTarea} onChange={handleChange} placeholder="Ingrese tarea"/>
        <button type='submit' onClick={agregar}>Agregar Tarea</button>
    </form>
    <TaskList pendientes={listaTareas}/>
  </div>)
  
}

export default App
