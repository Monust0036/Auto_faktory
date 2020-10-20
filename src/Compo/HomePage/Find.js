import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody } from "mdbreact";

class Find extends React.Component{
    render(){
        return(
            <MDBContainer>
            <div className="find-car">
            <h1 className="find-car-title">Find your Next car</h1>
            <a href="/used-car" className="find-car-btn">Search Car</a>
              </div>
          </MDBContainer>

        )
    }
}

export default Find;