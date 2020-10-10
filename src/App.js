import React, { Component } from 'react';
import './App.css';
import './Style/index.css'
import Home from './Compo/Home.js'
import UsedCar from './Compo/UsedCars'
import DetailCarMain from './Compo/DetailCarMain'
import SellCarMain from './Compo/SellCarMain'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import NotFoundPage from './Pages/404';

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
      // <div className="App">
        <Router>
          <Switch>
          <Route  exact path="/" component={Home} />
          <Route exact path="/used-car" component={UsedCar} />
          <Route exact path="/detail-car" component={DetailCarMain} />
          <Route exact path="/sell-car" component={SellCarMain} />
          <Route component={NotFoundPage} />

          </Switch>
        </Router>
        

        
    );

  }
}

export default App;