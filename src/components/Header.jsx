//import "./Header.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Box, Heading, Button, Flex } from '@chakra-ui/react';
import bgImage from '../assets/Cielo.jpg'

export const Header = () =>{

    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const intervalID = setInterval(() => {
          setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
      
        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalID);
    }, []);

    return ( 
    <Heading>
        <Flex
            direction='column'
            alignItems='center'
            justify='space-around'
            w='100%'
            h="20vh"
            m='5px 50px 20px 0px'
            p='0 10px 0 10px'
            bgImage={`url(${bgImage})`}
            bgRepeat='no-repeat'
            bgSize='cover'
        >
            <Flex 
                direction='column'
                alignItems='center'
                w='96%'
                color='white'
                fontFamily='sans-serif'
            >
                <h1> <a href="/">Lista de Tareas</a></h1>
                <h2>{time}</h2>
            </Flex>
            <Box 
                spacing='10px'
            >
                <Button
                    Box
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
                    <Link to="/completed-tasks">Completadas</Link>
                </Button>  
                <Button
                    Box
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
                    <Link to="/">Inicio</Link>
                </Button>
                <Button
                    Box
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
                    <Link to="/contact">Contacto</Link>
                </Button>
            </Box>
        </Flex>
    </Heading>
    )
}