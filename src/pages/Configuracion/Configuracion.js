import React from 'react';
import './Configuracion.css';
import {Link} from "react-router-dom";
function Configuracion() {
    return (
        <div>
            <div id="nav-conf">
            <div class="titulonav-conf">
            Secciones
            </div>
            
            <div class="cuerporec-conf">
                <ul className="lista">
                    <li><Link to="">Principal</Link></li>
                    <li><Link to="">Preferencias</Link></li>
                    <li><Link to="">Cerrar Sesion</Link></li>
                </ul>
                
            </div>
</div>
        </div>
    )
}

export default Configuracion
