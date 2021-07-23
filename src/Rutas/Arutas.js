import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import RegistroInicio from '../pages/RegistroInicio/RegistroInicio';
import Configuracion from '../pages/Configuracion/Configuracion';
import NotFound from "../pages/NotFound";
import prueba from "../pages/prueba"

function Arutas() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={prueba} />
          <Route path="/Configuracion" exact component={Configuracion} />
          <Route path="/RegistroInicio" exact component={RegistroInicio} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default Arutas;
