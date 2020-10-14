import React,{Component} from 'react';
// import ReportsModal from './Reportmodel';
import { MDBBtn,MDBRow, MDBCard, MDBCardBody,MDBModalFooter, MDBCardImage, MDBCardTitle, MDBCardText,MDBModal, MDBModalBody, MDBModalHeader,MDBInput, MDBCol,MDBIcon, MDBContainer } from 'mdbreact';


class CarReport extends Component {
    state = {
        isOpen: false,
        modal16: false,
        
    
      };
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
    
      toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }
    
     
    render () {
      
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
        <MDBBtn color="deep-orange" size="lg" className="full-detail" onClick={this.toggle(16)} >View Full Reports </MDBBtn>
        
        <hr></hr>
        {/* *******************beginning of the Reports********************** */}
 <MDBContainer>
      <MDBModal isOpen={this.state.modal16} toggle={this.toggle(16)}>
        <MDBModalHeader toggle={this.toggle(16)}>
          Inspection Reports
        </MDBModalHeader>
        <MDBModalBody>
          <MDBCard style={{padding:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. </MDBCard>

          <MDBCard style={{padding:"20px",marginTop:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. </MDBCard>
          <MDBCard style={{padding:"20px",marginTop:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. </MDBCard>
           
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="primary">Download Report</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>


 {/* ***************************end of the reports********************* */}
      </div> 
      )
    }
  }
  
  export default CarReport;
  