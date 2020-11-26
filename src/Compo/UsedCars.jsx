import React, { Component } from 'react';
import '../App.css';
import '../Style/index.css'
import Menu from './Menubar'
import Footer from './Footer';
import ReacentCar from './HomePage/recentCar'
import Carousel from './HomePage/caraousel/Carousel.js'
import Lovestory from "./HomePage/loveStory"
import Carshowroom from "./UsedCars/carshowroom";
import MainFilter from "./UsedCars/MainFilter";


// import history from  './history';
// console.log(history, "rRRRRRRRRRRRRRRRRRRRRRRR")

class UsedCar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <Menu/>
        <MainFilter {...this.props.location} />
        <Carshowroom/>
        <Lovestory />
        <Footer/>
      </div>
    );

  }
}

export default UsedCar;