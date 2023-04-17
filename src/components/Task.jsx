import { useState } from "react";

export const Task = (props) => {
  const { id, descripcion, completado, onEliminar, onEditar } = props;

  const [modoEdicion, setModoEdicion] = useState(false);
  const [nuevaDescripcion, setNuevaDescripcion] = useState(descripcion);

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
  }; //se agrega un estado de modo edicion para validar que se esta editando

  const handleChange = (evento) => {
    setNuevaDescripcion(evento.target.value);
  };

  return (
    <li>
      <input id={id} type="checkbox" defaultChecked={completado} />
      {modoEdicion ? (
        <input
          type="text"
          value={nuevaDescripcion}
          onChange={handleChange}
        />
      ) : (
        <label htmlFor={id}>{descripcion}</label>
      )}
      <br />
      <button onClick={handleEditar}>{modoEdicion ? "Guardar" : "Editar"}</button>
      <button onClick={handleEliminar}>Eliminar</button>
    </li>
  );
};