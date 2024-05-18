import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './SearchBar.css';




//Usamos una codigo pre-existente de bootstrap para la base
const SearchBar = () => {

    return (
        <div class="input-group mb-3">
            <input type="text" class="form-control custom-placeholder" placeholder="Buscar" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary boton" type="button">
                    <img class="lupa" src="https://images.vexels.com/media/users/3/140723/isolated/preview/158241d2079a635fb0cae49accb56da5-icono-de-lupa.png" />
                </button>
            </div>

            <div>
                <Col xs="auto">
                    <Image src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png" roundedCircle className="img-fluid microfono" />
                </Col>
            </div>

            <div>
            <Col xs="auto">
                    <Image src="https://icons.veryicon.com/png/o/miscellaneous/linear/camera-265.png" roundedCircle className="img-fluid camera" />
                </Col>
            </div>

            <div>
            <Col xs="auto">
                    <Image src="https://cdn.pixabay.com/photo/2021/07/19/12/27/bell-6478078_1280.png" roundedCircle className="img-fluid campana" />
                </Col>
            </div>

            <div>
            <Col xs="auto">
                    <Image src="https://as2.ftcdn.net/v2/jpg/03/41/82/11/1000_F_341821142_nequVUxpwzj5riEeiCA9jDmsY4OqqDLT.jpg" roundedCircle className="img-fluid selfie" />
                </Col>
            </div>

        </div>
    );
}

export default SearchBar;