import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
  constructor(props) {
    super(props);

    this.reqBody = {
      text: 'Why, hello...',
    }

    this.state = {
      message: '',
    }
  }

  componentWillMount() {
    axios.post('/nexmo', this.reqBody)
      .then(response => {
        console.log(response.data);
        this.setState({message: response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    );
  }

}

export default Test;
