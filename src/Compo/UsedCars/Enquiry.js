import React, { useState } from 'react';
import { MDBBtn,MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon, MDBContainer } from 'mdbreact';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { API } from "../../config.js";
const CardExampl = () => {
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
              email: '',
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
     <div  style={{overflow:"hidden",padding:"50px 10px",minHeight:"300px"}}>
         <MDBRow>
             <MDBCol>
             <div class="card card-cascade wider reverse">
             <div class="card-body card-body-cascade text-center">
    <div class="row">
      <div class="col-md-12" style={{marginTop:"20px"}}>
      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}
      <h4 style={{fontWeight:"500" }}>Did not find what
        you are looking for?</h4>
        <br></br>
      <form  className="enquire-form" onSubmit={sendEmail}>
      <div class="enquiry">
      <Form.Group controlId="name">
          
          <Form.Label >Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter your full name"
            onChange={onInputChange}
            required
          />
        
          
        </Form.Group>
        <Form.Group controlId="email">
            
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={state.email}
            placeholder="Enter your email"
            onChange={onInputChange}
            required
          />
        </Form.Group>
      </div>

        <div class="enquiry">
        
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
        </div>
        <div class="enquiry" style={{marginTop:"20px"}}>
            <Button className="primary-enquiry" type="submit">
              Submit
            </Button>
        </div>

      </form>
      </div>
      </div>
          
    </div>
    </div>
             </MDBCol>
         </MDBRow>
   
  </div> 
  )
}

export default CardExampl;