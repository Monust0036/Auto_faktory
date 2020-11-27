import React from 'react';
import { MDBBtn,MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon, MDBContainer } from 'mdbreact';

const CardExampl = () => {
  
  return (
     <div  style={{overflow:"hidden",padding:"50px",minHeight:"450px"}}>
     
    <MDBRow>
       <MDBCol >
           <p class="font-w1" >
          0 Shortlisted Cars
           </p>
        
        </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>
            <div class="card card-cascade wider reverse">
            <div class="card-body card-body-cascade text-center">
                <img
                    src="/images/404Img.png"
                    width="20%"
                    alt="Auto-factory-404"/>
                <h6 class="font-weight-bold indigo-text py-2">No Cars are shortlisted</h6>
                <a href="/used-car">
                <button className="LoginModal-getOtpBtnWrap" style={{width:"40%", padding:"8px 0"}}>View All Cars</button>
                </a>
                
            </div>
        </div>
            </MDBCol>
        </MDBRow>

   <div>
   <p class="card-text" style={{padding:"100px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perspiciatis
              voluptatum a, quo nobis, non commodi quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat
              laborum ut beatae ullam suscipit veniam.
            </p>
   </div>
   
  </div> 
  )
}

export default CardExampl;