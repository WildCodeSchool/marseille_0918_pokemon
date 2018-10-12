import React, { Component } from 'react';
import CardPok from './CardPok';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import SearchBar from './SearchBar.js';
 class IndexPok extends Component {
  render() {
    return (





 
      <Container>
          
          <SearchBar/>
       
        <Row className="spacebetween">
            <Col xs="12" sm="6" md="3" lg="3"  ><CardPok /></Col>
            <Col xs="12" sm="6" md="3" lg="3"  ><CardPok /></Col>
            <Col xs="12" sm="6" md="3" lg="3"  ><CardPok /></Col>
            <Col xs="12" sm="6" md="3" lg="3"  ><CardPok /></Col>
        </Row>

        <Row className="spacebetween">
            <Col xs="12" sm="6" md="3" lg="3"  ><CardPok /></Col>
            <Col xs="12" sm="6" md="3" lg="3"  ><CardPok /></Col>
            <Col xs="12" sm="6" md="3" lg="3"  ><CardPok /></Col>
            <Col xs="12" sm="6" md="3" lg="3"  ><CardPok /></Col>
        </Row>

        <Row className="spacebetween">
            <Col xs="12" sm="6" md="3" lg="3"  ><CardPok /></Col>
            <Col xs="12" sm="6" md="3" lg="3"  ><CardPok /></Col>
            <Col xs="12" sm="6" md="3" lg="3"  ><CardPok /></Col>
            <Col xs="12" sm="6" md="3" lg="3"  ><CardPok /></Col>
        </Row>

        <Row className="spacebetween">
            <Col xs="12" sm="6" md="3" lg="3"  ><CardPok /></Col>
            <Col xs="12" sm="6" md="3" lg="3"  ><CardPok /></Col>
            <Col xs="12" sm="6" md="3" lg="3"  ><CardPok /></Col>
            <Col xs="12" sm="6" md="3" lg="3"  ><CardPok /></Col>
        </Row>


      </Container>
    );
  }
}

export default IndexPok;