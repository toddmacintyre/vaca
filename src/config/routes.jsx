import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../components/home';
import PaymentDetails from '../components/paymentDetails';
import Test from '../components/test';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/paymentdetails" component={PaymentDetails} />
          <Route path="/test" component={Test} />
          <Route exact path="/" render={() => <Redirect to="/home" /> } />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
