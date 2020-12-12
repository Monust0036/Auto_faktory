import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { API } from "../../config.js";
import { MDBBtn,MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon, MDBContainer,MDBInput } from 'mdbreact';

const ContactForm = (props) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    address:'',
    subject: '',
    mobile:'',
    message: ''
  });

  const [result, setResult] = useState(null);

  const sendEmail = event => {
    event.preventDefault();
    console.log("in here");
    axios
      .post(`${API}/msg-send`, { ...state })
      .then(response => {
        setResult(response.data);
        setState({
          name: '',
          email: '',
          address:'',
          mobile:'',
          subject: '',
          message: ''
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later'
        });
        alert("Something went wrong. Try again later")
      })
      .finally(async e=>{
        props.onClose()
      })
      
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
      <div class="col-md-12">
      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}
      <h2 style={{fontWeight:"500"}}>Tell us about yourself  </h2>
      <form onSubmit={sendEmail}>
      
        <Form.Group controlId="name">
          {/* <div class="col-md-10"> */}
          <Form.Label >Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}

            pattern="^[\s\w]+"
            placeholder="Enter your full name"
            onChange={onInputChange}
            required
          />
          {/* </div> */}
          
        </Form.Group>
        <Form.Group controlId="address">
        <Form.Label >Your address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            pattern="^[\s\w]+"
            value={state.address}
            placeholder="Enter your Address"
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
            pattern="^[\w\d@._]+"
            value={state.email}
            placeholder="Enter your email"
            onChange={onInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="mobile">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="mobile"
            value={state.mobile} 
            pattern="^[\d]{10}"
            placeholder="Enter your Mobile Number"
            title="10 digit number"
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
        <Button type="submit"  className="LoginModal-getOtpBtnWrap">
          Proceed
        </Button>
      </form>
      </div>
      {/* <div class="col-md-6" style={{backgroundImage:"linear-gradient(rgb(255 251 251), rgb(224 55 16 / 24%))",padding:"50px"}}>
      <div style={{marginTop:"70px"}}>
       <h2 style={{fontWeight:"600"}}>Visit us here</h2>
         <h2 style={{fontWeight:"500"}}>Corporate Office</h2>
         <p style={{padding:"10px 50px"}}>801 - 806, 8th Floor, Vipul Square,
             Sushant Lok B Block, Phase - 1,
             Gurugram, Haryana - 122001</p>
       </div>
      </div> */}
      </div>
     
    </div>
  );
};

export default ContactForm;

