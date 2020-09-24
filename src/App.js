import React, { Component } from 'react';
import './App.css';
import './Style/index.css'
import Menu from './Compo/Menubar'
import Teams from './Compo/Teams'
import Theorychange from './Compo/Changes';
import Header from './Compo/Header'
import Presssupported from './Compo/PressSupported';
import Footer from './Compo/Footer';
import ReacentCar from './Compo/recentCar'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Lovestory from "./Compo/loveStory"
import Carshowroom from './Compo/carshowroom';
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
          <Menu />
          <Header />
          <Teams />
          <Presssupported />
          <ReacentCar />
          <Lovestory />
          <Theorychange />
          <Footer />
      </div>
    );

  }
}

export default App;