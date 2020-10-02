import React from "react";
import { Container, Col, Row } from "react-bootstrap" ;
import Filter from "./SideFilter.js";
import CarsCard from "./CarsCard.js"



class MainFilter extends React.Component {
    constructor(){
        super();
    }
  render() {
    return (
        <Container>
            <Row className="show-grid">
                <Col md={3} className="filter">
                    <Filter/>
                </Col>
                <Col md={9}>
                    <CarsCard />
                </Col>
            </Row>
        </Container>
      
      
    )
  }
}

export default MainFilter;