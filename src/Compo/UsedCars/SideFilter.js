import React, { Component } from "react";
import {
  ReactiveBase,
  RangeSlider,
  SelectedFilters,
  ResultList,
  ReactiveList,
  CategorySearch,
  SingleRange,
  MultiList,
} from "@appbaseio/reactivesearch";
import Checkbox from "muicss/lib/react/checkbox";

import { MDBInput, MDBFormInline, MDBCol } from "mdbreact";
import ListContainer from "./ExpansionMain/ListContainer";
import ReactCircleColorPicker from "react-circle-color-picker";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

import { withStyles, makeStyles } from "@material-ui/core/styles";

import BodyTypeCheckbox from "./BodyTypeCheckbox";
import YearRadio from "./yearRadio";
import MileageRadio from "./MileageRadio";
import CheckIcon from "@material-ui/icons/Check";
const colourList = [
  "red",
  "white",
  "blue",
  "green",
  "orange",
  "black",
  "yellow",
];
class Sidefilter extends Component {
  state = {
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedB1: false,
    checkedB2: false,
    checkedB3: false,
    checkedT1: false,
    checkedT2: false,
    checkedO1: false,
    checkedO2: false,
    color: [],
    savedFilterData: {
      makeAndModel: [],
      checkBox: { fuel: [], bodyType: [], transmission: [], owner: [] },
      radioButton: { year: null, mileage: null },
      price: [100000, 2000000],
      colour: [],
      searchInput: "",
    },
    savedCopyOfFilterData: {},
  };

  componentDidUpdate() {
    // this.getFilterData()
  }
  getFilterData = () => {
    let dataOfcars = this.props.dataOfcars,
      savedFilterData = this.state.savedFilterData,
      emptyListForMultiSearch = [];
    if (savedFilterData.radioButton.year != null) {
      dataOfcars = dataOfcars.filter(
        (car) => savedFilterData.radioButton.year < car.year
      );
    }
    if (savedFilterData.radioButton.mileage != null) {
      dataOfcars = dataOfcars.filter(
        (car) => savedFilterData.radioButton.mileage > car.mileage
      );
    }
    if (savedFilterData.makeAndModel.length > 0) {
      savedFilterData.makeAndModel.map((obj) =>
        dataOfcars
          .filter(
            (e) => obj.model == e.varient.model && e.varient.make == obj.make
          )
          .map((makeAndModelItem, index) => {
            if (
              emptyListForMultiSearch.filter(
                (emptyListData) => emptyListData === makeAndModelItem
              ).length == 0
            ) {
              emptyListForMultiSearch.push(makeAndModelItem);
            }
          })
      );
      dataOfcars = emptyListForMultiSearch;
    }
    if (savedFilterData.price != null) {
      dataOfcars = dataOfcars.filter(
        (car) =>
          savedFilterData.price[0] < parseInt(car.price) &&
          savedFilterData.price[1] > parseInt(car.price)
      );
    }
    if (savedFilterData.colour.length > 0) {
      savedFilterData.colour.map((colorName) =>
        dataOfcars
          .filter((e) => colorName.color == e.color.toLowerCase())
          .map((colorItem, index) => {
            if (
              emptyListForMultiSearch.filter(
                (emptyListData) => emptyListData === colorItem
              ).length == 0
            ) {
              emptyListForMultiSearch.push(colorItem);
            }
          })
      );
      dataOfcars = emptyListForMultiSearch;
    }
    if (savedFilterData.searchInput.length > 0) {
      dataOfcars = dataOfcars.filter(
        (car) =>
          car.varient.model.includes(
            savedFilterData.searchInput.charAt(0).toUpperCase() +
              savedFilterData.searchInput.slice(1)
          ) ||
          car.varient.make.includes(
            savedFilterData.searchInput.charAt(0).toUpperCase() +
              savedFilterData.searchInput.slice(1)
          )
      );
    }
    Object.keys(savedFilterData.checkBox).map((typeName, index) => {
      emptyListForMultiSearch = [];
      if (savedFilterData.checkBox[typeName].length > 0) {
        savedFilterData.checkBox[typeName].map((obj) => {
          dataOfcars
            .filter((e) => {
              if (typeName == "bodyType") {
                return (
                  obj.value.toLowerCase() == e.varient[typeName].toLowerCase()
                );
              }
              if (typeName == "owner") {
                return parseInt(obj.value) == e[typeName];
              } else {
                return obj.value.toLowerCase() == e[typeName].toLowerCase();
              }
            })
            .map((itemOfType, index) => {
              if (
                emptyListForMultiSearch.filter(
                  (emptyListData) => emptyListData === itemOfType
                ).length == 0
              ) {
                emptyListForMultiSearch.push(itemOfType);
              }
            });
        });

        dataOfcars = emptyListForMultiSearch;
      }

      //   console.log(dataOfcars)
    });
    // console.log(dataOfcars);
    let filteredDataForMake = []
    savedFilterData.makeAndModel.map((data)=>{
      if(filteredDataForMake.filter(e=>e===data.make).length === 0){
        filteredDataForMake.push(data.make)
      }
    })
    this.props.updateState("carsData", dataOfcars);

    this.props.updateState("filteredDataForMake", filteredDataForMake);
  };
  handleCheckBox = (value, key, e) => {
    let listOfObj = this.state.savedFilterData;
    let keyValue = key == "body" ? "bodyType" : key;
    if (e.target.checked) {
      listOfObj.checkBox[keyValue].push({ value: value });
    } else {
      let index = listOfObj.checkBox[keyValue].findIndex(
        (e) => e.value == value
      );
      listOfObj.checkBox[keyValue].splice(index, 1);
    }
    this.setState({
      [e.target.value]: e.target.checked,
      savedFilterData: listOfObj,
    });
    this.getFilterData();
  };

