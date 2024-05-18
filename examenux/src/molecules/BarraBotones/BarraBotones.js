import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boton from '../../atoms/Boton/Boton';
import './BarraBotones.css';


const BarraBotones = () =>{
    return(
    <div class="scrollable-container d-flex flex-nowrap overflow-auto">
        <Boton nombre="Todos"></Boton>
        <Boton nombre="Música"></Boton>
        <Boton nombre="Mixes"></Boton>
        <Boton nombre="Gorillaz"></Boton>
        <Boton nombre="Pop rock"></Boton>
        <Boton nombre="Teen pop"></Boton>
        <Boton nombre="Ahorros"></Boton>
        <Boton nombre="Pop japonés"></Boton>
        <Boton nombre="R&B contemporáneo"></Boton>
        <Boton nombre="Drake"></Boton>
        <Boton nombre="Videojuegos"></Boton>
        <Boton nombre="Misterio"></Boton>
        <Boton nombre="Taylor Swift"></Boton>
        <Boton nombre="Star Wars"></Boton>
    </div>
    );
}

export default BarraBotones;