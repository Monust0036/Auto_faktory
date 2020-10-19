import React, { Component } from 'react';
import '../App.css';
import '../Style/index.css'
import Menu from './Menubar'
import Teams from './HomePage/Teams'
import Theorychange from './HomePage/Changes';
import Header from './HomePage/Header'
import Presssupported from './HomePage/PressSupported';
import Footer from './Footer';
import ReacentCar from './HomePage/recentCar'
import Carousel from './HomePage/caraousel/Carousel.js'
// import FirstStep from './Compo/FisrtStep';
import Lovestory from "./HomePage/loveStory"
import Find from './HomePage/Find';
import CarBuyingConf from './HomePage/CarBuyingConfidence'


// import history from  './history';
// console.log(history, "rRRRRRRRRRRRRRRRRRRRRRRR")

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <Menu/>
        <Header/>
        <Teams/> 
        <CarBuyingConf/>
        <Presssupported/>
        <ReacentCar/>
        {/* <Carousel/> */}
        <Theorychange/> 
        <Lovestory/>
        <Find/>
        <Footer/>
      </div>
    );

  }
}

export default Main;