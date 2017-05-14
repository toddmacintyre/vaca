import React, { Component } from 'react';
import { render } from 'react-dom';
import Routes from './config/routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { muiTheme } from './shared/style'

export default class AppProvider extends Component {
  constructor() {
    super();
    this.state = {};
    injectTapEventPlugin();
  }

  // Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <Routes />
        </MuiThemeProvider>
    );
  }
}
render(<AppProvider />, document.getElementById('app-wrapper'));
