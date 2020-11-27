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
import { Link } from 'react-router-dom'
import axios from 'axios'

class CardExampl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carsData: this.props.carsData,
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSubmitCourse = this.handleSubmitCourse.bind(this);
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleChangecarsData = (event) => {
    this.setState({ carsData: event.target.value });
  };
  getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map((e) => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter((e) => arr[e])

      .map((e) => arr[e]);

    return unique;
  }
  componentDidMount() {
    this.setState({ carsData: this.props.carsData });
  }

  changeFavoriteValue=(carDataIndex)=>{
    let carData = this.props.carsData
    carData[carDataIndex].isfavourite = carData[carDataIndex].isfavourite? false:true
    // Need To post Data from here...
    // axios.post('/api', {
    //   data:carData[carDataIndex]
    // })
    // .then( (response) =>{
    //   console.log(response);
    // })
    // .catch( (error)=> {
    //   console.log(error);
    // });
    this.props.updateState('carsData',carData)
    this.setState({ carsData: carData})
  }
  render() {
    // console.log(">>>>>>",this.props.carsData)
    const uniqueCouse = this.getUnique(this.state.carsData, "Transmission");

    const carsData = this.state.carsData;

    const filterDropdown = carsData.filter(function (result) {
      return result.Transmission === carsData;
    });

    return (
      <MDBContainer>
        <MDBRow>
          {this.props.carsData.length > 0
            ? this.props.carsData.map((carsData, index) => {
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
                            <MDBIcon icon="heart" className={carsData.isfavourite?"red-text":'ml-2' } onClick={()=>this.changeFavoriteValue(index)}/>
                          </div>
                          <div className="ratedate1">
                            <p className="bnKmZw l">{carsData.mileage} miles</p>
                            <p className="bnKmZw l">{carsData.year} reg</p>
                            <p className="bnKmZw l">{carsData.fuel}</p>
                            <p className="bnKmZw l">{carsData.transmission}</p>
                          </div>
                          <div className="ljwTDc">
                            <p className="iFsKIn"> ₹{carsData.price}</p>
                            {/* 
                            <a href="#" type="btn" className="view-car">View this car</a> */}
                            {/* <a href="/detail-car" params={}> */}
                              <Link to={{
                                pathname: "/detail-car",
                                state: carsData
                              }}>
                                <MDBBtn color="deep-orange" size="md">
                                  View
                                </MDBBtn>
                              </Link>
                            
                            {/* </a> */}
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                   
                  </MDBCol>
                );
              })
            : null}
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default CardExampl;
