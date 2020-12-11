import React from 'react';
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';

const CarFeatures = () => {

  return (
    <div className="detail-top-sec" style={{ padding: "2rem 2rem", marginTop: "20px" }}>
      <div className="container">
        <h2 style={{ textAlign: "left", marginBottom: "50px" }}>Car Features</h2>

        <MDBRow between>
          <MDBCol size="3">

            <MDBCardBody>

              <h6 style={{ textAlign: "center", fontSize: "14px" }}>Engine immobilizer</h6>
              <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>Yes</h5>
            </MDBCardBody>


          </MDBCol>
          <MDBCol size="3">

            <MDBCardBody>

              <h6 style={{ textAlign: "center", fontSize: "14px" }}>Child Safety Lock</h6>
              <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>Yes</h5>
            </MDBCardBody>

          </MDBCol>
          <MDBCol size="3">

            <MDBCardBody>

              <h6 style={{ textAlign: "center", fontSize: "14px" }}>Headlight Height Adjuster</h6>
              <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>Yes</h5>
            </MDBCardBody>

          </MDBCol>
        </MDBRow>
        <hr></hr>
        <MDBRow between>
          <MDBCol size="3">

            <MDBCardBody>

              <h6 style={{ textAlign: "center", fontSize: "14px" }}>Air Conditioner</h6>
              <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>Manual</h5>
            </MDBCardBody>


          </MDBCol>
          <MDBCol size="3">

            <MDBCardBody>

              <h6 style={{ textAlign: "center", fontSize: "14px" }}>Power Windows</h6>
              <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>Front & Rear</h5>
            </MDBCardBody>

          </MDBCol>
          <MDBCol size="3">

            <MDBCardBody>

              <h6 style={{ textAlign: "center", fontSize: "14px" }}>Central Locking</h6>
              <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>Keyless</h5>
            </MDBCardBody>

          </MDBCol>
        </MDBRow>
        <hr></hr>
        <MDBRow between>
          <MDBCol size="3">

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
          <MDBBtn color="deep-orange" size="lg" className="full-detail">View All Features </MDBBtn>
        </div>

        <hr></hr>
      </div>
    </div>
  )
}

export default CarFeatures;