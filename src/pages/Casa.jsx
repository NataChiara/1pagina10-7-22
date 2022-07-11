import React from "react";
import './Casa.css';
import Encabezado from "../component/Header";
import PieDePagina from "../component/Footer";

const Casa = () => {
    return (
        <React.Fragment>
            <Encabezado/>
            <h1 className="casa-h1">Esta es la pagina de inicio!!</h1>
            <PieDePagina/>
        </React.Fragment>
            )
}

export default Casa;