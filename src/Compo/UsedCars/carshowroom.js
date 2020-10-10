import React from "react";
import {
  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBBtn
} from "mdbreact";

class Slider extends React.Component {
  render() {
    return (
      <MDBContainer >
        <h3 className="h1-responsive font-weight-bold text-center my-5">
          Recommended Cars 
              </h3>
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
                      <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/aos-cazoo-imagery/2657/cazoo/HG17STZ/05.jpg" />
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
                </MDBRow>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBRow>
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/aos-cazoo-imagery/2657/cazoo/HG17STZ/05.jpg" />
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
                </MDBRow>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBRow>
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/aos-cazoo-imagery/2657/cazoo/HG17STZ/05.jpg" />
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
                      <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/aos-cazoo-imagery/2657/cazoo/HG17STZ/05.jpg" />
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

        <br></br>
        <hr></hr> 
      </MDBContainer>
      
    )
  }
}

export default Slider;