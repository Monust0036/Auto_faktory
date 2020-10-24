import React from "react";
import { Container, Col, Row } from "react-bootstrap" ;
import Filter from "./SideFilter.js";
import CarsCard from "./CarsCard.js"
import TopStripBanner from "./TopBannerStrip"
import RelevanceFilter from "./RelevanceFilter"
const Carsdata = require("../../Data/cars.json");



class MainFilter extends React.Component {
    constructor(){
        super();
        this.state={
            carsData:Carsdata,
            dataOfcars:Carsdata
        }
    }
    updateState=(key,value)=>{
        this.setState({[key]:value})
    }
  render() {
    //   console.log('carsData',this.state.carsData)
    return (
        <Container>
            <Row className="show-grid">
                <Col md={3} className="scrollbar scrollbar-primary filter">
                    <Filter updateState={this.updateState} dataOfcars={this.state.dataOfcars}/>
                </Col>
                <Col md={9}>
                    <TopStripBanner/>
                    <RelevanceFilter/>
                    <CarsCard carsData={this.state.carsData}/>
                </Col>
            </Row>
        </Container>
      
      
    )
  }
}

export default MainFilter;