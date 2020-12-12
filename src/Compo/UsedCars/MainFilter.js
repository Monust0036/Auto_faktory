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
import { MDBBtn, MDBCollapse } from "mdbreact";
// const Carsdata = require("../../Data/cars.json");

class MainFilter extends React.Component {
  constructor(props) {
    super(props);
    let isOpen = true
    if (window.innerWidth < 992)
      isOpen = false
    this.state = {
      carsData: [],
      dataOfcars: [],
      size: "",
      sort: "",
      filteredDataForMake: [],
      isOpen
    };
  }
  componentDidMount() {
    this.getCarData();
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  getCarData = () => {
    axios
      .get(`${API}/cardatas`)
      .then((response) => {
        let data = response.data;
        console.log(">>>>>>>>>>>>>>>>", data)
        if (this.props.category != undefined) {
          console.log(this.props.category)
          if (this.props.category.city != undefined) {
            data = data.filter((item) =>
              item.city.length > 0
                ? item.city[0]["CityName"] === this.props.category.city
                : true
            );
          }

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
    console.log(event.target.value)
    this.setState((state) => ({
      sort: sort,
      carsData: this.state.carsData
        .slice()
        .sort((k, l) =>
          sort === "pricelowtohigh"
            ? k.price > l.price
              ? 1
              : -1
            : sort === "pricehightolow"
              ? k.price < l.price
                ? 1
                : -1
              : k._id > l._id
                ? 1
                : -1
        ),
      carsData: this.state.carsData
        .slice()
        .sort((a, b) =>
          sort === "drivenlowtohigh"
            ? a.mileage > b.mileage
              ? 1
              : -1
            : sort === "drivenhighTolow"
              ? a.mileage < b.mileage
                ? 1
                : -1
              : a._id > b._id
                ? 1
                : -1
        ),
      carsData: this.state.carsData
        .slice()
        .sort((x, y) =>
          sort === "yearlowTohigh"
            ? x.year > y.year
              ? 1
              : -1
            : sort === "yearhighTolow"
              ? x.year < y.year
                ? 1
                : -1
              : x._id > y._id
                ? 1
                : -1
        ),
    }));
  };
  render() {
    return (
      <Container>
        <Row className="show-grid ">
          <MDBBtn
            color="elegant"
            onClick={this.toggleCollapse.bind(this)}
            className="d-md-none col mx-2"
            style={{ marginBottom: "1rem" }}
          >
            Filters
          </MDBBtn>
          <MDBCollapse id="basicCollapse" className="col-md-3" isOpen={this.state.isOpen}>
            <div >

              <div className="scrollbar scrollbar-primary filter">
                <Filter
                  updateState={this.updateState}
                  dataOfcars={this.state.dataOfcars}
                />
              </div>

            </div>
          </MDBCollapse>

          <Col md={9}>
            <TopStripBanner />
            {this.state.filteredDataForMake.length > 0 ?
              <div style={{ display: 'flex', marginTop: '20px' }}>
                <div >
                  <div
                    style={{
                      padding: "5px 18px",
                      background: "rgb(235 138 18)",
                      borderRadius: "4px",
                      fontWeight: 'bold',
                      color: 'white',
                      display: 'flex',
                      alignSelf: 'center',
                      marginRight: '10px'
                    }}
                    onClick={() => window.location.reload()}
                  >
                    <ReplayIcon></ReplayIcon>
                    <span>Clear All</span>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  {this.state.filteredDataForMake.map(make =>
                    <div
                      style={{
                        padding: "5px 18px",
                        background: " #efeeee",
                        borderRadius: "4px",
                        fontWeight: 'bold',
                        color: '#eb8a12',
                        display: 'flex',
                        margin: '0px 5px'
                      }}
                    >
                      <span>{make}</span>
                    </div>
                  )}
                </div>
              </ div> : null}
            <RelevanceFilter
              count={this.state.carsData.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortCarsdata={this.sortCarsdata}
              sortCarsdatas={this.sortCarsdatas}
            />
            <CarsCard
              carsData={this.state.carsData}
              updateState={this.updateState}
            />
            <Enquiry />
          </Col>
        </Row>
      </Container >
    );
  }
}

export default MainFilter;
