import React from "react";
import {
  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBBtn,MDBNavLink,MDBIcon
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
          <a href="/detail-car">
          <MDBCard className="mb-2">
          <MDBCardImage className="img-fluid-cards" src="/images/SampleData/Alto K10.jpg" waves />
          <MDBCardBody>
              <div className="heart-carName">
              <h2 className="carName"> 2013 Maruti Suzuki Alto</h2>
            <MDBIcon icon="heart" className="ml-2"/>
              </div>
              <div className="ratedate1">
              <p className="bnKmZw l">10000 miles</p>
              <p className="bnKmZw l" >2013 reg</p>
              <p className="bnKmZw l">Petrol</p>
              <p className="bnKmZw l">Manual</p>
            </div>
                        <div className="ljwTDc">
                          <p className="iFsKIn"> ₹1,25000</p>
                          {/* <a href="#" type="btn" className="view-car">View this car</a> */}
                          <MDBBtn color="deep-orange" size="md">View </MDBBtn>
                        </div>
                        
        </MDBCardBody>
      </MDBCard>
      </a>
      </div>
        <div style={{padding:"0 10x 0 10px"}}>
        <a href="/detail-car">
      <MDBCard className="mb-2">
        <MDBCardImage className="img-fluid-cards" src="/images/SampleData/Grand i10.jpg" waves />
        <MDBCardBody>
          <div className="heart-carName">
          <h2 className="carName"> 2014 Hyundai Grand i10</h2>
            <MDBIcon icon="heart" className="ml-2"/>
          </div>
          <div className="ratedate1">
              <p className="bnKmZw l">15000 miles</p>
              <p className="bnKmZw l" >2014 reg</p>
              <p className="bnKmZw l">Petrol</p>
              <p className="bnKmZw l">Automatic</p>
            </div>
                        <div className="ljwTDc">
                          <p className="iFsKIn"> ₹3,30000</p>
                          {/* <a href="#" type="btn" className="view-car">View this car</a> */}
                          <MDBBtn color="deep-orange" size="md">View </MDBBtn>
                        </div>
                        
        </MDBCardBody>
      </MDBCard>
      </a>
      </div>
        <div style={{padding:"0 10x 0 10px"}}>
        <a href="/detail-car">
      <MDBCard className="mb-2">
        <MDBCardImage className="img-fluid-cards" src="/images/SampleData/Brio.jpg" waves />
        <MDBCardBody>
          <div className="heart-carName">
          <h2 className="carName"> 2015 Honda Brio</h2>
            <MDBIcon icon="heart" className="ml-2"/>
          </div>
          <div className="ratedate1">
              <p className="bnKmZw l">50000 miles</p>
              <p className="bnKmZw l" >2015 reg</p>
              <p className="bnKmZw l">Petrol</p>
              <p className="bnKmZw l">Manual</p>
            </div>
                        <div className="ljwTDc">
                          <p className="iFsKIn"> ₹2,50000</p>
                          {/* <a href="#" type="btn" className="view-car">View this car</a> */}
                          <MDBBtn color="deep-orange" size="md">View </MDBBtn>
                        </div>
                        
        </MDBCardBody>
      </MDBCard>
      </a>
                  </div>
                <div style={{padding:"0 10x 0 10px"}}>
                <a href="/detail-car">
      <MDBCard className="mb-2">
        <MDBCardImage className="img-fluid-cards" src="/images/SampleData/Wagon R.jpg" waves />
        <MDBCardBody>
          <div className="heart-carName">
          <h2 className="carName"> 2012 Maruti Suzuki Wagon R</h2>
            <MDBIcon icon="heart" className="ml-2"/>
          </div>
          <div className="ratedate1">
              <p className="bnKmZw l">48000 miles</p>
              <p className="bnKmZw l" >2012 reg</p>
              <p className="bnKmZw l">CNG</p>
              <p className="bnKmZw l">Manual</p>
            </div>
                        <div className="ljwTDc">
                          <p className="iFsKIn"> ₹2,39000</p>
                          {/* <a href="#" type="btn" className="view-car">View this car</a> */}
                          <MDBBtn color="deep-orange" size="md">View </MDBBtn>
                        </div>
                        
        </MDBCardBody>
      </MDBCard>
      </a>
                </div>
        </Carousel>;
        


        <a href="/used-car">
          <button type="button" className="btn btn-elegant search-car-btn">Search Car</button>
        </a>
       
        <hr></hr>
      </MDBContainer>
    )
  }
}

export default Slider;