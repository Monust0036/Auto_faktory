import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,
  MDBCollapse, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBFormInline, MDBCol,
  MDBContainer, MDBModal, MDBModalBody, MDBModalHeader,MDBInput,MDBBtn,MDBModalFooter,MDBRow
} from "mdbreact";

class Menubar extends Component {
  state = {
    isOpen: false,
    modal13: false,
    modal14: false

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
  // state = {
  //   modal14: false
  // }
  
  // toggle = nr => () => {
  //   let modalNumber = 'modal' + nr
  //   this.setState({
  //     [modalNumber]: !this.state[modalNumber]
  //   });
  // }


  render() {
    return (
      // <Router>
        <MDBNavbar className="p-none sticky-top">
          <MDBNavbar dark expand="md" className="container innernav">
            <MDBNavbarBrand >
            <MDBNavLink to="/">
            <div className="logo">
                <img  src='/images/logo/AutoFactory.jpg' width="200" height="70" alt="Auto-factory" />
              </div>
            </MDBNavLink>
              
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

              <MDBNavbarNav  >
                <MDBCol md="4" >
                  {/* <form className="form-inline mt-1 mb-1">
                    <input className="form-control form-control-sm ml-3 w-100" type="text" placeholder="Search for Cars" aria-label="Search" ></input>
                  </form> */}
                </MDBCol>
                <MDBNavItem >
                  {/* <MDBNavLink to="#Home">BUY A CAR</MDBNavLink> */}
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="mr-2">BUY A CAR</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBNavLink to="/used-car">
                      <MDBDropdownItem href="/used-car">Mumbai</MDBDropdownItem>
                    </MDBNavLink>
                      
                      <MDBDropdownItem href="/used-car">Delhi</MDBDropdownItem>
                      <MDBDropdownItem href="/used-car">Bangluru</MDBDropdownItem>
                      <MDBDropdownItem href="/used-car">Hyderabad</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/sell-car">SELL CAR</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="mr-2">MORE</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>

                </MDBNavItem>
                <MDBNavItem>
                <MDBNavLink to="/Contact-form">CONTACT US</MDBNavLink>


            {/* <MDBIcon far icon="heart" />
            <MDBIcon icon="user-circle" /> */}
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="#Home">
                    <MDBIcon far icon="heart" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink>
                    <MDBIcon icon="user-circle" onClick={this.toggle(13)} />
                    {/* modal */}
                    <MDBContainer >
                      <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)} size="lg" >
                        <div style={{background:"linear-gradient(to right bottom, rgba(244, 79, 16, 0.89) 0%, transparent 50.5%) center bottom no-repeat, linear-gradient(0deg, rgb(251, 251, 251), rgb(245, 245, 245)) center top no-repeat"}}>
                        <MDBModalHeader toggle={this.toggle(13)}>  </MDBModalHeader>


                        <MDBModalBody>
                          <MDBRow>
                            <MDBCol>
                              <h1 style={{textAlign:"left"}}>Log In</h1>
                              <div className="feature">
                                <MDBIcon icon="thumbs-up" />
                                <p style={{margin:"0 0 0 20px"}}>Get personalized recommendations
                                    </p>
                              </div>
                              <div className="feature">
                              <MDBIcon icon="bell" />
                                <p style={{margin:"0 0 0 20px"}}>Receive alerts on newly added cars
                                  </p>
                              </div>
                              <div>
                                  <img src='/images/Loginpage.jpg' width="80%" alt="Auto-factory" />

                              </div>
                            </MDBCol>
                            <MDBCol>
                              <br></br>
                              <br></br>
                              <br></br>
                              <div className="form-group">
                                  <input type="email" className="form-control" placeholder="Phone Number" />
                                  <br></br>
                                 
                                </div>
                                <button className="LoginModal-getOtpBtnWrap" >Get OTP</button>
                                <p style={{fontSize:"12px"}}>By Signing up, I agree to terms and privacy policy</p>
                            
                            </MDBCol>
                          </MDBRow>
                           
                        </MDBModalBody>
                        </div>
                      
                      
                      </MDBModal>
                    </MDBContainer>

                    {/* end modal */}


                    {/* model for contact us */}

                    <MDBContainer>
        {/* <MDBBtn color="primary" onClick={this.toggle(14)}>MDBModal</MDBBtn> */}
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          {/* <MDBModalHeader toggle={this.toggle(14)} >Contact US </MDBModalHeader> */}
          <MDBModalBody>
          <MDBRow>
       <MDBCol md="12">
          <form>
            <p className="h5 text-center mb-4">Write to us</p>
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
  </MDBRow>
          
          </MDBModalBody>
          {/* <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
            <MDBBtn color="primary">SUBMIT</MDBBtn>
          </MDBModalFooter> */}
        </MDBModal>
      </MDBContainer>


                    {/* end modal */}
                </MDBNavLink>
                </MDBNavItem>



              </MDBNavbarNav>

            </MDBCollapse>
          </MDBNavbar>
        </MDBNavbar>
      //  </Router>
    );
  }
}

export default Menubar;