import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import React from "react";
import RegistroInicio from '../pages/RegistroInicio/RegistroInicio';
import Principal from '../pages/Principal/Principal';

function Arutas() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/RegistroInicio" exact component={RegistroInicio} />
          <Route path="/Principal" exact component={Principal} />
        </Switch>
      </Router>
    </div>
  );
}

export default Arutas;
