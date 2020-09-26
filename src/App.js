import React, { Component } from 'react';
import './App.css';
import './Style/index.css'
import Home from './Compo/Home.js'
// import Menu from './Compo/Menubar'
// import Teams from './Compo/HomePage/Teams'
// import Theorychange from './Compo/HomePage/Changes';
// import Header from './Compo/HomePage/Header'
// import Presssupported from './Compo/HomePage/PressSupported';
// import Footer from './Compo/Footer';
// import ReacentCar from './Compo/HomePage/recentCar'
// import Carousel from './Compo/HomePage/caraousel/Carousel.js'
// // import FirstStep from './Compo/FisrtStep';
// import Lovestory from "./Compo/HomePage/loveStory"
// import Carshowroom from './Compo/HomePage/carshowroom';
// import history from  './history';
// console.log(history, "rRRRRRRRRRRRRRRRRRRRRRRR")

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <Home />
        {/* <Menu/>
        <Header/>
        <Teams/> 
        <Presssupported/>
        <ReacentCar/>
        <Carousel/>
        <Theorychange/> 
        <Lovestory/>
        <Footer/> */}
      </div>
    );

  }
}

export default App;