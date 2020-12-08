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
      hasShowClearALlButton:false
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
        console.log(">>>>>>>>>>>>>>>>",data)
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
    let carsData = this.state.carsData
    if('pricelowtohigh'=== event.target.value){
    carsData.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)); 
    }
    if('pricehightolow' === event.target.value){
      carsData.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0)); 
      }
      if('yearhighTolow' === event.target.value){
        carsData.sort((a,b) => (a.year < b.year) ? 1 : ((b.year < a.year) ? -1 : 0)); 
        }
        if('yearlowTohigh' === event.target.value){
          carsData.sort((a,b) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : 0)); 
          }
          if('drivenlowtohigh' === event.target.value){
            carsData.sort((a,b) => (a.mileage > b.mileage) ? 1 : ((b.mileage > a.mileage) ? -1 : 0)); 
            }
            if('drivenhighTolow' === event.target.value){
              carsData.sort((a,b) => (a.mileage < b.mileage) ? 1 : ((b.mileage < a.mileage) ? -1 : 0)); 
              }
    this.setState({carsData:carsData});

  };
  render() {
    return (
      <Container>
        <Row className="show-grid">
          <Col md={3} className="scrollbar scrollbar-primary filter">
            <Filter
              updateState={this.updateState}
              dataOfcars={this.state.dataOfcars}
              hasShowClearALlButton={this.state.hasShowClearALlButton}
            />
          </Col>
          <Col md={9}>
            <TopStripBanner />
            {this.state.filteredDataForMake.length>0 || this.state.hasShowClearALlButton?
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
              sortCarsdatas={this.sortCarsdatas}
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
