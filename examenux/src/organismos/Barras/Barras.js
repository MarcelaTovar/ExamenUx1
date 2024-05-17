import Barra from '../../molecules/Barra/Barra';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


//Aqui organizaremos las barras
const Barras = () =>{
    return(
        <Row>
          <Col md="3">
            <Barra />
          </Col>
          <Col md="9">
            <SearchBar />
          </Col>
        </Row>
    );
}

export default Barras;