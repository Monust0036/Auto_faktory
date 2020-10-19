import React from "react";
import {
  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBBtn
} from "mdbreact";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

class Slider extends React.Component {
  
  render() {
    return (
      <MDBContainer>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Discover our most recent additions
              </h2>
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div style={{padding:"0 10x 0 10px"}}>
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
                  </div>
                <div style={{padding:"0 10x 0 10px"}}>
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
                    </MDBCard></div>
                <div style={{padding:"0 10x 0 10px"}}>
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
                    </MDBCard></div>
                <div style={{padding:"0 10x 0 10px"}}>
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
                </div>
        </Carousel>;



        <button type="button" className="btn btn-elegant search-car-btn">Search Car</button>
        <hr></hr>
      </MDBContainer>
    )
  }
}

export default Slider;