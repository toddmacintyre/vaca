import React, { Component } from 'react';
import { render } from 'react-dom';
import Routes from './config/routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#EA750A',
    // primary2Color: cyan700,
    // primary3Color: grey400,
    accent1Color: '#FF0055',
    // accent2Color: grey100,
    // accent3Color: grey500,
    // textColor: darkBlack,
    // secondaryTextColor: fade(darkBlack, 0.54),
    // alternateTextColor: white,
    // canvasColor: white,
    // borderColor: grey300,
    // disabledColor: fade(darkBlack, 0.3),
    // pickerHeaderColor: cyan500,
    // clockCircleColor: fade(darkBlack, 0.07),
    // shadowColor: fullBlack,
  },
});

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
