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
            dataOfcars:Carsdata,
            size:"",
            sort:"",
        }
    }
    updateState=(key,value)=>{
        this.setState({[key]:value})
    }

    sortCarsdata = (event) => {
        const sort=event.target.value;
        console.log(">>>>>>>>>>>>>.",event.target.value)
        this.setState((state) => ({
            sort:sort,
            carsData: this.state.carsData.slice().sort((a,b) =>(
                sort==="pricelowtohigh"
                ? a.Price > b.Price
                ? 1
                :-1
                : sort==="pricehightolow"
                ? a.Price < b.Price
                ? 1
                :-1
                : a._id > b._id
                ? 1
                :-1


            )),
            carsData: this.state.carsData.slice().sort((a,b) =>(
                sort==="drivenlowtohigh"
                ? a.Mileage > b.Mileage
                ? 1
                :-1
                : sort==="drivenhighTolow"
                ? a.Mileage < b.Mileage
                ? 1
                :-1
                : a._id > b._id
                ? 1
                :-1
                )),
            carsData: this.state.carsData.slice().sort((a,b) =>(
                sort==="yearlowTohigh"
                ? a.Year > b.Year
                ? 1
                :-1
                : sort==="yearhighTolow"
                ? a.Year < b.Year
                ? 1
                :-1
                : a._id > b._id
                ? 1
                :-1
            ))
            

        }))
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
                    <RelevanceFilter 
                    count={this.state.carsData.length}
                    size={this.state.size}
                    sort={this.state.sort}
                    filterProducts={this.filterProducts}
                    sortCarsdata={this.sortCarsdata}
                    />
                    <CarsCard carsData={this.state.carsData}/>
                </Col>
            </Row>
        </Container>
      
      
    )
  }
}

export default MainFilter;