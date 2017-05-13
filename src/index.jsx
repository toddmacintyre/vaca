import React, { Component } from 'react';
import { render } from 'react-dom';
import Routes from './config/routes';

export default class AppProvider extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <div>
          <Routes />
        </div>
    );
  }
}
render(<AppProvider />, document.getElementById('app-wrapper'));