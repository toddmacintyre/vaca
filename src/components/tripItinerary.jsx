import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import itinerary from '../../data/itinerary.json';

class TripItinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    }
    this.highlights = [];
    while (this.highlights.length < 4) {
      console.log(itinerary)
      let current = itinerary[0].events[~~(Math.random() * itinerary[0].events.length)]
      if (!this.highlights.includes(current) && !(current.name.includes('Hotel') || current.name.includes('Free') || current.name.includes('Airport') || current.name.includes('R T A'))) this.highlights.push(current);
    }
    console.log(this.highlights)
    this.state = {
      locations: [
        {
          name: this.highlights[0].name,
          imgURL: this.highlights[0].thumbnail
        },
        {
          name: this.highlights[1].name,
          imgURL: this.highlights[1].thumbnail
        },
        {
          name: this.highlights[2].name,
          imgURL: this.highlights[2].thumbnail
        },
      ],
    }
  }

  redirect = () => {
    this.props.history.push("/savingAmountPicker");
  }

  render() {
    return (
      <div className="container wizard">
        <div className="col-xs-12">
          <h3>Highlights</h3>
          <List>
            {this.state.locations.map((val, index) => (
              <ListItem
                key={index}
                disabled={false}
                leftAvatar={
                  <Avatar src={val.imgURL} />
                }
              >
                {val.name}
              </ListItem>
            ))}
          </List>
          <form onSubmit={(e) => {
            e.preventDefault();
            console.log('hey')
          }}>
          </form>
      </div>
      <div className="trip-itinerary-button">
        <FlatButton
        onTouchTap={() => this.redirect()}
        style={{textAlign: "center"}} 
        type="submit"
        label="Let's do it!"
        fullWidth={true}
        />
      </div>
    </div>
    )
  }
}

export default TripItinerary;
