import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, 
MDBCollapse,MDBIcon,MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem,MDBFormInline, MDBCol
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Menubar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar className="p-none sticky-top">
      <MDBNavbar dark expand="md" className="container innernav">
        <MDBNavbarBrand>
            <div className="logo">
                <img src='/images/logo/AutoFactory.jpg' width="150" height="50" alt="Auto-factory" />
            </div>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

          <MDBNavbarNav  >
          <MDBCol md="4" >
            <form className="form-inline mt-1 mb-1">
                  <input className="form-control form-control-sm ml-3 w-100" type="text" placeholder="Search for Cars" aria-label="Search" ></input>
            </form>
          </MDBCol>
            <MDBNavItem >
              {/* <MDBNavLink to="#Home">BUY A CAR</MDBNavLink> */}
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">BUY A CAR</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Mumbai</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Delhi</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Bangluru</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Hyderabad</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#About">SELL CAR</MDBNavLink>
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
            <MDBIcon icon="phone-alt" > </MDBIcon>
             727-727-7275
            {/* <MDBIcon far icon="heart" />
            <MDBIcon icon="user-circle" /> */}
            </MDBNavItem>

            <MDBNavItem>
                <MDBNavLink to="#Home">
                  <MDBIcon far icon="heart" />
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#Home">
                <MDBIcon icon="user-circle" />
              </MDBNavLink>
            </MDBNavItem>

            
          
          </MDBNavbarNav>

        </MDBCollapse>
      </MDBNavbar>
      </MDBNavbar>
    </Router>
    );
  }
}

export default Menubar;