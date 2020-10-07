import React from 'react';
import { MDBBtn,MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon, MDBContainer } from 'mdbreact';

const CardExampl = () => {
  
  return (
     <div className="detail-top-sec" style={{padding:"2rem 2rem",marginTop:"20px"}}>
     
    <MDBRow >
        <MDBCol size="3" >
            
            <MDBCardBody>
                
                <h2 style={{ textAlign:"left"}}>Car Features</h2>
                
            </MDBCardBody>
            
            
            
        </MDBCol>
        <MDBCol size="9" >
            <MDBRow style={{ justifyContent:"space-around"}}>
            <MDBCol size="3">
            
            <MDBCardBody>
                
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Engine immobilizer</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>Yes</h5>
            </MDBCardBody>
            
            
            </MDBCol>
            <MDBCol size="3">
            
            <MDBCardBody>
               
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Child Safety Lock</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>Yes</h5>
            </MDBCardBody>
            
            </MDBCol>
            <MDBCol size="3">
            
            <MDBCardBody>
              
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Headlight Height Adjuster</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>Yes</h5>
            </MDBCardBody>
            
            </MDBCol>
            </MDBRow>
            <hr></hr>
        </MDBCol>
        
            
    </MDBRow>

    <MDBRow >
        <MDBCol size="3" >
            
            <MDBCardBody>
                
                
                
            </MDBCardBody>
            
            
            
        </MDBCol>
        <MDBCol size="9" >
            <MDBRow style={{ justifyContent:"space-around"}}>
            <MDBCol size="3">
            
            <MDBCardBody>
                
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Air Conditioner</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>Manual</h5>
            </MDBCardBody>
            
            
            </MDBCol>
            <MDBCol size="3">
            
            <MDBCardBody>
               
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Power Windows</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>Front & Rear</h5>
            </MDBCardBody>
            
            </MDBCol>
            <MDBCol size="3">
            
            <MDBCardBody>
              
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Central Locking</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>Keyless</h5>
            </MDBCardBody>
            
            </MDBCol>
            </MDBRow>
            <hr></hr>
        </MDBCol>
        
            
    </MDBRow>
    <MDBRow >
        <MDBCol size="3" >
            
            <MDBCardBody>
                
                
                
            </MDBCardBody>
            
            
            
        </MDBCol>
        <MDBCol size="9" >
            <MDBRow style={{ justifyContent:"space-around"}}>
            <MDBCol size="3">
            
            <MDBCardBody>
                
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Insurance Validity</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>Feb 2021</h5>
            </MDBCardBody>
            
            
            </MDBCol>
            <MDBCol size="3">
            
            <MDBCardBody>
               
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Insurance Type</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>Comprehensive</h5>
            </MDBCardBody>
            
            </MDBCol>
            <MDBCol size="3">
            
            <MDBCardBody>
              
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>RTO</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>KA51</h5>
            </MDBCardBody>
            
            </MDBCol>
            </MDBRow>
            
        </MDBCol>
        
            
    </MDBRow>
    <MDBBtn color="deep-orange" size="lg" className="full-detail">View All Features </MDBBtn>

   
   <hr></hr>
  </div> 
  )
}

export default CardExampl;