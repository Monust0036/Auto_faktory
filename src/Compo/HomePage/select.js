import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCardBody,
  MDBView,
  MDBBtn,
} from "mdbreact";
import { Link } from "react-router-dom";

class SelectPage extends Component {
  state = {
    category: {},
  };
  handleChange=(e)=> {
    let category = this.state.category;
    category[e.target.name] = e.target.value;
    this.setState({ category: category });
  }
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="3">
            <select
              className="browser-default custom-select"
              name="city"
              onChange={this.handleChange}
            >
              <option>Select City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </MDBCol>
          <MDBCol lg="3">
            <select
              className="browser-default custom-select"
              name="make"
              onChange={this.handleChange}
            >
              <option>Select make</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </MDBCol>
          <MDBCol lg="3">
            <select
              className="browser-default custom-select bg-color"
              name="model"
              onChange={this.handleChange}
            >
              <option>Select model</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </MDBCol>
          <MDBCol lg="3">
            <Link
              to={{
                pathname: "/used-car",
                category: this.state.category,
              }}
            >
              <MDBBtn className="search-Btn" color="red accent-4">
                Search car
              </MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      //   <div style={{display:'flex'}}>
      // <select className="browser-default custom-select">
      //   <option>Choose your option</option>
      //   <option value="1">Option 1</option>
      //   <option value="2">Option 2</option>
      //   <option value="3">Option 3</option>
      // </select>

      //     <select className="browser-default custom-select">
      //       <option>Choose your option</option>
      //       <option value="1">Option 1</option>
      //       <option value="2">Option 2</option>
      //       <option value="3">Option 3</option>
      //     </select>

      //     <button type="submit">Search car</button>
      //   </div>
    );
  }
}

export default SelectPage;
