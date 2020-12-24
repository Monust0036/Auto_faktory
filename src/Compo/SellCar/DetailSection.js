import React from "react";
import {
  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBBtn
} from "mdbreact";

class Slider extends React.Component {
  render() {
    return (
            <MDBContainer >
                <br></br>
                <h2 className="h1-responsive font-weight-bold text-center" style={{color:"#2E2725",padding:"40px 0 20px 0"}}>
                With AutoFaktory, your car is sold the minute
                    </h2>
                <MDBRow>
                
                  <MDBCol md="4" className="text-center">
                  <img src="https://d1263yrto77i5b.cloudfront.net/0.2.942/web/partials/sell/images/SimplySold.svg" alt="thumbnail"  />
                  <p style={{fontWeight:"500",fontSize:"20px"}}>AutoFactory Quality Assured</p>
                  <p>Not only are our cars thoroughly checked and reconditioned, but each one has had a recent service and MOT (if required) and also shows the number of previous owners.</p>


                    
                  </MDBCol>
                  <MDBCol md="4" className="text-center">
                  <img src="https://d1263yrto77i5b.cloudfront.net/0.2.942/web/partials/sell/images/SimplySold.svg" alt="thumbnail"  />
                  <p style={{fontWeight:"500",fontSize:"20px"}}>AutoFactory Quality Assured</p>
                  <p>Not only are our cars thoroughly checked and reconditioned, but each one has had a recent service and MOT (if required) and also shows the number of previous owners.</p>

                    
                  </MDBCol>
                  <MDBCol md="4" className="text-center">
                  <img src="https://d1263yrto77i5b.cloudfront.net/0.2.942/web/partials/sell/images/SimplySold.svg" alt="thumbnail"  />
                  <p style={{fontWeight:"500",fontSize:"20px"}}>AutoFactory Quality Assured</p>
                  <p>Not only are our cars thoroughly checked and reconditioned, but each one has had a recent service and MOT (if required) and also shows the number of previous owners.</p>

                    
                  </MDBCol>
                </MDBRow>
                <hr></hr>
            </MDBContainer>
    )
  }
}

export default Slider;