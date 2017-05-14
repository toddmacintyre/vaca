import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../components/home';
import DatePicker from '../components/datePicker';
import PlanPicker from '../components/planPicker';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" /> } />
          <Route path="/home" component={Home} />
          <Route path="/date-picker" component={DatePicker} />
          <Route path="/plan-picker" component={PlanPicker} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;