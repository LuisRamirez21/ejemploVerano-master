import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Principal from './pages/Principal';
import reportWebVitals from './reportWebVitals';
// CSS
import './index.css';
import './pages/main.css';
import './components/Navbar/Navbar.css'
//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Principal/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
