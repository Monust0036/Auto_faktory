import React from 'react';
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';

const CarSpecifications = (props) => {
  console.log(props.carData)
  return (
    <div className="detail-top-sec" style={{ padding: "2rem 2rem", marginTop: "20px" }}>
      <div className="container">
        <h2 style={{ textAlign: "left", marginBottom: "50px" }}>Car Specifications</h2>

        <MDBRow between >
          <MDBCol className="pl-0" size="3">

            <MDBCardBody>

              <h6 style={{ textAlign: "center", fontSize: "14px" }}>Make Year</h6>
              <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>{new Date(props.carData.year).getFullYear()}</h5>
            </MDBCardBody>


          </MDBCol>
          <MDBCol size="3">

            <MDBCardBody>

              <h6 style={{ textAlign: "center", fontSize: "14px" }}>Registration Year</h6>
              <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>2016</h5>
            </MDBCardBody>

          </MDBCol>
          <MDBCol size="3">

            <MDBCardBody>

              <h6 style={{ textAlign: "center", fontSize: "14px" }}>Fuel Type</h6>
              <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>Diesel</h5>
            </MDBCardBody>

          </MDBCol>


        </MDBRow>
        <hr></hr>

        <MDBRow between >
          <MDBCol className="pl-0" size="3">

            <MDBCardBody>

              <h6 style={{ textAlign: "center", fontSize: "14px" }}>KM Driven</h6>
              <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>30,000Kms</h5>
            </MDBCardBody>


          </MDBCol>
          <MDBCol size="3">

            <MDBCardBody>

              <h6 style={{ textAlign: "center", fontSize: "14px" }}>Transmission</h6>
              <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>Manual</h5>
            </MDBCardBody>

          </MDBCol>
          <MDBCol size="3">

            <MDBCardBody>

              <h6 style={{ textAlign: "center", fontSize: "14px" }}>No. of Owner</h6>
              <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>1 st Owner</h5>
            </MDBCardBody>

          </MDBCol>
        </MDBRow>
        <hr></hr>
        <MDBRow between >
          <MDBCol className="pl-0" size="3">

            <MDBCardBody>

              <h6 style={{ textAlign: "center", fontSize: "14px" }}>Insurance Validity</h6>
              <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>Feb 2021</h5>
            </MDBCardBody>


          </MDBCol>
          <MDBCol size="3">

            <MDBCardBody>

              <h6 style={{ textAlign: "center", fontSize: "14px" }}>Insurance Type</h6>
              <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>Comprehensive</h5>
            </MDBCardBody>

          </MDBCol>
          <MDBCol size="3">

            <MDBCardBody>

              <h6 style={{ textAlign: "center", fontSize: "14px" }}>RTO</h6>
              <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>KA51</h5>
            </MDBCardBody>

          </MDBCol>
        </MDBRow>
        <div className="text-center">
          <MDBBtn color="deep-orange" size="lg" className="full-detail">View All Specs </MDBBtn>
        </div>

        <hr></hr>
      </div>
    </div>
  )
}

export default CarSpecifications;