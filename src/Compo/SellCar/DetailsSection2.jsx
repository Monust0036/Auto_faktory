import React from "react";
import {
  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBBtn
} from "mdbreact";

class Slider extends React.Component {
  render() {
    return (
            <div className="sale-detail-sec2" >
                <br></br>
                {/* <h2 className="h1-responsive font-weight-bold" style={{color:"#2E2725",padding:"20px 0 20px 0"}}>
                Complete car buying confidence
                    </h2> */}
                
                
                  
                  <h6 style={{fontWeight:"600",fontSize:"28px",color:"#fff"}}>AutoFactory Quality Assured</h6>
                  <h6 style={{fontWeight:"500",fontSize:"18px",color:"#fff"}}>Not only are our cars thoroughly checked and reconditioned, but each one has had a <br></br>recent service and MOT (if required) and also shows the number of previous owners.</h6>


                    
                  
                  
                
                
            </div>
    )
  }
}

export default Slider;