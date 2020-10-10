import React from 'react';
import { MDBBtn,MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon, MDBContainer } from 'mdbreact';

const CardExampl = () => {
  
  return (
     <div className="detail-top-sec" style={{padding:"2rem 2rem",marginTop:"20px"}}>
     
    <MDBRow >
        <MDBCol size="3" >
            
            <MDBCardBody>
                
                <h2 style={{ textAlign:"left"}}>Car Reports</h2>
                
            </MDBCardBody>
            
            
            
        </MDBCol>
        <MDBCol size="9" >
            <MDBRow style={{ justifyContent:"space-around"}}>
            <MDBCol size="3">
            
            <MDBCardBody>
                
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Exterior</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>5</h5>
            </MDBCardBody>
            
            
            </MDBCol>
            <MDBCol size="3">
            
            <MDBCardBody>
               
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Interior</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>1</h5>
            </MDBCardBody>
            
            </MDBCol>
            <MDBCol size="3">
            
            <MDBCardBody>
              
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Engine</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>All right</h5>
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
                
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Road Test</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>All right</h5>
            </MDBCardBody>
            
            
            </MDBCol>
            <MDBCol size="3">
            
            <MDBCardBody>
               
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Underbody</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>All right</h5>
            </MDBCardBody>
            
            </MDBCol>
            <MDBCol size="3">
            
            <MDBCardBody>
              
                <h6 style={{ textAlign:"center",fontSize:"14px"}}>Tyre</h6>
                <h5 style={{ fontWeight:"600", fontSize:"16px", textAlign:"center"}}>All right</h5>
            </MDBCardBody>
            
            </MDBCol>
            </MDBRow>
           
        </MDBCol>
        
            
    </MDBRow>
   
     

    
   <hr></hr>
  </div> 
  )
}

export default CardExampl;