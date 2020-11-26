import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Filter from "./SideFilter.js";
import CarsCard from "./CarsCard.js";
import TopStripBanner from "./TopBannerStrip";
import RelevanceFilter from "./RelevanceFilter";
import axios from "axios";
import { API } from "../../config.js";
// const Carsdata = require("../../Data/cars.json");

class MainFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carsData: [],
      dataOfcars: [],
      size: "",
      sort: "",
    };
  }
  componentDidMount() {
    this.getCarData();
  }
  getCarData = () => {
    axios
      .get('http://f4bcbde16659.ngrok.io/api/cardatas')
      .then((response) => {
        
        let data = response.data
        if(this.props.category != undefined){
          data = data.filter(item=>item.city.length > 0?item.city[0]['CityName']===this.props.category.city:true)
          if(this.props.category.make != undefined){
            data = data.filter(item=>item.varient.make===this.props.category.make)
          }
          if(this.props.category.model != undefined){
            data = data.filter(item=>item.varient.model===this.props.category.model)
          }
        }
        // console.log(data,this.props.category)

        this.setState({ carsData: data, dataOfcars: data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  updateState = (key, value) => {
    this.setState({ [key]: value });
  };
  filterProducts = (event) => {
    console.log(event.target.value);
  };

  sortCarsdata = (event) => {
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      carsData: this.state.carsData
        .slice()
        .sort((a, b) =>
          sort === "pricelowtohigh"
            ? a.Price > b.Price
              ? 1
              : -1
            : sort === "pricehightolow"
            ? a.Price < b.Price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
      carsData: this.state.carsData
        .slice()
        .sort((a, b) =>
          sort === "drivenlowtohigh"
            ? a.Mileage > b.Mileage
              ? 1
              : -1
            : sort === "drivenhighTolow"
            ? a.Mileage < b.Mileage
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
      carsData: this.state.carsData
        .slice()
        .sort((a, b) =>
          sort === "yearlowTohigh"
            ? a.Year > b.Year
              ? 1
              : -1
            : sort === "yearhighTolow"
            ? a.Year < b.Year
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };
  render() {
    return (
      <Container>
        <Row className="show-grid">
          <Col md={3} className="scrollbar scrollbar-primary filter">
            <Filter
              updateState={this.updateState}
              dataOfcars={this.state.dataOfcars}
            />
          </Col>
          <Col md={9}>
            <TopStripBanner />
            <RelevanceFilter
              count={this.state.carsData.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortCarsdata={this.sortCarsdata}
            />
            <CarsCard carsData={this.state.carsData} updateState={this.updateState}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainFilter;
