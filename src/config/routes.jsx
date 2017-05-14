import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../components/home';
import PaymentDetails from '../components/paymentDetails';
import TripItinerary from '../components/tripItinerary.jsx';
import Test from '../components/test';
import App from '../components/app';
import Splash from '../components/splash';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/splash" component={Splash} />
          <App>
            <div>
              <Route exact path="/" render={() => <Redirect to="/home" /> } />
              <Route path="/paymentdetails" component={PaymentDetails} />
              <Route path="/test" component={Test} />
              <Route path="/home" component={Home} />
              <Route path="/tripItinerary" component={TripItinerary} />
            </div>
          </App>
        </Switch>
      </Router>
    )
  }
}

export default Routes;
