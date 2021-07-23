import React, { Component, Fragment } from 'react';
import ListaNoticia from './Categoria/ListaNoticia';
import Formulario from './Categoria/Formulario';
import './main.css';
class prueba extends Component {
  state = {
    noticias: []
   }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async  (categoria = 'general') => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=7e0bf04d395a47c89813deee2dfcd20c`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      this.setState({
        noticias : noticias.articles
      })
  }

  render() {
    return (
      
        <Fragment>
          <link href="https://fonts.googleapis.com/css?family=Manjari&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="main.css"></link> 
          <div class="container">
            <main class="content">
            <div class="contenido wrapper"> 

            <ListaNoticia
                    noticias={this.state.noticias}
                />
          
          </div>   
            </main>
            <aside className="sidebar-principal">
                <Formulario
                  consultarNoticias={this.consultarNoticias}/>
            </aside>
          </div>
          
            

        </Fragment>
    );
  }
}

export default prueba;
