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
        Cars love stories
              </h2>
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
                        <MDBCardImage className="img-fluid" src="/images/LoveStory/testimonial-1.jpg" />
                        
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
              </div>
                <div style={{padding:"0 10x 0 10px"}}>

                <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="/images/LoveStory/testimonial-5.jpg" />
                        
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

                  </div>
                <div style={{padding:"0 10x 0 10px"}}>
                <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="/images/LoveStory/testimonial-6.jpg" />
                        
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
                  </div>
                <div style={{padding:"0 10x 0 10px"}}>
                <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="/images/LoveStory/testimonial-5.jpg" />
                        
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

                </div>
                <div style={{padding:"0 10x 0 10px"}}>
                <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="/images/LoveStory/testimonial-1.jpg" />
                        
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
                </div>
                <div style={{padding:"0 10x 0 10px"}}>
                <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="/images/LoveStory/testimonial-6.jpg" />
                        
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
                </div>
        </Carousel>;
        
        <hr></hr>
      </MDBContainer>
    )
  }
}

export default Slider;
