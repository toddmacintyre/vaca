import React, { Component } from 'react';
import itinerary from '../../data/itinerary.json'; // get data plugged in to file

import IconButton from 'material-ui/IconButton';
import UpArrow from 'material-ui/svg-icons/navigation/expand-less';
import DownArrow from 'material-ui/svg-icons/navigation/expand-more';
import Smiley from 'material-ui/svg-icons/social/mood';
import FlatButton from 'material-ui/FlatButton';

class SavingAmountPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "New Orleans",
      totalCost: 900,
      totalDays: 0,
      amountPerDay: 10,
      tripDays: 5,
    };

    // this.amountPerDay = this.amountPerDay.bind(this);
    this.totalDays = this.totalDays.bind(this);
    this.handleUpArrow = this.handleUpArrow.bind(this);
    this.handleDownArrow = this.handleDownArrow.bind(this);

    this.styles = {
      centering: {
        "text-align": "center",
      },
      topper: {
        "margin-top": 40,
      }
    }
  }

  // amountPerDay() {
  //   this.setState({amountPerDay: Number(this.state.totalCost / this.state.totalDays).toFixed(0)});
  // }

  totalDays() {
    return Number(this.state.totalCost / this.state.amountPerDay).toFixed(0);
  }

  handleUpArrow() {
    // this.setState({amountPerDay: this.state.amountPerDay + 1});
    this.setState(function(previousState, currentProps) {
        return {amountPerDay: previousState.amountPerDay + 1};
    });
    this.setState((previousState, currentProps) => {
        return {totalDays: Number(previousState.totalCost / previousState.amountPerDay).toFixed(0)};
    });
  }

  handleDownArrow() {
    this.setState(function(previousState, currentProps) {
        return {amountPerDay: previousState.amountPerDay - 1};
    });
    this.setState((previousState, currentProps) => {
        return {totalDays: Number(previousState.totalCost / previousState.amountPerDay).toFixed(0)};
    });
  }

  componentWillMount() {
    this.setState({totalDays: this.totalDays()});
  }

  // componentWillReceiveProps(nextProps) {
  //   this.totalDays();
  // }
    redirect = () => {
    this.props.history.push("/paymentdetails");
  }

  render() {
    return (
      <div style={this.styles.centering} className="container wizard">
        <div className="row">
          <h2 className="text-center">Help me save</h2>
          <div className="savings-calculator">
            <div class="number">
              ${this.state.amountPerDay}
            </div>
            <IconButton
              onTouchTap={() => {
                this.handleUpArrow()
              }}
            >
              <img className="arrow" src="img/money-adjust-up.png"/>
            </IconButton>

            <IconButton
              onTouchTap={() => {
                this.handleDownArrow();
              }}
            >
              <img className="arrow" src="img/money-adjust-down.png"/>
            </IconButton>

            <img className="background" src="img/money-blob.png"/>
          </div>
          <h2 className="text-center">
            every day for {this.state.totalDays} days,
          </h2>
          <div className="col-xs-12">
            so I can go to my dream vacation<br />in {this.state.location} for {this.state.tripDays} days
            <Smiley />
          </div>
        </div>
        <div className="savings-amount-button">
          <FlatButton
          className="savings-amount-real-button"
          onTouchTap={() => this.redirect()}
          style={{textAlign: "center"}} 
          type="submit"
          label="Start Saving!"
          fullWidth={true}
          />
        </div>
      </div>
    );
  }
}

export default SavingAmountPicker;
