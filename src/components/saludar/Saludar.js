import React from "react";
import PropTypes from "prop-types";


//import "./saludar.css"
import './saludar.scss'

export default function Saludar(props) {
    const { nombre, apellidos, enviarSaludo } = props;


    return (
        <div className="saludar" >

            <p className="nombre">
                Hola {nombre} {apellidos}como estas?
            </p>
            <p className="creditos">Creditos....</p>
        </div>
    );
 
}

Saludar.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
enviarSaludo: PropTypes.func
}