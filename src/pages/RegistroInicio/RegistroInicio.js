import React, { useState } from "react";
import Api from '../services/ConexionAxios';
import {toast} from 'react-toastify';

import './RegistroInicio.css';
function RegistroInicio() {

    const variablesInicio = {
        _id: "",
        nombre: "",
        correo: "",
        password: "",
        img:""
      };
    
      const [values, setValues] = useState(variablesInicio);

    
      const onChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };
    
      const guardarPersonas=async()=>{
        await Api.post("/persona/crearPersona",{
          nombre: values.nombre,
          correo: values.correo,
          password: values.password
        }).then(()=>{
          toast("Dato guardado correctamente",{
            position: "top-right",
            type:"success",
            autoClose: 5000
          });
        });
      };
    

    
      const onClick = (e) => {
        e.preventDefault();
       
    
        if(values._id===""){
          guardarPersonas();
        }else{
          //updatePersona(values._id);
        }
       
        setValues(variablesInicio);
        
      };

    return (
        <div>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" /> 
            <link rel="stylesheet" href="style.css"/>
            <div class="container-regini">   
                <div class="login-container">
                <div class="register">
                    <h2>Registrarse</h2>
                    <form className="row g-3 needs-validation" onSubmit={onClick}>
                    <input type="text" placeholder="Nombre" className="nombre" name="nombre" value={values.nombre} onChange={onChange} required/>
                    <input type="text" placeholder="Correo" class="correo" name="correo" value={values.correo} onChange={onChange} required />
                    <input type="password" placeholder="Contraseña" class="password" name="password" value={values.password} onChange={onChange} required />
                    <input type="password" placeholder="Confirma contraseña" class="repass" />
                    <button className="submit" type="submit"> {values._id===""? "REGISTRARSE":"Editar"}</button>
                    </form>
                </div>
                <div class="login">
                
                    <h2>Iniciar Sesión</h2>
                    <div class="login-items">
                    <button class="fb"><i class="fab fa-facebook-f"></i> Acceder con Facebook</button>
                    <button class="tw"><i class="fab fa-twitter"></i> Acceder con Twitter</button>
                    <button class="correo"><i class="fas fa-envelope"></i> Acceder con Correo</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default RegistroInicio
