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
      .get(`${API}/cardatas`)
      .then((response) => {
        
        let data = response.data
        console.log(data)
        if(this.props.category != undefined){
          data = data.filter(item=>item.city.length > 0?item.city[0]['CityName']===this.props.category.city:true)
        }
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
            ? a.price > b.price
              ? 1
              : -1
            : sort === "pricehightolow"
            ? a.price < b.price
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
            ? a.mileage < b.mileage
              ? 1
              : -1
            : sort === "drivenhighTolow"
            ? a.mileage > b.mileage
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
            ? a.year > b.year
              ? 1
              : -1
            : sort === "yearhighTolow"
            ? a.year < b.year
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
            <CarsCard carsData={this.state.carsData} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainFilter;
