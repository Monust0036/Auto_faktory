import React, { Component } from 'react';
// import ReportsModal from './Reportmodel';
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBModalFooter, MDBCardImage, MDBCardTitle, MDBCardText, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';


class CarReport extends Component {
  state = {
    isOpen: false,
    modal16: false,


  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }


  render() {

    return (

      <div className="detail-top-sec" style={{ padding: "2rem 2rem", marginTop: "20px" }}>

        <div className="container">
          <h2 style={{ textAlign: "left" }}>Car Reports</h2>
          <MDBRow style={{ justifyContent: "space-around" }}>
            <MDBCol size="3">

              <MDBCardBody>

                <h6 style={{ textAlign: "center", fontSize: "14px" }}>Exterior</h6>
                <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>5</h5>
              </MDBCardBody>


            </MDBCol>
            <MDBCol size="3">

              <MDBCardBody>

                <h6 style={{ textAlign: "center", fontSize: "14px" }}>Interior</h6>
                <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>1</h5>
              </MDBCardBody>

            </MDBCol>
            <MDBCol size="3">

              <MDBCardBody>

                <h6 style={{ textAlign: "center", fontSize: "14px" }}>Engine</h6>
                <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>All right</h5>
              </MDBCardBody>

            </MDBCol>
          </MDBRow>
          <hr></hr>
          <MDBRow style={{ justifyContent: "space-around" }}>
            <MDBCol size="3">

              <MDBCardBody>

                <h6 style={{ textAlign: "center", fontSize: "14px" }}>Road Test</h6>
                <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>All right</h5>
              </MDBCardBody>


            </MDBCol>
            <MDBCol size="3">

              <MDBCardBody>

                <h6 style={{ textAlign: "center", fontSize: "14px" }}>Underbody</h6>
                <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>All right</h5>
              </MDBCardBody>

            </MDBCol>
            <MDBCol size="3">

              <MDBCardBody>

                <h6 style={{ textAlign: "center", fontSize: "14px" }}>Tyre</h6>
                <h5 style={{ fontWeight: "600", fontSize: "16px", textAlign: "center" }}>All right</h5>
              </MDBCardBody>

            </MDBCol>
          </MDBRow>
          <div className="text-center">
            <MDBBtn color="deep-orange" size="lg" className="full-detail" onClick={this.toggle(16)} >View Full Reports </MDBBtn>
          </div>

          <hr></hr>
          {/* *******************beginning of the Reports********************** */}

          <MDBModal isOpen={this.state.modal16} toggle={this.toggle(16)}>
            <MDBModalHeader toggle={this.toggle(16)}>
              <h3 className="text-center">Inspection Reports</h3>
            </MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.

            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="primary">Download Report</MDBBtn>
            </MDBModalFooter>
          </MDBModal>


        </div>
        {/* ***************************end of the reports********************* */}
      </div>
    )
  }
}

export default CarReport;
