import React from 'react';
import { MDBBtn,MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon, MDBContainer,MDBInput } from 'mdbreact';

const CardExampl = () => {
  
  return (
     <MDBContainer >
       <br></br>
         <MDBRow>
         {/* <MDBCard style={{marginTop:"40px",marginBottom:"40px",padding:"20px 0 20px 0"}}> */}
         <MDBCol sm="1"></MDBCol>
       <MDBCol sm="5" style={{backgroundImage:"linear-gradient(rgb(255 251 251), rgb(224 55 16 / 24%))",padding:"50px"}}>
          <form>
            <h1 style={{font:"50px", fontWeight:"600"}}>Contact us</h1>
            <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <div className="text-center">
          <MDBBtn outline color="secondary">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
   
    <MDBCol sm="5"  style={{backgroundImage:"linear-gradient(rgb(255 251 251), rgb(224 55 16 / 24%))",padding:"50px"}}>
      <div style={{marginTop:"170px"}}>
      <h2 style={{fontWeight:"600"}}>Visit us here</h2>
        <h2 style={{fontWeight:"500"}}>Corporate Office</h2>
        <p style={{padding:"10px 50px"}}>801 - 806, 8th Floor, Vipul Square,
            Sushant Lok B Block, Phase - 1,
            Gurugram, Haryana - 122001</p>
      </div>
        
    </MDBCol>
    <MDBCol sm="1"></MDBCol>
    {/* </MDBCard> */}
  </MDBRow>
  <br></br>
</MDBContainer>

       
  
  )
}

export default CardExampl;