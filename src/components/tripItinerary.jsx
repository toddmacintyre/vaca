import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

class TripItinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [
        {
          name: 'stop1',
          imgURL: 'https://amazingcarousel.com/wp-content/uploads/amazingcarousel/7/images/lightbox/night-in-the-city-lightbox.jpg'
        },
        {
          name: 'stop2',
          imgURL: 'https://amazingcarousel.com/wp-content/uploads/amazingcarousel/7/images/lightbox/night-in-the-city-lightbox.jpg'
        },
        {
          name: 'stop3',
          imgURL: 'https://amazingcarousel.com/wp-content/uploads/amazingcarousel/7/images/lightbox/night-in-the-city-lightbox.jpg'
        },
      ],
    }
  }

  render() {
    return (
      <div>
        <p>Highlights</p>
        <List>
          {this.state.locations.map(val => (
            <ListItem
              disabled={false}
              leftAvatar={
                <Avatar src={val.imgURL} />
              }
            >
              {val.name}
            </ListItem>
          ))}
        </List>
        <Button />
      </div>
    )
  }
}

const Button = () => {
  return (
    <button>
      Let's do it!
    </button>
  )
}

export default TripItinerary;
