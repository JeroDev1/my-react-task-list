import { useForm } from 'react-hook-form';

export const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // Convertir los datos a JSON
    const jsonData = JSON.stringify(data);

    // Realizar la solicitud HTTP al backend
    fetch('URL_DEL_BACKEND', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    })
      .then(response => {
        if (response.ok) {
          // La solicitud se realizó con éxito
          console.log('Datos enviados a la base de datos');
          // Aquí puedes agregar la lógica para enviar el correo si es necesario
        } else {
          // Ocurrió un error en la solicitud
          console.log('Error al enviar los datos a la base de datos');
        }
      })
      .catch(error => {
        console.log('Error de red:', error);
      });
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre:</label>
          <input {...register('nombre', { required: true })} />
          {errors.nombre && <span>Este campo es requerido</span>}
        </div>

        <div>
          <label>Correo:</label>
          <input {...register('correo', { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.correo && <span>Ingrese un correo válido</span>}
        </div>

        <div>
          <label>Asunto:</label>
          <input {...register('asunto', { required: true })} />
          {errors.asunto && <span>Este campo es requerido</span>}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};