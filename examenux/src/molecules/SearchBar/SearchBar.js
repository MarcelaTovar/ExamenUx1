import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IconBL from '../../atoms/IconsBL/IconBL';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
    <Form inline>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Buscar"
            className="mr-sm-2"
          />
        </Col>
        <Col xs="auto">
          <Button className="searchButton">
            <IconBL link="https://cdn-icons-png.flaticon.com/512/25/25313.png" titulo=" " />
          </Button>
        </Col>
      </Row>
    </Form>
  </Navbar>
  );
}

export default SearchBar;