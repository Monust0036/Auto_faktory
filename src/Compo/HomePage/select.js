import React, { Component } from 'react';
import {  MDBRow, MDBCol, MDBContainer, MDBCardBody, MDBView, MDBBtn}from "mdbreact";
class SelectPage extends Component {
  render () {
    return(
        
<MDBContainer>
<MDBRow>
      <MDBCol lg="3">
          <select className="browser-default custom-select">
            <option>Select City</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>

      </MDBCol>
    <MDBCol lg="3">
    <select className="browser-default custom-select">
          <option>Select make</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>

    </MDBCol>
    <MDBCol lg="3">
    <select className="browser-default custom-select bg-color">
          <option>Select model</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>

</MDBCol>
<MDBCol lg="3">
<MDBBtn className="search-Btn" color="red accent-4">SEarch car</MDBBtn>
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