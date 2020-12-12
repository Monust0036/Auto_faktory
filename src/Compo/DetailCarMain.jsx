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
// import PanaromaView from "./DetailCar/360Imageviewer"




class UsedCar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    console.log("scroll top");
    window.scrollTo({top:0})

  }
  componentDidUpdate(){
    console.log("scroll top");
    window.scrollTo({top:0})
  }
  render() {
    return (
      <div className="App">
        <Menu/>
        <DetailsTop/>
        {Object.keys(this.props.location.state).length>0? <Topstrip carData = {this.props.location.state}/>:null}
        
        <KeyFeatures carData = {this.props.location.state}/>
        <CarSpecifications carData = {this.props.location.state}/>
        <CarFeatures carData = {this.props.location.state}/>
        <CarReports carData = {this.props.location.state}/>
        {/* <RecentlyViewCar/> */}
        <Carshowroom/>
        <Lovestory />
        {/* <PanaromaView /> */}
        <Footer/>
      </div>
    );

  }
}

export default UsedCar;