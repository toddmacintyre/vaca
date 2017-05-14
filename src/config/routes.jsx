import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../components/home';
import PaymentDetails from '../components/paymentDetails';
import TripItinerary from '../components/tripItinerary.jsx';
import Test from '../components/test';
import DatePicker from '../components/datePicker';
import PlanPicker from '../components/planPicker';
import App from '../components/app';
import Splash from '../components/splash';
import SavingAmountPicker from '../components/savingAmountPicker';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/paymentdetails" component={PaymentDetails} />
          <Route path="/test" component={Test} />
          <Route exact path="/" render={() => <Redirect to="/home" /> } />
          <Route path="/home" component={Home} />
          <Route path="/date-picker" component={DatePicker} />
          <Route path="/plan-picker" component={PlanPicker} />
          <Route path="/tripItinerary" component={TripItinerary} />
          <Route path="/savingAmountPicker" component={SavingAmountPicker} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
