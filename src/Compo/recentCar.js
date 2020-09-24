import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBBtn } from "mdbreact";

class Slider extends React.Component{
    render(){
        return(
            <MDBContainer className="slider-container">
               <h2 className="h1-responsive font-weight-bold text-center my-5">
               Discover our most recent additions
              </h2>
            <MDBCarousel activeItem={1} length={3} slide={true} multiItem>
              <MDBCarouselInner>
                <MDBRow>
                  <MDBCarouselItem itemId="1">
                  <MDBRow>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                        <MDBCardBody>
                         <h2 className="carName"> Hyundai i10</h2>
                         <p className="rate">1.2L SE</p>
                         <div className="ratedate">
                             <p className="bnKmZw">26,402  miles</p>
                             <p className="bnKmZw l">2017 reg</p>
                         </div>
                         <div className="ljwTDc">
                             <p className="iFsKIn"> £18,850</p>
                         </div>
                         <a href="#" type="btn" className="view-car">View this car</a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                        <MDBCardBody>
                        <h2 className="carName"> Hyundai i10</h2>
                         <p className="rate">1.2L SE</p>
                         <div className="ratedate">
                             <p className="bnKmZw">26,402  miles</p>
                             <p className="bnKmZw l">2017 reg</p>
                         </div>
                         <div className="ljwTDc">
                             <p className="iFsKIn"> £18,850</p>
                         </div>
                         <a href="#" type="btn" className="view-car">View this car</a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                        <MDBCardBody>
                        <h2 className="carName"> Hyundai i10</h2>
                         <p className="rate">1.2L SE</p>
                         <div className="ratedate">
                             <p className="bnKmZw">26,402  miles</p>
                             <p className="bnKmZw l">2017 reg</p>
                         </div>
                         <div className="ljwTDc">
                             <p className="iFsKIn"> £18,850</p>
                         </div>
                         <a href="#" type="btn" className="view-car">View this car</a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    </MDBRow>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                  <MDBRow>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
                        <MDBCardBody>
                        <h2 className="carName"> Hyundai i10</h2>
                         <p className="rate">1.2L SE</p>
                         <div className="ratedate">
                             <p className="bnKmZw">26,402  miles</p>
                             <p className="bnKmZw l">2017 reg</p>
                         </div>
                         <div className="ljwTDc">
                             <p className="iFsKIn"> £18,850</p>
                         </div>
                         <a href="#" type="btn" className="view-car">View this car</a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
                        <MDBCardBody>
                        <h2 className="carName"> Hyundai i10</h2>
                         <p className="rate">1.2L SE</p>
                         <div className="ratedate">
                             <p className="bnKmZw">26,402  miles</p>
                             <p className="bnKmZw l">2017 reg</p>
                         </div>
                         <div className="ljwTDc">
                             <p className="iFsKIn"> £18,850</p>
                         </div>
                         <a href="#" type="btn" className="view-car">View this car</a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                        <MDBCardBody>
                        <h2 className="carName"> Hyundai i10</h2>
                         <p className="rate">1.2L SE</p>
                         <div className="ratedate">
                             <p className="bnKmZw">26,402  miles</p>
                             <p className="bnKmZw l">2017 reg</p>
                         </div>
                         <div className="ljwTDc">
                             <p className="iFsKIn"> £18,850</p>
                         </div>
                         <a href="#" type="btn" className="view-car">View this car</a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    </MDBRow>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                  <MDBRow>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                        <MDBCardBody>
                        <h2 className="carName"> Hyundai i10</h2>
                         <p className="rate">1.2L SE</p>
                         <div className="ratedate">
                             <p className="bnKmZw">26,402  miles</p>
                             <p className="bnKmZw l">2017 reg</p>
                         </div>
                         <div className="ljwTDc">
                             <p className="iFsKIn"> £18,850</p>
                         </div>
                         <a href="#" type="btn" className="view-car">View this car</a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                        <MDBCardBody>
                        <h2 className="carName"> Hyundai i10</h2>
                         <p className="rate">1.2L SE</p>
                         <div className="ratedate">
                             <p className="bnKmZw">26,402  miles</p>
                             <p className="bnKmZw l">2017 reg</p>
                         </div>
                         <div className="ljwTDc">
                             <p className="iFsKIn"> £18,850</p>
                         </div>
                         <a href="#" type="btn" className="view-car">View this car</a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                        <MDBCardBody>
                        <h2 className="carName"> Hyundai i10</h2>
                         <p className="rate">1.2L SE</p>
                         <div className="ratedate">
                             <p className="bnKmZw">26,402  miles</p>
                             <p className="bnKmZw l">2017 reg</p>
                         </div>
                         <div className="ljwTDc">
                             <p className="iFsKIn"> £18,850</p>
                         </div>
                         <a href="#" type="btn" className="view-car">View this car</a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    </MDBRow>
                  </MDBCarouselItem>
                </MDBRow>
              </MDBCarouselInner>
            </MDBCarousel>


            <button type="button" className="btn btn-elegant search-car-btn">Search Car</button>
<hr></hr>
          </MDBContainer>
        )
    }
}

export default Slider;