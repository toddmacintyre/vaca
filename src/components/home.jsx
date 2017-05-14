/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Header from './header';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


function handleRequestDelete() {
  alert('You clicked the delete button.');
}

function handleTouchTap() {
  alert('You clicked the Chip.');
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chipData: [
        {key: 0, label: "Beach"},
        {key: 1, label: "City"},
        {key: 2, label: "History"},
        {key: 3, label: "Music"},
        {key: 4, label: "Night Life"},
        {key: 5, label: "Attractions"},
        {key: 6, label: "Cusine"},
        {key: 7, label: "Outdoors"},
        {key: 8, label: "Sites"},
        {key: 9, label: "Relaxation"},
        // {ky: 10, label: "Saenger Theatre"},
        // {key: 11, label: "Lions Gate Bridge"},
        // {key: 12, label: "Manoa Falls"},
        // {key: 13, label: "Saddle Road"},
        // {key: 14, label: "Diamond Head"},
        // {key: 15, label: "The Shops At Wailea"},
        // {key: 16, label: "Mauna Kea Summit"},
        // {key: 17, label: "Lake Washington"},
        // {key: 18, label: "Spa Grande"},
        // {key: 19, label: "Cabildo"},
      ],

      interestData: []
    };
    this.styles = {
      chip: {
        margin: 4,
        backgroundColor: '#FF0055',
        labelColor: "#FFFFFF",
        padding: "5px"
      },
      chipLabel: {
        color: "#FFFFFF",
        fontSize: "16px"
      },
      button: {
        margin: 4,
        backgroundColor: "#F5F5F5",
        color:"#FF0055",
      },
      buttonLabel: {
        color:"#FF0055",
        padding: "5px",
        textTransform: "none"
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        align: 'center',
        justifyContent: 'center'
      },
      container: {
        textAlign: 'center',
      },
      nextButtonLabel : {
        textTransform: "none"
      }
    };
  }

  handleRequestDelete = (data) => {
    console.log(data);
    this.interestData = this.state.interestData;
    this.chipData = this.state.chipData;
    const chipToDelete = this.interestData.map((chip) => chip.key).indexOf(data.key);
    this.interestData.splice(chipToDelete, 1);
    this.chipData.splice(chipToDelete, 0, {key: data.key, label: data.label});
    this.setState({interestData: this.interestData, chipData: this.chipData});
  };

  redirect = () => {
    this.props.history.push("/date-picker");
  }

  renderButtons(data) {
    return (
      <RaisedButton
        key={data.key}
        onTouchTap={() => this.addToInterests(data)}
        style={this.styles.button}
        labelStyle={this.styles.buttonLabel}
      >
        {data.label}
      </RaisedButton>
    );
  }

  renderChips(data) {
    console.log("rendering chips");
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data)}
        labelStyle={this.styles.chipLabel}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  showNext() {
    if (this.state.interestData.length > 0) {
      return (
        <div className="next-button-wrap">
          <FlatButton 
            onTouchTap={() => this.redirect()}
            labelStyle={this.styles.nextButtonLabel} 
            label="Next" className="next-button" />
        </div>
      )
    }
  }

  addToInterests = (data) => {
    console.log("adding to interests");
    console.log(data);
    this.interestData = this.state.interestData;
    this.chipData = this.state.chipData;
    this.interestData.push({
      key: data.key,
      label: data.label
    });
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(data.key);
    console.log(chipToDelete);
    this.chipData.splice(chipToDelete, 1);
    this.setState({
      chipData: this.chipData,
      interestData: this.interestData
    });
    console.log(this.state.interestData);
  }
  
  render() {
    return (
      <div>
        <div className="container wizard">
          <div className="text-center">
            <h2>I dream to go to...</h2>
            <div className="selected-chips">
              <div style={this.styles.wrapper}>
                {this.state.interestData.map(this.renderChips, this)}
              </div>
            </div>
            <br/>
            <div>
              {this.state.chipData.map(this.renderButtons, this)}
            </div>
            {this.showNext()}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
