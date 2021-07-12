import React, { useState } from "react";
import ConexionApi from '../services/ConexionAxios';

function FormDatos() {
  const variablesInicio = {
    nombre: "",
    apellidos: " ",
    direccion: "",
    telefono: "",
  };

  const [values, setValues] = useState(variablesInicio);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const guardarPersonas=async()=>{
    await ConexionApi.post("/persona/crearPersona",{
      nombre: values.nombre,
      apellidos: values.apellidos,
      direccion: values.direccion
    }).then((res)=>{
      console.log(res);
      //console.log(data);
    });
  };

  const onClick = (e) => {
    e.preventDefault();
    //let suma=parseInt(values.numero1)+parseInt(values.numero2);
   /* alert(
      "Los datos son:" +
        values.nombre +
        " " +
        values.apellidos +
        " " +
        values.direccion
    );*/
    guardarPersonas();
    setValues(variablesInicio);
  };

  return (
    
    <div className="Limite">
      <div className="card">
        <div className="card-body">
          <h5 className="Titulo">Registro de usuario</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Ingresar la información requerida
          </h6>

          <form className="row g-3 needs-validation" onSubmit={onClick}>
            <div className="col-md-4">
              <label for="validationCustom01" class="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={values.nombre}
                onChange={onChange}
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom02" class="form-label">
                Apellidos
              </label>
              <input
                type="text"
                class="form-control"
                 name="apellidos"
                value={values.apellidos}
                onChange={onChange}
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom02" class="form-label">
                Direccion
              </label>
              <input
                type="text"
                class="form-control"
                name="direccion"
                value={values.direccion}
                onChange={onChange}
                required
              />
            </div>
                
           
            
            <div class="col-12">
              <button className="btn btn-primary" type="submit">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormDatos;
