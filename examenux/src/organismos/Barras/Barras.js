import Barra from '../../molecules/Barra/Barra';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Barras.css'
import Container from 'react-bootstrap/esm/Container';


//Aqui organizaremos las barras
const Barras = () => {
  return (
    <Container fluid>
    <Row className="barras-container">
      <Col xs="12" md="2" className="no-padding">
        <Barra />
      </Col>
      <Col xs="12" md="10" class="no-padding2">
        <SearchBar />
      </Col>
    </Row>
  </Container>
  );
}

export default Barras;