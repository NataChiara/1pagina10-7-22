import React from "react";
import './Enlace1.css';
import Encabezado from "../component/Header";
import PieDePagina from "../component/Footer";


const Enlace1 = () => {
    return (
        <React.Fragment>
            <Encabezado/>
            <h1>Este es el enlace 1</h1>
            <PieDePagina/>
        </React.Fragment>

    )
}

export default Enlace1;