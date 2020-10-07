import React from 'react';
import { MDBBtn,MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon, MDBContainer } from 'mdbreact';

const CardExampl = () => {
  
  return (
     <MDBContainer>
     
    <MDBRow style={{ marginTop:"20px", }}>
        <MDBCol size="8" >
            <MDBCard style={{ margin:"0 0.375rem"}}>
                <MDBCardImage style={{ borderRadius:"4px"}} className="img-fluid"  src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/cazoo-imagery/car_gallery_images/AY67WCV/bSA80MZJpJUHI1tg2MM2.JPG" waves />
        
            </MDBCard>
            <MDBBtn color="elegant" size="lg" >Gallery</MDBBtn>
            <MDBBtn color="elegant" size="lg" >View 360° Interior</MDBBtn>
            <MDBBtn color="elegant" size="lg" >View 360° Exterior</MDBBtn>
        </MDBCol>
         <MDBCol size="4">
           <MDBCard >

                <MDBCardBody>
                <MDBIcon icon="heart" style={{ texAlign:"right" }}className="ml-2" />
                    <div className="short-spec">
                        <h4 style={{textAlign:"left"}} > 2015 Hyundai i10 Sportz 1.1 iRDE2</h4>
                         <h5 style={{textAlign:"left"}} >30,000 Kms.Petrol.Manual </h5>
                     </div>
                      <div className="ljwTDc">
                      
                        <p className="iFsKIn"> ₹18,8500</p>
                      </div>
                    <MDBBtn color="deep-orange" size="lg" >Buy Now </MDBBtn>
                    <MDBBtn color="deep-orange" size="lg" >Test Drive</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  </MDBRow>

   
   
  </MDBContainer> 
  )
}

export default CardExampl;