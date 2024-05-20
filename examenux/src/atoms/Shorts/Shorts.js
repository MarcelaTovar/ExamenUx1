import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Shorts.css';


//Las imagenes tienen un max-width de 200px para evitar que sea demasiado grande 
const Shorts = ({ link, primer, segundo }) => {
    return (
        <div className="card bg">
            <img className="card-img-top im" src={link} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title"><strong>{primer}</strong></h5>
                <p className="card-text">
                   {segundo}
                </p>
            </div>
        </div>
    );
}

export default Shorts;
