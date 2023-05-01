import "./Header.css";
import React, { useState, useEffect } from 'react';

export const Header = () =>{

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalID = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
      
        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalID);
    }, []);

    return <header>
        <h1> <a href="/">ToDo App</a></h1>
        <h2>{time}</h2>
    </header>
}