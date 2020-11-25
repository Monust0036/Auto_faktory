import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { API } from "../../config.js";
import { MDBBtn,MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon, MDBContainer,MDBInput } from 'mdbreact';

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [result, setResult] = useState(null);

  const sendEmail = event => {
    event.preventDefault();
    axios
      .post(`${API}/msg-send`, { ...state })
      .then(response => {
        setResult(response.data);
        setState({
          name: '',
          senderemail: '',
          subject: '',
          message: ''
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      });
  };

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <div class="container">
      <div class="row">
      <div class="col-md-6" style={{marginTop:"20px"}}>
      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}
      <h2 style={{fontWeight:"500"}}>Contact Us</h2>
      <form onSubmit={sendEmail}>
      
        <Form.Group controlId="name">
          {/* <div class="col-md-10"> */}
          <Form.Label >Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter your full name"
            onChange={onInputChange}
            required
          />
          {/* </div> */}
          
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={state.senderemail}
            placeholder="Enter your email"
            onChange={onInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={state.subject}
            placeholder="Enter subject"
            onChange={onInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Enter your message"
            onChange={onInputChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
      </div>
      <div class="col-md-6" style={{backgroundImage:"linear-gradient(rgb(255 251 251), rgb(224 55 16 / 24%))",padding:"50px"}}>
      <div style={{marginTop:"70px"}}>
       <h2 style={{fontWeight:"600"}}>Visit us here</h2>
         <h2 style={{fontWeight:"500"}}>Corporate Office</h2>
         <p style={{padding:"10px 50px"}}>801 - 806, 8th Floor, Vipul Square,
             Sushant Lok B Block, Phase - 1,
             Gurugram, Haryana - 122001</p>
       </div>
      </div>
      </div>
     
    </div>
  );
};

export default ContactForm;

// import React from 'react';
// import { MDBBtn,MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon, MDBContainer,MDBInput } from 'mdbreact';

// const CardExampl = () => {
  
//   return (
//      <MDBContainer >
//        <br></br>
//          <MDBRow className="contact-us-form">
//          {/* <MDBCard style={{marginTop:"40px",marginBottom:"40px",padding:"20px 0 20px 0"}}> */}
//          <MDBCol sm="1"></MDBCol>
//        <MDBCol sm="5" style={{padding:"50px"}}>
//           <form>
//             <h1 style={{font:"50px", fontWeight:"600"}}>Contact us</h1>
//             <div className="grey-text">
//           <MDBInput label="Your name" icon="user" group type="text" validate error="wrong" success="right" />
//           <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" />
//           <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
//           <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
//         </div>
//         <div className="text-center">
//           <MDBBtn outline color="secondary">
//             Send
//             <MDBIcon far icon="paper-plane" className="ml-1" />
//           </MDBBtn>
//         </div>
//       </form>
//     </MDBCol>
   
//     <MDBCol sm="5"  style={{backgroundImage:"linear-gradient(rgb(255 251 251), rgb(224 55 16 / 24%))",padding:"50px"}}>
//       <div style={{marginTop:"170px"}}>
//       <h2 style={{fontWeight:"600"}}>Visit us here</h2>
//         <h2 style={{fontWeight:"500"}}>Corporate Office</h2>
//         <p style={{padding:"10px 50px"}}>801 - 806, 8th Floor, Vipul Square,
//             Sushant Lok B Block, Phase - 1,
//             Gurugram, Haryana - 122001</p>
//       </div>
        
//     </MDBCol>
//     <MDBCol sm="1" style={{backgroundImage:"linear-gradient(rgb(255 251 251), rgb(224 55 16 / 24%))"}}></MDBCol>
//     {/* </MDBCard> */}
//   </MDBRow>
//   <br></br>
// </MDBContainer>

       
  
//   )
// }

// export default CardExampl;