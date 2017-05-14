import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from '../components/login';
import PaymentDetails from '../components/paymentDetails';
import Test from '../components/test';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" /> } />
          <Route path="/login" component={Login} />
          <Route path="/paymentdetails" component={PaymentDetails} />
          <Route path="/test" component={Test} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;