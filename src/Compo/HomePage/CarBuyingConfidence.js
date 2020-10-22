import React from "react";
import {
  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBBtn
} from "mdbreact";

class Slider extends React.Component {
  render() {
    return (
            <MDBContainer >
                <h2 className="h1-responsive font-weight-bold" style={{color:"#2E2725",padding:"20px 0 20px 0"}}>
                Complete car buying confidence
                    </h2>
                <MDBRow>
                
                  <MDBCol md="4">
                  <img src="https://www.cazoo.co.uk/static/home/quality-assured.svg" alt="thumbnail"  />
                  <p style={{fontWeight:"600",fontSize:"24px"}}>AutoFaktory Quality Assured</p>
                  <p>Not only are our cars thoroughly checked and reconditioned, but each one has had a recent service and MOT (if required) and also shows the number of previous owners.</p>


                    
                  </MDBCol>
                  <MDBCol md="4">
                  <img src="https://www.cazoo.co.uk/static/home/quality-assured.svg" alt="thumbnail"  />
                  <p style={{fontWeight:"600",fontSize:"24px"}}>AutoFaktory Quality Assured</p>
                  <p>Not only are our cars thoroughly checked and reconditioned, but each one has had a recent service and MOT (if required) and also shows the number of previous owners.</p>

                    
                  </MDBCol>
                  <MDBCol md="4">
                  <img src="https://www.cazoo.co.uk/static/home/quality-assured.svg" alt="thumbnail"  />
                  <p style={{fontWeight:"600",fontSize:"24px"}}>AutoFaktory Quality Assured</p>
                  <p>Not only are our cars thoroughly checked and reconditioned, but each one has had a recent service and MOT (if required) and also shows the number of previous owners.</p>

                    
                  </MDBCol>
                </MDBRow>
                <hr></hr>
            </MDBContainer>
    )
  }
}

export default Slider;