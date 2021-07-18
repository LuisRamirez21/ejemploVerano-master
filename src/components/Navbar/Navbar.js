import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div>
         <header>
            <nav>
                <ul>
                    <li><Link to="/Principal">Principal</Link></li>
                    <li><Link to="/Configuracion">Configuracion</Link></li>
                    <li><a href="#">Cursos</a></li>
                    <li><a href="#">Preguntame algo</a></li>
                    <li><Link to="/RegistroInicio">Registrarse</Link></li>
                </ul>
            </nav>
        </header>   
        </div>
    )
}

export default Navbar
