import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Hero';
import reportWebVitals from './reportWebVitals';

interface Hero {
  titulo: String;
  subtitulo: String;
  contenido: String;
  textoboton: String;
  linkboton: String;
}

const hero:Hero = {
  titulo:"Ropa y Calzado de tus heroes favoritos",
  subtitulo:"Encuentra ropa y calzado para esta temporada de frío.",
  contenido:"Las mejores playeras,sudaderas y calzado animado.",
  textoboton:"Click al video",
  linkboton:"https://www.universomarvel.com/vistete-de-marvel/"
};

ReactDOM.render(
  <React.StrictMode>
    <App {...hero}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
