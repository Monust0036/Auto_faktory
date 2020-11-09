import React, { Component } from 'react';
import '../App.css';
import '../Style/index.css'
import Menu from './Menubar'
import Footer from './Footer';
import ContactFormTopBanner from "./ContactUs/ContactUsBanner"
import ContactForm from "./ContactUs/Form"




class UsedCar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <Menu/>
        
        <ContactFormTopBanner/>
        <ContactForm />
        {/* <PanaromaView /> */}
        <Footer/>
      </div>
    );

  }
}

export default UsedCar;