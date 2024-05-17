import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const IconBL = ({ link, titulo }) => { 
    // Estilos para las imágenes
    const estiloProbable = {
        maxWidth: '14.5px',
        height: 'auto',
    };

    const estiloProbable2 = {
        maxWidth: '60px',
        height: 'auto',
    };

    let estilo = null;

    if (titulo === "") {
        estilo = estiloProbable2;
    } else {
        estilo = estiloProbable;
    }

    return (
        <Container fluid>
            <Row className="align-items-center">
                <Col xs="auto">
                    <Image src={link} rounded style={estilo} className="img-fluid img-icon" />
                </Col>
                <Col>
                    <span className="button-text">{titulo}</span>
                </Col>
            </Row>
        </Container>
    );
}

export default IconBL;


