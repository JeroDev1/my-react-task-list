import { Button, Flex } from "@chakra-ui/react";
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
    <Flex
      direction='column'
    >
      <Flex
          direction='row'
          justify='space-around'
          alignContent='space-around'          w='99%'
          borderRadius='10px'
          bg='deepskyblue'
          boxShadow='0px 0px 10px #222;'
          backdropFilter='blur(10px)'
          p='13px'
      >
        <form className='F1'>
          <input className='primerimput' 
            type='text'
            maxLength="25"
            value={nuevaTarea}
            onChange={handleChange}
            placeholder='Ingrese tarea'
          />
          <Button className='primerboton' type='submit' onClick={agregar}
            marginLeft='20px'
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
          >
            Agregar Tarea
          </Button>
        </form>
      </Flex>
      <br />
      <hr />
      <TaskList
        pendientes={listaTareas}
        onEliminar={eliminarTarea}
        onEditar={editarTarea}
      />
    </Flex>
    )
}