import React, { Component } from 'react';
import '../App.css';
import '../Style/index.css'
import Menu from './Menubar'
import Footer from './Footer';
import ReacentCar from './HomePage/recentCar'
import Carousel from './HomePage/caraousel/Carousel.js'
// import FirstStep from './Compo/FisrtStep';
import Lovestory from "./HomePage/loveStory"
import Carshowroom from "./UsedCars/carshowroom";
import Topstrip from "./DetailCar/Topstrip"
import DetailsTop from "./DetailCar/DetailTops"
import KeyFeatures from "./DetailCar/KeyFeatures"
import RecentlyViewCar from "./DetailCar/RecentlyView"
import CarReports from "./DetailCar/CarReports"
import CarSpecifications from "./DetailCar/CarSpecifications"
import CarFeatures from "./DetailCar/CarFeatures"
// import PanaromaView from "./DetailCar/360View"
import SellTopBanner from "./SellCar/TopBanner"
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
        
        <SellTopBanner/>
        <ContactForm />
        {/* <PanaromaView /> */}
        <Footer/>
      </div>
    );

  }
}

export default UsedCar;