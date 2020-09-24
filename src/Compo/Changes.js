import React, { Component } from 'react';
import {  MDBRow, MDBCol, MDBContainer, MDBCardBody, MDBView,} from "mdbreact";

class Theorychange extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 }
    }
    render() { 
        return ( 
            <MDBContainer className="mb-5 px-5 pb-5">
            <MDBCardBody>
              <h2 className="h1-responsive font-weight-bold text-center my-5">
              Section Heading 
              </h2>

              <MDBRow>
                <MDBCol lg="5">
                  <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                    <img
                      className="img-fluid"
                      src="/images/Imagesofteam/car14.jpg"
                      alt=""
                    />
                  </MDBView>
                </MDBCol>
                <MDBCol lg="7">
                  <h3 className="font-weight-bold mb-3 p-0">
                    <strong>150+ point inspection</strong>
                  </h3>
                  <p>
                  Our innovative imaging technology lets you inspect our cars inside and out from every angle, so you can view the car in even more detail than you would in person
                  Every car we sell has passed our thorough 150+ point inspection where our technicians have checked the car’s condition, safety and more. If it doesn’t pass, we simply won’t sell it.
                  </p>
                </MDBCol>
              </MDBRow>
              <hr className="my-5" />
              <MDBRow>
                <MDBCol lg="7">

                  <h3 className="font-weight-bold mb-3 p-0">
                    <strong>360-degree digital photography</strong>
                  </h3>
                  <p>
                  Every car we sell has passed our thorough 150+ point inspection where our technicians have checked the car’s condition, safety and more. If it doesn’t pass, we simply won’t sell it
                  Our innovative imaging technology lets you inspect our cars inside and out from every angle, so you can view the car in even more detail than you would in person
                    
                  </p>
                </MDBCol>
                <MDBCol lg="5">
                  <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                    <img
                      className="img-fluid"
                      src="/images/Imagesofteam/car11.jpg"
                      alt=""
                    />
                  </MDBView>
                </MDBCol>
              </MDBRow>
              
              <hr className="my-5" />

              <MDBRow>
                <MDBCol lg="5">
                  <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                    <img
                      className="img-fluid"
                      src="/images/Imagesofteam/car14.jpg"
                      alt=""
                    />
                  </MDBView>
                </MDBCol>
                <MDBCol lg="7">
                  <h3 className="font-weight-bold mb-3 p-0">
                    <strong>150+ point inspection</strong>
                  </h3>
                  <p>
                  Our innovative imaging technology lets you inspect our cars inside and out from every angle, so you can view the car in even more detail than you would in person
                  Every car we sell has passed our thorough 150+ point inspection where our technicians have checked the car’s condition, safety and more. If it doesn’t pass, we simply won’t sell it.
                  </p>
                </MDBCol>
              </MDBRow>

              
            </MDBCardBody>

<div className="find-car">
  <h1 className="find-car-title">Find your Next car</h1>
  <a href="#" className="find-car-btn">Search Car</a>
</div>
          </MDBContainer>
         );
    }
}
 
export default Theorychange;