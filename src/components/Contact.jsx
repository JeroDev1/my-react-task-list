import { useForm } from 'react-hook-form';
import { Flex, Box, Button } from '@chakra-ui/react';

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
      <Flex
      direction='column'
      alignItems='center'
      justify='flex-start'
      w='97.5%'
      h='68%'
      bg='rgb(0 0 0 / 50%)'
    >
      <Box
        color='white'
        letterSpacing='2px'
        fontSize='x-large'
        textAlign='center'
        fontWeight='extrabold'
        m='20px 0 20px 0'
      >
        <h2>Formulario de contacto</h2>
      </Box>
      <Flex
        direction='row'
        alignItems='stretch'
        justify='center'
        w='92%'
        h='50%'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            bg='deepskyblue'
            border='1px solid white'
            p='5px'
            m='10px'
          >
            <Flex direction='row' justify='space-between' >
              <label >Nombre:</label>
              <input {...register('nombre', { required: true })} />
            </Flex>
            {errors.nombre && <span>Este campo es requerido</span>}
          </Box>
          <Box
            bg='deepskyblue'
            border='1px solid white'
            p='5px'
            m='10px'
          >
            <Flex direction='row' justify='space-between' >
              <label>Correo:</label>
              <input {...register('correo', { required: true, pattern: /^\S+@\S+$/i })} />
            </Flex>
            {errors.correo && <span>Ingrese un correo válido</span>}
          </Box>
          <Box
            bg='deepskyblue'
            border='1px solid white'
            p='5px'
            m='10px'
          >
          <Flex direction='column' justify='space-between' >
              <label>Asunto:</label>
              <textarea
                {...register('asunto', { required: true })}
                size="lg" // Establece el tamaño grande del Textarea
                rows={4} // Ajusta el número de filas para hacerlo más grande
              />
          </Flex>
            {errors.asunto && <span>Este campo es requerido</span>}
          </Box>
          <Flex
            direction='row'
            alignItems='stretch'
            justify='space-around'
            w='92%'
            h='60%'
          >
            <Button type="submit"
            minW="130px"
            h="40px"
            color="#fff"
            p="5px 10px"
            fontWeight="bold"
            cursor="pointer"
            transition="all 0.3s ease"
            position="relative"
            display="inline-block"
            outline="none"
            borderRadius="20px"
            border="none"
            boxShadow="inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)"
            bg="#57cc99"
            zIndex="1"
            _hover={{ _after: { width: '100%', left: '0' } }}
            _after={{
            borderRadius: '20px',
            position: 'absolute',
            content: '""',
            width: '0',
            height: '100%',
            top: '0',
            zIndex: '-1',
            boxShadow:
                'inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)',
            transition: 'all 0.3s ease',
            backgroundColor: '#80ed99',
            right: '0',
            }}
            _active={{ top: '2px' }}
            >Enviar</Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};