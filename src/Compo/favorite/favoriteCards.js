import React from "react";
import {
  MDBBtn,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
  MDBContainer,
} from "mdbreact";
import axios from "axios";
import { API } from "../../config.js";

export default class CardExampl extends React.Component {
  state = {
    carsData: [],
  };
  componentDidMount() {
    this.getCarData();
  }
  getCarData = () => {
    axios
      .get(`${API}/cardatas`)
      .then((response) => {
        let data = response.data;
         
        data = data.filter(
            (item) => item.isfavourite
        );
        // console.log(data,this.props.category)

        this.setState({ carsData: data, dataOfcars: data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  render() {
    return (
      <div style={{ overflow: "hidden", padding: "50px", minHeight: "450px" }}>
        {this.state.carsData.length > 0 ? <MDBContainer>
        <MDBRow>
          {
            this.state.carsData.map((carsData, index) => {
                return (
                  <MDBCol key={index} lg="6" style={{ marginTop: "20px" }}>
                    
                      <MDBCard>
                        <MDBCardImage
                          className="img-fluid-cards"
                          src={carsData.images[0].location}
                          waves
                        />
                        <MDBCardBody>
                          <div className="heart-carName">
                          <h2 className="carName">
                          {" "}
                          { carsData.year +
                            " " +
                            carsData.varient.make +
                            " " +
                            carsData.varient.model+
                            " " +
                            carsData.varient.modelType}
                        </h2>
                            <MDBIcon icon="heart" className={carsData.isfavourite?"red-text":'ml-2' } />
                          </div>
                          <div className="ratedate1">
                            <p className="bnKmZw l">{carsData.mileage} miles</p>
                            <p className="bnKmZw l">{carsData.year} reg</p>
                            <p className="bnKmZw l">{carsData.fuel}</p>
                            <p className="bnKmZw l">{carsData.transmission}</p>
                          </div>
                          <div className="ljwTDc">
                            <p className="iFsKIn"> ₹{carsData.price}</p>
                            
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                   
                  </MDBCol>
                );
              })
            }
        </MDBRow>
      </MDBContainer> : (
          <>
            <MDBRow>
              <MDBCol>
                <p class="font-w1">0 Shortlisted Cars</p>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <div class="card card-cascade wider reverse">
                  <div class="card-body card-body-cascade text-center">
                    <img
                      src="/images/404Img.png"
                      width="20%"
                      alt="Auto-factory-404"
                    />
                    <h6 class="font-weight-bold indigo-text py-2">
                      No Cars are shortlisted
                    </h6>
                    <a href="/used-car">
                      <button
                        className="LoginModal-getOtpBtnWrap"
                        style={{ width: "40%", padding: "8px 0" }}
                      >
                        View All Cars
                      </button>
                    </a>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </>
        )}

        <div>
          {/* <p class="card-text" style={{padding:"100px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perspiciatis
              voluptatum a, quo nobis, non commodi quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat
              laborum ut beatae ullam suscipit veniam.
            </p> */}
        </div>
      </div>
    );
  }
}
