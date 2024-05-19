import Barra from '../../molecules/Barra/Barra';

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Barras.css'
import Container from 'react-bootstrap/esm/Container';
import VideosYBarras from '../../organismos/VideosYBarras/VideosYBarras';



//Aqui organizaremos las barras
const Barras = () => {
  return (
    <div className="main-container ">
      <Container fluid>
        <Row className="barras-container ">
          <Col xs="1" sm="1" md="2" className="no-padding">
            <Barra />
          </Col>
          <Col xs="2" sm="5" md="10" className="no-padding d-none d-md-block">
            <VideosYBarras />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Barras;