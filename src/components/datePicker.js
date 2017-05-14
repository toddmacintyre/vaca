/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class DateRangePicker extends Component {
  constructor(props) {
    super(props);

    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear());
    minDate.setHours(0, 0, 0, 0);
    const maxDate = new Date(minDate.getTime() + 7 * 24 * 60 * 60 * 1000);

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
      autoOk: false,
      disableYearSelection: false,
    };
  }

  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  };

  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container">
          <div className="text-center">
            <h2>I will be free around...</h2>
            <div>
              From...
              <DatePicker
                onChange={this.handleChangeMinDate}
                autoOk={this.state.autoOk}
                floatingLabelText="Min Date"
                defaultDate={this.state.minDate}
                disableYearSelection={this.state.disableYearSelection}
              />
              To...
              <DatePicker
                onChange={this.handleChangeMaxDate}
                autoOk={this.state.autoOk}
                floatingLabelText="Max Date"
                defaultDate={this.state.maxDate}
                disableYearSelection={this.state.disableYearSelection}
              />
            </div>
            <FlatButton label="Next" />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default DateRangePicker;
