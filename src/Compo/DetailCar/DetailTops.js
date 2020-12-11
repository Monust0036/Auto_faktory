import React from 'react';
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';

const CardExampl = () => {

  return (
    <div className="detail-top-sec" style={{ background: "rgb(69, 68, 68)", color: "#fff", overflow: "hidden" }}>
      <div className="container text-center">
        <MDBRow >
          <MDBCol size="4" style={{ padding: "20px 0" }}>

            <MDBIcon fab icon="buffer" />
            <div className="text-box" >
              <h5 style={{ fontWeight: "600", fontSize: "18px",  }}>150+ point inspection</h5>
              <h6 style={{  }}>Every car expertly checked inside and out</h6>
            </div>
          </MDBCol>
          <MDBCol size="4" style={{ padding: "20px 0" }}>
            <MDBIcon fab icon="buffer" />
            <div className="text-box" >
              <h5 style={{ fontWeight: "600", fontSize: "18px",  }}>150+ point inspection</h5>
              <h6 style={{  }}>Every car expertly checked inside and out</h6>
            </div>


          </MDBCol>
          <MDBCol size="3" style={{ padding: "20px 0" }}>

            <MDBIcon fab icon="buffer" />
            <div className="text-box" >
              <h5 style={{ fontWeight: "600", fontSize: "18px",  }}>7-Day Money Back Guarantee</h5>
              <h6 style={{  }}>Love it or return it for a full refund</h6>
            </div>


          </MDBCol>
        </MDBRow>

      </div>

    </div>
  )
}

export default CardExampl;