  getRadioBtnFilterData = (value, key, e) => {
    let listOfObj = this.state.savedFilterData;

    listOfObj.radioButton[key] = value;

    this.setState({ savedFilterData: listOfObj });
    this.getFilterData();
  };
  //   filter for make and modals
  getCarNameFilter = (data) => {
    let listOfObj = this.state.savedFilterData;
    data.map((make)=> make.items.map((model,index)=>{
      let checkIndex = this.state.savedFilterData.makeAndModel.findIndex(e=>e.make === make.title && e.model === model.name);
      console.log(checkIndex)
      if(model.checked && checkIndex  < 0){
        listOfObj.makeAndModel.push({ model: model.name, make: make.title});
      }
      if(!model.checked && checkIndex>-1 && !make.checked){
        listOfObj.makeAndModel.splice(checkIndex, 1);
      }
    }))
  
  
    this.setState({ savedFilterData: listOfObj });
    this.getFilterData();
  };
 
  handleSlider = (event, newValue) => {
    let listOfObj = this.state.savedFilterData;
    listOfObj.price = newValue;
    this.setState({ savedFilterData: listOfObj });
    this.getFilterData();
  };

  handleColor = (colour) => {
    let listOfObj = this.state.savedFilterData;
    if(this.state.savedFilterData.colour.filter(col=>col.color == colour).length>0){
      let index = this.state.savedFilterData.colour.findIndex(e=>e.color == colour)
      listOfObj.colour.splice(index, 1);
    }else{
      listOfObj.colour.push({ color: colour })
    }
    this.setState({ savedFilterData: listOfObj });
    this.getFilterData();
  };
  handleSearchInput = (e) => {
    let listOfObj = this.state.savedFilterData;

    listOfObj.searchInput = e.target.value;
    this.setState({ savedFilterData: listOfObj });
    this.getFilterData();
  };
  render() {
    // console.log(this.state.savedFilterData);

    //   const { selectedOption } = this.state;
    return (
      <ReactiveBase
        app="good-books-ds"
        url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@arc-cluster-appbase-demo-6pjy6z.searchbase.io"
        enableAppbase
      >
        <div className="row">
          <div className="col">
            <br></br>
            <h5 style={{ textAlign: "left", fontSize: 16, fontWeight: 600 }}>
              Budget
            </h5>
            <br></br>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography id="range-slider" gutterBottom>
                ₹{this.state.savedFilterData.price[0]}
              </Typography>
              <Typography id="range-slider" gutterBottom>
                ₹{this.state.savedFilterData.price[1]}
              </Typography>
            </div>

            <Slider
              value={this.state.savedFilterData.price}
              aria-labelledby="range-slider"
              // defaultValue={0.00000005}
              // aria-labelledby="discrete-slider-small-steps"
              // step={0.00000001}
              min={100000}
              max={2000000}
              onChange={this.handleSlider}
              // valueLabelDisplay="auto"
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography style={{ fontSize: "12px" }}>
                Minimum Price
              </Typography>
              <Typography style={{ fontSize: "12px" }}>
                Maxmimum Price
              </Typography>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="row">
          <div className="col">
            <h5 style={{ float: "left", fontSize: 16, fontWeight: 600 }}>
              Make + Models
            </h5>
            <input
              className="form-control"
              type="text"
              placeholder="Search by model + make"
              aria-label="Search"
              style={{ marginBottom: "10px" }}
              onChange={this.handleSearchInput}
            />
            <ListContainer getCarNameFilter={this.getCarNameFilter} />
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col">
            <h5 style={{ textAlign: "left", fontSize: 16, fontWeight: 600 }}>
              Year
            </h5>
            <YearRadio getRadioBtnFilterData={this.getRadioBtnFilterData} />
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col">
            <h5 style={{ textAlign: "left", fontSize: 16, fontWeight: 600 }}>
              Mileage
            </h5>
            <MileageRadio getRadioBtnFilterData={this.getRadioBtnFilterData} />
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col">
            <h5 style={{ textAlign: "left", fontSize: 16, fontWeight: 600 }}>
              Fuel type
            </h5>

            <div style={{ float: "left" }}>
              <Checkbox
                checked={this.state.checkedA}
                label="Petrol"
                onChange={(e) => this.handleCheckBox("petrol", "fuel", e)}
                value="checkedA"
              />
              <Checkbox
                checked={this.state.checkedB}
                label="Diesel"
                onChange={(e) => this.handleCheckBox("Diesel", "fuel", e)}
                value="checkedB"
              />
              <Checkbox
                checked={this.state.checkedC}
                label="CNG"
                onChange={(e) => this.handleCheckBox("cng", "fuel", e)}
                value="checkedC"
              />
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col">
            <h5 style={{ textAlign: "left", fontSize: 16, fontWeight: 600 }}>
              Body Type
            </h5>

            <div style={{ float: "left" }}>
              {/* <BodyTypeCheckbox
						handleFilters = { filters => handleFilters(filters, "continents")}
					/> */}

              <Checkbox
                checked={this.state.checkedB1}
                label="Hatchback"
                onChange={(e) => this.handleCheckBox("hatchback", "body", e)}
                value="checkedB1"
              />
              <Checkbox
                checked={this.state.checkedB2}
                label="Sedan"
                onChange={(e) => this.handleCheckBox("sedan", "body", e)}
                value="checkedB2"
              />
              <Checkbox
                checked={this.state.checkedB3}
                label="SUV"
                onChange={(e) => this.handleCheckBox("suv", "body", e)}
                value="checkedB3"
              />
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col">
            <h5 style={{ textAlign: "left", fontSize: 16, fontWeight: 600 }}>
              Transmission
            </h5>

            <div style={{ float: "left" }}>
              <Checkbox
                checked={this.state.checkedT1}
                label="Automatic"
                onChange={(e) =>
                  this.handleCheckBox("automatic", "transmission", e)
                }
                value="checkedT1"
              />
              <Checkbox
                checked={this.state.checkedT2}
                label="Manual"
                onChange={(e) =>
                  this.handleCheckBox("manual", "transmission", e)
                }
                value="checkedT2"
              />
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col">
            <h5 style={{ textAlign: "left", fontSize: 16, fontWeight: 600 }}>
              Owner
            </h5>

            <div style={{ float: "left" }}>
              <Checkbox
                checked={this.state.checkedO1}
                label="1st Owner"
                onChange={(e) => this.handleCheckBox("1", "owner", e)}
                value="checkedO1"
              />
              <Checkbox
                checked={this.state.checkedO2}
                label="2nd Owner"
                onChange={(e) => this.handleCheckBox("2", "owner", e)}
                value="checkedO2"
              />
            </div>
          </div>
        </div>
        <hr></hr>
        <h5 style={{ textAlign: "left", fontSize: 16, fontWeight: 600 }}>
          Color
        </h5>
        <div
          className="row"
          style={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          {colourList.map((colour, index) => {
            return (
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: colour,
                  borderRadius: "9999px",
                  margin: "4px",
                  border: " 2px solid #5f5a5a",
                }}
                onClick={() => this.handleColor(colour)}
              >
                {this.state.savedFilterData.colour.filter(col=>col.color == colour).length>0? 
                <CheckIcon style={{ marginTop: "5px" }}></CheckIcon>:null}
              </div>
            );
          })}
        </div>
      </ReactiveBase>
    );
  }
}

export default Sidefilter;
