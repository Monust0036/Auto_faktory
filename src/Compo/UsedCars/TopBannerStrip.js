import React from "react";
import {
  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBBtn,MDBIcon
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
      <>
        
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
      <div style={{padding:"0 10x 0 10px"}}>
         
          <MDBCard className="mb-2">
          <MDBCardBody>
              <div className="top-strip">
              <h2 className="carName"> Car Sanitisation</h2>
              <MDBCardImage className="img-fluid-banner" src="/images/Loginpage.jpg" waves />
            </div>
              <div>
              <p>Sanitised cars for every test</p>
            </div>
                        
            </MDBCardBody>
        </MDBCard>
      
      </div>
      <div style={{padding:"0 10x 0 10px"}}>
         
      <MDBCard className="mb-2">
          <MDBCardBody>
              <div className="top-strip">
              <h2 className="carName"> Customer Satisfaction</h2>
              <MDBCardImage className="img-fluid-banner" src="/images/Loginpage.jpg" waves />
            </div>
              <div>
              <p>Sanitised cars for every test</p>
            </div>
                        
            </MDBCardBody>
        </MDBCard>
      
      </div>
      <div style={{padding:"0 10x 0 10px"}}>
         
      <MDBCard className="mb-2">
          <MDBCardBody>
              <div className="top-strip">
              <h2 className="carName"> Car Sanitisation</h2>
              <MDBCardImage className="img-fluid-banner" src="/images/Loginpage.jpg" waves />
            </div>
              <div>
              <p>Sanitised cars for every test</p>
            </div>
                        
            </MDBCardBody>
        </MDBCard>
      
      </div>
      <div style={{padding:"0 10x 0 10px"}}>
         
      <MDBCard className="mb-2">
          <MDBCardBody>
              <div className="top-strip">
              <h2 className="carName"> Car Sanitisation</h2>
              <MDBCardImage className="img-fluid-banner" src="/images/Loginpage.jpg" waves />
            </div>
              <div>
              <p>Sanitised cars for every test</p>
            </div>
                        
            </MDBCardBody>
        </MDBCard>
      
      </div>
      <div style={{padding:"0 10x 0 10px"}}>
         
      <MDBCard className="mb-2">
          <MDBCardBody>
              <div className="top-strip">
              <h2 className="carName"> Quality Services</h2>
              <MDBCardImage className="img-fluid-banner" src="/images/Loginpage.jpg" waves />
            </div>
              <div>
              <p>Sanitised cars for every test</p>
            </div>
                        
            </MDBCardBody>
        </MDBCard>
      
      </div>
        
        </Carousel>
        
      </>
    )
  }
}

export default Slider;