import React, { Component } from 'react';
import itinerary from '../../data/itinerary.json'; // get data plugged in to file

import IconButton from 'material-ui/IconButton';
import UpArrow from 'material-ui/svg-icons/navigation/expand-less';
import DownArrow from 'material-ui/svg-icons/navigation/expand-more';
import Smiley from 'material-ui/svg-icons/social/mood';

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
    this.totalDays();
  }

  // componentWillReceiveProps(nextProps) {
  //   this.totalDays();
  // }

  render() {
    return (
      <div>
        Help me save
        <br />
        ${this.state.amountPerDay}
        <IconButton
          onTouchTap={() => {
            this.handleUpArrow()
          }}
        >
          <UpArrow />
        </IconButton>
        <IconButton
          onTouchTap={() => {
            this.handleDownArrow();
          }}
        >
          <DownArrow />
        </IconButton>
        <br />
        every day for {this.state.totalDays} days,
        <br />
        so I can go to my dream vacation in {this.state.location} for {this.state.tripDays} days
        <Smiley />
      </div>
    );
  }
}

export default SavingAmountPicker;
