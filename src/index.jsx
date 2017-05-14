import React, { Component } from 'react';
import { render } from 'react-dom';
import Routes from './config/routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class AppProvider extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <MuiThemeProvider>
          <Routes />
        </MuiThemeProvider>
    );
  }
}
render(<AppProvider />, document.getElementById('app-wrapper'));