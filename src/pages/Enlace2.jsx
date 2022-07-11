import React from "react";
import './Enlace2.css';
import Encabezado from "../component/Header";
import PieDePagina from "../component/Footer";

const Enlace2 = () => {
    return (
        <React.Fragment>
            <Encabezado/>
            <h1>Este es el enlace 2</h1>
            <PieDePagina/>
        </React.Fragment>
    )
}

export default Enlace2;