import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boton from '../../atoms/Boton/Boton';
import './BarraBotones.css';


const BarraBotones = () => {
    return (

        <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">

            <div class="col">
                <Boton nombre="Todos" class="coco"></Boton>
            </div>
            <div class="col">
                <Boton nombre="Música"></Boton>

            </div>
            <div class="col">
                <Boton nombre="Mixes"></Boton>

            </div>
            <div class="col">
                <Boton nombre="Gorillaz"></Boton>

            </div>
            <div class="col">
                <Boton nombre="Ahorros"></Boton>

            </div>
            <div class="col">
                <Boton nombre="Videojuegos"></Boton>

            </div>
            <div class="col">
                <Boton nombre="Ahorros"></Boton>

            </div>
            <div class="col">
                <Boton nombre="Indie Rock"></Boton>

            </div>
            <div class="col">
                <Boton nombre="Pop Rock"></Boton>

            </div>
            <div class="col">
                <Boton nombre="Música japonésa"></Boton>

            </div>
            <div class="col">
                <Boton nombre="Hip Hop alternativo"></Boton>

            </div>
            <div class="col">
                <Boton nombre="Manga"></Boton>

            </div>
            <div class="col"><Boton nombre="Trailer"></Boton></div>

            <div class="col"> <Boton nombre="Star Wars"></Boton>
            </div>
        </div>

    );
}

export default BarraBotones;