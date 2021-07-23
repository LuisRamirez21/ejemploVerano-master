import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div>
         <header>
            <nav>
                <ul>
                    <li><Link to="/">Principal</Link></li>
                    <li><Link to="/Configuracion">Configuracion</Link></li>
                    <li><Link to="*">Preguntame algo</Link></li>
                    <li><Link to="/RegistroInicio">Registrarse</Link></li>
                </ul>
            </nav>
        </header>   
        </div>
    )
}

export default Navbar
