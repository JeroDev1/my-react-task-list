import { useState } from "react";
import { Box, Checkbox, Input, Button } from "@chakra-ui/react";

export const Task = (props) => {
  const { id, descripcion, completado, onEliminar, onEditar } = props;

  const [modoEdicion, setModoEdicion] = useState(false);
  const [nuevaDescripcion, setNuevaDescripcion] = useState(descripcion);
  const [estaCompletado, setEstaCompletado] = useState(completado);

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
    setEstaCompletado(!estaCompletado);
    if (!estaCompletado) {
      onEliminar(id);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="deepskyblue"
      width="95%"
      margin=".5rem"
      padding="8px"
      color="white"
      borderRadius="1rem"
      fontFamily="'Arial Narrow Bold', sans-serif"
      marginTop='1rem'
    >
      <Checkbox
        size="sm"
        isChecked={estaCompletado}
        onChange={handleCompletado}
        m='10px'
      />
      {modoEdicion ? (
        <Input
          type="text"
          value={nuevaDescripcion}
          onChange={handleChange}
          width="190px"
        />
      ) : (
        <Box
          className="espacioTarea"
          width="200px"
          marginRight="7px"
        >
          {descripcion}
        </Box>
      )}
      <Button
        size="sm"
        onClick={handleEditar}
        minW="80px"
        h="40px"
        color="#fff"
        p="5px 10px"
        marginRight='5px'
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
        {modoEdicion ? "Guardar" : "Editar"}
      </Button>
      <Button
        size="sm"
        onClick={handleEliminar}
        minW="80px"
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
        bg='red.400'
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
        backgroundColor: 'red.200',
        right: '0',
        }}
        _active={{ top: '2px' }}
      >
        Eliminar
      </Button>
    </Box>
  );
};