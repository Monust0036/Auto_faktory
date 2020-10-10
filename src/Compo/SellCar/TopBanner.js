import React from 'react';
import { MDBBtn,MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon, MDBContainer } from 'mdbreact';

const CardExampl = () => {
  
  return (
     <div className="SellCar-top-banner" style={{overflow:"hidden"}}>
     
    <MDBRow>
       <MDBCol size='4' style={{marginLeft:"100px"}}>
           <h1 class="font-w1" >
           Sell your car for the best price.
           </h1>
           <p class="lead1" >~Instant offer online</p>
           <p class="lead1" >~Doorstep Inspection</p>
           <p class="lead1" >~Same day payment</p>
           <p class="lead1" >~Contactless Experience</p>
       </MDBCol>

       
  </MDBRow>

   
   
  </div> 
  )
}

export default CardExampl;