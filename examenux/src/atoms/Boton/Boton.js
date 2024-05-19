import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Boton.css';

//usamos una clase existente de bootstrap

const Boton = (param) =>{
    const {nombre} = param;
    return(
        <button class="btn btn-primary btn2" type="submit"><strong>{nombre}</strong></button>
    );
}

export default Boton;