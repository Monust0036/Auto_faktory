import React from "react";
import {
  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBBtn
} from "mdbreact";

class Slider extends React.Component {
  render() {
    return (
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
                      <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/cazoo-imagery/car_gallery_images/HN17VAM/KXq3cGP7HWiPtYGqSKqn.JPG" />
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
                      <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/cazoo-imagery/car_gallery_images/AY67WCV/bSA80MZJpJUHI1tg2MM2.JPG" />
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
                      <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/cazoo-imagery/car_gallery_images/WR17YVF/qpR1KljASb7XO9CvcL2u.JPG" />
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
                      <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/cazoo-imagery/car_gallery_images/WR17YVF/qpR1KljASb7XO9CvcL2u.JPG" />
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
                      <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/cazoo-imagery/car_gallery_images/WR17YVF/qpR1KljASb7XO9CvcL2u.JPG" />
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
                      <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/cazoo-imagery/car_gallery_images/WR17YVF/qpR1KljASb7XO9CvcL2u.JPG" />
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
                      <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/cazoo-imagery/car_gallery_images/AY67WCV/bSA80MZJpJUHI1tg2MM2.JPG" />
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
                      <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/cazoo-imagery/car_gallery_images/AY67WCV/bSA80MZJpJUHI1tg2MM2.JPG" />
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
                      <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/cazoo-imagery/car_gallery_images/AY67WCV/bSA80MZJpJUHI1tg2MM2.JPG" />
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