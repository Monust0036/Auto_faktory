import React from 'react';
import { MDBBtn,MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon, MDBContainer } from 'mdbreact';

const CardExampl = () => {
  
  return (
     <div className="detail-top-sec" style={{background:"rgb(244, 246, 245)",padding:"3rem 2rem",marginTop:"20px"}}>
     
    <MDBRow >
        <MDBCol size="2" >
            <MDBCard>
            <MDBCardBody>
                <MDBIcon far icon="calendar-alt" />
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Reg Year</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>2016</h5>
            </MDBCardBody>
            </MDBCard>
            
            
        </MDBCol>
        <MDBCol size="2" >
            <MDBCard>
            <MDBCardBody>
                <MDBIcon fab icon="buffer" />
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Mileage</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>30,464 Kms</h5>
            </MDBCardBody>
            </MDBCard>
            
            
        </MDBCol>
        <MDBCol size="2" >
            <MDBCard>
            <MDBCardBody>
                <MDBIcon fab icon="buffer" />
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Fuel type</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>Diesel</h5>
            </MDBCardBody>
            </MDBCard>
            
            
        </MDBCol>
        <MDBCol size="2" >
            <MDBCard>
            <MDBCardBody>
                <MDBIcon fab icon="buffer" />
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Transmission</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>Automatic</h5>
            </MDBCardBody>
            </MDBCard>
            
            
        </MDBCol>
        <MDBCol size="2" >
            <MDBCard>
            <MDBCardBody>
                <MDBIcon fab icon="buffer" />
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Seats</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>5</h5>
            </MDBCardBody>
            </MDBCard>
            
            
        </MDBCol>
        <MDBCol size="2" >
            <MDBCard>
            <MDBCardBody>
                <MDBIcon fab icon="buffer" />
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Engine</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>2L</h5>
            </MDBCardBody>
            </MDBCard>
            
            
        </MDBCol>
  </MDBRow>

   
   
  </div> 
  )
}

export default CardExampl;