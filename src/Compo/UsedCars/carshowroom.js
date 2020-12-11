import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { API } from "../../config.js";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

class Slider extends React.Component {
  state = {
    carData: [],
  };
  componentDidMount() {
    this.getCarData();
  }
  getCarData = () => {
    axios
      .get(`${API}/cardatas/related/5fb8b6b0129b6a4f48b0ab10`
      )
      .then((response) => {
        // handle success
        this.setState({ carData: response.data });
        // console.log(response)
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  render() {
    // console.log(this.state.carData)
    return (
      <MDBContainer>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Recommended Cars
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
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {this.state.carData.map((data, index) => {
            return (
              <div style={{ padding: "0 10x 0 10px" }}>
                
                  <MDBCard className="mb-2">
                    <MDBCardImage
                      className="img-fluid-cards"
                      src={data.images[0].location}
                      waves
                    />
                    <MDBCardBody>
                      <div className="heart-carName">
                        <h2 className="carName">
                          {" "}
                          {data.year +
                            " " +
                            data.varient.make +
                            " " +
                            data.varient.model}
                        </h2>
                        <MDBIcon icon="heart" className="ml-2" />
                      </div>
                      <div className="ratedate1">
                        <p className="bnKmZw l">{data.mileage} miles</p>
                        <p className="bnKmZw l">{data.registrationNumber}</p>
                        <p className="bnKmZw l">{data.fuel}</p>
                        <p className="bnKmZw l">{data.transmission}</p>
                      </div>
                      <div className="ljwTDc">
                        <p className="iFsKIn"> ₹{data.price}</p>
                        {/* <a href="#" type="btn" className="view-car">View this car</a> */}
                        <Link to={{
                                pathname: "/detail-car",
                                state: data
                              }}>
                                <MDBBtn color="deep-orange" size="md">
                                  View
                                </MDBBtn>
                              </Link>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                
              </div>
            );
          })}
         
        </Carousel>
        ;<hr></hr>
      </MDBContainer>
    );
  }
}

export default Slider;
