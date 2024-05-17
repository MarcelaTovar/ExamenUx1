import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

//Estamos usando una clase de Bootstrap-React

const IconBL = ({ link, titulo }) => { 
    const estilo = {
        maxWidth: '13px',
        height: 'auto',
    };

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

