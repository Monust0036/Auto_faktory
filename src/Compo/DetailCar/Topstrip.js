import React, { Component } from "react";
import {
  MDBBtn,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBCardImage,
  MDBModalFooter,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBInput,
} from "mdbreact";
import { Form, Button } from 'react-bootstrap';
import { Pannellum } from "pannellum-react";
import myImage from "./carsample.jpeg";
import myImage1 from "./car_img1.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ImageViewer360 from "./360Imageviewer"
import BuycarForm from "./buyCarForm"

class CardExampl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal13: false,
      modal14: false,
      modal15: false,
      modal16: false,
    };
  }
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };


  render() {
    const { carData } = this.props;
    console.log(this.props);
    return (
      <MDBContainer>
        <MDBRow style={{ marginTop: "20px" }}>
          <MDBCol md="8">
            <MDBCard style={{ margin: "0 0.375rem" }} onClick={this.toggle(14)}>
              <MDBCardImage
                style={{ borderRadius: "4px" }}
                className="img-fluid"
                src={carData.images[0].location}
                waves
              />
            </MDBCard>
            <MDBBtn color="elegant" onClick={this.toggle(14)}>
              Gallery
                </MDBBtn>
            <MDBBtn color="elegant" onClick={this.toggle(14)}>
              View 360° Interior
                </MDBBtn>

            <MDBBtn color="elegant" onClick={this.toggle(16)}>
              View 360° Exterior
                </MDBBtn>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard>
              <MDBCardBody>
                <MDBIcon
                  icon="heart"
                  style={{ texAlign: "right" }}
                  className={carData.isfavourite ? "red-text" : 'ml-2'}
                />
                <div className="short-spec">
                  <h4 style={{ textAlign: "left" }}>
                    {" "}
                    {carData.year +
                      " " +
                      carData.varient.make +
                      " " +
                      carData.varient.model +
                      " " +
                      carData.varient.modelType}
                  </h4>
                  <h5 style={{ textAlign: "left" }}>
                    {carData.mileage +
                      " Kms." +
                      carData.fuel +
                      "." +
                      carData.transmission}{" "}
                  </h5>
                </div>
                <div className="ljwTDc">
                  <p className="iFsKIn"> ₹{carData.price}</p>
                </div>
                <MDBBtn color="deep-orange" size="lg" onClick={this.toggle(15)}>
                  Buy Now{" "}
                </MDBBtn>
                <MDBBtn color="deep-orange" size="lg" onClick={this.toggle(15)}>
                  Test Drive
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        {/* modal for pennllum effect*/}
        <MDBContainer className="360-view-color">
          <MDBModal
            isOpen={this.state.modal13}
            toggle={this.toggle(13)}
            size="fluid"
          >
            <div className="interior-view">
              <MDBModalHeader
                toggle={this.toggle(13)}
                style={{ color: "#fff" }}
              >
                <h4 style={{ textAlign: "center", color: "#fff" }}>
                  Click and drag to rotate the car
                </h4>{" "}
              </MDBModalHeader>

              <MDBModalBody>
                <div className="App">
                  <Pannellum
                    width="100%"
                    height="500px"
                    image={myImage}
                    pitch={10}
                    yaw={180}
                    hfov={110}
                    autoLoad
                    autoRotate={-5}
                    showZoomCtrl={false}
                    onLoad={() => {
                      console.log("panorama loaded");
                    }}
                  >
                    <Pannellum.Hotspot
                      type="custom"
                      pitch={31}
                      yaw={150}
                      handleClick={(evt, name) => console.log(name)}
                      name="hs1"
                    />
                  </Pannellum>
                </div>
              </MDBModalBody>
            </div>
          </MDBModal>
        </MDBContainer>

        {/* end modal */}
        {/* modal for external view */}
        <MDBContainer className="360-view-color">
          <MDBModal
            isOpen={this.state.modal16}
            toggle={this.toggle(16)}
            size="fluid"
          >
            <div className="interior-view">
              <MDBModalHeader
                toggle={this.toggle(16)}
                style={{ color: "#fff" }}
              >
                <h4 style={{ textAlign: "center", color: "#fff" }}>
                  Click and drag to rotate the car
                </h4>{" "}
              </MDBModalHeader>

              <MDBModalBody>
                <div >
                  {/* 360 view */}
                  <ImageViewer360 />
                </div>
              </MDBModalBody>
            </div>
          </MDBModal>
        </MDBContainer>

        {/* end modal */}

        {/* modal */}
        <MDBContainer className="360-view-color">
          <MDBModal
            isOpen={this.state.modal14}
            toggle={this.toggle(14)}
            size="fluid"
            className="image-gallery-slide"
          >
            <div className="slides-view">
              <MDBModalHeader
                toggle={this.toggle(14)}
                style={{ color: "#fff" }}
              ></MDBModalHeader>

              <MDBModalBody>
                <MDBContainer>
                  <Carousel>
                    {carData.images.map((image, index) =>
                      <div>
                        <img src={image.location} />
                        {/* <p className="legend">Legend 1</p> */}
                      </div>
                    )}
                  </Carousel>
                </MDBContainer>
              </MDBModalBody>
            </div>
          </MDBModal>
        </MDBContainer>

        {/* end modal */}

        {/* ******************************************beginning of Test Drive ********************************* */}
        <MDBContainer>
          <MDBModal isOpen={this.state.modal15} toggle={this.toggle(15)}>
            <MDBModalHeader toggle={this.toggle(15)}> </MDBModalHeader>

            <MDBModalBody>
              <BuycarForm onClose={this.toggle(15)} />


              {/* <button className="LoginModal-getOtpBtnWrap">proceed</button> */}
            </MDBModalBody>
          </MDBModal>
        </MDBContainer>

        {/* **************************************Ending Of test************************************** */}
      </MDBContainer>
    );
  }
}

export default CardExampl;
