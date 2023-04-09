import { useState } from 'react'
import {Header} from './components/Header'
import { Task } from './components/Task'
import { TaskList } from './components/TaskList'

const TareasPendiente = [
  { tarea:"Recoger carro"},
  { tarea:"Entregar trabajo"},
  { tarea:"Comprar leche"},
]

function App() {
  return (<div className="App">
    <Header />
    <Task />
    <TaskList pendientes={TareasPendiente}/>
  </div>)
  
}

export default App
