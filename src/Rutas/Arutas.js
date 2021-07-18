import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import RegistroInicio from '../pages/RegistroInicio/RegistroInicio';
import Principal from '../pages/Principal/Principal';
import Configuracion from '../pages/Configuracion/Configuracion';

function Arutas() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Principal" exact component={Principal} />
          <Route path="/Configuracion" exact component={Configuracion} />
          <Route path="/RegistroInicio" exact component={RegistroInicio} />
        </Switch>
        
      </Router>
    </div>
  );
}

export default Arutas;
