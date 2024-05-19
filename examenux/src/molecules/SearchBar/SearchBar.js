import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './SearchBar.css';
import BarraBotones from '../../molecules/BarraBotones/BarraBotones';



//Usamos una codigo pre-existente de bootstrap para la base
const SearchBar = () => {

    return (
        <div className="container-fluid mw-75">
            <div className="input-group mb-3 d-flex mw-75">
                <input
                    type="text"
                    className="form-control custom-placeholder"
                    placeholder="Buscar"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary boton" type="button">
                        <img
                            className="lupa"
                            src="https://images.vexels.com/media/users/3/140723/isolated/preview/158241d2079a635fb0cae49accb56da5-icono-de-lupa.png"
                            alt="Lupa"
                        />
                    </button>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <Col xs="auto">
                        <Image
                            src="https://images.vexels.com/media/users/3/208347/isolated/preview/22bf32066334d0bdd0f65f2417748254-microphone-icon-stroke.png"
                            roundedCircle
                            className="img-fluid microfono"
                        />
                    </Col>

                    <Col xs="auto">
                        <Image
                            src="https://icons.veryicon.com/png/o/miscellaneous/linear/camera-265.png"
                            roundedCircle
                            className="img-fluid camera"
                        />
                    </Col>

                    <Col xs="auto">
                        <Image
                            src="https://cdn.pixabay.com/photo/2021/07/19/12/27/bell-6478078_1280.png"
                            roundedCircle
                            className="img-fluid campana"
                        />
                    </Col>

                    <Col xs="auto">
                        <Image
                            src="https://as2.ftcdn.net/v2/jpg/03/41/82/11/1000_F_341821142_nequVUxpwzj5riEeiCA9jDmsY4OqqDLT.jpg"
                            roundedCircle
                            className="img-fluid selfie"
                        />
                    </Col>

                </div>

                <div class="container">
                    <BarraBotones/>
                </div>

            </div>
        </div>
    );
}

export default SearchBar;