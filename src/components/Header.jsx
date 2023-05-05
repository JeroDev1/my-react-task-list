import "./Header.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export const Header = () =>{

    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const intervalID = setInterval(() => {
          setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
      
        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalID);
    }, []);

    return <header>
        <h1> <a href="/">ToDo App</a></h1>
        <h2>{time}</h2>
        <div>
            <button><Link to="/completed-tasks">Completadas</Link></button>  
            <button><Link to="/">Inicio</Link></button>
            <button><Link to="/contact">Contacto</Link></button>
        </div>
    </header>
}