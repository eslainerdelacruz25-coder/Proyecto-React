import React from 'react';
import Saludar from './components/saludar/Saludar';
import logo from './logo.svg';
import './App.css';
function App() {

  const enviarSaludo = nombre => {
    console.log("Hola " + nombre);
  };

  return (
    <div className="App">
      <h1> Mi primer componente </h1>
      <h2 className="nombre"> Hola mundo </h2>
      <Saludar nombre="{9}" apellidos="de la cruz"
        enviarSaludo={enviarSaludo} />


    </div>
  )
}

export default App; 