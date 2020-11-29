import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Filter from "./SideFilter.js";
import Enquiry from "./Enquiry.js";
import CarsCard from "./CarsCard.js";
import TopStripBanner from "./TopBannerStrip";
import RelevanceFilter from "./RelevanceFilter";
import axios from "axios";
import { API } from "../../config.js";
import ReplayIcon from '@material-ui/icons/Replay';
// const Carsdata = require("../../Data/cars.json");

class MainFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carsData: [],
      dataOfcars: [],
      size: "",
      sort: "",
      filteredDataForMake: [],
    };
  }
  componentDidMount() {
    this.getCarData();
  }
  getCarData = () => {
    axios
      .get(`${API}/cardatas`)
      .then((response) => {
        let data = response.data;
        if (this.props.category != undefined) {
          data = data.filter((item) =>
            item.city.length > 0
              ? item.city[0]["CityName"] === this.props.category.city
              : true
          );
          if (this.props.category.make != undefined) {
            data = data.filter(
              (item) => item.varient.make === this.props.category.make
            );
          }
          if (this.props.category.model != undefined) {
            data = data.filter(
              (item) => item.varient.model === this.props.category.model
            );
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
            {this.state.filteredDataForMake.length>0?
            <div style={{display: 'flex',marginTop:'20px' }}>
              <div >
            <div
                style={{
                  padding: "5px 18px",
                  background: "rgb(235 138 18)",
                  borderRadius: "4px",
                  fontWeight: 'bold',
                  color: 'white',
                  display:'flex',
                  alignSelf: 'center',
                  marginRight:'10px'
                }}
                onClick={()=>window.location.reload()}
              >
                <ReplayIcon></ReplayIcon>
                <span>Clear All</span>
              </div>
              </div>
            <div style={{ display: "flex"}}>
            {this.state.filteredDataForMake.map(make=>
              <div
                style={{
                  padding: "5px 18px",
                  background: " #efeeee",
                  borderRadius: "4px",
                  fontWeight: 'bold',
                  color: '#eb8a12',
                  display:'flex',
                  margin:'0px 5px'
                }}
              >
                <span>{make}</span>
              </div>
            )}
            </div>
            </ div>:null}
            <RelevanceFilter
              count={this.state.carsData.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortCarsdata={this.sortCarsdata}
            />
            <CarsCard
              carsData={this.state.carsData}
              updateState={this.updateState}
            />
            <Enquiry />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainFilter;
