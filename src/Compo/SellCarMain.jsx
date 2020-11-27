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
import SellCarForm from "./SellCar/SellCar.js"
// import SellCarforms from "./SellCar/StepForm"
import SellTopBanner from "./SellCar/TopBanner"
import DetailSection from "./SellCar/DetailSection"
import DetailSec2 from "./SellCar/DetailsSection2"


class SellCar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <Menu/>
        <SellTopBanner />
        <SellCarForm/>
        <DetailSection/>
        {/* <SellCarforms/> */}
        <DetailSec2/>
        <Carshowroom/>
        <Lovestory />
        <Footer/>
      </div>
    );

  }
}

export default SellCar;