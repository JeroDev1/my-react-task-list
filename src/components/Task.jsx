import { useState } from "react";
import "./Task.css";

export const Task = (props) => {
  const { id, descripcion, completado, onEliminar, onEditar } = props;

  const [modoEdicion, setModoEdicion] = useState(false); // agregar un estado para la edicion
  const [nuevaDescripcion, setNuevaDescripcion] = useState(descripcion);
  const [estaCompletado, setEstaCompletado] = useState(completado); // agregar un estado para el control de completado

  const handleEliminar = () => {
    onEliminar(id);
  };

  const handleEditar = () => {
    if (modoEdicion) {
      onEditar(id, nuevaDescripcion);
      setModoEdicion(false);
    } else {
      setModoEdicion(true);
    }
  };

  const handleChange = (evento) => {
    setNuevaDescripcion(evento.target.value);
  };

  const handleCompletado = () => {
    setEstaCompletado(!estaCompletado); // cambiar el estado de completado al valor opuesto
    if (!estaCompletado) { // si la tarea se ha completado, llamar a la función onEliminar
      onEliminar(id);
    }
  };

  return (
    <li>
      <input className="check1" id={id} type="checkbox" checked={estaCompletado} onChange={handleCompletado} /> {/* establecer el valor del checkbox al estado de completado */}
      {modoEdicion ? (
        <input
          type="text"
          value={nuevaDescripcion}
          onChange={handleChange}
        />
      ) : (
        <label className="espacioTarea" htmlFor={id}>{descripcion}</label>
      )}
      <br />
      <button className="buttonEdit" onClick={handleEditar}>{modoEdicion ? "Guardar" : "Editar"}</button>
      <button className="buttonDelete" onClick={handleEliminar}>Eliminar</button>
    </li>
  );
};