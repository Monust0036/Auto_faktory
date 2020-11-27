import React, { Component } from 'react';
import './App.css';
import './Style/index.css'
import Home from './Compo/Home.js'
import UsedCar from './Compo/UsedCars'
import DetailCarMain from './Compo/DetailCarMain'
import SellCarMain from './Compo/SellCarMain'
import ContactForms from './Compo/ContactMain'
import Favorite from './Compo/Favorite'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import NotFoundPage from './Pages/404';

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
          <Route exact path="/Contact-form" component={ContactForms} />
          <Route exact path="/favourites/" component={Favorite} />
          <Route component={NotFoundPage} />

          </Switch>
        </Router>
        

        
    );

  }
}

export default App;