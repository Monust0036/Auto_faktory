import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody } from "mdbreact";

class Slider extends React.Component{
    render(){
        return(
            <MDBContainer className="slider-container mt-5">
               <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Cars love stories
              </h2>
            <MDBCarousel activeItem={1} length={3} slide={true} multiItem>
              <MDBCarouselInner>
                <MDBRow>
                  <MDBCarouselItem itemId="1">
                  <MDBRow>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                       
                      </MDBCard>
                      <div className="content-section">
                            <div className="top-section">
                            "Had been postponing the decision to get a car. Couldn't take a chance with my or my son's health. The car delivered at my home and the entire process was completely contactless."
                            </div>
                <div className="bottom-section">
                    <div className="person-name">- Vandana Arora, Delhi</div>
                    <div className="car-name"> 2016 Duster 4X4</div>

                </div>
                        </div>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                        
                      </MDBCard>
                      <div className="content-section">
                            <div className="top-section">
                            "Had been postponing the decision to get a car. Couldn't take a chance with my or my son's health. The car delivered at my home and the entire process was completely contactless."
                            </div>
                <div className="bottom-section">
                    <div className="person-name">- Vandana Arora, Delhi</div>
                    <div className="car-name"> 2016 Duster 4X4</div>

                </div>
                        </div>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                      
                      </MDBCard>
                      <div className="content-section">
                            <div className="top-section">
                            "Had been postponing the decision to get a car. Couldn't take a chance with my or my son's health. The car delivered at my home and the entire process was completely contactless."
                            </div>
                <div className="bottom-section">
                    <div className="person-name">- Vandana Arora, Delhi</div>
                    <div className="car-name"> 2016 Duster 4X4</div>

                </div>
                        </div>
                    </MDBCol>
                    </MDBRow>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                  <MDBRow>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
                      
                      </MDBCard>
                      <div className="content-section">
                            <div className="top-section">
                            "Had been postponing the decision to get a car. Couldn't take a chance with my or my son's health. The car delivered at my home and the entire process was completely contactless."
                            </div>
                <div className="bottom-section">
                    <div className="person-name">- Vandana Arora, Delhi</div>
                    <div className="car-name"> 2016 Duster 4X4</div>

                </div>
                        </div>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
                      
                      </MDBCard>
                      <div className="content-section">
                            <div className="top-section">
                            "Had been postponing the decision to get a car. Couldn't take a chance with my or my son's health. The car delivered at my home and the entire process was completely contactless."
                            </div>
                <div className="bottom-section">
                    <div className="person-name">- Vandana Arora, Delhi</div>
                    <div className="car-name"> 2016 Duster 4X4</div>

                </div>
                        </div>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                        
                      </MDBCard>
                      <div className="content-section">
                            <div className="top-section">
                            "Had been postponing the decision to get a car. Couldn't take a chance with my or my son's health. The car delivered at my home and the entire process was completely contactless."
                            </div>
                <div className="bottom-section">
                    <div className="person-name">- Vandana Arora, Delhi</div>
                    <div className="car-name"> 2016 Duster 4X4</div>

                </div>
                        </div>
                    </MDBCol>
                    </MDBRow>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                  <MDBRow>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                       
                      </MDBCard>
                      <div className="content-section">
                            <div className="top-section">
                            "Had been postponing the decision to get a car. Couldn't take a chance with my or my son's health. The car delivered at my home and the entire process was completely contactless."
                            </div>
                <div className="bottom-section">
                    <div className="person-name">- Vandana Arora, Delhi</div>
                    <div className="car-name"> 2016 Duster 4X4</div>

                </div>
                        </div>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                       
                      </MDBCard>
                      <div className="content-section">
                            <div className="top-section">
                            "Had been postponing the decision to get a car. Couldn't take a chance with my or my son's health. The car delivered at my home and the entire process was completely contactless."
                            </div>
                <div className="bottom-section">
                    <div className="person-name">- Vandana Arora, Delhi</div>
                    <div className="car-name"> 2016 Duster 4X4</div>

                </div>
                        </div>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                      
                      </MDBCard>
                      <div className="content-section">
                            <div className="top-section">
                            "Had been postponing the decision to get a car. Couldn't take a chance with my or my son's health. The car delivered at my home and the entire process was completely contactless."
                            </div>
                <div className="bottom-section">
                    <div className="person-name">- Vandana Arora, Delhi</div>
                    <div className="car-name"> 2016 Duster 4X4</div>

                </div>
                        </div>
                    </MDBCol>
                    </MDBRow>
                  </MDBCarouselItem>
                </MDBRow>
              </MDBCarouselInner>
            </MDBCarousel>
            <div className="find-car">
            <h1 className="find-car-title">Find your Next car</h1>
            <a href="#" className="find-car-btn">Search Car</a>
              </div>
          </MDBContainer>

        )
    }
}

export default Slider;